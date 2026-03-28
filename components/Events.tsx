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
  { id: "healthcare", label: "Health Care" },
];

const eventItems = [
  {
    date: "OCT 20, 2022",
    category: "Bachelor",
    title: "The Middle East In The Twentieth Century",
    description:
      "American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group.",
  },
  {
    date: "OCT 20, 2022",
    category: "Bachelor",
    title: "The Middle East In The Twentieth Century",
    description:
      "American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group.",
  },
  {
    date: "OCT 20, 2022",
    category: "Bachelor",
    title: "The Middle East In The Twentieth Century",
    description:
      "American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group.",
  },
  {
    date: "OCT 20, 2022",
    category: "Bachelor",
    title: "The Middle East In The Twentieth Century",
    description:
      "American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group.",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("arts");

  return (
    <section ref={ref} className="event-area">
      {/* Background decoration */}
      <div className="event-image">
        <Image
          src="/images/event-frame.png"
          alt=""
          width={400}
          height={400}
        />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-cotent-wrap grid-item">
          <div className="grid-one">
            <motion.p
              className="section-paragraph red"
              initial={{ x: -150, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Events
            </motion.p>
          </div>
          <div className="grid-two mb-100">
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Recent And
            </motion.h2>
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Upcoming Events
            </motion.h2>
          </div>
        </div>

        {/* Events Tabs */}
        <div className="event-tabs">
          <div className="event-tabs-menu">
            {eventTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onClick={() => setActiveTab(tab.id)}
                className={`events-tab-link ${activeTab === tab.id ? "w--current" : ""}`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="event-tab-content-wrap"
          >
            {eventItems.map((event, index) => (
              <div
                key={index}
                className="event-tab-content-item group"
              >
                <div className="event-bg-color" />
                <div className="event-tab-header-content">
                  <p className="event-date">{event.date}</p>
                  <span className="event-category-button">{event.category}</span>
                </div>
                <h3 className="event-tab-content-title">{event.title}</h3>
                <p className="paragraph-4">{event.description}</p>
                <div className="tab-icon" style={{ marginTop: "auto" }}>
                  <Image
                    src="/images/arrow-right-dark.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
