"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import Image from "next/image";
import LogoLoop from "./LogoLoop";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Expertise in building scalable web applications using modern frameworks like Next.js, React, Node.js, and TypeScript.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive user interfaces with a focus on user experience and accessibility.",
  },
  {
    icon: Rocket,
    title: "Product Development",
    description:
      "Taking ideas from concept to launch, with experience in agile methodologies and product strategy.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Leading development teams, mentoring junior developers, and fostering collaborative environments.",
  },
];

const technologies = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              I&apos;m a passionate fullstack developer with over 5 years of
              experience building web applications and digital products. I
              specialize in creating scalable, performant solutions that solve
              real-world problems.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or sharing my
              knowledge through technical writing and mentoring.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="p-6 border border-border rounded-lg hover:border-accent transition-all duration-300 group bg-white/50 backdrop-blur-sm"
            >
              <skill.icon
                size={32}
                className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-hidden"
        >
          <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Technologies I Work With</h3>
          <div className="w-full -mx-6 md:mx-0 px-6 md:px-0">
             <LogoLoop items={technologies} speed={40} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
