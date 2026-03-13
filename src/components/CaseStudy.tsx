"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "4+", label: "Hours saved per pay period" },
  { value: "0", label: "Manual errors" },
  { value: "100%", label: "Automated end-to-end" },
];

export default function CaseStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="relative py-32 px-6">
      <div className="section-divider mb-32" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-accent-1 uppercase tracking-widest mb-4 block">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            From hours of manual work
            <br />
            <span className="gradient-text-accent">to zero</span>
          </h2>
        </motion.div>

        {/* Case study card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-accent-1/10 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-accent-1/50" />
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                Case Study
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4 max-w-2xl">
              Automating payroll for a family-owned business
            </h3>

            <p className="text-text-secondary leading-relaxed max-w-2xl mb-10">
              A family-owned business was spending hours every pay period doing
              payroll manually in a browser. Calculating hours, tax withholdings,
              deductions, direct deposits. All by hand. We built an AI agent that
              handles the entire process automatically, from timesheet
              collection to payment disbursement, with zero manual intervention.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + 0.1 * i }}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-text-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
