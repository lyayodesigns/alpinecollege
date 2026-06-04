"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const curriculumItems = [
  {
    title: "Foundation Courses",
    desc: "Advanced academic foundations across business management and strategic sciences",
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
    desc: "Strategic management, leadership, finance, marketing, operations, and HR",
    iconBg: "bg-summit-orange-50",
    iconColor: "text-summit-orange",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.24C7.64 18.8 7 19.96 7 21"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.24C16.36 18.8 17 19.96 17 21"/>
        <path d="M12 2v9"/>
      </svg>
    ),
  },
  {
    title: "Specialization Courses",
    desc: "In-depth focus areas chosen to align with executive career goals and industry demand",
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
    desc: "Transformative project work in Semester 3 and industry internship in Semester 4",
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
              Advancing Business Leadership
            </motion.h2>
            <motion.p
              className="text-base leading-[1.75] text-rock-grey normal-case text-center min-[900px]:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Master of Business Administration (MBA) program, affiliated with Pokhara
              University, Nepal, is designed to develop advanced business and managerial skills
              in students, equipping them to meet the dynamic demands of the global business
              environment. The program aims to enhance analytical, strategic, and leadership
              capabilities, preparing graduates for top management roles across diverse sectors.
            </motion.p>
            <motion.p
              className="text-base leading-[1.75] text-rock-grey normal-case text-center min-[900px]:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              The MBA is a two-year program structured across four semesters, requiring 66
              credit hours of coursework, project work, and internship for graduation. The
              Project Work in the third semester and Internship in the fourth semester provide
              practical exposure, making them the most transformative parts of the program.
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
