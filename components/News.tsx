"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const newsItems = [
  {
    category: "/BBA",
    title: "AMC Students Secure Top Positions in Pokhara University Examinations",
  },
  {
    category: "/BHM",
    title: "BHM Graduates Land Internships at Five-Star Hotels in Thailand & Dubai",
  },
  {
    category: "/Scholarship",
    title: "AMC Announces Scholarship for Province & District Toppers — 2025 Admissions",
  },
  {
    category: "/Events",
    title: "Annual Personality Development Workshop Draws Industry Leaders to AMC Campus",
  },
  {
    category: "/Admissions",
    title: "Enrollment Now Open for BBA & BHM — Limited Seats Available",
  },
];

export default function News() {
  const ref = useRef(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };
  const handleMouseEnter = () => setShowCursor(true);
  const handleMouseLeave = () => { setShowCursor(false); setIsDragging(false); };

  return (
    <section ref={ref} className="research-area" style={{ paddingTop: "160px", paddingBottom: "160px" }}>
      {/* Custom drag cursor */}
      {showCursor && (
        <div className="courser-area" style={{ pointerEvents: "none" }}>
          <div
            className="courser-wrap"
            style={{ position: "fixed", left: cursorPos.x - 50, top: cursorPos.y - 50 }}
          >
            <span className="cursor-text">Drag</span>
          </div>
        </div>
      )}

      <div className="container">
        {/* Header */}
        <div className="section-cotent-wrap grid-item">
          <div className="grid-one">
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              News &amp;
            </motion.h2>
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Articles
            </motion.h2>
          </div>
          <div className="grid-two" style={{ paddingTop: "120px" }}>
            <motion.p
              className="section-paragraph white small"
              style={{ color: "var(--color-deep-midnight)" }}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay up to date with the latest achievements, events, and announcements from Alpine Management College, Nepalgunj.
            </motion.p>
          </div>
        </div>

        {/* Draggable Slider */}
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="swiper-container"
        >
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="news-post-wrap"
            style={{
              overflowX: "auto",
              cursor: isDragging ? "grabbing" : "grab",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="news-single-item"
                style={{ flexShrink: 0 }}
              >
                <div className="event-tab-header-content" style={{ marginBottom: "48px" }}>
                  <span className="event-category-button">{item.category}</span>
                  <div className="tab-icon">
                    <Image
                      src="/images/arrow-right-dark.svg"
                      alt="Arrow"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <h3 className="tab-content-title style-01">{item.title}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
