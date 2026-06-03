"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const programGroups = [
  {
    id: "undergraduate",
    label: "/Undergraduate",
    programs: [
      { id: "bhm", label: "/BHM" },
      { id: "bba", label: "/BBA" },
      { id: "bba-finance", label: "/BBA Finance" },
    ],
  },
  {
    id: "graduate",
    label: "/Graduate",
    programs: [
      { id: "mba", label: "/MBA" },
    ],
  },
];

const programDetails: Record<string, { title: string; since: number; description: string; cta: string }> = {
  bhm: {
    title: "Bachelor of Hotel Management",
    since: 2017,
    description: "Introduced in 2017, the BHM program is your gateway to the glamorous and fast-paced global hospitality industry. This four-year program covers a dynamic curriculum ranging from culinary arts and food & beverage service to front office management and hospitality marketing. We train our students to deliver world-class service with absolute professionalism, ensuring they are ready to manage luxury hotels, international resorts, and premier travel agencies. If you dream of an exciting career that allows you to travel the world and interact with diverse cultures, the BHM program at AMC is your perfect starting point.",
    cta: "Learn More About BHM",
  },
  bba: {
    title: "Bachelor of Business Administration",
    since: 2009,
    description: "Running successfully since 2009, our flagship BBA program is a comprehensive four-year degree designed to forge the corporate leaders of tomorrow. The curriculum is meticulously crafted to cover vital aspects of modern business, including finance, marketing, human resources, and strategic management. Students engage in rigorous case studies, presentations, and group projects that simulate real-world corporate challenges. By the time you graduate, you will possess the analytical skills, leadership qualities, and entrepreneurial mindset required to excel in any business environment or launch your own successful venture.",
    cta: "Learn More About BBA",
  },
  "bba-finance": {
    title: "Bachelor of Business Administration — Finance",
    since: 2024,
    description: "The BBA Finance specialization equips students with deep expertise in financial markets, investment analysis, corporate finance, and banking operations. Designed for those who aspire to lead in the world of finance, this program combines rigorous quantitative training with practical exposure to Nepal's growing financial sector. Graduates are well-prepared for careers in commercial banks, financial institutions, investment firms, and the corporate treasury functions of leading organizations.",
    cta: "Learn More About BBA Finance",
  },
  mba: {
    title: "Master of Business Administration",
    since: 2024,
    description: "AMC's MBA program is designed for working professionals and fresh graduates who aspire to reach the highest levels of business leadership. The curriculum integrates advanced management theory with applied research, strategic thinking, and executive decision-making. Students engage with real business challenges through case-based learning, industry projects, and expert-led workshops — emerging as versatile leaders ready to drive organizational growth and navigate complex global markets.",
    cta: "Learn More About MBA",
  },
};

export default function AcademicPrograms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeGroup, setActiveGroup] = useState("undergraduate");
  const [activeProgram, setActiveProgram] = useState("bhm");

  const currentGroup = programGroups.find((g) => g.id === activeGroup)!;

  function handleGroupChange(groupId: string) {
    const group = programGroups.find((g) => g.id === groupId)!;
    setActiveGroup(groupId);
    setActiveProgram(group.programs[0].id);
  }

  const activeProgramDetail = programDetails[activeProgram];

  return (
    <section ref={ref} className="bg-deep-midnight relative overflow-hidden">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10 overflow-hidden">
        <div className="pt-[60px]">
          <motion.h2
            className="m-0 text-white text-[28px] sm:text-[40px] md:text-[56px] leading-tight md:leading-[75px] font-normal -tracking-[0.01em] uppercase mb-[30px] text-center sm:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Academic Programs
          </motion.h2>
          <motion.p
            className="max-w-[780px] mx-auto sm:mx-0 mb-0 text-white text-sm sm:text-lg leading-7 sm:leading-8 font-normal uppercase text-center sm:text-left"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Affiliated to Pokhara University, AMC offers undergraduate programs in BHM, BBA, and BBA Finance, as well as a graduate MBA program — the first of their kind in the Nepalgunj region.
          </motion.p>
        </div>
        <div className="mt-[60px] sm:mt-[100px]">
          {/* Group tabs (Undergraduate / Graduate) */}
          <div className="flex flex-wrap gap-5 pb-[30px] border-b border-white/10 mb-8 justify-center sm:justify-start">
            {programGroups.map((group, index) => {
              const active = activeGroup === group.id;
              return (
                <motion.button
                  key={group.id}
                  initial={{ x: 300, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleGroupChange(group.id)}
                  className={`relative px-6 py-3 bg-transparent transition-all duration-300 text-[20px] sm:text-[28px] leading-none capitalize border-0 cursor-pointer ${active ? "text-summit-orange" : "text-white/45 hover:text-white"}`}
                >
                  <div>{group.label}</div>
                  <span
                    className={`absolute -bottom-8 left-0 w-full h-[3px] bg-summit-orange transition-transform duration-300 ${active ? "scale-x-100 origin-bottom-left" : "scale-x-0 origin-bottom-right"}`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Program sub-tabs */}
          <div className="flex flex-wrap gap-2 mb-[60px] justify-center sm:justify-start">
            {currentGroup.programs.map((tab, index) => {
              const active = activeProgram === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                  onClick={() => setActiveProgram(tab.id)}
                  className={`relative px-5 py-2 bg-transparent transition-all duration-300 text-[15px] sm:text-[18px] leading-none capitalize border border-white/20 rounded-full cursor-pointer ${
                    active ? "text-summit-orange border-summit-orange" : "text-white/50 hover:text-white hover:border-white/50"
                  }`}
                >
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <motion.div
            key={activeProgram + "-detail"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 p-6 sm:p-12 bg-deep-midnight rounded-[20px] border-l-4 border-summit-orange flex flex-col gap-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <h3 className="m-0 text-[20px] sm:text-[28px] font-semibold text-white leading-[1.2] normal-case text-center sm:text-left">{activeProgramDetail.title}</h3>
              <span className="mx-auto sm:mx-0 w-fit px-3 py-1 rounded-full border border-summit-orange/60 text-summit-orange text-xs sm:text-sm font-medium whitespace-nowrap">
                Since {activeProgramDetail.since}
              </span>
            </div>
            <p className="text-base leading-[1.75] text-[#c0bfbd] max-w-[800px] normal-case text-center sm:text-left">{activeProgramDetail.description}</p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 mx-auto sm:mx-0 w-fit px-7 py-3 bg-summit-orange text-white text-[15px] font-semibold rounded-full no-underline transition hover:brightness-110"
            >
              {activeProgramDetail.cta}
              <Image src="/images/arrow-right-dark.svg" alt="" width={18} height={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
