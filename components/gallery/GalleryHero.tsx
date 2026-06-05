"use client";

import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-deep-midnight pt-[100px] pb-[80px]">
      <div className="pointer-events-none absolute -top-32 right-0 w-[600px] h-[500px] rounded-full bg-alpine-blue/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-summit-orange/8 blur-[100px]" />

      <div className="relative w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        <motion.p
          className="inline-block px-5 py-2 rounded-full bg-alpine-blue/20 text-alpine-blue-400 text-sm font-semibold tracking-[0.04em] uppercase leading-none mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Campus Life & Events
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-6 items-end">
          <div>
            {["Photo", "Gallery"].map((line, i) => (
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
            A visual journey through campus life, academic events, cultural
            programmes, and memorable moments at Alpine Management College.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
