"use client";

import { motion } from "framer-motion";
import ChromaGrid from "./ChromaGrid";
import ScrollFloat from "./ScrollFloat";
import ScrollFloatText from "./ScrollFloatText";

interface Photo {
  id: string;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { id: "1", src: "/photo1.jpg", alt: "Selfie with friend" },
  { id: "2", src: "/photo2.jpg", alt: "Peace sign pose" },
  { id: "3", src: "/photo3.jpg", alt: "Cute cats" },
  { id: "4", src: "/photo4.jpg", alt: "Adorable cats" },
];

export default function Photos() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ScrollFloat 
            containerClassName="!mb-4"
            textClassName="text-3xl md:text-4xl font-bold"
          >
            Recent Photos
          </ScrollFloat>
          <ScrollFloatText 
            containerClassName="text-muted text-lg"
            stagger={0.015}
          >
            Moments from my journey as a developer
          </ScrollFloatText>
        </motion.div>

        {/* Chroma Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ChromaGrid photos={photos} columns={4} />
        </motion.div>
      </div>
    </section>
  );
}

