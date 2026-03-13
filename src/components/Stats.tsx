"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "50+", label: "Hours saved monthly", suffix: "" },
  { value: "99.9%", label: "Automation accuracy", suffix: "" },
  { value: "24/7", label: "Always running", suffix: "" },
  { value: "3x", label: "Faster than manual", suffix: "" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {metric.value}
                {metric.suffix}
              </div>
              <div className="text-sm text-text-muted">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
