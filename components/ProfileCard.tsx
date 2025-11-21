"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status?: string;
  contactText?: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
  contactHref?: string;
  className?: string;
}

export default function ProfileCard({
  name,
  title,
  handle,
  status = "Online",
  contactText = "Contact Me",
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = true,
  onContactClick,
  contactHref = "#contact",
  className,
}: ProfileCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 400, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "25deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !enableTilt) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!ref.current || (!enableTilt && !enableMobileTilt)) return;

    const touch = e.touches[0];
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const touchXFromCenter = touch.clientX - rect.left - width / 2;
    const touchYFromCenter = touch.clientY - rect.top - height / 2;

    x.set(touchXFromCenter / width);
    y.set(touchYFromCenter / height);
  };

  const handleMouseLeave = () => {
    if (!enableTilt) return;
    x.set(0);
    y.set(0);
  };

  const handleTouchEnd = () => {
    if (!enableTilt && !enableMobileTilt) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative w-full max-w-[320px] h-[420px] mx-auto cursor-pointer",
        className
      )}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#0f172a] shadow-2xl border border-slate-800"
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-transparent to-[#0f172a]/90" />
        </div>

        {/* Glare Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay"
          style={{
            background: useTransform(
              () => {
                const xVal = mouseX.get();
                const yVal = mouseY.get();
                return `radial-gradient(circle at ${50 + xVal * 100}% ${
                  50 + yVal * 100
                }%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)`;
              }
            ),
            opacity: useTransform(mouseX, [-0.5, 0.5], [0, 0.6]),
          }}
        />

        {/* Top Content */}
        <div 
          className="absolute top-6 left-0 right-0 text-center z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          <h2 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">{name}</h2>
          <p className="text-blue-200 text-sm font-medium drop-shadow-sm">{title}</p>
        </div>

        {/* Bottom Glass Bar */}
        {showUserInfo && (
          <div 
            className="absolute bottom-4 left-4 right-4 z-20"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="h-[72px] w-full bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-[16px] p-3 flex items-center justify-between shadow-lg">
              {/* Mini Profile */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                  <Image src={avatarUrl} alt="Avatar" fill className="object-cover" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-xs font-bold tracking-wide">{handle}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 text-[10px] font-bold uppercase tracking-wider">{status}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {onContactClick ? (
                <button
                  onClick={onContactClick}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95"
                >
                  {contactText}
                </button>
              ) : (
                <Link
                  href={contactHref}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95"
                >
                  {contactText}
                </Link>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
