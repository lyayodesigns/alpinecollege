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
  aboutTwo: [
    { name: "Business", href: "#" },
    { name: "Engineering", href: "#" },
    { name: "Law", href: "#" },
    { name: "Humanities", href: "#" },
  ],
  department: [
    { name: "Undergraduate", href: "#" },
    { name: "Graduate", href: "#" },
    { name: "Financial Aid", href: "#" },
    { name: "Phd", href: "#" },
  ],
  updates: [
    { name: "Notice", href: "#" },
    { name: "Notice", href: "#" },
    { name: "Login", href: "#" },
    { name: "Alumni", href: "#" },
  ],
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="footer-area">
      <div className="container">
        <div className="footer-content-wrap">
          {/* About */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-menu-title">About</h3>
            <nav className="nav mod--footer">
              {footerLinks.about.map((link, index) => (
                <a key={index} href={link.href} className="nav-ink anim-scroll-up">
                  <div className="overflow-hidden mb-30">
                    <span className="btn__text">{link.name}</span>
                  </div>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Faculty */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="footer-menu-title">Faculty</h3>
            <nav className="nav mod--footer">
              {footerLinks.faculty.map((link, index) => (
                <a key={index} href={link.href} className="nav-ink anim-scroll-up">
                  <div className="overflow-hidden mb-30">
                    <span className="btn__text">{link.name}</span>
                  </div>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* About (duplicate in original) */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="footer-menu-title">About</h3>
            <nav className="nav mod--footer">
              {footerLinks.aboutTwo.map((link, index) => (
                <a key={index} href={link.href} className="nav-ink anim-scroll-up">
                  <div className="overflow-hidden mb-30">
                    <span className="btn__text">{link.name}</span>
                  </div>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Department */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="footer-menu-title">Department</h3>
            <nav className="nav mod--footer">
              {footerLinks.department.map((link, index) => (
                <a key={index} href={link.href} className="nav-ink anim-scroll-up">
                  <div className="overflow-hidden mb-30">
                    <span className="btn__text">{link.name}</span>
                  </div>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Updates */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="footer-menu-title">Updates</h3>
            <nav className="nav mod--footer">
              {footerLinks.updates.map((link, index) => (
                <a key={index} href={link.href} className="nav-ink anim-scroll-up">
                  <div className="overflow-hidden mb-30">
                    <span className="btn__text">{link.name}</span>
                  </div>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-5"
          >
            {[
              { text: "APPLYING" },
              { text: "SCHOLARSHIP" },
              { text: "CAREER" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="nav-ink-2 mod--register mb-20"
              >
                <div className="overflow-hidden">
                  <div className="overflow-anim mod--btn-text">
                    <div className="btn-shape"></div>
                    <span className="footer-button-text">{item.text}</span>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright row */}
        <motion.div
          className="copyright-content"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Logo */}
          <div className="footer-logo">
            <Image
              src="/alpine-logo.avif"
              alt="Alpine Management College"
              width={320}
              height={100}
              className="h-auto w-auto max-h-[90px]"
            />
          </div>

          {/* Copyright text */}
          <p className="copyright-text">
            Copyright © 2022 Musemind &nbsp;|&nbsp; All Rights Reserved &nbsp;|&nbsp; Privacy &amp; Policy
          </p>

          {/* Social links */}
          <div className="social">
            {[
              { name: "Facebook", icon: "/images/facebook.svg" },
              { name: "LinkedIn", icon: "/images/linkedin.svg" },
              { name: "Instagram", icon: "/images/instagram.svg" },
              { name: "Dribbble", icon: "/images/dribbble.svg" },
            ].map((s, i) => (
              <a key={i} href="#" className="social-link">
                <div className="social-bg" />
                <Image
                  src={s.icon}
                  alt={s.name}
                  width={18}
                  height={18}
                  className="social-ico"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
