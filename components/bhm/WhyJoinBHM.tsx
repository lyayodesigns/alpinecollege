"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const whyItems = [
  {
    title: "Supervisory Industry Roles",
    desc: "Occupy supervisory positions in the hotel and catering industry with confidence and competence.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Technical & Social Expertise",
    desc: "Acquire technical and social knowledge and skills required for professional handling of hotel and catering operations.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Management & Business Skills",
    desc: "Apply management skills for greater economy and success of business operations in the hospitality sector.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/>
        <line x1="6" x2="6" y1="20" y2="14"/><path d="M3 20h18"/>
      </svg>
    ),
  },
  {
    title: "Quality Standards Setting",
    desc: "Set and maintain standards for quality assurance of the services offered to guests and customers.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Confidence & Initiative",
    desc: "Develop a positive attitude towards the trade with greater initiative and self-confidence in handling operations.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
      </svg>
    ),
  },
  {
    title: "Entrepreneurial Spirit",
    desc: "Become a successful entrepreneur in small and medium-size enterprises within the hospitality industry.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

export default function WhyJoinBHM() {
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
            Why Join BHM at AMC?
          </motion.h2>
          <motion.p
            className="m-0 max-w-[540px] mx-auto sm:mx-0 text-rock-grey text-lg leading-[1.7] font-normal normal-case"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            This program specially aims to produce graduates equipped with the skills,
            knowledge, and mindset to lead in Nepal&apos;s thriving hospitality and tourism industry.
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
