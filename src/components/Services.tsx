"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Intelligent Automation",
    description:
      "AI agents that handle your repetitive business processes. From payroll to data entry to customer follow-ups, we build systems that run themselves.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Every business is different. We build tailored AI tools designed around your specific workflows, data, and operational needs.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v18" />
        <path d="M5.636 5.636l12.728 12.728" />
        <path d="M3 12h18" />
        <path d="M5.636 18.364L18.364 5.636" />
      </svg>
    ),
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "AI Strategy & Integration",
    description:
      "Not sure where to start? We audit your operations, identify the highest-impact automation opportunities, and build your AI roadmap.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="section-divider mb-32" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium text-accent-1 uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Three ways we transform
            <br />
            <span className="gradient-text-accent">your operations</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            We don&apos;t just consult. We build, deploy, and maintain the AI
            systems that power your business.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="glass-card rounded-2xl p-8 relative group"
            >
              {/* Card gradient glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-accent-1 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
