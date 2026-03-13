"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { title: "Discovery", desc: "We map your workflows and find what costs you the most time and money." },
  { title: "Build", desc: "Custom AI agents, deployed and integrated with your existing tools." },
  { title: "Scale", desc: "We monitor, optimize, and grow your automation over time." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" style={{ paddingTop: 80, paddingBottom: 60 }}>
      <div className="container-main" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ fontSize: 13, color: "#34d399", marginBottom: 16, letterSpacing: "0.05em" }}
        >
          Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05 }}
          style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 64, maxWidth: 460 }}
        >
          From manual to fully automated
        </motion.h2>

        <div>
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                display: "flex",
                gap: 24,
                alignItems: "baseline",
                padding: "28px 0",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span style={{ fontSize: 11, color: "#444", fontFamily: "var(--font-mono), monospace", flexShrink: 0, width: 28 }}>
                0{i + 1}
              </span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#999", lineHeight: 1.6, maxWidth: 460 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
