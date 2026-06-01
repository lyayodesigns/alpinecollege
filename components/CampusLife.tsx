"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Outstanding Academic Results",
    description:
      "We maintain an excellent academic environment that consistently produces top-tier university results.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.24C7.64 18.8 7 19.96 7 21"/><path d="M14 14.66V17c0 .55.47.98.97 1.24C16.36 18.8 17 19.96 17 21"/><path d="M11 2v8.66"/>
      </svg>
    ),
  },
  {
    title: "Modern Smart Classrooms",
    description:
      "Learn in Wi-Fi-enabled, multimedia-equipped classrooms that make complex topics interactive and engaging.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>
      </svg>
    ),
  },
  {
    title: "Expert Faculty",
    description:
      "Be guided by highly qualified, dedicated faculty members and supportive, friendly staff.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/>
      </svg>
    ),
  },
  {
    title: "Personalized Attention",
    description:
      "We keep our class sizes limited to ensure every student receives the individual focus they deserve.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Guest Masterclasses",
    description:
      "Gain insights from frequent special classes led by renowned industrialists, familiar businessmen, and distinguished hospitality experts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: "Continuous Monitoring",
    description:
      "We provide regular progress reports to students and guardians to ensure continuous academic improvement.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/><path d="M3 20h18"/>
      </svg>
    ),
  },
  {
    title: "High Discipline",
    description:
      "Study in a healthy, safe atmosphere that promotes a high degree of discipline and mutual respect.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
];

export default function CampusLife() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-white py-[120px] pb-[140px] max-[640px]:py-[80px] max-[640px]:pb-[100px]"
    >
      <div className="w-full max-w-[1570px] mx-auto px-10">
        {/* Section Header */}
        <div className="max-w-[720px] mb-20">
          <motion.p
            className="inline-block mb-5 px-5 py-2 rounded-full bg-summit-orange-50 text-summit-orange text-sm font-semibold tracking-[0.04em] uppercase leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            The AMC Advantage
          </motion.p>
          <motion.h2
            className="m-0 mb-6 text-deep-midnight text-[52px] leading-[1.15] font-normal -tracking-[0.01em] uppercase max-[640px]:text-4xl"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            className="m-0 max-w-[540px] text-rock-grey text-lg leading-[1.7] font-normal normal-case"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            We offer an unparalleled academic experience designed to guarantee your success.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative px-8 py-9 bg-white border border-rock-grey/20 rounded-[20px] flex flex-col gap-4 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(26,26,46,0.08)] hover:border-rock-grey/30"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.25 + index * 0.08,
                ease: "easeOut",
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-summit-orange origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif-display text-rock-grey/25 text-4xl leading-none font-normal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-alpine-blue-50 text-alpine-blue transition-colors duration-300 group-hover:bg-alpine-blue group-hover:text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="m-0 text-deep-midnight text-xl leading-[1.3] font-medium normal-case">
                {feature.title}
              </h3>
              <p className="m-0 text-rock-grey text-[15px] leading-[1.65] font-normal normal-case">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
