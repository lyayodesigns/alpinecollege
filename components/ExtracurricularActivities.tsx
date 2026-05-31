"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ExtracurricularActivities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="extracurricular-section">
      <div className="container">
        <div className="about-two-col">
          {/* Left: Image */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -100, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/images/campus-life.jpg"
              alt="Extracurricular Activities at Alpine Management College"
              width={700}
              height={560}
              className="about-campus-img"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>

          {/* Right: Text */}
          <div className="about-text-col">
            <motion.p
              className="section-paragraph red"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Holistic Development
            </motion.p>
            <motion.h2
              className="about-heading"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Beyond the Classroom: Extracurricular Activities
            </motion.h2>
            <motion.p
              className="about-body normal-case"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              AMC does not believe in academic excellence alone; we aim for the multifaceted development of your entire personality. To succeed today, you must be lively, dynamic, vibrant, competent, and self-confident.
            </motion.p>
            <motion.p
              className="about-body normal-case"
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
