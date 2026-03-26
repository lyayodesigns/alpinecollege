"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "News", href: "#" },
  { name: "Events", href: "#" },
  { name: "academics", href: "#" },
  { name: "Research", href: "#" },
  { name: "admission", href: "#" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  return (
    <div className="navbar-no-shadow">
      <div className="navbar-no-shadow-container">
        <div className="container-regular">
          <div className="navbar-wrapper">
            <a href="#" className="navbar-brand">
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63b53d134a87086b2e2dff81_Group%201171275957.png"
                  alt="American University"
                  width={200}
                  height={50}
                  className="desktop-logo"
                  priority
                />
                <Image
                  src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63ccf7a10949d925342c9157_logo-white.svg"
                  alt="American University"
                  width={150}
                  height={40}
                  className="mobile-logo"
                  priority
                />
              </motion.div>
            </a>
            <motion.nav
              className="nav-menu-wrapper"
              initial={{ y: -58, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <ul className="nav-menu">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="nav-link">
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="mobile-margin-top-10">
                  <div className="menu-icon-box">
                    <Image
                      src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63b53eae92ba88f068ff6af5_user.svg"
                      alt="User"
                      width={24}
                      height={24}
                    />
                  </div>
                </li>
              </ul>
            </motion.nav>
            <div className="menu-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
