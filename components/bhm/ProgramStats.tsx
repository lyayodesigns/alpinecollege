"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "4", suffix: "", unit: "Years", label: "Program Duration", desc: "A comprehensive four-year undergraduate degree program" },
  { value: "8", suffix: "", unit: "Semesters", label: "Academic Structure", desc: "Semester-based system with internship in the seventh semester" },
  { value: "122", suffix: "", unit: "Credits", label: "Total Credit Hours", desc: "Thirty-five courses including project work and internship" },
];

export default function ProgramStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-deep-midnight py-[80px] sm:py-[120px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        <motion.p
          className="text-center text-white/40 text-sm tracking-[0.12em] uppercase mb-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Program at a Glance
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center sm:items-start gap-3 px-6 text-center sm:text-left"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.65, delay: i * 0.13 }}
            >
              <div className="flex items-end gap-2">
                <span className="font-serif-display text-alpine-blue text-[68px] sm:text-[88px] leading-none">
                  {stat.value}{stat.suffix}
                </span>
                <span className="font-display text-white text-[22px] sm:text-[28px] leading-none mb-3 normal-case">
                  {stat.unit}
                </span>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-medium leading-tight m-0">{stat.label}</h3>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed normal-case m-0 max-w-[240px] sm:max-w-none">{stat.desc}</p>
              {i < 2 && (
                <div className="hidden sm:block absolute right-0 top-0 h-full w-px bg-white/8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
