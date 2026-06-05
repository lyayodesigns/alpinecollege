"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type NewsItem = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: { url: string }; alt?: string };
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const isFeatured = index === 0;

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl bg-white border border-rock-grey/20 hover:border-alpine-blue/40 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(46,143,191,0.12)] flex flex-col ${isFeatured ? "md:col-span-2 md:flex-row" : ""}`}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      {/* Image */}
      {item.mainImage?.asset?.url ? (
        <div className={`relative overflow-hidden bg-alpine-blue-50 ${isFeatured ? "md:w-[55%] min-h-[300px]" : "h-[220px]"}`}>
          <Image
            src={item.mainImage.asset.url}
            alt={item.mainImage.alt ?? item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-midnight/40 to-transparent" />
        </div>
      ) : (
        <div className={`relative bg-gradient-to-br from-alpine-blue/10 to-alpine-blue-50 flex items-center justify-center ${isFeatured ? "md:w-[55%] min-h-[300px]" : "h-[220px]"}`}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-alpine-blue/30">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
      )}

      {/* Content */}
      <div className={`flex flex-col justify-between p-7 sm:p-8 gap-5 flex-1`}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block px-3 py-1 rounded-full bg-summit-orange/10 text-summit-orange text-xs font-semibold tracking-widest uppercase">
              News
            </span>
            {item.publishedAt && (
              <span className="text-rock-grey text-sm font-normal normal-case">
                {formatDate(item.publishedAt)}
              </span>
            )}
          </div>

          <h2 className={`m-0 text-deep-midnight font-medium leading-[1.3] group-hover:text-alpine-blue transition-colors duration-200 ${isFeatured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
            {item.title}
          </h2>

          {item.excerpt && (
            <p className="m-0 text-rock-grey text-sm sm:text-base leading-[1.75] font-normal normal-case line-clamp-3">
              {item.excerpt}
            </p>
          )}
        </div>

        <a
          href={`/news/${item.slug?.current ?? ""}`}
          className="inline-flex items-center gap-2 text-alpine-blue text-sm font-semibold uppercase tracking-wide no-underline group-hover:gap-3 transition-all duration-200"
        >
          Read More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </a>
      </div>
    </motion.article>
  );
}

export default function NewsGrid({ news }: { news: NewsItem[] }) {
  return (
    <section className="bg-snow-white py-[60px] sm:py-[100px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        {news.length === 0 ? (
          <motion.div
            className="text-center py-[80px] flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-alpine-blue/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-alpine-blue/50">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <p className="text-rock-grey text-lg normal-case">No news articles yet. Check back soon!</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {news.map((item, i) => (
              <NewsCard key={item._id} item={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
