"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const tabs = [
  { id: "bachelor", label: "/Bachelor" },
  { id: "masters", label: "/Masters" },
  { id: "phd", label: "/PhD" },
];

const programsByTab: Record<string, { title: string; category: string; image: string }[]> = {
  bachelor: [
    {
      title: "CSE & Environmental Engineering Department",
      category: "/Bachelor",
      image: "/images/classroom.png",
    },
    {
      title: "Civil & Environmental Engineering Department",
      category: "/Bachelor",
      image: "/images/campus.png",
    },
    {
      title: "Materials Science & Engineering Department",
      category: "/Bachelor",
      image: "/images/library.png",
    },
  ],
  masters: [
    {
      title: "Master of Business Administration",
      category: "/Masters",
      image: "/images/convocation.png",
    },
    {
      title: "Master of Computer Science",
      category: "/Masters",
      image: "/images/classroom.png",
    },
    {
      title: "Master of Environmental Engineering",
      category: "/Masters",
      image: "/images/campus.png",
    },
  ],
  phd: [
    {
      title: "PhD in Environmental Sciences",
      category: "/PhD",
      image: "/images/research1.png",
    },
    {
      title: "PhD in Computer Science & AI",
      category: "/PhD",
      image: "/images/research2.png",
    },
    {
      title: "PhD in Materials Engineering",
      category: "/PhD",
      image: "/images/research3.png",
    },
  ],
};

export default function AcademicPrograms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("bachelor");

  const programs = programsByTab[activeTab];

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
          {/* Tab menu */}
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

          {/* Tab content */}
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
                {/* Background image */}
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  style={{ objectFit: "cover", opacity: 0.15, borderRadius: "20px", zIndex: -1 }}
                />
                <div className="ripple-div-two scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="tab-content relative z-10 w-full">
                  <h3 className="tab-content-title group-hover:text-white transition-colors duration-300">
                    {program.title}
                  </h3>
                  <div className="tab-bottom-content">
                    <a href="#" className="category-button group-hover:border-white group-hover:text-white transition-colors duration-300">
                      {program.category}
                    </a>
                    <div className="tab-icon group-hover:border-white transition-colors duration-300">
                      <Image
                        src="/images/arrow-right-dark.svg"
                        alt="Arrow"
                        width={24}
                        height={24}
                        className="group-hover:invert transition-all duration-300"
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
