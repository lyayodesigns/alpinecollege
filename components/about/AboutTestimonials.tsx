"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "AMC is a place where academic excellence meets unforgettable experiences. Studying BBA here is truly enriching, with a relaxed learning atmosphere that benefits every student. AMC has something special for everyone, making it a perfect place to learn, grow, and create lifelong memories.",
    name: "Asmeet Kaur",
    semester: "3rd Semester",
  },
  {
    quote:
      "AMC is truly student-focused, with dedicated and encouraging lecturers and a supportive management team. Its emphasis on leadership development through extracurricular activities, presentations, case studies, field visits, and expert guidance sets it apart. I am proud to say that AMC is a stepping stone toward a bright future.",
    name: "Aditi Shrestha",
    semester: "4th Semester",
  },
  {
    quote:
      "At AMC, you find not just quality education, but a supportive environment that feels like home. The college goes beyond academics, helping you build confidence, enhance your abilities, and polish your talents. I feel secure and inspired here—now it's your turn to experience the same.",
    name: "Samikshya Acharaya",
    semester: "5th Semester",
  },
  {
    quote:
      "AMC helps me explore my true potential. I am proud to be a student here—where excellence thrives in a peaceful environment, guided by dedicated faculty. I warmly invite you to experience the unique learning atmosphere at AMC; it's a place that truly inspires and satisfies.",
    name: "Sraswati Shah",
    semester: "7th Semester",
  },
  {
    quote:
      "After completing my +2, my search for the right college led me to Alpine Management College (AMC). AMC stands as a pioneer in management education in Nepal, offering international-standard studies. Its experienced faculty, effective teaching methods, and enriching activities have boosted my confidence and prepared me for success.",
    name: "Akkal Bam",
    semester: "3rd Semester",
  },
  {
    quote:
      "AMC focuses not just on specialization but on building lifelong skills. Its strong industry connections bring business leaders and academicians to share real-world insights, offering students valuable learning and placement opportunities. At AMC, I learned to define my vision, work in teams, and stay ahead professionally—an unforgettable experience.",
    name: "Ashok Bhatt",
    semester: "5th Semester",
  },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-summit-orange">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function AboutTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-snow-white py-[80px] sm:py-[120px] overflow-hidden">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div>
            <motion.p
              className="text-base sm:text-xl leading-none uppercase text-summit-orange mb-5"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Testimonials
            </motion.p>
            <motion.h2
              className="m-0 text-deep-midnight text-[32px] sm:text-[52px] leading-[1.1] font-normal -tracking-[0.01em] uppercase"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Students
              <br />
              <span className="text-deep-midnight-300">Feedback</span>
            </motion.h2>
          </div>

          {/* Overall rating badge */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center gap-2 bg-white border border-rock-grey/15 rounded-[20px] px-8 py-6 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="m-0 text-deep-midnight text-[44px] font-bold font-serif-display leading-none">4.8</p>
            <p className="m-0 text-rock-grey text-sm uppercase tracking-widest normal-case">Based on 420K Reviews</p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="group relative bg-white border border-rock-grey/15 rounded-[20px] p-7 sm:p-9 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(26,26,46,0.08)] hover:border-rock-grey/25 overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + index * 0.08, ease: "easeOut" }}
            >
              {/* Hover accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-summit-orange origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Rating pill */}
              <span className="self-start px-3 py-1 rounded-full bg-summit-orange-50 text-summit-orange text-xs font-semibold uppercase tracking-wide">
                4.8/5
              </span>

              <p className="text-deep-midnight text-[15px] sm:text-base leading-[1.75] normal-case m-0 flex-1">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-rock-grey/10">
                <div className="w-9 h-9 rounded-full bg-alpine-blue-50 flex items-center justify-center text-alpine-blue text-xs font-bold flex-shrink-0 uppercase">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <h4 className="m-0 text-deep-midnight text-sm font-semibold leading-tight capitalize">{t.name}</h4>
                  <p className="m-0 text-rock-grey text-xs uppercase tracking-widest mt-0.5">{t.semester}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
