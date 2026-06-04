"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const careerPaths = [
  {
    title: "Restaurant Manager",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
  {
    title: "Pub Manager",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/>
      </svg>
    ),
  },
  {
    title: "Hotel Manager",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Event Organizer",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/>
        <line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
        <path d="m9 16 2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Catering Manager",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    title: "Accommodation Manager",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>
      </svg>
    ),
  },
];

export default function CareerProspects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-snow-white py-[80px] sm:py-[120px] pb-[100px] sm:pb-[140px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        {/* Header */}
        <div className="max-w-[820px] mb-16 mx-auto sm:mx-0 text-center sm:text-left">
          <motion.p
            className="inline-block mb-5 px-5 py-2 rounded-full bg-alpine-blue-50 text-alpine-blue text-sm font-semibold tracking-[0.04em] uppercase leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            After Graduation
          </motion.p>
          <motion.h2
            className="m-0 mb-5 text-deep-midnight text-[36px] sm:text-[52px] leading-[1.15] font-normal -tracking-[0.01em] uppercase"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Career and Scope
          </motion.h2>
          <motion.p
            className="m-0 max-w-[640px] mx-auto sm:mx-0 text-rock-grey text-lg leading-[1.75] font-normal normal-case"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            A BHM degree from AMC opens doors across Nepal&apos;s booming hospitality and
            tourism industry — from luxury hotel chains and catering companies to event
            management, airline cabin services, and hospital administration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-10 items-start">
          {/* Career path cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {careerPaths.map((career, index) => (
              <motion.div
                key={index}
                className="group flex items-center gap-4 p-5 rounded-[16px] border border-rock-grey/15 bg-white hover:bg-alpine-blue hover:border-alpine-blue transition-all duration-300 hover:shadow-[0_16px_40px_rgba(46,143,191,0.2)] hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.07 }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-alpine-blue-50 text-alpine-blue group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                  {career.icon}
                </div>
                <span className="font-medium text-deep-midnight text-[15px] leading-tight normal-case group-hover:text-white transition-colors duration-300">{career.title}</span>
              </motion.div>
            ))}
          </div>

          {/* Hospitality industry highlight panel */}
          <motion.div
            className="relative rounded-[24px] bg-deep-midnight p-8 sm:p-10 overflow-hidden flex flex-col gap-6 h-full"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-alpine-blue/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-summit-orange/15 blur-2xl" />

            <div className="relative z-10 flex flex-col gap-5">
              <span className="inline-block w-fit px-4 py-1.5 rounded-full border border-summit-orange/60 text-summit-orange text-xs font-semibold uppercase tracking-widest">
                Industry Insight
              </span>
              <h3 className="m-0 text-white text-[24px] sm:text-[32px] leading-tight font-normal uppercase">
                Nepal&apos;s Growing Tourism Sector
              </h3>
              <p className="m-0 text-white/65 text-base leading-[1.8] normal-case">
                Nepal&apos;s abundance of beautiful natural landscapes, rich traditional cultures,
                attractive temples, and pleasant weather make it an ideal destination for
                international tourists — driving strong demand for trained hospitality professionals.
              </p>
              <p className="m-0 text-white/65 text-base leading-[1.8] normal-case">
                Leading recruiters include catering companies, banks, institutional management,
                guest houses, forest lodges, hotel associations, hospital administration, and
                airline cabin services.
              </p>
              <div className="pt-2 mt-auto flex flex-wrap gap-3">
                {["Hotels", "Resorts", "Airlines", "Event Management"].map((sector, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm font-medium normal-case">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
