"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import WorldClock from "@/components/WorldClock";

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
            <h3 className="text-xl font-bold mb-4">Fitra Rizky</h3>
            <p className="text-muted text-sm leading-relaxed">
              Independent software developer crafting beautiful and functional web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
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
            <h4 className="font-semibold mb-4">World Clock</h4>
            <WorldClock />
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
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
          <p className="text-sm text-muted">© {currentYear} Fitra Rizky. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
