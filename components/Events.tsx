"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const supportItems: { title: string; description: string; details?: string[] }[] = [
  {
    title: "Pokhara University Scholarships",
    description:
      "The university provides full scholarships to 10% of our total student body, covering 10 students in the BBA program and 5 students in the BHM program for all four academic years.",
  },
  {
    title: "Merit-Based Institutional Scholarships",
    description:
      "AMC provides significant admission fee waivers to provincial toppers and district toppers in management, science, and humanities.",
  },
  {
    title: "Entrance and Semester Topper Awards",
    description:
      "We offer special scholarships for entrance exam toppers and a half-tuition free-ship to the top-performing student in every single semester.",
    details: [
      "Entrance Exam Topper: 100% Admission Fee Discount",
      "Second Topper: 50% Admission Fee Discount",
    ],
  },
  {
    title: "Comprehensive Counseling",
    description:
      "We offer individual counseling to students and guardians requiring personal advice. We also provide robust career counseling, personality development classes, and guidance for further studies abroad or immediate job placements.",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative z-0 py-[60px] sm:py-[160px] bg-white">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 -z-10">
        <Image src="/images/event-frame.png" alt="" width={400} height={400} />
      </div>

      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10 overflow-hidden">
        {/* Section Header */}
        <div className="pt-[40px] sm:pt-[60px] relative z-0 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
          <div>
            <motion.p
              className="text-base sm:text-2xl leading-none uppercase text-summit-orange text-center md:text-left"
              initial={{ x: -150, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Student Support
            </motion.p>
          </div>
          <div className="mb-[50px] md:mb-[100px]">
            {["Financial Aid And", "Career Support"].map((line, i) => (
              <motion.h2
                key={i}
                className="m-0 text-deep-midnight text-[26px] sm:text-[40px] md:text-[56px] leading-tight md:leading-[75px] font-normal -tracking-[0.01em] uppercase text-center md:text-left"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              >
                {line}
              </motion.h2>
            ))}
          </div>
        </div>

        {/* Intro paragraph */}
        <motion.p
          className="max-w-[680px] mx-auto md:mx-0 mb-[40px] sm:mb-[60px] text-deep-midnight text-sm sm:text-lg leading-[135%] capitalize text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We ensure that financial limitations do not stop deserving students
          from achieving their goals.
        </motion.p>

        {/* Support Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[30px]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="group relative z-0 p-6 sm:p-[50px] border border-rock-grey rounded-[20px] bg-white flex flex-col"
            >
              <span className="inline-block mb-6 px-5 sm:px-7 py-2.5 sm:py-3.5 border border-summit-orange rounded-full bg-transparent text-deep-midnight text-[18px] sm:text-[28px] leading-none font-normal capitalize w-fit transition-colors hover:bg-summit-orange hover:text-white">
                0{index + 1}
              </span>
              <h3 className="max-w-[400px] pb-6 sm:pb-[38px] text-[22px] sm:text-[28px] md:text-[36px] leading-[130%] font-normal capitalize">
                {item.title}
              </h3>
              <p className={`max-w-[380px] text-deep-midnight text-sm sm:text-lg leading-[135%] capitalize ${item.details ? "mb-4" : "mb-8 sm:mb-[60px]"}`}>
                {item.description}
              </p>
              {item.details && (
                <ul className="mb-8 sm:mb-[60px] space-y-1.5 list-none p-0">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-deep-midnight">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-summit-orange flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-auto flex w-[50px] h-[50px] justify-center items-center border border-white/20 rounded-full bg-white/5 transition-all duration-300">
                <Image
                  src="/images/arrow-right-dark.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
