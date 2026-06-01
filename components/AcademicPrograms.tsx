"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const tabs = [
  { id: "bba", label: "/BBA" },
  { id: "bhm", label: "/BHM" },
];

const programsByTab: Record<string, { title: string; category: string; image: string; description: string; cta: string }[]> = {
  bba: [
    {
      title: "Bachelor of Business Administration",
      category: "BBA",
      image: "/images/classroom.png",
      description: "Running successfully since 2009, our flagship BBA program is a comprehensive four-year degree designed to forge the corporate leaders of tomorrow. The curriculum is meticulously crafted to cover vital aspects of modern business, including finance, marketing, human resources, and strategic management. Students engage in rigorous case studies, presentations, and group projects that simulate real-world corporate challenges. By the time you graduate, you will possess the analytical skills, leadership qualities, and entrepreneurial mindset required to excel in any business environment or launch your own successful venture.",
      cta: "Learn More About BBA",
    },
    {
      title: "Internship in Banks, NGOs & Business Houses",
      category: "BBA",
      image: "/images/campus.png",
      description: "Our BBA students gain hands-on experience through structured internships at leading banks, NGOs, and business houses across the region. These real-world placements bridge the gap between classroom theory and professional practice, building confidence and industry-ready skills before graduation.",
      cta: "Learn More About BBA",
    },
    {
      title: "Career Counseling & Personality Development",
      category: "BBA",
      image: "/images/library.png",
      description: "AMC invests in the whole student. Dedicated career counseling sessions, personality development workshops, and mentorship programs ensure our graduates are not only academically excellent but also professionally polished and personally confident when they enter the job market.",
      cta: "Learn More About BBA",
    },
  ],
  bhm: [
    {
      title: "Bachelor of Hotel Management",
      category: "BHM",
      image: "/images/convocation.png",
      description: "Introduced in 2017, the BHM program is your gateway to the glamorous and fast-paced global hospitality industry. This four-year program covers a dynamic curriculum ranging from culinary arts and food & beverage service to front office management and hospitality marketing. We train our students to deliver world-class service with absolute professionalism, ensuring they are ready to manage luxury hotels, international resorts, and premier travel agencies. If you dream of an exciting career that allows you to travel the world and interact with diverse cultures, the BHM program at AMC is your perfect starting point.",
      cta: "Learn More About BHM",
    },
    {
      title: "International Internship — Thailand, Dubai & Bahrain",
      category: "BHM",
      image: "/images/classroom.png",
      description: "BHM students have the unique opportunity to complete international internships in world-class hospitality destinations including Thailand, Dubai, and Bahrain. These placements provide unparalleled exposure to global service standards, multicultural environments, and international industry networks that set our graduates apart.",
      cta: "Learn More About BHM",
    },
    {
      title: "Hospitality & Professional Development",
      category: "BHM",
      image: "/images/campus.png",
      description: "Beyond technical skills, we develop well-rounded hospitality professionals through etiquette training, communication workshops, and leadership programs. Our students graduate with the poise, confidence, and professionalism demanded by the world's top hospitality brands.",
      cta: "Learn More About BHM",
    },
  ],
};

export default function AcademicPrograms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("bba");

  const mainProgram = programsByTab[activeTab][0];

  return (
    <section ref={ref} className="bg-deep-midnight relative overflow-hidden">
      <div className="w-full max-w-[1570px] mx-auto px-10 overflow-hidden">
        <div className="pt-[60px]">
          <motion.h2
            className="m-0 text-white text-[56px] leading-[75px] font-normal -tracking-[0.01em] uppercase mb-[30px]"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Academic Programs
          </motion.h2>
          <motion.p
            className="max-w-[780px] mb-0 text-white text-lg leading-8 font-normal uppercase"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Affiliated to Pokhara University, AMC offers BBA (since 2009) and BHM (since 2017) — the first of their kind in the Nepalgunj region.
          </motion.p>
        </div>
        <div className="mt-[100px]">
          {/* Tab menu */}
          <div className="flex flex-wrap gap-5 pb-[30px] border-b border-white/10 mb-[60px]">
            {tabs.map((tab, index) => {
              const active = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ x: 300, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 bg-transparent transition-all duration-300 text-[28px] leading-none capitalize border-0 cursor-pointer ${active ? "text-summit-orange" : "text-white/45 hover:text-white"}`}
                >
                  <div>{tab.label}</div>
                  <span
                    className={`absolute -bottom-8 left-0 w-full h-[3px] bg-summit-orange transition-transform duration-300 ${active ? "scale-x-100 origin-bottom-left" : "scale-x-0 origin-bottom-right"}`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Always-visible detail panel for the main program */}
          <motion.div
            key={activeTab + "-detail"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 p-12 bg-deep-midnight rounded-[20px] border-l-4 border-summit-orange flex flex-col gap-5"
          >
            <h3 className="text-[28px] font-semibold text-white leading-[1.2] normal-case">{mainProgram.title}</h3>
            <p className="text-base leading-[1.75] text-[#c0bfbd] max-w-[800px] normal-case">{mainProgram.description}</p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 w-fit px-7 py-3 bg-summit-orange text-white text-[15px] font-semibold rounded-full no-underline transition hover:brightness-110"
            >
              {mainProgram.cta}
              <Image src="/images/arrow-right-dark.svg" alt="" width={18} height={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
