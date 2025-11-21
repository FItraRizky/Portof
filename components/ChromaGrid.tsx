"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Photo {
  id: string;
  src: string;
  alt: string;
}

interface ChromaGridProps {
  photos: Photo[];
  columns?: number;
  radius?: number;
  damping?: number;
  fadeOut?: boolean;
  className?: string;
}

export default function ChromaGrid({
  photos,
  columns = 4,
  radius = 100,
  damping = 20,
  fadeOut = true,
  className,
}: ChromaGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  return (
    <div
      ref={containerRef}
      className={cn("w-full relative", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "1rem",
      }}
    >
      {photos.map((photo, index) => (
        <GridItem
          key={photo.id}
          photo={photo}
          index={index}
          mouseX={smoothMouseX}
          mouseY={smoothMouseY}
          radius={radius}
          fadeOut={fadeOut}
        />
      ))}
    </div>
  );
}

interface GridItemProps {
  photo: Photo;
  index: number;
  mouseX: any;
  mouseY: any;
  radius: number;
  fadeOut: boolean;
}

function GridItem({ photo, index, mouseX, mouseY, radius, fadeOut }: GridItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(1000);

  useEffect(() => {
    const unsubscribeX = mouseX.on("change", (latestX: number) => {
      const unsubscribeY = mouseY.on("change", (latestY: number) => {
        if (!itemRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 - (itemRef.current.parentElement?.getBoundingClientRect().left || 0);
        const centerY = rect.top + rect.height / 2 - (itemRef.current.parentElement?.getBoundingClientRect().top || 0);
        
        const dist = Math.sqrt(
          Math.pow(latestX - centerX, 2) + Math.pow(latestY - centerY, 2)
        );
        setDistance(dist);
      });
      return () => unsubscribeY();
    });

    return () => unsubscribeX();
  }, [mouseX, mouseY]);

  const grayscaleAmount = fadeOut
    ? Math.min(100, Math.max(0, ((distance - radius) / radius) * 100))
    : distance > radius
    ? 100
    : 0;

  const scale = distance < radius ? 1.05 : 1;

  return (
    <motion.div
      ref={itemRef}
      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      animate={{
        scale,
      }}
      style={{
        transition: "transform 0.2s ease-out",
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          style={{
            filter: `grayscale(${grayscaleAmount}%)`,
            transition: "filter 0.3s ease-out",
          }}
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          style={{
            opacity: distance < radius ? 1 : 0,
            transition: "opacity 0.3s ease-out",
          }}
        />

        {/* Text Content */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          style={{
            transform: distance < radius ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.3s ease-out",
          }}
        >
          <p className="text-sm font-bold drop-shadow-lg">{photo.alt}</p>
        </div>

        {/* Spotlight Effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              distance < radius
                ? `radial-gradient(circle ${radius}px at center, rgba(59, 130, 246, 0.2) 0%, transparent 100%)`
                : "transparent",
            transition: "background 0.3s ease-out",
          }}
        />
      </div>
    </motion.div>
  );
}
