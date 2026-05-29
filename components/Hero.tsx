"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative! bg-[var(--primary-blue)]! w-full! pt-10! pb-12! md:pb-20! overflow-hidden! border-b-2! border-[var(--primary-orange)]!">
      <div className="max-w-[1710px]! mx-auto! px-4! sm:px-10! relative! z-10!">
        <div className="flex! flex-col! lg:flex-row! justify-between! items-end! relative!">
          
          {/* Text Content */}
          <div className="w-full! lg:w-1/2! static! lg:absolute! z-20! left-0! bottom-10! pb-10!">
            <div className="overflow-hidden! mb-8!">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-white! text-[48px]! sm:text-[80px]! md:text-[100px]! lg:text-[160px]! leading-[0.85]! font-normal! tracking-tight! font-['HelveticaNeue']!"
              >
                ALPINE<br />COLLEGE
              </motion.h1>
            </div>
            <div className="overflow-hidden!">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-white! text-lg! sm:text-2xl! lg:text-[28px]! leading-[1.4]! max-w-[600px]! font-['HelveticaNeue']! opacity-90!"
              >
                Brookside University is a leading research university pushing boundaries and frontiers ever since its inception
              </motion.p>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full! lg:w-[75%]! ml-auto! relative! mt-10! lg:mt-0! right-0!">
            <motion.div
              initial={{ y: 50, scale: 1.05, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative! rounded-tl-[80px]! rounded-br-[80px]! sm:rounded-tl-[120px]! sm:rounded-br-[120px]! lg:rounded-tl-[200px]! lg:rounded-br-[0px]! overflow-hidden! bg-black/10!"
            >
              <Image
                src="/images/banner.png"
                alt="Alpine Management College Campus"
                width={1680}
                height={900}
                className="w-full! h-auto! object-cover! rounded-tl-[80px]! sm:rounded-tl-[120px]! lg:rounded-tl-[200px]!"
                priority
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
