"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const aboutImages = [
  { src: "/images/classroom.png", title: "Classroom", anim: { x: 0, y: 0 } },
  { src: "/images/campus.png", title: "Campus", anim: { x: 100, y: 0 } },
  { src: "/images/convocation.png", title: "Convocation", anim: { x: -100, y: 0 } },
  { src: "/images/library.png", title: "Library", anim: { x: 0, y: 0 } },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="about-section">
      <div className="about-image">
        <Image
          src="/images/about-spiral.svg"
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className="container">
        <div className="section-cotent-wrap grid-item mb-100">
          <div className="grid-one">
            <motion.p
              className="section-paragraph white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              About University
            </motion.p>
          </div>
          <div className="grid-two">
            <motion.h2
              className="section-title"
              initial={{ y: 200, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Education is not <br />preparation for life; <br />education is life itself
            </motion.h2>
          </div>
        </div>
        <div className="uv-single-item-wrap">
          <div className="uv-single-item d-none"></div>
          {aboutImages.map((item, index) => (
            <motion.div
              key={index}
              className="uv-single-item"
              initial={{ opacity: 0, x: item.anim.x, y: item.anim.y }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <div className="uv-thumbnail-wrap">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
                <h3 className="uv-thumbnail-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
          <div className="uv-single-item d-none">
            <div className="uv-thumbnail-wrap">
              <Image
                src="/images/frame.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
