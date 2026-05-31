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
    <section ref={ref} className="event-area">
      {/* Background decoration */}
      <div className="event-image">
        <Image
          src="/images/event-frame.png"
          alt=""
          width={400}
          height={400}
        />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-cotent-wrap grid-item">
          <div className="grid-one">
            <motion.p
              className="section-paragraph red"
              initial={{ x: -150, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Student Support
            </motion.p>
          </div>
          <div className="grid-two mb-100">
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Financial Aid And
            </motion.h2>
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Career Support
            </motion.h2>
          </div>
        </div>

        {/* Intro paragraph */}
        <motion.p
          className="paragraph-4"
          style={{ maxWidth: 680, marginBottom: 60 }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We ensure that financial limitations do not stop deserving students
          from achieving their goals.
        </motion.p>

        {/* Support Cards */}
        <motion.div
          className="event-tab-content-wrap"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {supportItems.map((item, index) => (
            <div key={index} className="event-tab-content-item group">
              <span className="event-category-button" style={{ display: "inline-block", marginBottom: 24 }}>
                0{index + 1}
              </span>
              <h3 className="event-tab-content-title">{item.title}</h3>
              <p className="paragraph-4">{item.description}</p>
              <div className="tab-icon" style={{ marginTop: "auto" }}>
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
