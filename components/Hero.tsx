"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative! bg-[#af0e2e]! w-full! pt-10! pb-0! overflow-hidden!">
      <div className="max-w-[1710px]! mx-auto! px-4! sm:px-10! relative! z-10!">
        <div className="flex! flex-col! lg:flex-row! justify-between! items-end! relative!">
          
          {/* Text Content */}
          <div className="w-full! lg:w-1/2! static! lg:absolute! z-20! left-0! bottom-10! pb-10!">
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-white! text-[80px]! sm:text-[100px]! lg:text-[160px]! leading-[0.85]! font-normal! tracking-tight! mb-8! font-['HelveticaNeue']!"
            >
              AMERICAN<br />UNIVERSITY
            </motion.h1>
            <motion.p
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-white! text-lg! sm:text-2xl! lg:text-[28px]! leading-[1.4]! max-w-[600px]! font-['HelveticaNeue']! opacity-90!"
            >
              Brookside University is a leading research university pushing boundaries and frontiers ever since its inception
            </motion.p>
          </div>

          {/* Image Content */}
          <div className="w-full! lg:w-[75%]! ml-auto! relative! mt-20! lg:mt-0! right-0!">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative! rounded-tl-[120px]! rounded-br-[120px]! lg:rounded-tl-[200px]! lg:rounded-br-[0px]! overflow-hidden! bg-black/10!"
            >
              <Image
                src="/images/banner.png"
                alt="American University Campus"
                width={1680}
                height={900}
                className="w-full! h-auto! object-cover! rounded-tl-[120px]! sm:rounded-tl-[200px]!"
                priority
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
