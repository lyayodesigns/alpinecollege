"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    number: 45,
    suffix: "+",
    title: "Teachers",
    description: "Experienced and dedicated faculty members committed to academic excellence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/>
      </svg>
    ),
  },
  {
    number: 4,
    suffix: "",
    title: "Courses",
    description: "BBA, BHM, BBA Finance, and MBA programs affiliated with Pokhara University.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    number: 600,
    suffix: "+",
    title: "Graduates",
    description: "Alumni thriving in national and global organisations and industries.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    number: 1500,
    suffix: "+",
    title: "Happy Students",
    description: "Students who found confidence, skills, and lifelong memories at AMC.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
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
          spring.set(value);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [spring, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function AboutStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-deep-midnight py-[80px] sm:py-[120px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mb-[60px] md:mb-[100px]">
          <div>
            <motion.p
              className="text-base sm:text-xl leading-none uppercase text-white font-normal text-center md:text-left"
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
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Numbers that speak
            </motion.h2>
            <motion.h2
              className="m-0 text-white text-[26px] sm:text-[44px] md:text-[56px] leading-tight md:leading-[75px] font-normal -tracking-[0.01em] uppercase text-center md:text-left"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              for themselves
            </motion.h2>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden flex flex-col items-center sm:items-start"
              initial={{ y: 50, opacity: 0.3, skewY: 4 }}
              animate={isInView ? { y: 0, opacity: 1, skewY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-alpine-blue-400 mb-6">
                {stat.icon}
              </div>
              <div className="flex mb-4 justify-center sm:justify-start">
                <h3 className="m-0 font-serif-display text-alpine-blue text-[52px] sm:text-[68px] leading-none">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </h3>
              </div>
              <h4 className="m-0 mb-3 text-white text-[20px] sm:text-[24px] font-normal capitalize text-center sm:text-left leading-tight">
                {stat.title}
              </h4>
              <p className="max-w-[260px] text-white/55 text-sm sm:text-base leading-[1.6] font-normal normal-case text-center sm:text-left m-0">
                {stat.description}
              </p>
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-0 w-px h-[80px] bg-summit-orange/40 translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
