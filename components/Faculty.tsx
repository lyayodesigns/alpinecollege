"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Faculty() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="mx-auto pb-[60px] bg-white text-xl">
      <div className="w-full max-w-[1570px] mx-auto px-10 overflow-hidden">
        {/* Section Header */}
        <div className="pt-[60px] relative z-0 grid grid-cols-[1fr_2fr] gap-4 mb-[100px]">
          <div>
            <motion.p
              className="text-2xl leading-none uppercase text-summit-orange"
              initial={{ x: -150, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Internships
            </motion.p>
          </div>
          <div>
            {["Guaranteed Internship", "and Placement", "Programs"].map((line, i) => (
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
          className="max-w-4xl mb-[60px] text-rock-grey text-base leading-[150%] font-normal capitalize"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Classroom theory is essential, but practical application is what lands you the job. Both BBA and BHM students at AMC are required to complete immersive internship programs. The primary goal is to provide real-life, on-the-job exposure that makes you instantly employable upon graduation.
        </motion.p>

        {/* Split Screen */}
        <div className="grid grid-cols-2 gap-5 items-stretch">
          {[
            {
              cat: "BBA",
              title: "Corporate Exposure",
              body: "Our BBA students step directly into the corporate world for their internships. They are placed in leading commercial banks, national NGOs, international NGOs (INGOs), and top business houses. This hands-on experience allows students to build robust professional networks, understand complex workplace dynamics, and often secure permanent job offers before they even receive their diplomas.",
              fromX: -100,
              delay: 0.2,
            },
            {
              cat: "BHM",
              title: "Global Opportunities",
              body: "The BHM internship program is widely considered one of our most exciting and charming offerings. Because hospitality is a global industry, our students train in massive national hotels and prestigious international luxury properties. AMC regularly facilitates overseas internships, sending talented students to world-class tourism hubs in Thailand, Dubai, Bahrain, and Saudi Arabia.",
              fromX: 100,
              delay: 0.3,
            },
          ].map((item) => (
            <motion.div
              key={item.cat}
              className="group p-9 rounded-[20px] bg-deep-midnight transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(26,26,46,0.25)]"
              initial={{ x: item.fromX, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: item.delay }}
            >
              <div className="pb-[35px]">
                <h3 className="inline-block m-0 px-[21px] py-2.5 rounded-full bg-summit-orange text-white text-sm leading-5 font-semibold tracking-[0.04em] uppercase transition-colors group-hover:bg-alpine-blue">
                  {item.cat}
                </h3>
              </div>
              <h2 className="max-w-full m-0 pb-6 text-white text-[30px] leading-[140%] font-medium capitalize">
                {item.title}
              </h2>
              <p className="max-w-full m-0 text-white/65 text-base leading-[150%] font-normal capitalize">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
