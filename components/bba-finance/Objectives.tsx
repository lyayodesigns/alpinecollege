"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const objectives = [
  "Develop a thorough understanding of financial management principles and investment strategies.",
  "Equip students with the ability to analyze and interpret financial statements for strategic decision-making.",
  "Foster critical thinking skills to solve complex financial problems.",
  "Enhance students' ability to use electronic media and financial software for organizational and financial analysis.",
  "Prepare students to work effectively in a team as well as independently in financial environments.",
  "Create awareness of global financial markets, economic policies, and ethical considerations in business and finance.",
];

export default function Objectives() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-alpine-blue py-[80px] sm:py-[120px] overflow-hidden">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-20 items-center">
          {/* Left header */}
          <div className="flex flex-col gap-6 text-center min-[900px]:text-left">
            <motion.p
              className="text-white/60 text-sm font-semibold tracking-[0.1em] uppercase"
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Program Goals
            </motion.p>
            <motion.h2
              className="m-0 text-white text-[34px] sm:text-[48px] leading-[1.1] font-normal uppercase"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Key Objectives
            </motion.h2>
            <motion.p
              className="text-white/65 text-base sm:text-lg leading-[1.75] normal-case max-w-[460px] mx-auto min-[900px]:mx-0"
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.65, delay: 0.16 }}
            >
              The key objectives of the BBA (Finance) program are as follows:
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center min-[900px]:justify-start"
            >
              <Image
                src="/images/about-spiral.svg"
                alt=""
                width={120}
                height={120}
                className="opacity-20"
              />
            </motion.div>
          </div>

          {/* Right: numbered list */}
          <div className="flex flex-col gap-4">
            {objectives.map((obj, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start p-5 rounded-xl bg-white/8 border border-white/12 hover:bg-white/12 transition-colors duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-summit-orange text-white text-sm font-bold flex items-center justify-center leading-none">
                  {index + 1}
                </span>
                <p className="m-0 text-white/80 text-[15px] leading-[1.7] normal-case">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
