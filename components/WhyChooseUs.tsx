"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Outstanding Academic Results",
    description:
      "We maintain an excellent academic environment that consistently produces top-tier university results.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.24C7.64 18.8 7 19.96 7 21"/><path d="M14 14.66V17c0 .55.47.98.97 1.24C16.36 18.8 17 19.96 17 21"/><path d="M11 2v8.66"/>
      </svg>
    ),
  },
  {
    title: "Modern Smart Classrooms",
    description:
      "Learn in Wi-Fi-enabled, multimedia-equipped classrooms that make complex topics interactive and engaging.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>
      </svg>
    ),
  },
  {
    title: "Expert Faculty",
    description:
      "Be guided by highly qualified, dedicated faculty members and supportive, friendly staff.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/>
      </svg>
    ),
  },
  {
    title: "Personalized Attention",
    description:
      "We keep our class sizes limited to ensure every student receives the individual focus they deserve.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Guest Masterclasses",
    description:
      "Gain insights from frequent special classes led by renowned industrialists, familiar businessmen, and distinguished hospitality experts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: "Continuous Monitoring",
    description:
      "We provide regular progress reports to students and guardians to ensure continuous academic improvement.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/><path d="M3 20h18"/>
      </svg>
    ),
  },
  {
    title: "High Discipline",
    description:
      "Study in a healthy, safe atmosphere that promotes a high degree of discipline and mutual respect.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="campus-life-area redesigned">
      <div className="container overflow-visible">
        {/* Section Header */}
        <div className="campus-header">
          <motion.p
            className="campus-label"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            The AMC Advantage
          </motion.p>
          <motion.h2
            className="campus-title"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            className="campus-subtitle"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            We offer an unparalleled academic experience designed to guarantee your success.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="campus-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="campus-card"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.25 + index * 0.08,
                ease: "easeOut",
              }}
            >
              <div className="campus-card-accent" />
              <div className="campus-card-top">
                <span className="campus-card-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="campus-card-icon">
                  {feature.icon}
                </div>
              </div>
              <h3 className="campus-card-title">{feature.title}</h3>
              <p className="campus-card-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
