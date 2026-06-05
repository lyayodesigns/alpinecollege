"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  image: { asset: { url: string }; hotspot?: unknown };
  caption?: string;
  alt?: string;
};

type GalleryAlbum = {
  _id: string;
  title: string;
  description?: string;
  images?: GalleryImage[];
};

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  function prev() { setCurrent((c) => (c - 1 + images.length) % images.length); }
  function next() { setCurrent((c) => (c + 1) % images.length); }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-5xl w-full"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-deep-midnight">
            <Image
              src={images[current].image.asset.url}
              alt={images[current].alt ?? images[current].caption ?? "Gallery image"}
              fill
              className="object-contain"
            />
          </div>

          {images[current].caption && (
            <p className="text-center text-white/70 text-sm mt-4 normal-case">{images[current].caption}</p>
          )}

          <p className="text-center text-white/40 text-xs mt-1 normal-case">{current + 1} / {images.length}</p>

          {images.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </>
          )}

          <button onClick={onClose} className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function AlbumCard({ album, albumIndex }: { album: GalleryAlbum; albumIndex: number }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const images = album.images ?? [];

  return (
    <motion.div
      className="mb-[60px] sm:mb-[80px]"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: albumIndex * 0.1 }}
    >
      {/* Album header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-6">
        <h2 className="m-0 text-deep-midnight text-[24px] sm:text-[32px] font-medium leading-tight">
          {album.title}
        </h2>
        {album.description && (
          <p className="m-0 text-rock-grey text-sm sm:text-base normal-case leading-relaxed max-w-[500px]">
            {album.description}
          </p>
        )}
        <span className="sm:ml-auto shrink-0 text-rock-grey text-sm normal-case">
          {images.length} photo{images.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Image grid */}
      {images.length === 0 ? (
        <div className="h-[200px] rounded-2xl bg-alpine-blue-50 border border-rock-grey/15 flex items-center justify-center">
          <p className="text-rock-grey text-sm normal-case">No images in this album yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, imgIndex) => (
            <motion.button
              key={imgIndex}
              className={`relative overflow-hidden rounded-xl bg-alpine-blue-50 cursor-pointer border-0 p-0 group ${imgIndex === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLightbox(imgIndex)}
            >
              <Image
                src={img.image.asset.url}
                alt={img.alt ?? img.caption ?? album.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-108"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-deep-midnight/0 group-hover:bg-deep-midnight/30 transition-colors duration-300 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                </svg>
              </div>
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="m-0 text-white text-xs normal-case leading-tight">{img.caption}</p>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      )}

      {lightbox !== null && (
        <Lightbox images={images} startIndex={lightbox} onClose={() => setLightbox(null)} />
      )}
    </motion.div>
  );
}

export default function GalleryGrid({ galleries }: { galleries: GalleryAlbum[] }) {
  return (
    <section className="bg-snow-white py-[60px] sm:py-[100px]">
      <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-10">
        {galleries.length === 0 ? (
          <motion.div
            className="text-center py-[80px] flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-alpine-blue/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-alpine-blue/50">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <p className="text-rock-grey text-lg normal-case">No gallery albums yet. Check back soon!</p>
          </motion.div>
        ) : (
          galleries.map((album, i) => (
            <AlbumCard key={album._id} album={album} albumIndex={i} />
          ))
        )}
      </div>
    </section>
  );
}
