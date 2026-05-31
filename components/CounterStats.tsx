"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    number: 15,
    suffix: "+",
    title: "Years of Excellence",
    description: "Established in 2009, AMC has been the pioneer management college in the Nepalgunj region for over 15 years.",
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
  const [isInView, setIsInView] = useState(false);
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
    <section ref={ref} className="counter-area pb-30!">
      <div className="container">
        <div className="section-cotent-wrap grid-item mb-100">
          <div className="grid-one">
            <motion.p
              className="section-paragraph white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Impact
            </motion.p>
          </div>
          <div className="grid-two">
            <motion.h2
              className="section-title"
              initial={{ y: 200, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Numbers that speak
            </motion.h2>
            <motion.h2
              className="section-title"
              initial={{ y: 200, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              for themselves
            </motion.h2>
          </div>
        </div>
        <div className="counter-single-item-wrap">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`counter-single-item ${index === 1 ? "ml-left" : ""} ${index === 2 ? "pl-left" : ""}`}
              initial={{ y: 50, opacity: 0.3, skewY: 4 }}
              animate={isInView ? { y: 0, opacity: 1, skewY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {index === 2 && <div className="line-two"></div>}
              <div className="count-number">
                <h3 className="count-number-title">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </h3>
                <h1 className="count-title">{stat.title}</h1>
              </div>
              <p className="count-paragraph">{stat.description}</p>
              {index < 2 && <div className="line"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
