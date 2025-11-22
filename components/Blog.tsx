"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ScrollFloat from "./ScrollFloat";
import ScrollFloatText from "./ScrollFloatText";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Learn how to build performant and scalable web applications using Next.js 14 with the new App Router and Server Components.",
    date: "Nov 15, 2025",
    readTime: "5 min read",
    link: "#",
  },
  {
    id: "2",
    title: "The Future of TypeScript in Modern Development",
    excerpt:
      "Exploring the latest features in TypeScript 5.0 and how they improve developer experience and code quality.",
    date: "Nov 10, 2025",
    readTime: "7 min read",
    link: "#",
  },
  {
    id: "3",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt:
      "Advanced techniques and best practices for using Tailwind CSS to create beautiful, responsive designs efficiently.",
    date: "Nov 5, 2025",
    readTime: "6 min read",
    link: "#",
  },
  {
    id: "4",
    title: "State Management in React: A Comprehensive Guide",
    excerpt:
      "A deep dive into various state management solutions in React, from Context API to Zustand and Redux Toolkit.",
    date: "Oct 28, 2025",
    readTime: "10 min read",
    link: "#",
  },
  {
    id: "5",
    title: "Optimizing Web Performance: Core Web Vitals",
    excerpt:
      "Understanding and improving Core Web Vitals to enhance user experience and SEO rankings.",
    date: "Oct 20, 2025",
    readTime: "8 min read",
    link: "#",
  },
  {
    id: "6",
    title: "Serverless Architecture with AWS Lambda",
    excerpt:
      "Building cost-effective and scalable applications using serverless architecture and AWS Lambda functions.",
    date: "Oct 15, 2025",
    readTime: "9 min read",
    link: "#",
  },
];

export default function Blog() {
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
    <section id="blog" className="py-20 px-6 bg-foreground/2">
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
            Latest Posts
          </ScrollFloat>
          <ScrollFloatText 
            containerClassName="text-muted text-lg"
            stagger={0.05}
          >
            Thoughts on software development, design, and technology
          </ScrollFloatText>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={post.link}
                className="block group h-full border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 bg-background hover:shadow-xl hover:shadow-accent/5"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors leading-tight font-serif">
                  {post.title}
                </h3>
                <ScrollFloatText 
                  containerClassName="text-muted text-sm mb-6 leading-relaxed"
                  stagger={0.02}
                  scrollStart="top bottom-=50"
                >
                  {post.excerpt}
                </ScrollFloatText>
                <div className="flex items-center gap-4 text-xs text-muted/80 mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            </motion.article>
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
            View All Posts
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
