"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const newsItems = [
  {
    date: "29 May 2024",
    title: "REVISED 1ST INTERNAL EXAM SCHEDULE 2023 SPRING",
  },
  {
    date: "27 May 2024",
    title: "FIRST INTERNAL EXAM SCHEDULE 2023 SPRING",
  },
  {
    date: "22 August 2023",
    title: "School of Business: Admission Notice for BBA and BBA-BI",
  },
  {
    date: "22 August 2023",
    title: "Pokhara University Special Chance Exam Notice 2080",
  },
];

export default function News() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="overflow-hidden font-medium bg-deep-midnight pt-[40px] sm:pt-[80px] pb-[40px] sm:pb-[80px]"
    >
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10 overflow-hidden">
        {/* Header */}
        <div className="pt-[40px] sm:pt-[60px] relative z-0 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
          <div>
            {["News &", "Articles"].map((line, i) => (
              <motion.h2
                key={i}
                className="m-0 text-white text-[28px] sm:text-[40px] md:text-[56px] leading-tight md:leading-[75px] font-normal -tracking-[0.01em] uppercase text-center md:text-left"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              >
                {i === 0 ? <>News &amp;</> : line}
              </motion.h2>
            ))}
          </div>
          <div className="pt-0 md:pt-[120px]">
            <motion.p
              className="max-w-[780px] mb-0 text-white text-sm sm:text-lg leading-7 sm:leading-8 font-normal uppercase text-center md:text-left"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay up to date with the latest achievements, events, and announcements from Alpine Management College, Nepalgunj.
            </motion.p>
          </div>
        </div>

        {/* Latest Notices & Updates */}
        <motion.div
          className="mt-[40px] sm:mt-[60px] mb-[40px] sm:mb-[60px]"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <h3 className="text-summit-orange text-[16px] sm:text-[22px] font-medium uppercase tracking-widest mb-6 text-center md:text-left">
            Latest Notices &amp; Updates
          </h3>
          <ul className="divide-y divide-rock-grey">
            {newsItems.map((item, index) => (
              <li key={index} className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6 py-5">
                <span className="shrink-0 text-white/50 text-sm sm:text-base font-normal sm:w-[160px]">{item.date}</span>
                <span className="text-white text-base font-medium leading-relaxed hover:text-summit-orange transition-colors cursor-pointer">
                  [{item.title}]
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
