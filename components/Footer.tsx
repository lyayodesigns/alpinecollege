"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const footerLinks = {
  about: [
    { name: "About AMC", href: "#" },
    { name: "History", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Management Team", href: "#" },
  ],
  department: [
    { name: "BBA Program", href: "#" },
    { name: "BHM Program", href: "#" },
    { name: "Internship", href: "#" },
    { name: "Scholarship", href: "#" },
  ],
  updates: [
    { name: "Notices", href: "#" },
    { name: "Events", href: "#" },
    { name: "Results", href: "#" },
    { name: "Alumni", href: "#" },
  ],
};

function FooterColumn({
  title,
  links,
  delay,
}: {
  title: string;
  links: { name: string; href: string }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="m-0 mb-10 text-white text-2xl leading-6 font-normal capitalize">
        {title}
      </h3>
      <nav className="block text-center">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="relative block pb-[18px] text-left no-underline capitalize"
          >
            <div className="overflow-hidden mb-[30px]">
              <span className="text-white/80 text-lg leading-[170%] capitalize">
                {link.name}
              </span>
            </div>
          </a>
        ))}
      </nav>
    </motion.div>
  );
}

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden pt-[60px] sm:pt-[120px] bg-deep-midnight"
    >
      <div className="w-full max-w-[1710px] mx-auto px-4 sm:px-10 overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 pb-[60px] sm:pb-[120px]">
          <FooterColumn title="About" links={footerLinks.about} delay={0} />
          {/* Contact Column */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 sm:col-span-1"
          >
            <h3 className="m-0 mb-10 text-white text-2xl leading-6 font-normal capitalize">
              Contact
            </h3>
            <div className="flex flex-col gap-6">
              <div>
                <p className="m-0 text-white/50 text-sm uppercase tracking-widest mb-2">Address</p>
                <p className="m-0 text-white/80 text-lg leading-[170%] capitalize">Adarshnagar, Nepalgunj, Banke</p>
              </div>
              <div>
                <p className="m-0 text-white/50 text-sm uppercase tracking-widest mb-2">Phone</p>
                <a href="tel:+977081536877" className="no-underline text-white/80 text-lg leading-[170%]">
                  +977-081-536877
                </a>
              </div>
              <div>
                <p className="m-0 text-white/50 text-sm uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:contact@alpinecollege.edu.np" className="no-underline text-white/80 text-lg leading-[170%] normal-case">
                  contact@alpinecollege.edu.np
                </a>
              </div>
            </div>
          </motion.div>
          <FooterColumn title="Department" links={footerLinks.department} delay={0.3} />
          <FooterColumn title="Updates" links={footerLinks.updates} delay={0.4} />

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-5 col-span-2 sm:col-span-3 lg:col-span-1"
          >
            {[{ text: "APPLY NOW" }, { text: "SCHOLARSHIP" }, { text: "INTERNSHIP" }].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="z-0 flex w-full sm:w-[230px] h-14 sm:h-16 px-[1.375rem] py-[0.875rem] justify-center items-center border border-white rounded-full bg-transparent text-white font-bold text-center no-underline transition-colors hover:bg-alpine-blue hover:border-alpine-blue mb-2 sm:mb-5"
                >
                  <span className="text-xl font-normal no-underline">{item.text}</span>
                </a>
              )
            )}
          </motion.div>
        </div>

        {/* Copyright row */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 sm:gap-0 flex-wrap justify-between items-center py-[24px] sm:py-[33px] border-t border-white/15"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Logo */}
          <div className="flex h-full justify-center items-center">
            <Image
              src="/alpine-logo.avif"
              alt="Alpine Management College"
              width={320}
              height={100}
              className="h-auto w-auto max-h-[90px]"
            />
          </div>

          {/* Copyright text */}
          <p className="mb-0 text-white/50 text-center capitalize">
            Copyright © 2025 Alpine Management College &nbsp;|&nbsp; All Rights Reserved &nbsp;|&nbsp; Affiliated to Pokhara University
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { name: "Facebook", icon: "/images/facebook.svg" },
              { name: "LinkedIn", icon: "/images/linkedin.svg" },
              { name: "Instagram", icon: "/images/instagram.svg" },
              { name: "Dribbble", icon: "/images/dribbble.svg" },
            ].map((s, i) => (
              <a
                key={i}
                href="#"
                className="group relative flex overflow-hidden w-12 h-12 justify-center items-center flex-none border border-white rounded-full"
              >
                <div className="absolute inset-0 m-0.5 rounded-full bg-white scale-0 transition-transform duration-300 group-hover:scale-100" />
                <Image
                  src={s.icon}
                  alt={s.name}
                  width={18}
                  height={18}
                  className="relative z-10 block w-[1.1rem] [filter:invert(100%)_brightness(120%)] transition-[filter] duration-500 group-hover:[filter:invert(0)_brightness(1)]"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
