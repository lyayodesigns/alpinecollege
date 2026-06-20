"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-snow-white py-[120px] max-[640px]:py-[80px]"
    >
      {/* Subtle decorative glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-alpine-blue/8 blur-[120px]" />

      <div className="relative w-full max-w-[1570px] mx-auto px-10 flex flex-col items-center text-center gap-8">
        {/* Eyebrow */}
        <motion.p
          className="inline-block px-5 py-2 rounded-full bg-summit-orange/15 text-summit-orange text-sm font-semibold tracking-[0.04em] uppercase leading-none"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Become a Member of AMC Today
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="m-0 max-w-[860px] text-deep-midnight text-[52px] leading-[1.15] font-normal -tracking-[0.01em] uppercase max-[768px]:text-4xl max-[480px]:text-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          Build the Career of Your Dreams
        </motion.h2>

        {/* Quote */}
        <motion.p
          className="m-0 max-w-[640px] text-alpine-blue text-lg leading-[1.75] font-normal italic"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.16 }}
        >
          &ldquo;Genius is one percent inspiration and ninety-nine percent perspiration.&rdquo;
          <span className="block mt-1 not-italic font-medium text-rock-grey text-base">
            – Thomas A. Edison
          </span>
        </motion.p>

        {/* Body copy */}
        <motion.p
          className="m-0 max-w-[680px] text-rock-grey text-lg leading-[1.75] font-normal normal-case"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.24 }}
        >
          Bring your inspiration to Alpine Management College, and we will provide the environment,
          tools, and guidance for you to put in the perspiration. Join the best management college
          in Nepalgunj and build the career of your dreams.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-4"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.32 }}
        >
          <a
            href="/contact"
            className="group relative flex h-[60px] px-9 items-center justify-center rounded-full bg-summit-orange text-white font-semibold text-base tracking-wide no-underline overflow-hidden transition-all duration-300 hover:bg-summit-orange-600 hover:shadow-[0_16px_40px_rgba(240,122,32,0.35)]"
          >
            Contact Us Now
          </a>
          <a
            href="/admission"
            className="group flex h-[60px] px-9 items-center justify-center rounded-full border border-deep-midnight/30 text-deep-midnight font-semibold text-base tracking-wide no-underline transition-all duration-300 hover:bg-deep-midnight hover:text-white hover:border-deep-midnight"
          >
            Apply for Admission
          </a>
        </motion.div>
      </div>
    </section>
  );
}
