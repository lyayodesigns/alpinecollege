"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const researchItems = [
  {
    image: "/images/research1.png",
    title: "Library & Research Center",
    description:
      "A well-managed, spacious reading room featuring a vast collection of basic course books, reference materials, training manuals, and international journals. We provide all required course books for your regular studies.",
  },
  {
    image: "/images/research2.png",
    title: "High-Tech Computer Lab",
    description:
      "A cozy, air-conditioned lab equipped with the latest modern computers and high-speed Wi-Fi. Students can research global trends and complete digital assignments with just a few clicks.",
  },
  {
    image: "/images/research1.png",
    title: "Rooftop Canteen",
    description:
      "A vibrant space to relax and recharge. The canteen provides healthy, hygienic foods, tasty snacks, and cold drinks at highly affordable prices for all students and staff.",
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
    <section ref={ref} className="research-area">
      {/* Custom drag cursor */}
      {showCursor && (
        <div className="courser-area" style={{ pointerEvents: "none" }}>
          <div
            className="courser-wrap"
            style={{
              position: "fixed",
              left: cursorPos.x - 50,
              top: cursorPos.y - 50,
            }}
          >
            <span className="cursor-text">Drag</span>
          </div>
        </div>
      )}

      <div className="container mb-30">
        {/* Header — consistent with Faculty / WhyChooseUs pattern */}
        <div className="section-cotent-wrap grid-item ">
          <div className="grid-one">
            <motion.p
              className="section-paragraph research-label"
              initial={{ x: -150, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Campus
            </motion.p>
          </div>
          <div className="grid-two">
            <motion.h2
              className="section-title"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              A Campus Designed
            </motion.h2>
            <motion.h2
              className="section-title"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              for Your
            </motion.h2>
            <motion.h2
              className="section-title mb-30"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Success
            </motion.h2>
          </div>
        </div>

        {/* Draggable Slider */}
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="swiper-container"
        >
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="swiper-wrapper research-slider-wrapper"
            style={{
              overflowX: "auto",
              cursor: isDragging ? "grabbing" : "grab",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              gap: "40px",
              paddingBottom: "16px",
            }}
          >
            {researchItems.map((item, index) => (
              <motion.div
                key={index}
                className="research-post-item"
                style={{ flexShrink: 0, width: "620px" }}
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="research-thumbnail-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={620}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "20px",
                    }}
                    draggable={false}
                  />
                </div>
                <h3 className="researc-item-title">{item.title}</h3>
                <p className="research-item-paragraph">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="btn-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#" className="primary-button on-light m-top-55 group">
            <div className="ripple-div scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <div className="button-content relative z-10">
              <div className="primary-button-text">Explore Campus Life</div>
              <Image
                src="/images/icon.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="image-6"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
