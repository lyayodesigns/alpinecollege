"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const alumni = [
  {
    quote:
      "I am deeply grateful to Alpine Management College for shaping my career path. The supportive faculty, practical learning environment, and career-focused programs equipped me with the skills and confidence needed to succeed. AMC's commitment to excellence truly set the foundation for my professional achievements.",
    name: "Eliza Shrestha",
    company: "Shangri-la Development Bank",
    role: "Cluster Credit Co-ordinator",
    batch: "Batch 2015–19",
  },
  {
    quote:
      "I am thankful to Alpine Management College for providing me with quality education and valuable experiences. The dedicated faculty and practical learning opportunities helped me grow both personally and professionally. AMC has been instrumental in building my confidence and guiding me toward a successful career path.",
    name: "Satya Narayan Chaudhary",
    company: "Batika Hotel",
    role: "Manager",
    batch: "Batch 2015–19",
  },
  {
    quote:
      "I am sincerely grateful to Alpine Management College for its exceptional guidance and support. The practical learning environment and dedicated faculty helped me gain the skills and confidence needed to achieve my career goals. AMC has truly been a stepping stone toward my success.",
    name: "Puran Babu Nakarmi",
    company: "Nepal Oil Nigam",
    role: "Officer",
    batch: "Batch 2015–19",
  },
];

function QuoteIcon() {
  return (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="text-summit-orange/25 flex-shrink-0">
      <path
        d="M0 28V17.2C0 12.267 1.2 8.333 3.6 5.4 6.067 2.4 9.6.533 14.2 0L15.4 3C12.6 3.667 10.4 5.067 8.8 7.2 7.267 9.267 6.5 11.733 6.5 14.6H13V28H0ZM23 28V17.2C23 12.267 24.2 8.333 26.6 5.4 29.067 2.4 32.6.533 37.2 0L38.4 3C35.6 3.667 33.4 5.067 31.8 7.2c-1.533 2.067-2.3 4.533-2.3 7.4H36V28H23Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AlumniStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-[80px] sm:py-[120px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        {/* Section header */}
        <div className="mb-14 sm:mb-20">
          <motion.p
            className="text-base sm:text-xl leading-none uppercase text-summit-orange mb-4"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Alumni Success
          </motion.p>
          <motion.h2
            className="text-[30px] sm:text-[44px] leading-[1.1] font-normal text-deep-midnight uppercase -tracking-[0.01em] m-0"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Batch 2015–19 <span className="text-deep-midnight-300">Stories</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((person, i) => (
            <motion.div
              key={i}
              className="group relative flex flex-col bg-snow-white border border-deep-midnight/8 rounded-[24px] p-8 sm:p-10 gap-6 hover:border-summit-orange/25 hover:shadow-[0_16px_48px_rgba(240,122,32,0.1)] transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: "easeOut" }}
            >
              {/* Hover left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-summit-orange origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full" />

              {/* Batch badge */}
              <span className="self-start px-3 py-1 rounded-full bg-alpine-blue/10 border border-alpine-blue/20 text-alpine-blue text-[11px] font-semibold uppercase tracking-wider">
                {person.batch}
              </span>

              {/* Quote */}
              <div className="flex flex-col gap-4 flex-1">
                <QuoteIcon />
                <p className="text-[15px] sm:text-base leading-[1.8] text-rock-grey normal-case m-0 flex-1">
                  {person.quote}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-deep-midnight/8 flex items-center gap-4">
                {/* Avatar initial */}
                <div className="w-11 h-11 rounded-full bg-alpine-blue flex items-center justify-center text-white text-sm font-bold flex-shrink-0 uppercase">
                  {person.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <h4 className="m-0 text-deep-midnight text-sm font-semibold leading-tight capitalize truncate">
                    {person.name}
                  </h4>
                  <p className="m-0 text-summit-orange text-xs font-medium uppercase tracking-wide mt-0.5 truncate">
                    {person.role}
                  </p>
                  <p className="m-0 text-rock-grey text-xs normal-case mt-0.5 truncate">
                    {person.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
