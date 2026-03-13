"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const expertise = [
  "AI Strategy & Partnerships",
  "Agentic AI Development",
  "Process Automation",
  "System Integration",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <div className="container-main" ref={ref}>
        <div style={{ display: "grid", gap: 64 }} className="grid-cols-1 md:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p style={{ fontSize: 13, color: "#34d399", marginBottom: 16, letterSpacing: "0.05em" }}>About</p>

            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 24 }}>
              Built by someone
              <br />who gets it
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 14, color: "#999", lineHeight: 1.65 }}>
                Founded by Ahmed Ali. AI strategy leader with enterprise
                experience building intelligent systems at scale.
              </p>
              <p style={{ fontSize: 14, color: "#999", lineHeight: 1.65 }}>
                We make powerful automation accessible to every business,
                not just Fortune 500 companies.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {expertise.map((item, i) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ fontSize: 11, color: "#444", fontFamily: "var(--font-mono), monospace", width: 24 }}>
                  0{i + 1}
                </span>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
