"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const researchItems = [
  {
    image: "/images/research1.png",
    title: "Are Social Networks Good For Our Society?",
    description:
      "American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group.",
  },
  {
    image: "/images/research2.png",
    title: "How To Stop Wasting Paper And Save Trees?",
    description:
      "American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group.",
  },
  {
    image: "/images/research3.png",
    title: "Are Social Networks Good For Our Society?",
    description:
      "American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group.",
  },
  {
    image: "/images/research1.png",
    title: "Are Social Networks Good For Our Society?",
    description:
      "American Journal Of Applied Scientific Research (AJASR) Is A Peer-Reviewed, Open Access International Journal, Published By Science Publishing Group.",
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
  const handleMouseLeave = () => { setShowCursor(false); setIsDragging(false); };

  return (
    <section ref={ref} className="research-area">
      {/* Custom drag cursor */}
      {showCursor && (
        <div
          className="courser-area"
          style={{ pointerEvents: "none" }}
        >
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
              Publication
            </motion.h2>
            <motion.h2
              className="section-title dark"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Research &amp;
            </motion.h2>
          </div>
          <div className="grid-two" style={{ paddingTop: "120px" }}>
            <motion.p
              className="section-paragraph white small"
              style={{ color: "#000" }}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore University&apos;s 10+ courses across various specialisations that
              provoke intellectual and intuitive learning among students.
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
              <div
                key={index}
                className="research-post-item"
                style={{ flexShrink: 0, width: "620px" }}
              >
                <div className="research-thumbnail-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={620}
                    height={400}
                    style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                    draggable={false}
                  />
                </div>
                <h3 className="researc-item-title">{item.title}</h3>
                <p className="research-item-paragraph">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
