"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type DownloadItem = {
  _id: string;
  title: string;
  description?: string;
  category?: string;
  publishedAt?: string;
  file?: { asset?: { url: string; originalFilename?: string; size?: number } };
};

const CATEGORY_LABELS: Record<string, string> = {
  brochure: "Brochure",
  form: "Form",
  syllabus: "Syllabus",
  notice: "Notice",
  other: "Other",
};

const CATEGORY_COLORS: Record<string, string> = {
  brochure: "bg-alpine-blue/10 text-alpine-blue",
  form: "bg-summit-orange/10 text-summit-orange-600",
  syllabus: "bg-sky-mist/20 text-alpine-blue-700",
  notice: "bg-deep-midnight/10 text-deep-midnight-400",
  other: "bg-rock-grey/15 text-rock-grey",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "numeric", month: "short", year: "numeric",
  });
}

function formatSize(bytes?: number) {
  if (!bytes) return null;
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function FileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

const ALL_CATEGORIES = ["all", "brochure", "form", "syllabus", "notice", "other"];

export default function DownloadsList({ downloads }: { downloads: DownloadItem[] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ALL_CATEGORIES.filter(
    (cat) => cat === "all" || downloads.some((d) => d.category === cat)
  );

  const filtered = activeCategory === "all"
    ? downloads
    : downloads.filter((d) => d.category === activeCategory);

  return (
    <section className="bg-snow-white py-[60px] sm:py-[100px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">

        {/* Category filter tabs */}
        {downloads.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-14"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-200 cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-alpine-blue text-white border-alpine-blue shadow-[0_4px_20px_rgba(46,143,191,0.3)]"
                    : "bg-transparent text-rock-grey border-rock-grey/30 hover:border-alpine-blue hover:text-alpine-blue"
                }`}
              >
                {cat === "all" ? "All Documents" : CATEGORY_LABELS[cat] ?? cat}
              </button>
            ))}
          </motion.div>
        )}

        {downloads.length === 0 ? (
          <motion.div
            className="text-center py-[80px] flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-alpine-blue/10 flex items-center justify-center text-alpine-blue/50">
              <FileIcon />
            </div>
            <p className="text-rock-grey text-lg normal-case">No documents available yet. Check back soon!</p>
          </motion.div>
        ) : (
          <div className="flex flex-col divide-y divide-rock-grey/15 rounded-2xl overflow-hidden border border-rock-grey/20 bg-white">
            {filtered.map((item, index) => (
              <motion.div
                key={item._id}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 px-6 sm:px-8 py-6 hover:bg-alpine-blue-50/50 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Icon */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-alpine-blue/10 flex items-center justify-center text-alpine-blue group-hover:bg-alpine-blue group-hover:text-white transition-colors duration-200">
                  <FileIcon />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {item.category && (
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide ${CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS.other}`}>
                        {CATEGORY_LABELS[item.category] ?? item.category}
                      </span>
                    )}
                    {item.publishedAt && (
                      <span className="text-rock-grey text-xs normal-case">
                        {formatDate(item.publishedAt)}
                      </span>
                    )}
                  </div>
                  <h3 className="m-0 text-deep-midnight text-base sm:text-lg font-medium leading-snug group-hover:text-alpine-blue transition-colors duration-200">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="m-0 mt-1 text-rock-grey text-sm normal-case leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* File size + download */}
                <div className="shrink-0 flex items-center gap-4">
                  {item.file?.asset?.size && (
                    <span className="text-rock-grey text-sm normal-case tabular-nums">
                      {formatSize(item.file.asset.size)}
                    </span>
                  )}
                  {item.file?.asset?.url ? (
                    <a
                      href={item.file.asset.url}
                      download={item.file.asset.originalFilename ?? item.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-alpine-blue text-white text-sm font-semibold no-underline uppercase tracking-wide transition-all duration-200 hover:bg-alpine-blue-600 hover:shadow-[0_8px_24px_rgba(46,143,191,0.35)] active:scale-95"
                    >
                      <DownloadIcon />
                      Download
                    </a>
                  ) : (
                    <span className="text-rock-grey text-sm normal-case">No file</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Result count */}
        {downloads.length > 0 && filtered.length > 0 && (
          <p className="mt-6 text-rock-grey text-sm normal-case text-right">
            Showing {filtered.length} of {downloads.length} document{downloads.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>
    </section>
  );
}
