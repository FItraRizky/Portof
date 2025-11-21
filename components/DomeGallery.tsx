"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Photo {
  id: string;
  src: string;
  alt: string;
}

interface DomeGalleryProps {
  photos: Photo[];
  className?: string;
}

export default function DomeGallery({ photos, className }: DomeGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={cn("relative w-full h-[500px] perspective-[1000px]", className)}>
      <div className="relative w-full h-full flex items-center justify-center">
        {photos.map((photo, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          
          // Calculate position in the dome
          const angle = offset * 25; // degrees
          const distance = absOffset * 120; // pixels
          const scale = Math.max(0.4, 1 - absOffset * 0.2);
          const opacity = Math.max(0.3, 1 - absOffset * 0.3);
          const zIndex = photos.length - absOffset;

          return (
            <motion.div
              key={photo.id}
              className="absolute w-64 h-80 md:w-80 md:h-96 cursor-pointer"
              style={{
                zIndex,
              }}
              initial={false}
              animate={{
                x: `${distance * Math.sin((angle * Math.PI) / 180)}px`,
                y: `${-absOffset * 20}px`,
                scale,
                opacity,
                rotateY: `${angle}deg`,
              }}
              transition={{
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1],
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={cn(
                  "relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 transition-all duration-300",
                  index === activeIndex
                    ? "border-accent shadow-accent/50"
                    : "border-white/20"
                )}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority={index === activeIndex}
                />
                {index === activeIndex && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                )}
                {index === activeIndex && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-bold">{photo.alt}</p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button
          onClick={handlePrevious}
          className="px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          aria-label="Previous photo"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          aria-label="Next photo"
        >
          Next →
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === activeIndex
                ? "bg-accent w-8"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
