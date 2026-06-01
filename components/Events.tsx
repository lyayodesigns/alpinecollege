"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const supportItems = [
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
      "We offer special scholarships for the entrance exam topper and second topper, as well as a half-tuition free-ship to the top-performing student in every single semester.",
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
    <section ref={ref} className="relative z-0 py-[160px] bg-white">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 -z-10">
        <Image src="/images/event-frame.png" alt="" width={400} height={400} />
      </div>

      <div className="w-full max-w-[1570px] mx-auto px-10 overflow-hidden">
        {/* Section Header */}
        <div className="pt-[60px] relative z-0 grid grid-cols-[1fr_2fr] gap-4">
          <div>
            <motion.p
              className="text-2xl leading-none uppercase text-summit-orange"
              initial={{ x: -150, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Student Support
            </motion.p>
          </div>
          <div className="mb-[100px]">
            {["Financial Aid And", "Career Support"].map((line, i) => (
              <motion.h2
                key={i}
                className="m-0 text-deep-midnight text-[56px] leading-[75px] font-normal -tracking-[0.01em] uppercase"
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
          className="max-w-[680px] mb-[60px] text-deep-midnight text-lg leading-[135%] capitalize"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We ensure that financial limitations do not stop deserving students
          from achieving their goals.
        </motion.p>

        {/* Support Cards */}
        <motion.div
          className="grid grid-cols-2 gap-[30px]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="group relative z-0 p-[50px] border border-rock-grey rounded-[20px] bg-white flex flex-col"
            >
              <span className="inline-block mb-6 px-7 py-3.5 border border-summit-orange rounded-full bg-transparent text-deep-midnight text-[28px] leading-none font-normal capitalize w-fit transition-colors hover:bg-summit-orange hover:text-white">
                0{index + 1}
              </span>
              <h3 className="max-w-[400px] pb-[38px] text-[36px] leading-[130%] font-normal capitalize">
                {item.title}
              </h3>
              <p className="max-w-[380px] mb-[60px] text-deep-midnight text-lg leading-[135%] capitalize">
                {item.description}
              </p>
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
