"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    num: "01",
    title: "Intelligent Automation",
    desc: "AI agents that run your repetitive processes end-to-end. Payroll, data entry, customer follow-ups. Systems that work while you sleep.",
  },
  {
    num: "02",
    title: "Custom AI Solutions",
    desc: "Tailored AI tools designed around your specific workflows, data, and business logic. Not off-the-shelf. Built for you.",
  },
  {
    num: "03",
    title: "AI Strategy",
    desc: "We audit your operations, identify the highest-impact opportunities, and build your automation roadmap from day one.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="container-main" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ fontSize: 13, color: "#34d399", marginBottom: 16, letterSpacing: "0.05em" }}
        >
          Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05 }}
          style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 64, maxWidth: 500 }}
        >
          Three ways we transform your operations
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="card"
              style={{ padding: 32 }}
            >
              <span style={{ fontSize: 11, color: "#444", fontFamily: "var(--font-mono), monospace", display: "block", marginBottom: 20 }}>
                {item.num}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.01em" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: "#999", lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
