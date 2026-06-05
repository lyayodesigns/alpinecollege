"use client";

import { motion } from "framer-motion";

export default function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-deep-midnight pt-[100px] pb-[80px]">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-alpine-blue/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-summit-orange/10 blur-[100px]" />

      <div className="relative w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        <motion.p
          className="inline-block px-5 py-2 rounded-full bg-summit-orange/15 text-summit-orange text-sm font-semibold tracking-[0.04em] uppercase leading-none mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Stay Informed
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-6 items-end">
          <div>
            {["News &", "Articles"].map((line, i) => (
              <motion.h1
                key={i}
                className="m-0 text-white text-[40px] sm:text-[56px] md:text-[72px] leading-[1.05] font-normal -tracking-[0.01em] uppercase"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.1 + i * 0.08, ease: "easeOut" }}
              >
                {line}
              </motion.h1>
            ))}
          </div>
          <motion.p
            className="text-white/60 text-base sm:text-lg leading-[1.8] font-normal normal-case max-w-[580px] mb-2"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Stay up to date with the latest achievements, events, and announcements
            from Alpine Management College, Nepalgunj.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
