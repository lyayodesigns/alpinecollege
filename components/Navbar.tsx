"use client";

import { motion } from "framer-motion";
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
  return (
    <nav className="sticky! top-0! z-50! bg-[#af0e2e]! w-full!">
      <div className="max-w-[1710px]! mx-auto! px-4! sm:px-10!">
        <div className="flex! items-center! justify-between! py-4!">
          <motion.a
            href="#"
            className="flex! items-center! no-underline!"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/logo-white.svg"
              alt="American University"
              width={196}
              height={50}
              className="block!"
              priority
            />
          </motion.a>

          <motion.div
            className="flex! items-center!"
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
        </div>
      </div>
    </nav>
  );
}
