"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const eventTabs = [
  { id: "arts", label: "/Arts" },
  { id: "culture", label: "Culture" },
  { id: "exhibition", label: "Exhibition" },
  { id: "seminar", label: "Seminar" },
  { id: "sports", label: "Sports" },
  { id: "recreation", label: "Recreation" },
  { id: "healthcare", label: "Health care" },
];

const eventItems = [
  {
    date: "OCT 20, 2022",
    category: "Bachelor",
    title: "The Middle East in the Twentieth Century",
    description:
      "American Journal of Applied Scientific Research (AJASR) is a peer-reviewed, open access international journal, published by Science Publishing Group.",
  },
  {
    date: "OCT 20, 2022",
    category: "Bachelor",
    title: "The Middle East in the Twentieth Century",
    description:
      "American Journal of Applied Scientific Research (AJASR) is a peer-reviewed, open access international journal, published by Science Publishing Group.",
  },
  {
    date: "OCT 20, 2022",
    category: "Bachelor",
    title: "The Middle East in the Twentieth Century",
    description:
      "American Journal of Applied Scientific Research (AJASR) is a peer-reviewed, open access international journal, published by Science Publishing Group.",
  },
  {
    date: "OCT 20, 2022",
    category: "Bachelor",
    title: "The Middle East in the Twentieth Century",
    description:
      "American Journal of Applied Scientific Research (AJASR) is a peer-reviewed, open access international journal, published by Science Publishing Group.",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("arts");

  return (
    <section
      ref={ref}
      className="relative bg-[#f5efe7] py-20 lg:py-40 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 z-0">
        <Image
          src="/images/event-frame.png"
          alt=""
          width={400}
          height={400}
          className="opacity-50 w-[200px] lg:w-[400px]"
        />
      </div>

      <div className="max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 lg:mb-24">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-black text-lg lg:text-2xl">Events</p>
          </motion.div>
          <motion.div
            className="lg:col-span-2"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-normal leading-tight lg:leading-[75px]">
              Recent and
            </h2>
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-normal leading-tight lg:leading-[75px]">
              Upcoming Events
            </h2>
          </motion.div>
        </div>

        {/* Events Tabs */}
        <div className="mt-16 lg:mt-24">
          <div className="flex flex-wrap gap-4 lg:gap-0 lg:space-x-8 lg:space-y-0 mb-12 lg:mb-16">
            {eventTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "text-black"
                    : "text-black/30 hover:text-black"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {eventItems.map((event, index) => (
              <motion.div
                key={index}
                initial={{ x: 100 * (index + 1), opacity: 0, scale: 0.4 }}
                animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative border border-black rounded-[20px] p-6 lg:p-12 overflow-hidden group cursor-pointer"
              >
                {/* Black background on hover */}
                <div className="absolute inset-0 bg-black rounded-[20px] transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-black group-hover:text-white text-sm lg:text-base transition-colors duration-300">
                      {event.date}
                    </p>
                    <span className="px-5 lg:px-7 py-2 lg:py-3 border border-black group-hover:border-white rounded-full text-base lg:text-[28px] font-normal text-black group-hover:text-white transition-colors duration-300">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="text-black group-hover:text-white text-xl lg:text-2xl xl:text-[36px] font-normal leading-tight lg:leading-[130%] mb-6 lg:mb-10 max-w-[400px] transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-black group-hover:text-white text-sm lg:text-base lg:text-lg font-normal leading-relaxed lg:leading-[135%] mb-8 lg:mb-16 max-w-[380px] normal-case transition-colors duration-300">
                    {event.description}
                  </p>

                  <div className="flex justify-end">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-black group-hover:border-white flex items-center justify-center transition-colors duration-300">
                      <Image
                        src="/images/arrow-right.svg"
                        alt="Arrow"
                        width={24}
                        height={24}
                        className="w-5 h-5 lg:w-6 lg:h-6 group-hover:invert transition-all duration-300"
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
