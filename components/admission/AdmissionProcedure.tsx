"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Public Announcement",
    body: "A notice inviting applications for admission is publicly announced by the college.",
  },
  {
    number: "02",
    title: "Application & Brochure",
    body: "Application forms and information brochures are provided on request after paying the prescribed charge.",
  },
  {
    number: "03",
    title: "Entry Requirements",
    body: "For BBA, BBA Finance, and BHM: Intermediate or Higher Secondary Level (10+2), Proficiency Certificate Level (PCL), or equivalent as recognized by Pokhara University. For MBA: Bachelor Degree in Management or Science stream.",
  },
  {
    number: "04",
    title: "Written CAT Entrance Test",
    body: "The college scrutinizes applications and eligible candidates are informed to appear in the written CAT (Common Ability Test) entrance examination.",
  },
  {
    number: "05",
    title: "Interview & Selection",
    body: "Selected candidates are called for an interview for final selection and admission.",
  },
  {
    number: "06",
    title: "Document Submission",
    body: "Candidates given provisional admission under special conditions are required to submit all necessary documents within one month after their regular classes commence.",
  },
];

export default function AdmissionProcedure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="procedures"
      ref={ref}
      className="bg-white py-[80px] sm:py-[120px]"
    >
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        {/* Section header */}
        <div className="mb-14 sm:mb-20 max-w-[680px]">
          <motion.p
            className="text-base sm:text-xl leading-none uppercase text-summit-orange mb-4"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Be the Member of AMC
          </motion.p>
          <motion.h2
            className="text-[30px] sm:text-[44px] leading-[1.1] font-normal text-deep-midnight uppercase -tracking-[0.01em] m-0 mb-6"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Entry Requirement &amp; Admission Procedures
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg leading-[1.75] text-rock-grey normal-case m-0"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Follow the structured admission process below to secure your place at Alpine Management College and begin your journey toward a rewarding career.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="group relative bg-snow-white border border-deep-midnight/8 rounded-[20px] p-8 flex flex-col gap-4 hover:border-summit-orange/30 hover:shadow-[0_12px_40px_rgba(240,122,32,0.1)] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.08, ease: "easeOut" }}
            >
              {/* Step number */}
              <span className="text-[56px] font-bold leading-none text-alpine-blue/12 group-hover:text-summit-orange/20 transition-colors duration-300 select-none -mb-2">
                {step.number}
              </span>
              {/* Orange bar */}
              <div className="w-10 h-[3px] rounded-full bg-summit-orange" />
              <h3 className="text-base sm:text-lg font-semibold text-deep-midnight uppercase tracking-wide m-0">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base leading-[1.75] text-rock-grey normal-case m-0">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
