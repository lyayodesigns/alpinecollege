"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const researchItems = [
  {
    image: "/homepage/Library.avif",
    title: "Library & Research Center",
    description:
      "A well-managed, spacious reading room featuring a vast collection of basic course books, reference materials, training manuals, and international journals. We provide all required course books for your regular studies.",
  },
  {
    image: "/homepage/site visit.avif",
    title: "Site Visit",
    description:
      "Hands-on learning beyond the classroom. Our site visits expose students to real-world business environments, industrial operations, and professional settings, bridging the gap between theory and practice.",
  },
  {
    image: "/homepage/Sport.avif",
    title: "Sports",
    description:
      "We believe in holistic development. Our sports facilities encourage students to stay active, build teamwork, and develop discipline through a range of indoor and outdoor sporting activities.",
  },
];

export default function Research() {
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
  const handleMouseLeave = () => {
    setShowCursor(false);
    setIsDragging(false);
  };

  return (
    <section ref={ref} className="overflow-hidden font-medium bg-deep-midnight">
      {/* Custom drag cursor */}
      {showCursor && (
        <div className="fixed inset-0 z-[99] flex pointer-events-none">
          <div
            className="relative flex w-[100px] h-[100px] justify-center items-center rounded-full bg-alpine-blue/50 fixed"
            style={{ left: cursorPos.x - 50, top: cursorPos.y - 50 }}
          >
            <span className="text-white text-lg font-medium uppercase">Drag</span>
          </div>
        </div>
      )}

      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10 overflow-hidden mb-[30px]">
        {/* Header */}
        <div className="pt-[40px] sm:pt-[60px] relative z-0 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
          <div>
            <motion.p
              className="text-base sm:text-2xl leading-none uppercase text-summit-orange text-center md:text-left"
              initial={{ x: -150, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Campus
            </motion.p>
          </div>
          <div>
            {[
              { txt: "A Campus Designed", delay: 0 },
              { txt: "for Your", delay: 0.1 },
              { txt: "Success", delay: 0.2, mb: true },
            ].map((line, i) => (
              <motion.h2
                key={i}
                className={`m-0 text-white text-[26px] sm:text-[40px] md:text-[56px] leading-tight md:leading-[75px] font-normal -tracking-[0.01em] uppercase text-center md:text-left ${line.mb ? "mb-[20px] sm:mb-[30px]" : ""}`}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: line.delay, ease: "easeOut" }}
              >
                {line.txt}
              </motion.h2>
            ))}
          </div>
        </div>

        {/* Draggable Slider */}
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex gap-10 pb-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          >
            {researchItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative z-0 w-[85vw] sm:w-[480px] md:w-[620px] max-w-[620px] shrink-0 transition-transform duration-300 hover:-translate-y-2"
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="relative mb-10 overflow-hidden rounded-[20px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={620}
                    height={400}
                    className="w-full h-auto max-h-[400px] object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-[1.06]"
                    draggable={false}
                  />
                  <div className="absolute inset-0 rounded-[20px] pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(180deg,transparent_50%,rgba(26,26,46,0.7)_100%)]" />
                </div>
                <h3 className="max-w-[600px] mb-7 text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[120%] font-normal capitalize transition-colors duration-300 group-hover:text-alpine-blue">
                  {item.title}
                </h3>
                <p className="max-w-[456px] text-white/65 text-base sm:text-xl leading-[125%] font-normal capitalize">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="/gallery"
            className="group relative flex justify-center items-center mt-[36px] sm:mt-[55px] px-[51px] py-6 border border-summit-orange rounded-full no-underline overflow-hidden transition-colors duration-200 hover:bg-summit-orange w-fit mx-auto"
          >
            <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-summit-orange scale-0 group-hover:scale-100 transition-transform duration-500" />
            <div className="relative z-10 flex items-center gap-3.5">
              <div className="text-summit-orange font-normal no-underline transition-colors duration-200 group-hover:text-white">
                Explore Campus Life
              </div>
              <Image src="/images/icon.svg" alt="Arrow" width={20} height={20} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
