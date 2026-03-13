"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="gradient-orb-1 -top-40 -left-40" />
      <div className="gradient-orb-2 top-20 right-[-200px]" />
      <div className="gradient-orb-3 bottom-[-100px] left-1/3" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-1 animate-pulse" />
          <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
            AI-Powered Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          We automate the work
          <br />
          <span className="gradient-text">you hate doing.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          aCubed AI builds intelligent automation that replaces manual, repetitive
          business processes with AI agents that work around the clock.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="glow-button text-sm font-medium px-8 py-3.5 rounded-full text-white"
          >
            Book a Free Consultation
          </a>
          <a
            href="#services"
            className="outline-button text-sm font-medium px-8 py-3.5 rounded-full text-text-secondary hover:text-white"
          >
            See What We Automate
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-text-muted uppercase tracking-widest">
              Scroll
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-text-muted"
            >
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <motion.circle
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                cx="8"
                cy="8"
                r="2"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
