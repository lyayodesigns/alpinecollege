"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const scholarships = [
  {
    title: "Pokhara University Scholarships",
    highlight: "15 Full Scholarships",
    description: "15 scholarships from Pokhara University — full scholarship coverage.",
    badge: "PU Grant",
    badgeColor: "bg-alpine-blue/10 text-alpine-blue border-alpine-blue/20",
    accent: "border-alpine-blue",
  },
  {
    title: "Province Toppers — 10+2",
    highlight: "100% Admission Fee",
    description: "For province toppers in Management, Science and Humanities in 10+2, three 100% scholarships are provided in Admission fee.",
    badge: "3 Awards",
    badgeColor: "bg-summit-orange/10 text-summit-orange border-summit-orange/20",
    accent: "border-summit-orange",
  },
  {
    title: "District Toppers — 10+2",
    highlight: "50% Admission Fee",
    description: "For district toppers in Management, Science and Humanities, 50% scholarship is provided in Admission fee.",
    badge: "Merit Based",
    badgeColor: "bg-alpine-blue/10 text-alpine-blue border-alpine-blue/20",
    accent: "border-alpine-blue",
  },
  {
    title: "Entrance Exam Topper",
    highlight: "100% Admission Fee",
    description: "One scholarship for the entrance exam topper — 100% waiver on Admission fee.",
    badge: "Top Ranker",
    badgeColor: "bg-summit-orange/10 text-summit-orange border-summit-orange/20",
    accent: "border-summit-orange",
  },
  {
    title: "Entrance Exam Second Topper",
    highlight: "50% Admission Fee",
    description: "One scholarship for the second ranker in the entrance exam — 50% waiver on Admission fee.",
    badge: "2nd Rank",
    badgeColor: "bg-alpine-blue/10 text-alpine-blue border-alpine-blue/20",
    accent: "border-alpine-blue",
  },
  {
    title: "Semester Toppers — Freeship",
    highlight: "Half Semester Fee",
    description: "Freeship for each semester's top performing student — half of the semester fee waived.",
    badge: "Every Semester",
    badgeColor: "bg-summit-orange/10 text-summit-orange border-summit-orange/20",
    accent: "border-summit-orange",
  },
];

export default function ScholarshipScheme() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="scholarships"
      ref={ref}
      className="bg-white py-[80px] sm:py-[120px]"
    >
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        {/* Section header */}
        <div className="mb-14 sm:mb-20 flex flex-col min-[900px]:flex-row min-[900px]:items-end justify-between gap-8">
          <div className="max-w-[640px]">
            <motion.p
              className="text-base sm:text-xl leading-none uppercase text-summit-orange mb-4"
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Financial Aid
            </motion.p>
            <motion.h2
              className="text-[30px] sm:text-[44px] leading-[1.1] font-normal text-deep-midnight uppercase -tracking-[0.01em] m-0 mb-5"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Scholarship Scheme
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg leading-[1.75] text-rock-grey normal-case m-0"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              AMC is committed to making quality education accessible. We offer a range of merit-based scholarships to reward exceptional students.
            </motion.p>
          </div>

          {/* Summary badge */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center justify-center bg-alpine-blue rounded-2xl px-10 py-8 text-center min-w-[200px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <p className="text-white/50 text-[11px] uppercase tracking-[0.15em] m-0 mb-2">Total Scholarships</p>
            <p className="text-white text-[52px] font-bold leading-none m-0 mb-1">15+</p>
            <p className="text-white/65 text-sm normal-case m-0">Up to 100% fee waiver</p>
          </motion.div>
        </div>

        {/* Scholarship cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((item, i) => (
            <motion.div
              key={i}
              className={`relative bg-snow-white border-l-4 ${item.accent} border border-deep-midnight/8 rounded-[20px] p-8 flex flex-col gap-4 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.08, ease: "easeOut" }}
            >
              {/* Background watermark */}
              <div className="pointer-events-none absolute -bottom-8 -right-8 w-[140px] h-[140px] rounded-full bg-alpine-blue/4" />

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm sm:text-base font-semibold text-deep-midnight uppercase tracking-wide m-0 leading-tight">
                  {item.title}
                </h3>
                <span className={`flex-shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold border ${item.badgeColor} tracking-wide uppercase leading-none`}>
                  {item.badge}
                </span>
              </div>

              <div>
                <p className="text-[22px] sm:text-[26px] font-bold text-deep-midnight leading-none m-0 mb-1 uppercase">
                  {item.highlight}
                </p>
              </div>

              <p className="text-sm leading-[1.75] text-rock-grey normal-case m-0">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
