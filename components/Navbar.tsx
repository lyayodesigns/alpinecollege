"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type SubLink = { name: string; href: string };
type NavLink = { name: string; href: string; submenu?: SubLink[] };

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "Academics",
    href: "#",
    submenu: [
      { name: "BBA Program", href: "/bba" },
      { name: "BHM Program", href: "/bhm" },
      { name: "BBA Finance", href: "/bba-finance" },
      { name: "MBA Program", href: "/mba" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Downloads", href: "/downloads" },
  { name: "About", href: "/about" },
];

const Chevron = ({ className }: { className?: string }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown(name: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  }

  return (
    <nav className="sticky top-0 z-50 bg-alpine-blue w-full border-b border-white/10">
      <div className="max-w-[1710px] mx-auto px-4 sm:px-10">
        <div className="flex items-center justify-between py-1">
          <motion.a
            href="#"
            className="flex items-center no-underline"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/alpine-logo.avif"
              alt="Alpine Management College"
              width={320}
              height={100}
              className="block h-auto w-auto max-h-[60px] sm:max-h-[90px]"
              priority
              loading="eager"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center"
            initial={{ y: -58, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <ul className="flex flex-row items-center list-none m-0 p-0 gap-6 lg:gap-10">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative m-0 p-0"
                  onMouseEnter={() => link.submenu && openDropdown(link.name)}
                  onMouseLeave={() => link.submenu && scheduleClose()}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-white opacity-80 hover:opacity-100 transition-opacity text-base font-medium font-sans no-underline uppercase tracking-wide"
                  >
                    {link.name}
                    {link.submenu && (
                      <Chevron className={`transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                    )}
                  </a>

                  {/* Desktop dropdown */}
                  {link.submenu && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2"
                          onMouseEnter={() => openDropdown(link.name)}
                          onMouseLeave={() => scheduleClose()}
                        >
                          <ul className="w-52 bg-deep-midnight rounded-xl shadow-xl list-none p-2 m-0 border border-white/10">
                            {link.submenu.map((sub, si) => (
                              <li key={si} className="m-0 p-0">
                                <a
                                  href={sub.href}
                                  className="flex items-center gap-2 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium no-underline uppercase tracking-wide transition-colors normal-case"
                                >
                                  <span className="w-1 h-1 rounded-full bg-summit-orange flex-shrink-0" />
                                  {sub.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
              <li className="m-0 p-0 ml-4">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                  <Image
                    src="/images/user.svg"
                    alt="User"
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                  />
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer z-50 relative"
              aria-label="Toggle menu"
            >
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:hidden w-full bg-alpine-blue border-t border-white/10 overflow-hidden absolute left-0 top-full z-40 shadow-lg"
          >
            <ul className="flex flex-col list-none m-0 p-6 gap-4 bg-alpine-blue">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, ease: "easeOut" }}
                  className="m-0 p-0"
                >
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between text-white opacity-80 hover:opacity-100 transition-opacity text-lg font-medium font-sans uppercase tracking-wide py-2 bg-transparent border-0 cursor-pointer"
                      >
                        {link.name}
                        <Chevron className={`transition-transform duration-200 ${mobileExpanded === link.name ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.name && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="list-none m-0 pl-3 mt-1 overflow-hidden border-l-2 border-summit-orange/50"
                          >
                            {link.submenu.map((sub, si) => (
                              <li key={si} className="m-0 p-0">
                                <a
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block text-white/70 hover:text-white transition-colors text-base font-medium font-sans no-underline uppercase tracking-wide py-2 pl-3"
                                >
                                  {sub.name}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-white opacity-80 hover:opacity-100 transition-opacity text-lg font-medium font-sans no-underline uppercase tracking-wide py-2"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05, ease: "easeOut" }}
                className="pt-4 border-t border-white/20 flex items-center gap-4 m-0"
              >
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                  <Image
                    src="/images/user.svg"
                    alt="User"
                    width={18}
                    height={18}
                    className="brightness-0 invert"
                  />
                </div>
                <span className="text-white opacity-80 text-base font-medium uppercase tracking-wide">Account</span>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
