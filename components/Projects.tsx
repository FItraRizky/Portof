"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollFloat from "./ScrollFloat";
import ScrollFloatText from "./ScrollFloatText";

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management, payment integration, and admin dashboard.",
    link: "#",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Task Management SaaS",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced analytics.",
    link: "#",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    id: "3",
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps marketers and writers create engaging content using advanced language models.",
    link: "#",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
  },
  {
    id: "4",
    title: "Mobile Fitness App",
    description:
      "A cross-platform mobile fitness application with workout tracking, nutrition planning, and social features for fitness enthusiasts.",
    link: "#",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
  },
  {
    id: "5",
    title: "Real Estate Portal",
    description:
      "A comprehensive real estate platform with property listings, virtual tours, mortgage calculators, and agent management system.",
    link: "#",
    tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
  },
  {
    id: "6",
    title: "Analytics Dashboard",
    description:
      "A powerful analytics dashboard for businesses to track KPIs, visualize data, and generate insights with customizable reports.",
    link: "#",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
  },
];

export default function Projects() {
  const containerVariants: Variants = {
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ScrollFloat 
            containerClassName="!mb-4"
            textClassName="text-3xl md:text-4xl font-bold font-serif"
          >
            Featured Projects
          </ScrollFloat>
          <ScrollFloatText 
            containerClassName="text-muted text-lg"
            stagger={0.015}
          >
            A selection of projects I&apos;ve worked on recently
          </ScrollFloatText>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={project.link}
                className="block group h-full border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 bg-background hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors font-serif">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={18}
                    className="text-muted group-hover:text-accent transition-colors flex-shrink-0 ml-2"
                  />
                </div>
                <ScrollFloatText 
                  containerClassName="text-muted mb-6 text-sm leading-relaxed"
                  stagger={0.005}
                  scrollStart="top bottom-=50"
                >
                  {project.description}
                </ScrollFloatText>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border group-hover:border-accent/20 group-hover:bg-accent/5 group-hover:text-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300 font-medium"
          >
            See All Projects
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
