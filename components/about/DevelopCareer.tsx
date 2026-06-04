"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DevelopCareer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-snow-white py-[80px] sm:py-[120px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-[120px] self-start">
            <motion.p
              className="text-base sm:text-xl leading-none uppercase text-summit-orange mb-5"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.p>
            <motion.h2
              className="text-[40px] sm:text-[60px] leading-[1.05] font-normal text-deep-midnight uppercase -tracking-[0.01em] m-0"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Develop <span className="text-alpine-blue">Your</span>
              <br className="hidden lg:block" />
              {" "}<br className="lg:hidden" />
              Career
            </motion.h2>
            <motion.div
              className="mt-8 h-[3px] w-[80px] bg-summit-orange"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Right: paragraphs */}
          <div className="flex flex-col gap-8">
            <motion.div
              className="p-8 rounded-[20px] bg-white border border-rock-grey/15"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-alpine-blue-50 flex items-center justify-center text-alpine-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
                  </svg>
                </div>
                <h3 className="m-0 text-deep-midnight text-lg font-medium normal-case leading-tight">Global Beginnings</h3>
              </div>
              <p className="text-base sm:text-lg leading-[1.75] text-rock-grey normal-case m-0">
                The study of Business Administration began in the USA in the late 1900s during industrialization. Tuck School of Business at Dartmouth College, established in 1900, was the first business school, followed by Harvard School of Business Administration in 1908.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-[20px] bg-white border border-rock-grey/15"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-summit-orange-50 flex items-center justify-center text-summit-orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <h3 className="m-0 text-deep-midnight text-lg font-medium normal-case leading-tight">AMC in Nepal</h3>
              </div>
              <p className="text-base sm:text-lg leading-[1.75] text-rock-grey normal-case m-0">
                In Nepal, Pokhara University, founded in 1997, introduced Business Administration studies. Alpine Management College (AMC) became the first BBA college in the region in 2009, and it also launched the first BHM program in 2017, both affiliated with Pokhara University.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-[20px] bg-alpine-blue border border-alpine-blue"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <h3 className="m-0 text-white text-lg font-medium normal-case leading-tight">Program Value</h3>
              </div>
              <p className="text-base sm:text-lg leading-[1.75] text-white/85 normal-case m-0">
                BBA and BHM programs are highly valued for their role in preparing students with the skills and confidence needed for modern organizational success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
