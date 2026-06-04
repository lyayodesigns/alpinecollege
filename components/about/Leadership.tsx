"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const leaders = [
  {
    role: "Chairperson",
    name: "Er. Kiran Bahadur Shah",
    initials: "KBS",
    photo: "https://placehold.co/112x112/1a3a6b/ffffff?text=KBS",
    color: "alpine-blue",
    message:
      "It is a pleasure to introduce Alpine Management College (AMC) in Nepalgunj, offering Bachelor of Business Administration (BBA), Bachelor of Business Administration - Finance (BBA-Finance), Bachelor of Hotel Management (BHM), and Master of Business Administration (MBA) programs. These courses are highly valued as essential qualifications for entering the corporate world. Understanding the need for quality management education in the Mid and Far Western Regions, AMC was established as a center of academic excellence, supported by experienced faculty and industry professionals. AMC has earned the trust and support of students since its inception. We are committed to providing an inspiring learning environment where education is continuous and engaging, offering global academic opportunities. Our primary aim is to deliver quality education with modern teaching methods, complemented by co-curricular and extracurricular activities. Driven by the mission to achieve overall personality development, we strive to produce globally employable and socially responsible graduates. We extend our best wishes for students' academic success and fulfilling learning experiences at AMC.",
  },
  {
    role: "Principal",
    name: "Keshab Prasad Pathik",
    initials: "KPP",
    photo: "https://placehold.co/112x112/c2410c/ffffff?text=KPP",
    color: "summit-orange",
    message:
      "I am thrilled to share that our college has been widely appreciated for maintaining a vibrant, friendly, and stimulating learning environment. This success is made possible through the dedication of our skilled faculty, supportive management team, and strong academic infrastructure. We are committed to delivering comprehensive management education through training, seminars, fieldwork, guest lectures, and research activities. Our goal is to produce graduates who not only excel in theory but also transcend traditional boundaries, preparing them to meet the needs of both national and global markets. We warmly welcome students choosing our college for their academic journey and extend our gratitude to guardians for trusting AMC. We assure you that we will nurture your expectations into vibrant professionals with strong knowledge, skills, and determination—key traits for success in the corporate world and beyond.",
  },
];

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-deep-midnight py-[80px] sm:py-[120px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        <div className="text-center mb-14 sm:mb-20">
          <motion.p
            className="text-base sm:text-xl leading-none uppercase text-summit-orange mb-5"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Leadership
          </motion.p>
          <motion.h2
            className="m-0 text-white text-[32px] sm:text-[52px] leading-[1.15] font-normal -tracking-[0.01em] uppercase"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Messages from Our{" "}
            <span className="text-alpine-blue-400">Leaders</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="relative bg-deep-midnight-400/50 border border-white/10 rounded-[24px] p-8 sm:p-12 flex flex-col gap-6 overflow-hidden"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: "easeOut" }}
            >
              {/* Accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] ${leader.color === "alpine-blue" ? "bg-alpine-blue" : "bg-summit-orange"}`}
              />

              {/* Quote mark */}
              <div className={`${leader.color === "alpine-blue" ? "text-alpine-blue/20" : "text-summit-orange/20"}`}>
                <svg width="52" height="40" viewBox="0 0 48 36" fill="currentColor">
                  <path d="M0 36V22.5L8.5 0H18L11.5 22.5H20V36H0ZM28 36V22.5L36.5 0H46L39.5 22.5H48V36H28Z" />
                </svg>
              </div>

              <p className="text-white/75 text-base sm:text-[17px] leading-[1.85] normal-case flex-1 m-0">
                {leader.message}
              </p>

              <div className={`h-px w-full ${leader.color === "alpine-blue" ? "bg-alpine-blue/25" : "bg-summit-orange/25"}`} />

              <div className="flex items-center gap-4">
                <img
                  src={leader.photo}
                  alt={leader.name}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="m-0 text-white text-lg font-semibold leading-tight capitalize">{leader.name}</h4>
                  <p className="m-0 text-white/45 text-xs uppercase tracking-[0.15em] mt-1.5">{leader.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
