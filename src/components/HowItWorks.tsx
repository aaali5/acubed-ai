"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your current workflows and identify the processes costing you the most time and money. No jargon, just a clear picture of what can be automated.",
  },
  {
    number: "02",
    title: "Build & Deploy",
    description:
      "Our team designs and deploys custom AI agents tailored to your operations. We handle everything from development to integration with your existing tools.",
  },
  {
    number: "03",
    title: "Monitor & Scale",
    description:
      "Go live with confidence. We monitor performance, optimize continuously, and scale your automation as your business grows.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32 px-6">
      <div className="section-divider mb-32" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium text-accent-1 uppercase tracking-widest mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            From manual to
            <br />
            <span className="gradient-text-accent">fully automated</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            A straightforward process that gets your business running on
            autopilot.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-px step-line opacity-20" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * i }}
                className="flex gap-8 items-start group"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-[120px] hidden md:flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/[0.04] group-hover:text-accent-1/20 transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="glass-card rounded-2xl p-8 flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="md:hidden text-sm font-mono text-accent-1">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
