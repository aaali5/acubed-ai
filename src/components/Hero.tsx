"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial fade */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent, #050505)" }} />

      {/* Content */}
      <div className="container-main" style={{ position: "relative", zIndex: 10, textAlign: "center", paddingTop: 120, paddingBottom: 120, maxWidth: "100%", boxSizing: "border-box" as const }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 13, color: "#34d399", marginBottom: 24, letterSpacing: "0.05em" }}
        >
          Intelligent Automation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="gradient-text"
          style={{
            fontSize: "clamp(32px, 5.5vw, 76px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            marginBottom: 24,
            wordBreak: "break-word" as const,
          }}
        >
          We automate the work
          <br />
          you hate doing.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontSize: 16, color: "#999", maxWidth: 420, margin: "0 auto 40px", lineHeight: 1.6 }}
        >
          AI agents that replace your manual, repetitive business processes. So you can focus on what matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="#contact" className="btn-primary">Book a Free Consultation</a>
          <a href="#services" className="btn-secondary">Learn More</a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(transparent, #050505)" }} />
    </section>
  );
}
