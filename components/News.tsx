"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const newsItems = [
  {
    category: "/Bachelor",
    title: "Wildfire smoke exposure hurts learning outcomes",
  },
  {
    category: "/Bachelor",
    title: "University Class of 2023 called to explore and engage",
  },
  {
    category: "/Bachelor",
    title: "Battery technology research at American University",
  },
  {
    category: "/Bachelor",
    title: "Wildfire smoke exposure hurts learning outcomes",
  },
  {
    category: "/Bachelor",
    title: "Wildfire smoke exposure hurts learning outcomes",
  },
];

export default function News() {
  const ref = useRef(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseEnter = () => setShowCursor(true);
  const handleMouseLeave = () => {
    setShowCursor(false);
    setIsDragging(false);
  };

  return (
    <section ref={ref} className="bg-white py-20 lg:py-40 overflow-hidden">
      {/* Custom Cursor */}
      {showCursor && (
        <div
          className={`custom-cursor ${showCursor ? "visible" : ""}`}
          style={{
            left: cursorPos.x - 50,
            top: cursorPos.y - 50,
          }}
        >
          Drag
        </div>
      )}

      <div className="max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-normal leading-tight lg:leading-[75px] mb-6">
            News & Articles
          </h2>
          <p className="text-black text-base lg:text-lg leading-7 lg:leading-8 max-w-[780px] font-normal normal-case">
            Explore University&apos;s 10+ courses across various specialisations that
            provoke intellectual and intuitive learning among students.
          </p>
        </motion.div>

        {/* News Slider */}
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative pt-12 lg:pt-24"
        >
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 lg:gap-12 overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 100 * (index + 1), opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[620px] border border-black rounded-[20px] p-6 lg:p-12 select-none"
              >
                <div className="flex justify-between items-center mb-8 lg:mb-12">
                  <span className="px-6 lg:px-7 py-3 lg:py-4 border border-black rounded-full text-base lg:text-[28px] font-normal text-black">
                    {item.category}
                  </span>
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-black flex items-center justify-center">
                    <Image
                      src="/images/arrow-right-dark.svg"
                      alt="Arrow"
                      width={24}
                      height={24}
                      className="w-5 h-5 lg:w-6 lg:h-6"
                    />
                  </div>
                </div>

                <h3 className="text-black text-xl sm:text-2xl lg:text-[30px] font-normal leading-tight lg:leading-[130%] pt-12 lg:pt-44">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
