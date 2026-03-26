"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const footerLinks = {
  about: [
    { name: "Facts", href: "#" },
    { name: "History", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Management", href: "#" },
  ],
  faculty: [
    { name: "Business", href: "#" },
    { name: "Engineering", href: "#" },
    { name: "Law", href: "#" },
    { name: "Science", href: "#" },
  ],
  department: [
    { name: "Undergraduate", href: "#" },
    { name: "Graduate", href: "#" },
    { name: "Financial Aid", href: "#" },
    { name: "PhD", href: "#" },
  ],
  updates: [
    { name: "Notice", href: "#" },
    { name: "Results", href: "#" },
    { name: "Login", href: "#" },
    { name: "Alumni", href: "#" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: "/images/facebook.svg", href: "#" },
  { name: "LinkedIn", icon: "/images/linkedin.svg", href: "#" },
  { name: "Instagram", icon: "/images/instagram.svg", href: "#" },
  { name: "Dribbble", icon: "/images/dribbble.svg", href: "#" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-black pt-20 lg:pt-32 overflow-hidden">
      <div className="max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 pb-16 lg:pb-32">
          {/* About */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-xl lg:text-2xl font-normal mb-6 lg:mb-10">
              About
            </h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 text-base lg:text-lg font-normal hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Faculty */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white text-xl lg:text-2xl font-normal mb-6 lg:mb-10">
              Faculty
            </h3>
            <ul className="space-y-4">
              {footerLinks.faculty.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 text-base lg:text-lg font-normal hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About (duplicate in original) */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white text-xl lg:text-2xl font-normal mb-6 lg:mb-10">
              About
            </h3>
            <ul className="space-y-4">
              {footerLinks.faculty.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 text-base lg:text-lg font-normal hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Department */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white text-xl lg:text-2xl font-normal mb-6 lg:mb-10">
              Department
            </h3>
            <ul className="space-y-4">
              {footerLinks.department.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 text-base lg:text-lg font-normal hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Updates */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white text-xl lg:text-2xl font-normal mb-6 lg:mb-10">
              Updates
            </h3>
            <ul className="space-y-4">
              {footerLinks.updates.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 text-base lg:text-lg font-normal hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-4 lg:gap-5"
          >
            {["Applying", "Scholarship", "Career"].map((text, index) => (
              <a
                key={index}
                href="#"
                className="group relative overflow-hidden inline-flex items-center justify-center w-[180px] lg:w-[230px] h-[50px] lg:h-16 border border-white rounded-full text-white transition-colors duration-300"
              >
                <span className="absolute inset-0 bg-[#af0e2e] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 text-base lg:text-xl font-normal">
                  {text}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-6 py-8 border-t border-[#1d1b1c]"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/footer-logo.svg"
              alt="American University"
              width={200}
              height={50}
              className="w-[150px] lg:w-[200px]"
            />
          </div>

          {/* Copyright Text */}
          <p className="text-white/50 text-sm lg:text-base text-center normal-case">
            Copyright © 2022 Musemind | All rights reserved | Privacy & Policy
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-link w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white flex items-center justify-center transition-all duration-300"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="w-4 h-4 lg:w-5 lg:h-5 invert brightness-125 relative z-10 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
