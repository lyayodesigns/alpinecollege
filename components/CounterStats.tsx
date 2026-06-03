"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    number: 17,
    suffix: "+",
    title: "Years of Excellence",
    description: "Established in 2009, AMC has been the pioneer management college in the Nepalgunj region for over 17 years.",
  },
  {
    number: 2,
    suffix: "",
    title: "Degree Programs",
    description: "BBA (since 2009) and BHM (since 2017) — both affiliated to Pokhara University and the first of their kind in the region.",
  },
  {
    number: 10,
    suffix: "%",
    title: "Scholarship",
    description: "Pokhara University provides scholarship to 10% of total students, with additional college scholarships for toppers and deserving students.",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [, setIsInView] = useState(false);
  const ref = useRef(null);
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) => Math.floor(current));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [display]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          spring.set(value);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [spring, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function CounterStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-deep-midnight pb-[30px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10 overflow-hidden">
        <div className="pt-[60px] relative z-0 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mb-[60px] md:mb-[100px]">
          <div>
            <motion.p
              className="text-base sm:text-2xl leading-none uppercase text-white font-normal text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Impact
            </motion.p>
          </div>
          <div>
            <motion.h2
              className="m-0 text-white text-[26px] sm:text-[44px] md:text-[56px] leading-tight md:leading-[75px] font-normal -tracking-[0.01em] uppercase text-center md:text-left"
              initial={{ y: 200, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Numbers that speak
            </motion.h2>
            <motion.h2
              className="m-0 text-white text-[26px] sm:text-[44px] md:text-[56px] leading-tight md:leading-[75px] font-normal -tracking-[0.01em] uppercase text-center md:text-left"
              initial={{ y: 200, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              for themselves
            </motion.h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-4 justify-items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden items-center w-full flex flex-col items-center sm:items-start"
              initial={{ y: 50, opacity: 0.3, skewY: 4 }}
              animate={isInView ? { y: 0, opacity: 1, skewY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex mb-7 justify-center sm:justify-start">
                <h3 className="m-0 font-serif-display text-alpine-blue text-[44px] sm:text-[68px] leading-none">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </h3>
                <h1 className="m-0 pl-4 sm:pl-7 font-display text-white text-[18px] sm:text-[28px] md:text-[32px] leading-[130%] font-normal capitalize">
                  {stat.title}
                </h1>
              </div>
              <p className="max-w-[360px] text-white/70 text-sm sm:text-lg leading-[130%] font-normal capitalize text-center sm:text-left">
                {stat.description}
              </p>
              {index < 2 && (
                <div className="hidden sm:block absolute right-0 top-0 w-px h-[100px] bg-summit-orange translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
