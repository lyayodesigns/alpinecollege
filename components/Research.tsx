"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const researchItems = [
  {
    image: "/images/research1.png",
    title: "Are social networks good for our society?",
    description:
      "American Journal of Applied Scientific Research (AJASR) is a peer-reviewed, open access international journal, published by Science Publishing Group.",
  },
  {
    image: "/images/research2.png",
    title: "How to stop wasting paper and save trees?",
    description:
      "American Journal of Applied Scientific Research (AJASR) is a peer-reviewed, open access international journal, published by Science Publishing Group.",
  },
  {
    image: "/images/research3.png",
    title: "Are social networks good for our society?",
    description:
      "American Journal of Applied Scientific Research (AJASR) is a peer-reviewed, open access international journal, published by Science Publishing Group.",
  },
  {
    image: "/images/research1.png",
    title: "Are social networks good for our society?",
    description:
      "American Journal of Applied Scientific Research (AJASR) is a peer-reviewed, open access international journal, published by Science Publishing Group.",
  },
];

export default function Research() {
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-normal leading-tight lg:leading-[75px]">
              Publication
            </h2>
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-normal leading-tight lg:leading-[75px]">
              Research &
            </h2>
          </motion.div>
          <div />
        </div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 lg:mb-24 lg:ml-auto lg:max-w-[50%]"
        >
          <p className="text-black text-base lg:text-lg leading-7 lg:leading-8 font-normal normal-case">
            Explore University&apos;s 10+ courses across various specialisations that
            provoke intellectual and intuitive learning among students.
          </p>
        </motion.div>

        {/* Research Slider */}
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
            {researchItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 100 * (index + 1), opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[620px] select-none"
              >
                <div className="mb-8 lg:mb-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={620}
                    height={400}
                    className="w-full h-auto object-cover rounded-[20px]"
                    draggable={false}
                  />
                </div>
                <h3 className="text-black text-xl sm:text-2xl lg:text-[40px] font-normal leading-tight lg:leading-[120%] mb-4 lg:mb-7 max-w-[600px]">
                  {item.title}
                </h3>
                <p className="text-black text-sm lg:text-lg lg:text-xl font-normal leading-relaxed lg:leading-[125%] max-w-[456px] normal-case">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
