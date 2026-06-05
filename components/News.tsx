"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type NewsItem = {
  _id: string;
  title: string;
  slug?: { current: string };
  publishedAt?: string;
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function News({ news = [] }: { news?: NewsItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="overflow-hidden font-medium bg-deep-midnight pt-[40px] sm:pt-[80px] pb-[40px] sm:pb-[80px]"
    >
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10 overflow-hidden">
        {/* Header */}
        <div className="pt-[40px] sm:pt-[60px] relative z-0 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
          <div>
            {["News &", "Articles"].map((line, i) => (
              <motion.h2
                key={i}
                className="m-0 text-white text-[28px] sm:text-[40px] md:text-[56px] leading-tight md:leading-[75px] font-normal -tracking-[0.01em] uppercase text-center md:text-left"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              >
                {i === 0 ? <>News &amp;</> : line}
              </motion.h2>
            ))}
          </div>
          <div className="pt-0 md:pt-[120px]">
            <motion.p
              className="max-w-[780px] mb-0 text-white text-sm sm:text-lg leading-7 sm:leading-8 font-normal uppercase text-center md:text-left"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay up to date with the latest achievements, events, and announcements from Alpine Management College, Nepalgunj.
            </motion.p>
          </div>
        </div>

        {/* Latest Notices & Updates */}
        <motion.div
          className="mt-[40px] sm:mt-[60px] mb-[40px] sm:mb-[60px]"
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <h3 className="text-summit-orange text-[16px] sm:text-[22px] font-medium uppercase tracking-widest mb-6 text-center md:text-left">
            Latest Notices &amp; Updates
          </h3>

          {news.length === 0 ? (
            <p className="text-white/40 text-base normal-case text-center md:text-left py-6">
              No news articles published yet.
            </p>
          ) : (
            <ul className="divide-y divide-rock-grey">
              {news.map((item) => (
                <li key={item._id} className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6 py-5">
                  <span className="shrink-0 text-white/50 text-sm sm:text-base font-normal sm:w-[160px]">
                    {item.publishedAt ? formatDate(item.publishedAt) : "—"}
                  </span>
                  <a
                    href={item.slug?.current ? `/news/${item.slug.current}` : "/news"}
                    className="text-white text-base font-medium leading-relaxed hover:text-summit-orange transition-colors no-underline normal-case"
                  >
                    [{item.title}]
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 text-center md:text-left">
            <a
              href="/news"
              className="inline-flex items-center gap-2 text-summit-orange text-sm font-semibold uppercase tracking-wide no-underline hover:gap-3 transition-all duration-200"
            >
              View All News
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
