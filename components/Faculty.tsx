"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const facultyItems = [
  {
    image: "https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba78efb73c8b9d670aedff_Rectangle%2019.jpg",
    category: "Bachelor",
    title: "Faculty of Earth and Environmental Sciences",
    description: "At present, there are five departments within the Faculty: Department of Geography and Environment, Geology, Oceanography, Disaster Science and Climate Resilience and Meteorology.",
  },
  {
    image: "https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba78f3cfc084bdb56a1967_Rectangle%2020.png",
    category: "Bachelor",
    title: "Faculty of Engineering and Technology",
    description: "At present, there are five departments within the Faculty: Department of Geography and Environment, Geology, Oceanography, Disaster Science and Climate Resilience and Meteorology.",
  },
];

export default function Faculty() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="faculty-area">
      <div className="container">
        <div className="section-cotent-wrap grid-item mb-100">
          <div className="grid-one">
            <motion.p
              className="section-paragraph white"
              initial={{ x: -150, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Faculty
            </motion.p>
          </div>
          <div className="grid-two">
            <motion.h2
              className="section-title"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our skilled faculty
            </motion.h2>
            <motion.h2
              className="section-title"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              helps students in
            </motion.h2>
            <motion.h2
              className="section-title"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              many disciplines
            </motion.h2>
          </div>
        </div>

        <div className="faculty-grid">
          <div className="grid-one">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src={facultyItems[0].image}
                alt={facultyItems[0].title}
                width={990}
                height={600}
                className="image w-full h-auto"
              />
            </motion.div>
          </div>
          <div className="grid-one">
            <motion.div
              className="faculty-single-item"
              initial={{ x: -310, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="faculty-category">
                <h3 className="faculty-cat-title">{facultyItems[0].category}</h3>
              </div>
              <h2 className="faculty-item-title">{facultyItems[0].title}</h2>
              <p className="faculty-paragraph">{facultyItems[0].description}</p>
            </motion.div>
          </div>
        </div>

        <div className="faculty-grid-two">
          <div className="grid-one">
            <motion.div
              className="faculty-single-item"
              initial={{ x: 310, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="faculty-category">
                <h3 className="faculty-cat-title">{facultyItems[1].category}</h3>
              </div>
              <h2 className="faculty-item-title">{facultyItems[1].title}</h2>
              <p className="faculty-paragraph">{facultyItems[1].description}</p>
            </motion.div>
          </div>
          <div className="grid-one text-right">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Image
                src={facultyItems[1].image}
                alt={facultyItems[1].title}
                width={990}
                height={600}
                className="image w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="btn-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#" className="primary-button m-top-55 group">
            <div className="ripple-div scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <div className="button-content relative z-10">
              <div className="primary-button-text">See All Faculty</div>
              <Image
                src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba7e6bf28c5064304a8304_Icon.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="image-6"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
