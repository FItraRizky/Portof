"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function StaggeredMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !isOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      scaleY: 0,
      transition: {
        delay: 0.15,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
    open: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0] as any,
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1] as any,
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1] as any,
        duration: 0.7,
      },
    },
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center pointer-events-auto">
          <Link
            href="/"
            className="text-xl font-bold hover:text-accent transition-colors font-serif z-50 relative"
          >
            Fitra Rizky
          </Link>

          <div className="relative z-50">
            <button
              onClick={toggleMenu}
              className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
            >
              <span className="uppercase tracking-widest">Menu</span>
              <div className="relative w-8 h-8 flex items-center justify-center bg-foreground text-background rounded-full group-hover:scale-110 transition-transform duration-300">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={16} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-background origin-top pointer-events-auto flex flex-col justify-center items-center"
          >
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-center gap-6"
            >
              {menuItems.map((item) => (
                <div key={item.name} className="overflow-hidden">
                  <motion.div variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className="text-5xl md:text-7xl font-bold font-serif hover:text-accent transition-colors block text-center"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-10 left-0 right-0 text-center"
            >
              <div className="flex justify-center gap-6 text-muted">
                <a href="https://x.com/RyanOktaaa?t=LFhi34XVn4UBV4FEUlYQ4g&s=08" className="hover:text-accent transition-colors">
                  Twitter
                </a>
                <a href="https://www.instagram.com/fitrarizkky/" className="hover:text-accent transition-colors">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/fitra-rizky-oktarian-805245370/" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
