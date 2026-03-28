"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "At present, there are five departments within the Faculty: Department of Geography And Environment.",
    name: "Guy Hawkins",
    role: "Student",
    image: "/images/testimonial1.png",
  },
  {
    quote:
      "At present, there are five departments within the Faculty: Department of Geography And Environment.",
    name: "Wade Warren",
    role: "Student",
    image: "/images/testimonial2.png",
  },
  {
    quote:
      "At present, there are five departments within the Faculty: Department of Geography And Environment.",
    name: "Wade Warren",
    role: "Student",
    image: "/images/testimonial2.png",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="testimonial-area">
      <div className="container">
        <div className="columns">
          {/* Left: title */}
          <div className="col top">
            <div className="section-title-wrap">
              <motion.p
                className="section-paragraph red"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                Testimonial
              </motion.p>
              <motion.h2
                className="section-title"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                <span className="text-span">Students</span>
                <br />
                <span className="text-span-2">Feedback</span>
              </motion.h2>
            </div>
          </div>

          {/* Right: testimonial columns */}
          <div className="col" style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* Column 1 — slides from top */}
            <motion.div
              className="testimonial-wrap-div-one"
              initial={{ y: -770 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Dark spacer */}
              <div className="testimonial-single-item-wrap">
                <div className="testimonial-single-item dark" />
              </div>

              {/* White card */}
              <div className="testimonial-single-item-wrap">
                <div className="testimonial-single-item">
                  <p className="testimonial-author-quote">{testimonials[0].quote}</p>
                  <div className="testimonial-author-meta">
                    <Image
                      src={testimonials[0].image}
                      alt={testimonials[0].name}
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                    <div className="testimonial-meta-content">
                      <h4 className="testimonial-author-name">{testimonials[0].name}</h4>
                      <p className="paragraph-3">{testimonials[0].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 2 — slides from bottom */}
            <motion.div
              className="testimonial-wrap-div-two"
              initial={{ y: 500 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {testimonials.slice(1).map((t, i) => (
                <div key={i} className="testimonial-single-item-wrap">
                  <div className="testimonial-single-item">
                    <p className="testimonial-author-quote">{t.quote}</p>
                    <div className="testimonial-author-meta">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={50}
                        height={50}
                        style={{ borderRadius: "50%" }}
                      />
                      <div className="testimonial-meta-content">
                        <h4 className="testimonial-author-name">{t.name}</h4>
                        <p className="paragraph-3">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Dark spacer */}
              <div className="testimonial-single-item-wrap">
                <div className="testimonial-single-item dark" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
