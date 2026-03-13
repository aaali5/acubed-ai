"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "4+", label: "Hours saved per pay period" },
  { value: "0", label: "Manual errors" },
  { value: "100%", label: "End-to-end automated" },
];

export default function CaseStudy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="card"
          style={{ padding: "clamp(32px, 5vw, 64px)", position: "relative", overflow: "hidden" }}
        >
          {/* Accent glow */}
          <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, background: "rgba(52,211,153,0.04)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

          <div style={{ position: "relative" }}>
            <p style={{ fontSize: 11, color: "#34d399", marginBottom: 20, letterSpacing: "0.1em", textTransform: "uppercase" }}>Case Study</p>

            <h3 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16, maxWidth: 480 }}>
              Payroll that runs itself
            </h3>

            <p style={{ fontSize: 15, color: "#999", lineHeight: 1.65, maxWidth: 520, marginBottom: 48 }}>
              A family-owned business was spending hours every pay period doing
              payroll by hand in a browser. We replaced the entire workflow with
              an AI agent. Zero manual input required.
            </p>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32 }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12, color: "#666" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
