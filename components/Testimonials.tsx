"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "At present, there are five departments within the Faculty: Department of Geography and Environment.",
    name: "Guy Hawkins",
    role: "Student",
    image: "/images/testimonial1.png",
    dark: false,
  },
  {
    quote:
      "At present, there are five departments within the Faculty: Department of Geography and Environment.",
    name: "Wade Warren",
    role: "Student",
    image: "/images/testimonial2.png",
    dark: false,
  },
  {
    quote:
      "At present, there are five departments within the Faculty: Department of Geography and Environment.",
    name: "Wade Warren",
    role: "Student",
    image: "/images/testimonial2.png",
    dark: false,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-black py-20 lg:py-40 overflow-hidden max-h-auto lg:max-h-[1150px]"
    >
      <div className="max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 pt-8 lg:pt-36"
          >
            <p className="text-[#af0e2e] text-lg lg:text-2xl mb-4">
              Testimonial
            </p>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-normal leading-tight lg:leading-[75px]">
              <span className="text-[#7d7e80]">Students</span>
              <br />
              <span className="pl-8 lg:pl-12">Feedback</span>
            </h2>
          </motion.div>

          {/* Right Column - Testimonials */}
          <div className="lg:w-2/3 flex gap-4 lg:gap-8 justify-end">
            {/* First Column - slides from top */}
            <motion.div
              initial={{ y: -770 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-4 lg:gap-8"
            >
              {/* Dark spacer card */}
              <div className="hidden lg:block bg-[#1d1d1d] rounded-[20px] min-h-[335px] lg:min-h-[450px] min-w-[280px] lg:min-w-[390px]" />

              {/* Testimonial card */}
              <div className="bg-white rounded-[20px] p-6 lg:p-10">
                <p className="text-black text-base lg:text-[22px] font-normal leading-relaxed lg:leading-[135%] mb-16 lg:mb-48 max-w-[310px] normal-case">
                  {testimonials[0].quote}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    width={50}
                    height={50}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-black text-sm lg:text-base font-normal">
                      {testimonials[0].name}
                    </h4>
                    <p className="text-black/60 text-xs lg:text-sm">
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dark spacer card */}
              <div className="hidden lg:block bg-[#1d1d1d] rounded-[20px] min-h-[335px] lg:min-h-[450px] min-w-[280px] lg:min-w-[390px]" />
            </motion.div>

            {/* Second Column - slides from bottom */}
            <motion.div
              initial={{ y: 500 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col gap-4 lg:gap-8 lg:-mt-24"
            >
              {/* Dark spacer card */}
              <div className="hidden lg:block bg-[#1d1d1d] rounded-[20px] min-h-[335px] lg:min-h-[450px] min-w-[280px] lg:min-w-[390px]" />

              {/* Testimonial cards */}
              {testimonials.slice(1).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[20px] p-6 lg:p-10"
                >
                  <p className="text-black text-base lg:text-[22px] font-normal leading-relaxed lg:leading-[135%] mb-16 lg:mb-48 max-w-[310px] normal-case">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
                    />
                    <div>
                      <h4 className="text-black text-sm lg:text-base font-normal">
                        {testimonial.name}
                      </h4>
                      <p className="text-black/60 text-xs lg:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Dark spacer card */}
              <div className="hidden lg:block bg-[#1d1d1d] rounded-[20px] min-h-[335px] lg:min-h-[450px] min-w-[280px] lg:min-w-[390px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
