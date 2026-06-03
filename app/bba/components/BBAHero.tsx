"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BBAHero() {
  return (
    <section className="relative bg-alpine-blue w-full pt-12 pb-24 overflow-hidden border-b-2 border-summit-orange">
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-[1570px] mx-auto px-4 sm:px-10 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-2 mb-10 text-white/60 text-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="hover:text-white transition-colors no-underline text-white/60 normal-case">Home</a>
          <span>/</span>
          <span className="normal-case">Academics</span>
          <span>/</span>
          <span className="text-white normal-case">BBA</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <motion.p
              className="inline-block mb-5 px-5 py-2 rounded-full bg-white/10 text-white text-xs font-semibold tracking-[0.1em] uppercase"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Undergraduate Program · Pokhara University
            </motion.p>

            <div className="overflow-hidden mb-2">
              <motion.h1
                className="text-white text-[72px] sm:text-[100px] md:text-[128px] leading-none font-normal tracking-tight font-sans uppercase"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              >
                BBA
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                className="text-white text-[18px] sm:text-[24px] leading-tight font-normal opacity-70 uppercase"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
              >
                Bachelor of Business Administration
              </motion.h2>
            </div>

            <motion.p
              className="text-white/75 text-base sm:text-lg leading-[1.75] max-w-[580px] mx-auto lg:mx-0 normal-case mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              The BBA program at AMC provides foundational knowledge and practical
              skills in business administration, developing intellectual ability and
              managerial competence to thrive in Nepal&apos;s growing economy and beyond.
            </motion.p>

            {/* Quick stats chips */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              {[
                { value: "4 Years", label: "Duration" },
                { value: "8 Semesters", label: "Structure" },
                { value: "126 Credits", label: "Coursework" },
                { value: "Since 2009", label: "Running" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 min-w-[110px]"
                >
                  <span className="text-white text-lg font-bold leading-none mb-1 uppercase">{stat.value}</span>
                  <span className="text-white/55 text-[11px] tracking-widest uppercase">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="#apply"
                className="inline-block bg-summit-orange text-white font-semibold text-base px-7 py-3.5 rounded-full hover:brightness-110 transition-all no-underline"
              >
                Apply Now for 2026
              </a>
              <a
                href="#overview"
                className="inline-block border-2 border-white text-white font-semibold text-base px-7 py-3.5 rounded-full hover:bg-white hover:text-deep-midnight transition-all no-underline"
              >
                Program Details
              </a>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            className="w-full lg:w-[45%] relative"
            initial={{ opacity: 0, x: 80, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <div className="rounded-tl-[80px] rounded-br-[80px] sm:rounded-tl-[120px] sm:rounded-br-[120px] overflow-hidden">
              <Image
                src="/images/classroom.png"
                alt="BBA Students at Alpine Management College"
                width={800}
                height={580}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-5 bg-summit-orange text-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-[10px] uppercase tracking-widest opacity-80 m-0 mb-1">Flagship Program Since</p>
              <p className="text-4xl font-bold leading-none m-0">2009</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
