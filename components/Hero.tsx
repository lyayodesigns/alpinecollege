"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="banner-area">
      <div className="container banner">
        <div className="banner-inner">
          <div className="banner-thumbnail-wrap">
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src="https://uploads-ssl.webflow.com/63b50a8555c48170e0bd670f/63b54b0aa61c7bc62370ece1_banner-min.png"
                alt="American University Campus"
                width={1680}
                height={800}
                className="banner-thumb"
                priority
              />
            </motion.div>
          </div>
          <div className="banner-content">
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="banner-title"
            >
              American<br />University
            </motion.h1>
            <motion.p
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="banner-paragraph"
            >
              Brookside University is a leading research university pushing boundaries and frontiers ever since its inception
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
