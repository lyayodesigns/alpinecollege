"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AdmissionHero() {
  return (
    <section className="relative flex flex-col bg-alpine-blue overflow-hidden" style={{ minHeight: "88vh" }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.png"
          alt="Alpine Management College Admission"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-alpine-blue via-alpine-blue/85 to-alpine-blue/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-alpine-blue via-alpine-blue/25 to-transparent" />
      </div>

      {/* Orange left-edge accent */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[4px] bg-summit-orange z-20 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-[1570px] mx-auto px-6 sm:px-12">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 text-white/45 text-sm pt-10 mb-0 normal-case"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="/" className="hover:text-white transition-colors no-underline text-white/45">Home</a>
          <span className="text-white/25">/</span>
          <span className="text-white/75">Admission</span>
        </motion.div>

        {/* Hero body */}
        <div className="flex-1 flex flex-col justify-center py-16 sm:py-20">
          {/* Eyebrow tag */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-summit-orange/40 text-summit-orange text-xs font-semibold tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-summit-orange animate-pulse" />
              Be the Member of AMC
            </span>
          </motion.div>

          {/* Giant headline */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-[52px] sm:text-[80px] md:text-[110px] lg:text-[140px] leading-[0.92] font-normal tracking-tight font-sans uppercase m-0"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <span className="text-white">Admis</span><span className="text-summit-orange">sion</span>
            </motion.h1>
          </div>

          {/* Quote */}
          <motion.div
            className="mt-10 max-w-[680px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.75 }}
          >
            <p className="m-0 text-white text-xl sm:text-2xl leading-[1.55] font-normal italic normal-case">
              &ldquo;You don&apos;t get what you wish for. You get what you work for.&rdquo;
            </p>
            <p className="mt-3 m-0 text-white/50 text-base not-italic font-medium normal-case tracking-wide">
              – Daniel Milstein
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a
              href="#procedures"
              className="inline-block bg-summit-orange text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-summit-orange-600 transition-all no-underline"
            >
              View Requirements
            </a>
            <a
              href="#scholarships"
              className="inline-block border border-white/40 text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/10 transition-all no-underline"
            >
              Explore Scholarships
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom info strip */}
      <div className="relative z-10 border-t border-white/10 bg-alpine-blue/60 backdrop-blur-md">
        <div className="w-full max-w-[1570px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Programs Offered", value: "BBA · BHM · MBA" },
              { label: "Affiliation", value: "Pokhara University" },
              { label: "Entrance Test", value: "CAT Required" },
              { label: "Scholarships", value: "15+ Available" },
            ].map((fact, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-1.5 py-5 px-4 sm:px-8 odd:pl-0 even:pr-0 lg:pl-8 lg:pr-8 lg:first:pl-0 lg:last:pr-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.08 }}
              >
                <p className="m-0 text-white/35 text-[10px] uppercase tracking-[0.15em]">{fact.label}</p>
                <p className="m-0 text-white text-sm sm:text-base font-semibold uppercase tracking-wide leading-tight">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
