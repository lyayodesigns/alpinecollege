"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { motion } from "framer-motion";
import Image from "next/image";

type NewsPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  excerpt?: string;
  mainImage?: { asset: { url: string }; alt?: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="m-0 mb-6 text-deep-midnight/80 text-base sm:text-lg leading-[1.85] font-normal normal-case">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="m-0 mt-10 mb-4 text-deep-midnight text-2xl sm:text-3xl font-medium leading-tight uppercase">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="m-0 mt-8 mb-3 text-deep-midnight text-xl sm:text-2xl font-medium leading-tight uppercase">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-alpine-blue pl-6 my-8 italic text-deep-midnight/70 text-lg leading-relaxed normal-case">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="m-0 mb-6 pl-6 flex flex-col gap-2 list-disc normal-case">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="m-0 mb-6 pl-6 flex flex-col gap-2 list-decimal normal-case">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-deep-midnight/80 text-base sm:text-lg leading-[1.75]">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-deep-midnight/80 text-base sm:text-lg leading-[1.75]">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-deep-midnight">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="text-alpine-blue underline hover:text-alpine-blue-600 transition-colors normal-case"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-10">
        <div className="relative w-full rounded-2xl overflow-hidden bg-alpine-blue-50 aspect-[16/9]">
          <Image
            src={value.asset?.url ?? ""}
            alt={value.alt ?? ""}
            fill
            className="object-cover"
          />
        </div>
        {value.caption && (
          <figcaption className="mt-3 text-center text-rock-grey text-sm normal-case italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};

export default function NewsArticle({ post }: { post: NewsPost }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep-midnight pt-[100px] pb-[70px]">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-alpine-blue/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-summit-orange/10 blur-[100px]" />

        <div className="relative w-full max-w-[900px] mx-auto px-4 sm:px-10">
          {/* Back link */}
          <motion.a
            href="/news"
            className="inline-flex items-center gap-2 text-white/50 text-sm font-medium uppercase tracking-wide no-underline hover:text-white transition-colors mb-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to News
          </motion.a>

          {/* Date */}
          {post.publishedAt && (
            <motion.p
              className="inline-block px-4 py-1.5 rounded-full bg-summit-orange/15 text-summit-orange text-xs font-semibold tracking-widest uppercase mb-5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {formatDate(post.publishedAt)}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            className="m-0 text-white text-[28px] sm:text-[40px] md:text-[52px] leading-[1.1] font-normal -tracking-[0.01em] uppercase"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          {post.excerpt && (
            <motion.p
              className="mt-5 text-white/60 text-base sm:text-lg leading-[1.8] normal-case max-w-[700px]"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {post.excerpt}
            </motion.p>
          )}
        </div>
      </section>

      {/* Main image */}
      {post.mainImage?.asset?.url && (
        <div className="w-full max-w-[900px] mx-auto px-4 sm:px-10 -mt-8 relative z-10">
          <motion.div
            className="relative w-full rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(26,26,46,0.25)] aspect-[16/9]"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt ?? post.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      )}

      {/* Body */}
      <section className="bg-snow-white py-[60px] sm:py-[80px]">
        <div className="w-full max-w-[760px] mx-auto px-4 sm:px-10">
          {post.body && post.body.length > 0 ? (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <PortableText value={post.body} components={portableTextComponents} />
            </motion.div>
          ) : (
            <p className="text-rock-grey text-base normal-case">No content available for this article.</p>
          )}

          {/* Divider + back link */}
          <div className="mt-12 pt-8 border-t border-rock-grey/20">
            <a
              href="/news"
              className="inline-flex items-center gap-2 text-alpine-blue text-sm font-semibold uppercase tracking-wide no-underline hover:gap-3 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to All News
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
