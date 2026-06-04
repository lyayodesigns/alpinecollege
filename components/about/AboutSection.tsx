"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about-section" ref={ref} className="bg-white py-[80px] sm:py-[120px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            className="rounded-[20px] overflow-hidden relative h-[420px] sm:h-[580px]"
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/homepage/alpine-graduation.avif"
              alt="Alpine Management College"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-midnight/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-summit-orange flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div>
                  <p className="m-0 text-white text-base font-semibold leading-tight normal-case">Affiliated with Pokhara University</p>
                  <p className="m-0 text-white/60 text-sm normal-case mt-0.5">First BBA college in the region</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="flex flex-col gap-6">
            <motion.p
              className="text-base sm:text-xl leading-none uppercase text-summit-orange"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.p>
            <motion.h2
              className="text-[30px] sm:text-[44px] leading-[1.1] font-normal text-deep-midnight uppercase -tracking-[0.01em] m-0"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Alpine Management College
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg leading-[1.75] text-rock-grey normal-case m-0"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Alpine Management College (AMC), established in 2009 in Nepalgunj, Banke, is affiliated with Pokhara University. AMC offers Bachelor of Business Administration (BBA) and Bachelor of Hotel Management (BHM), recognized for providing an early start to a rewarding management career. Both BBA and BHM are four-year (eight-semester) programs designed for students aiming to excel in Business and Hospitality Management.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg leading-[1.75] text-rock-grey normal-case m-0"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Eligibility for enrollment includes completion of an intermediate level or 10+2 in any stream—commerce, science, humanities, or engineering. The programs focus on equipping students with knowledge, skills, and confidence to thrive in modern organizations. AMC&apos;s high-standard curriculum is enriched through expert inputs, disciplined attendance, corporate interactions, and practical presentations, making it one of the top BBA and BHM colleges in western Nepal.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              {["BBA", "BHM", "BBA Finance", "MBA"].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-alpine-blue-50 border border-alpine-blue/20 text-alpine-blue text-sm font-semibold uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
