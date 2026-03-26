"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const tabs = [
  { id: "bachelor", label: "/Bachelor" },
  { id: "masters", label: "/Masters" },
  { id: "phd", label: "/PhD" },
];

const programs = [
  {
    title: "CSE & Environmental Engineering Department",
    category: "/Bachelor",
  },
  {
    title: "Civil & Environmental Engineering Department",
    category: "/Bachelor",
  },
  {
    title: "Materials Science & Engineering Department",
    category: "/Bachelor",
  },
];

export default function AcademicPrograms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("phd");

  return (
    <section ref={ref} className="academic-programs-area">
      <div className="container">
        <div className="section-cotent-wrap">
          <motion.h2
            className="section-title dark mb-30"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Academic Programs
          </motion.h2>
          <motion.p
            className="banner-paragraph dark"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore University&apos;s 10+ courses across various specialisations that provoke intellectual and intuitive learning among students.
          </motion.p>
        </div>
        <div className="academic-tabs-item-wrap">
          <div className="tabs-menu">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ x: 300, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-link ${activeTab === tab.id ? "w--current" : ""}`}
              >
                <div className="tab-menu">{tab.label}</div>
              </motion.button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="tab-content-wrap"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ x: 100 * (index + 1), opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="tab-content-item group cursor-pointer"
              >
                <div className="ripple-div-two scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="tab-content relative z-10">
                  <h3 className="tab-content-title group-hover:text-white transition-colors duration-300">
                    {program.title}
                  </h3>
                  <div className="tab-bottom-content">
                    <a href="#" className="category-button group-hover:border-white group-hover:text-white transition-colors duration-300">
                      {program.category}
                    </a>
                    <div className="tab-icon group-hover:border-white transition-colors duration-300">
                      <Image
                        src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ba665ae3ca2addb4de3b39_arrow-right.svg"
                        alt="Arrow"
                        width={24}
                        height={24}
                        className="image-icon group-hover:invert transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
