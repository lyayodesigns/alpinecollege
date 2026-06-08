"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const documents = [
  "Two passport size photographs",
  "SLC Mark Sheet and SLC Certificate (photocopy)",
  "Academic Transcript of Intermediate Level (photocopy)",
  "Migration Certificate (original)",
  "Transfer and Character Certificate (photocopy)",
  "Citizenship Certificate (photocopy)",
];

const DocumentIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="flex-shrink-0 text-summit-orange"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export default function DocumentsRequired() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-snow-white py-[80px] sm:py-[120px] overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-alpine-blue/5 blur-[120px]" />

      <div className="relative w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-20 items-center">
          {/* Left: Visual card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60, scale: 0.97 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-alpine-blue rounded-[28px] p-10 sm:p-14 relative overflow-hidden min-h-[440px] flex flex-col justify-between">
              {/* Background circles */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-[280px] h-[280px] rounded-full bg-white/5" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-[200px] h-[200px] rounded-full bg-white/5" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-summit-orange flex items-center justify-center mb-8">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-white text-[28px] sm:text-[36px] font-normal uppercase tracking-tight leading-[1.15] m-0 mb-4">
                  Basic<br />Documents<br />Required
                </h3>
                <p className="text-white/55 text-base leading-[1.75] normal-case m-0 max-w-[320px]">
                  Ensure all documents are available and in order before applying. Original documents may be requested for verification.
                </p>
              </div>

              <div className="relative z-10 mt-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm normal-case m-0">{documents.length} documents required for admission</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Document list */}
          <div className="flex flex-col gap-4">
            <motion.p
              className="text-base sm:text-xl leading-none uppercase text-summit-orange"
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Application Checklist
            </motion.p>
            <motion.h2
              className="text-[28px] sm:text-[40px] leading-[1.1] font-normal text-deep-midnight uppercase -tracking-[0.01em] m-0 mb-4"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Documents Required for Admission
            </motion.h2>

            <div className="flex flex-col gap-3">
              {documents.map((doc, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-deep-midnight/8 hover:border-summit-orange/25 hover:shadow-sm transition-all duration-200"
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.07, ease: "easeOut" }}
                >
                  <div className="w-9 h-9 rounded-xl bg-summit-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <DocumentIcon />
                  </div>
                  <p className="text-sm sm:text-base text-deep-midnight normal-case m-0 leading-[1.6] font-medium">
                    {doc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
