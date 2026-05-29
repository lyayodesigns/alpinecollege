"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function CampusLife() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="campus-life-area">
      <div className="container">
        <div className="section-cotent-wrap grid-item">
          <div className="grid-one">
            <motion.p
              className="section-paragraph red"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Campus Life
            </motion.p>
            <motion.div
              className="section-image hidden lg:block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/spiral.png"
                alt=""
                width={150}
                height={150}
              />
            </motion.div>
          </div>
          <div className="grid-two mb-100">
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              University is the
            </motion.h2>
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              best time of your
            </motion.h2>
            <motion.h2
              className="section-title dark mb-30"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              life.
            </motion.h2>
            <motion.p
              className="section-paragraph dark small"
              initial={{ y: 150, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore University&apos;s 10+ courses across various specialisations that provoke intellectual and intuitive learning among students.
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        className="campus-thumb-wrap"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Image
          src="/images/campus-life.jpg"
          alt="Campus Life"
          width={1728}
          height={800}
          className="image-8"
        />
      </motion.div>
    </section>
  );
}
