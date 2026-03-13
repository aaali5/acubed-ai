"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="section-divider mb-32" />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        {/* Background orbs */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-1/5 blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to stop doing
            <br />
            <span className="gradient-text-accent">everything manually?</span>
          </h2>

          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
            Book a free consultation. We&apos;ll walk through your operations and
            show you exactly what can be automated and the ROI you&apos;ll see.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ahmedaali1996@gmail.com"
              className="glow-button text-sm font-medium px-10 py-4 rounded-full text-white"
            >
              Book a Free Consultation
            </a>
            <a
              href="mailto:ahmedaali1996@gmail.com"
              className="outline-button text-sm font-medium px-10 py-4 rounded-full text-text-secondary hover:text-white"
            >
              ahmedaali1996@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
