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
            <div className="overflow-hidden! mb-6!">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-white! text-[28px]! sm:text-[38px]! md:text-[48px]! lg:text-[56px]! leading-[1.1]! font-normal! tracking-tight! font-['HelveticaNeue']!"
              >
                Shape Your Future at Alpine Management College (AMC)
              </motion.h1>
            </div>
            <div className="overflow-hidden! mb-8!">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-white! text-base! sm:text-lg! lg:text-[20px]! leading-[1.5]! max-w-[560px]! font-['HelveticaNeue']! opacity-90! normal-case!"
              >
                The Pioneer in Business and Hospitality Education in Nepalgunj. Affiliated with Pokhara University, we transform ambitious students into global corporate leaders and top-tier hospitality professionals.
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex! flex-wrap! gap-4!"
            >
              <a
                href="#apply"
                className="inline-block! bg-[var(--color-summit-orange)]! text-white! font-semibold! text-base! px-7! py-3.5! rounded-full! hover:brightness-110! transition-all!"
              >
                Apply Now for 2026
              </a>
              <a
                href="#programs"
                className="inline-block! border-2! border-white! text-white! font-semibold! text-base! px-7! py-3.5! rounded-full! hover:bg-white! hover:text-[var(--color-deep-midnight)]! transition-all!"
              >
                Explore Our Programs
              </a>
            </motion.div>
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
