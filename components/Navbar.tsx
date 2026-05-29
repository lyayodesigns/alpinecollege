"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "News", href: "#" },
  { name: "Events", href: "#" },
  { name: "Academics", href: "#" },
  { name: "Research", href: "#" },
  { name: "Admission", href: "#" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky! top-0! z-50! bg-[var(--primary-blue)]! w-full! border-b! border-white/10!">
      <div className="max-w-[1710px]! mx-auto! px-4! sm:px-10!">
        <div className="flex! items-center! justify-between! py-1!">
          <motion.a
            href="#"
            className="flex! items-center! no-underline!"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/alpine-logo.avif"
              alt="Alpine Management College"
              width={320}
              height={100}
              className="block! h-auto! w-auto! max-h-[60px]! sm:max-h-[90px]!"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex! items-center!"
            initial={{ y: -58, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <ul className="flex! flex-row! items-center! list-none! m-0! p-0! gap-6! lg:gap-10!">
              {navLinks.map((link, index) => (
                <li key={index} className="m-0! p-0!">
                  <a
                    href={link.href}
                    className="text-white! opacity-80 hover:opacity-100! transition-opacity! text-base! font-medium! font-['HelveticaNeue']! no-underline! uppercase! tracking-wide!"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="m-0! p-0! ml-4!">
                <div className="w-12! h-12! rounded-full! border! border-white! flex! items-center! justify-center! bg-white/10! hover:bg-white/20! transition-colors! cursor-pointer!">
                  <Image
                    src="/images/user.svg"
                    alt="User"
                    width={20}
                    height={20}
                    className="brightness-0! invert!"
                  />
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Mobile Hamburguer Menu Button */}
          <div className="flex lg:hidden! items-center!">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white! focus:outline-none! w-10! h-10! flex! flex-col! justify-center! items-center! gap-1.5! cursor-pointer! z-50! relative!"
              aria-label="Toggle menu"
            >
              <span className={`block! w-7! h-0.5! bg-white! transition-all! duration-300! ${isOpen ? 'rotate-45! translate-y-2!' : ''}`} />
              <span className={`block! w-7! h-0.5! bg-white! transition-all! duration-300! ${isOpen ? 'opacity-0!' : ''}`} />
              <span className={`block! w-7! h-0.5! bg-white! transition-all! duration-300! ${isOpen ? '-rotate-45! -translate-y-2!' : ''}`} />
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
            className="lg:hidden! w-full! bg-[var(--primary-blue)]! border-t! border-white/10! overflow-hidden! absolute! left-0! top-full! z-40! shadow-lg!"
          >
            <ul className="flex! flex-col! list-none! m-0! p-6! gap-4! bg-[var(--primary-blue)]!">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, ease: "easeOut" }}
                  className="m-0! p-0!"
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block! text-white! opacity-80 hover:opacity-100! transition-opacity! text-lg! font-medium! font-['HelveticaNeue']! no-underline! uppercase! tracking-wide! py-2!"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05, ease: "easeOut" }}
                className="pt-4! border-t! border-white/20! flex! items-center! gap-4! m-0!"
              >
                <div className="w-10! h-10! rounded-full! border! border-white! flex! items-center! justify-center! bg-white/10! hover:bg-white/20! transition-colors! cursor-pointer!">
                  <Image
                    src="/images/user.svg"
                    alt="User"
                    width={18}
                    height={18}
                    className="brightness-0! invert!"
                  />
                </div>
                <span className="text-white! opacity-80! text-base! font-medium! uppercase! tracking-wide!">Account</span>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
