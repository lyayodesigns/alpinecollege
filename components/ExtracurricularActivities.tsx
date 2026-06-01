"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ExtracurricularActivities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative z-0 pt-[100px] pb-[140px] bg-snow-white overflow-hidden max-[900px]:pt-[80px] max-[900px]:pb-[100px]"
    >
      <div className="w-full max-w-[1570px] mx-auto px-10 overflow-hidden">
        <div className="grid grid-cols-1 gap-12 items-center min-[900px]:grid-cols-2 min-[900px]:gap-20">
          {/* Left: Image */}
          <motion.div
            className="rounded-[20px] overflow-hidden h-[520px]"
            initial={{ opacity: 0, x: -100, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/images/campus-life.jpg"
              alt="Extracurricular Activities at Alpine Management College"
              width={700}
              height={560}
              className="rounded-[20px] w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Text */}
          <div className="flex flex-col gap-6">
            <motion.p
              className="text-2xl leading-none uppercase text-summit-orange"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Holistic Development
            </motion.p>
            <motion.h2
              className="text-[40px] leading-[1.15] font-medium text-deep-midnight"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Beyond the Classroom: Extracurricular Activities
            </motion.h2>
            <motion.p
              className="text-base leading-[1.7] text-rock-grey normal-case"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              AMC does not believe in academic excellence alone; we aim for the multifaceted development of your entire personality. To succeed today, you must be lively, dynamic, vibrant, competent, and self-confident.
            </motion.p>
            <motion.p
              className="text-base leading-[1.7] text-rock-grey normal-case"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              To achieve this physical and psychological growth, the college frequently organizes a wide variety of extracurricular activities. Students engage in competitive sports, intellectual quizzes, and engaging class performances. We also organize frequent industrial tours, social excursions, field visits, and interactive seminars. AMC is a place to sharpen both your academic brilliance and your sportsmanship talents, making you a responsible and capable citizen of the country.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
