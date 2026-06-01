"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative z-0 pt-[100px] pb-[140px] bg-snow-white overflow-hidden"
    >
      <div className="w-full max-w-[1570px] mx-auto px-10 overflow-hidden">
        <div className="grid grid-cols-1 gap-12 items-center min-[900px]:grid-cols-2 min-[900px]:gap-20">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <motion.p
              className="text-2xl leading-none uppercase"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              About AMC
            </motion.p>
            <motion.h2
              className="text-[40px] leading-[1.15] font-medium text-deep-midnight"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Empowering the Next Generation of Leaders
            </motion.h2>
            <motion.p
              className="text-base leading-[1.7] text-rock-grey normal-case"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Established in 2009, Alpine Management College (AMC) is strategically located in the rapidly growing industrial city of Nepalgunj, Banke district, within Lumbini Province. We recognized the region&apos;s immense potential and the critical need for skilled professionals, leading us to become the pioneering institution for modern management studies in the area.
            </motion.p>
            <motion.p
              className="text-base leading-[1.7] text-rock-grey normal-case"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              As a proud affiliate of Pokhara University, we offer globally recognized degrees that bridge the gap between theoretical knowledge and practical application. AMC is widely regarded as one of the best management colleges in Nepalgunj because we focus on holistic student development. We do not just teach; we mentor, guide, and prepare you to confidently navigate the competitive era of the 21st century.
            </motion.p>
          </div>

          {/* Right: Image */}
          <motion.div
            className="rounded-[20px] overflow-hidden h-[520px]"
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/homepage/alpine-graduation.avif"
              alt="Alpine Management College Campus"
              width={700}
              height={560}
              className="rounded-[20px] w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
