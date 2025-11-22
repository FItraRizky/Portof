"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import WorldClock from "@/components/WorldClock";
import ScrollFloat from "./ScrollFloat";
import ScrollFloatText from "./ScrollFloatText";

import { div, text } from "framer-motion/client";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
    social: [
      { icon: Github, href: "https://github.com/FItraRizky", label: "GitHub" },
      { icon: Linkedin, href: "https://www.linkedin.com/in/fitra-rizky-oktarian-805245370/", label: "LinkedIn" },
      { icon: Twitter, href: "https://x.com/RyanOktaaa", label: "Twitter" },
      { icon: Mail, href: "#", label: "Email" },
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <ScrollFloat containerClassName="!mb-4" textClassName="text-xl font-bold">Fitra Rizky</ScrollFloat>
            <ScrollFloatText 
              containerClassName="text-muted text-sm leading-relaxed"
              stagger={0.01}
            >
              Independent software developer crafting beautiful and functional web experiences.
            </ScrollFloatText>
          </div>

          {/* Navigation */}
          <div>
            <ScrollFloat containerClassName="!mb-4" textClassName="font-semibold">Navigation</ScrollFloat>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* World Clock */}
          <div>
            <ScrollFloat containerClassName="!mb-4" textClassName="font-semibold">World Clock</ScrollFloat>
            <WorldClock />
          </div>

          {/* Social */}
          <div>
            <ScrollFloat containerClassName="!mb-4" textClassName="font-semibold">Connect</ScrollFloat>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <ScrollFloatText containerClassName="text-sm text-muted" stagger={0.01} as="p">
            {`© ${currentYear} Fitra Rizky. All rights reserved.`}
          </ScrollFloatText>
        </div>
      </div>
    </footer>
  );
}
