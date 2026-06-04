"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const curriculumItems = [
  {
    title: "Foundation Courses",
    desc: "Core academic foundations across business, social sciences, and communication",
    iconBg: "bg-alpine-blue-50",
    iconColor: "text-alpine-blue",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: "Core Courses",
    desc: "Financial management, investment analysis, risk management, and business operations",
    iconBg: "bg-summit-orange-50",
    iconColor: "text-summit-orange",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" x2="12" y1="1" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "Elective Courses",
    desc: "Specialized finance topics aligned with individual career goals and market trends",
    iconBg: "bg-alpine-blue-50",
    iconColor: "text-alpine-blue",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
      </svg>
    ),
  },
  {
    title: "Project & Internship",
    desc: "Hands-on project work in Semester 6 and industry internship in Semester 7",
    iconBg: "bg-summit-orange-50",
    iconColor: "text-summit-orange",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
];

export default function ProgramOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overview" ref={ref} className="relative z-0 pt-[60px] sm:pt-[100px] pb-[80px] sm:pb-[140px] bg-snow-white overflow-hidden">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 gap-12 items-center min-[900px]:grid-cols-2 min-[900px]:gap-20">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <motion.p
              className="text-base sm:text-2xl leading-none uppercase text-center min-[900px]:text-left"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              About the Program
            </motion.p>
            <motion.h2
              className="text-[26px] sm:text-[34px] min-[900px]:text-[40px] leading-[1.15] font-medium text-deep-midnight text-center min-[900px]:text-left"
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              A Foundation for Financial Leadership
            </motion.h2>
            <motion.p
              className="text-base leading-[1.75] text-rock-grey normal-case text-center min-[900px]:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Bachelor of Business Administration (BBA) with a specialization in Finance,
              affiliated with Pokhara University, Nepal, is designed to equip students with
              comprehensive knowledge and practical skills in financial management, investment
              strategies, and business operations. The program emphasizes developing analytical
              and decision-making skills essential for effective financial planning and strategic
              business management.
            </motion.p>
            <motion.p
              className="text-base leading-[1.75] text-rock-grey normal-case text-center min-[900px]:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              The BBA (Finance) is a four-year program structured across 8 semesters, requiring
              126 credit hours of coursework, project work, and internship for graduation. The
              Project Work in the sixth semester and Internship in the seventh semester provide
              hands-on experience, making them the most engaging and practical parts of the program.
            </motion.p>
          </div>

          {/* Curriculum cards */}
          <div className="flex flex-col gap-4">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.12em] text-rock-grey text-center min-[900px]:text-left mb-1"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Curriculum Comprises
            </motion.p>
            {curriculumItems.map((item, index) => (
              <motion.div
                key={index}
                className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-rock-grey/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.09 }}
              >
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="m-0 font-medium text-deep-midnight text-base leading-tight">{item.title}</p>
                  <p className="m-0 text-rock-grey text-sm leading-snug normal-case mt-0.5">{item.desc}</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rock-grey/30 flex-shrink-0 group-hover:text-summit-orange transition-colors">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
