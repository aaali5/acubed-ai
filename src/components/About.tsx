"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="section-divider mb-32" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium text-accent-1 uppercase tracking-widest mb-4 block">
              About aCubed AI
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Built by someone who
              <br />
              <span className="gradient-text-accent">gets it</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                aCubed AI was founded by Ahmed Ali, an AI strategy leader with
                experience building and deploying intelligent systems at
                enterprise scale.
              </p>
              <p>
                After years of watching businesses waste time on processes that
                should run themselves, the mission became clear: make powerful AI
                automation accessible to every business, not just Fortune 500
                companies.
              </p>
              <p>
                We specialize in understanding your actual workflows and building
                AI agents that slot right in. No bloated platforms. No six-month
                implementations. Just automation that works.
              </p>
            </div>
          </motion.div>

          {/* Right - visual element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 space-y-6">
              {/* Expertise items */}
              {[
                {
                  label: "AI Strategy & Partnerships",
                  detail: "Enterprise experience at scale",
                },
                {
                  label: "Agentic AI Development",
                  detail: "Custom agent design & orchestration",
                },
                {
                  label: "Process Automation",
                  detail: "End-to-end workflow transformation",
                },
                {
                  label: "System Integration",
                  detail: "Seamless connection with existing tools",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + 0.1 * i }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-1/10 border border-accent-1/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-1/20 transition-colors">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8l4 4 6-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent-1"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-xs text-text-muted">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-1/5 to-accent-3/5 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
