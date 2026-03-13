"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" style={{ paddingTop: 80, paddingBottom: 120 }}>
      <div className="container-main" style={{ textAlign: "center" }} ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16 }}
        >
          Stop doing it manually.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          style={{ fontSize: 15, color: "#999", maxWidth: 380, margin: "0 auto 36px" }}
        >
          Free consultation. We&apos;ll show you exactly what we can automate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a href="mailto:ahmedaali1996@gmail.com" className="btn-primary">
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
