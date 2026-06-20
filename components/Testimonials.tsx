"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "AMC gave me not just a degree but the confidence and skills to face the real world. The faculty’s guidance and the internship experience were truly life-changing.",
    name: "Sanjay Thapa",
    role: "BBA Graduate",
  },
  {
    quote:
      "My internship in Dubai through AMC’s BHM program opened doors I never imagined. The college’s industry connections and dedicated mentors made all the difference.",
    name: "Priya Sharma",
    role: "BHM Graduate",
  },
  {
    quote:
      "The scholarship, the Wi-Fi-enabled classrooms, and the extra-curricular activities at AMC create the perfect environment to grow both academically and personally.",
    name: "Anil KC",
    role: "BBA Student",
  },
];

function DarkCard({ t, hoverShadow }: { t: typeof testimonials[number]; hoverShadow: string }) {
  return (
    <motion.div
      className="inline-block mb-[30px] p-6 sm:p-[42px] rounded-[20px] text-left transition-all duration-300 bg-summit-orange min-h-0 sm:min-h-[260px] w-full sm:min-w-[390px]"
      whileHover={{ y: -8, boxShadow: hoverShadow }}
      transition={{ duration: 0.3 }}
    >
      <p className="max-w-full sm:max-w-[310px] mb-8 sm:mb-12 text-white text-[17px] sm:text-[22px] leading-[135%] capitalize">
        {t.quote}
      </p>
      <div className="flex items-center">
        <div className="ml-0">
          <h4 className="mt-0 text-white leading-[18px] font-normal capitalize">
            {t.name}
          </h4>
          <p className="m-0 text-white/50 leading-[14px] capitalize">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="overflow-hidden min-h-0 sm:min-h-[900px] py-[40px] sm:py-[60px] bg-white">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10 overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between flex-wrap items-start sm:items-center">
          {/* Left: title */}
          <div className="w-full sm:flex-1 self-start">
            <div className="pt-[30px] sm:pt-[150px] text-center sm:text-left">
              <motion.p
                className="text-base sm:text-2xl leading-none uppercase text-summit-orange"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                Testimonial
              </motion.p>
              <motion.h2
                className="m-0 text-deep-midnight text-[28px] sm:text-[40px] md:text-[56px] leading-tight md:leading-[75px] font-normal -tracking-[0.01em] uppercase"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                <span className="text-deep-midnight-300">Students</span>
                <br />
                <span className="pl-[25px] sm:pl-[50px]">Feedback</span>
              </motion.h2>
            </div>
          </div>

          {/* Right: testimonial columns */}
          <div className="w-full sm:flex-1 flex justify-end mt-8 sm:mt-0">
            {/* Column 1 — slides from top */}
            <motion.div
              className="mt-0 flex-none text-right hidden sm:block"
              initial={{ y: -770 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Student image card */}
              <div className="flex justify-end">
                <div className="relative inline-block mb-[30px] rounded-[20px] overflow-hidden bg-snow-white border border-rock-grey/20 min-h-[380px] min-w-[390px]">
                  <Image
                    src="/assets-images/student1.avif"
                    alt="AMC student"
                    fill
                    className="object-cover"
                    sizes="390px"
                  />
                </div>
              </div>

              {/* Dark card */}
              <div className="flex justify-end">
                <DarkCard
                  t={testimonials[0]}
                  hoverShadow="0 20px 40px rgba(26,26,46,0.3)"
                />
              </div>
            </motion.div>

            {/* Column 2 — slides from bottom */}
            <motion.div
              className="mt-0 sm:-mt-[380px] ml-0 sm:ml-[30px] flex-1"
              initial={{ y: 500 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {testimonials.slice(1).map((t, i) => (
                <div key={i} className="flex justify-end">
                  <DarkCard
                    t={t}
                    hoverShadow="0 20px 40px rgba(240,122,32,0.3)"
                  />
                </div>
              ))}

              <div className="hidden sm:flex justify-end">
                <div className="relative inline-block mb-[30px] rounded-[20px] overflow-hidden bg-snow-white border border-rock-grey/20 min-h-[380px] min-w-[390px]">
                  <Image
                    src="/assets-images/student2.avif"
                    alt="AMC student"
                    fill
                    className="object-cover"
                    sizes="390px"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
