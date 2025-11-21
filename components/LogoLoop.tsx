"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LogoItem {
  name: string;
  icon: string;
}

interface LogoLoopProps {
  items: LogoItem[];
  speed?: number; // Duration for one cycle in seconds
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function LogoLoop({
  items,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className,
  itemClassName,
}: LogoLoopProps) {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Calculate total width of items to ensure smooth loop
      // For simplicity in this implementation, we'll just duplicate enough times
      // But strictly speaking, we just need 2 sets for a seamless loop if width is sufficient
    }
  }, [items]);

  // We duplicate the items to create the infinite loop effect
  const duplicatedItems = [...items, ...items, ...items]; 

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex overflow-hidden user-select-none w-full mask-image-gradient",
        className
      )}
      style={{
        // Optional: Add a mask to fade out edges
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex flex-shrink-0 gap-12 py-4 pr-12"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
        style={{
            width: "fit-content",
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className={cn(
              "relative flex flex-col items-center justify-center gap-2 group cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110",
              itemClassName
            )}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <img
                src={item.icon}
                alt={item.name}
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-accent transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
      
      {/* Duplicate for seamless loop if needed, but the motion div handles the translation of the long strip */}
    </div>
  );
}
