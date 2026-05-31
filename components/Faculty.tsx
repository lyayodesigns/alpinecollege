"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Faculty() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="faculty-area">
      <div className="container">
        {/* Section Header */}
        <div className="section-cotent-wrap grid-item mb-100">
          <div className="grid-one">
            <motion.p
              className="section-paragraph red"
              initial={{ x: -150, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Internships
            </motion.p>
          </div>
          <div className="grid-two">
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Guaranteed Internship
            </motion.h2>
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              and Placement
            </motion.h2>
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Programs
            </motion.h2>
          </div>
        </div>

        {/* Intro paragraph */}
        <motion.p
          className="faculty-paragraph mb-60 max-w-4xl"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Classroom theory is essential, but practical application is what lands you the job. Both BBA and BHM students at AMC are required to complete immersive internship programs. The primary goal is to provide real-life, on-the-job exposure that makes you instantly employable upon graduation.
        </motion.p>

        {/* Split Screen */}
        <div className="faculty-grid">
          {/* Left — BBA */}
          <div className="grid-one">
            <motion.div
              className="faculty-single-item"
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="faculty-category">
                <h3 className="faculty-cat-title">BBA</h3>
              </div>
              <h2 className="faculty-item-title">Corporate Exposure</h2>
              <p className="faculty-paragraph">
                Our BBA students step directly into the corporate world for their internships. They are placed in leading commercial banks, national NGOs, international NGOs (INGOs), and top business houses. This hands-on experience allows students to build robust professional networks, understand complex workplace dynamics, and often secure permanent job offers before they even receive their diplomas.
              </p>
            </motion.div>
          </div>

          {/* Right — BHM */}
          <div className="grid-one">
            <motion.div
              className="faculty-single-item"
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="faculty-category">
                <h3 className="faculty-cat-title">BHM</h3>
              </div>
              <h2 className="faculty-item-title">Global Opportunities</h2>
              <p className="faculty-paragraph">
                The BHM internship program is widely considered one of our most exciting and charming offerings. Because hospitality is a global industry, our students train in massive national hotels and prestigious international luxury properties. AMC regularly facilitates overseas internships, sending talented students to world-class tourism hubs in Thailand, Dubai, Bahrain, and Saudi Arabia.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
