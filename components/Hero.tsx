"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-serif"
            variants={itemVariants}
          >
            I&apos;m Fitra Rizky, an independent software developer from
            Indonesia.
          </motion.h1>

          {/* Description */}
          <motion.div
            className="text-lg md:text-xl text-muted mb-8 space-y-4 max-w-2xl"
            variants={itemVariants}
          >
            <p>
              I run a few of my own{" "}
              <Link href="#projects" className="text-accent hover:underline font-medium">
                software projects
              </Link>{" "}
              while also{" "}
              <Link href="#contact" className="text-accent hover:underline font-medium">
                helping companies
              </Link>{" "}
              get their own products and ideas off the ground. Read a bit more{" "}
              <Link href="#about" className="text-accent hover:underline font-medium">
                about me
              </Link>
              .
            </p>
            <p className="text-sm text-muted/80">
              Looking for a portfolio? The code for this website is open source.{" "}
              <a
                href="https://github.com/FItraRizky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline inline-flex items-center gap-1 font-medium"
              >
                View on Github
                <ArrowRight size={16} />
              </a>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <a
              href="https://github.com/FItraRizky"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/fitra-rizky-oktarian-805245370/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:fitraaa.rizky@gmail.com"
              className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image with ProfileCard Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="w-full flex justify-center md:justify-end">
             <ProfileCard 
               name="Fitra Rizky"
               title="Software Developer"
               handle="@fitrarizky"
               status="Offline"
               contactText="Contact Me"
               avatarUrl="/profile.jpg"
               showUserInfo={true}
               enableTilt={true}
               enableMobileTilt={false}
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
