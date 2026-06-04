"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const whyItems = [
  {
    title: "Sound Business Knowledge",
    desc: "Gain a proper conceptual understanding of business management principles and their real-world applications.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.24C7.64 18.8 7 19.96 7 21"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.24C16.36 18.8 17 19.96 17 21"/>
        <path d="M12 2v9"/>
      </svg>
    ),
  },
  {
    title: "Broad Business Context",
    desc: "Become well-acquainted with the contexts of business organizations in Nepal and globally.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    title: "Analytical & Communication Skills",
    desc: "Develop strong analytical, problem-solving, and communication skills demanded by the corporate world.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/>
        <line x1="6" x2="6" y1="20" y2="14"/><path d="M3 20h18"/>
      </svg>
    ),
  },
  {
    title: "Technology Proficiency",
    desc: "Learn to leverage electronic media and computers to solve complex organizational problems efficiently.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>
      </svg>
    ),
  },
  {
    title: "Team & Individual Excellence",
    desc: "Build the ability to work effectively both in collaborative teams and independently on complex tasks.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Ethical Business Awareness",
    desc: "Cultivate awareness of environmental factors, social relationships, and ethical standards affecting decisions.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
];

export default function WhyJoinBBA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-[80px] sm:py-[120px] pb-[100px] sm:pb-[140px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        <div className="max-w-[720px] mb-16 mx-auto sm:mx-0 text-center sm:text-left">
          <motion.p
            className="inline-block mb-5 px-5 py-2 rounded-full bg-summit-orange-50 text-summit-orange text-sm font-semibold tracking-[0.04em] uppercase leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            The AMC Advantage
          </motion.p>
          <motion.h2
            className="m-0 mb-5 text-deep-midnight text-[36px] sm:text-[52px] leading-[1.15] font-normal -tracking-[0.01em] uppercase"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Why Join BBA at AMC?
          </motion.h2>
          <motion.p
            className="m-0 max-w-[540px] mx-auto sm:mx-0 text-rock-grey text-lg leading-[1.7] font-normal normal-case"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            This program is specially designed to produce graduates equipped with
            the skills, knowledge, and mindset to lead in Nepal&apos;s dynamic business environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative px-8 py-9 bg-white border border-rock-grey/20 rounded-[20px] flex flex-col gap-4 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(26,26,46,0.08)] hover:border-rock-grey/30 items-center text-center sm:items-start sm:text-left"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + index * 0.08, ease: "easeOut" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-summit-orange origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-alpine-blue-50 text-alpine-blue transition-colors duration-300 group-hover:bg-alpine-blue group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="m-0 text-deep-midnight text-xl leading-[1.3] font-medium normal-case">{item.title}</h3>
              <p className="m-0 text-rock-grey text-[15px] leading-[1.65] font-normal normal-case">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
