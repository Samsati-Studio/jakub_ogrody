"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/types/sanity";
import { urlFor } from "@/lib/sanity.image";

function getImageSrc(image: GalleryItem["mainImage"], width: number, height: number): string {
  if (typeof image === "string") return image;
  return urlFor(image).width(width).height(height).url();
}

interface GalleryModalProps {
  item: GalleryItem;
  onClose: () => void;
}

export default function GalleryModal({ item, onClose }: GalleryModalProps) {
  const images = item.images ?? [];

  const defaultMain =
    images.find((img) => img.stage === "po")?.src ??
    getImageSrc(item.mainImage, 1200, 750);

  const [mainSrc, setMainSrc] = useState(defaultMain);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-dark shadow backdrop-blur-sm transition-colors hover:bg-white/80"
          aria-label="Zamknij"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main image */}
        <div className="relative aspect-[16/10] w-full shrink-0 bg-black/10">
          <Image
            key={mainSrc}
            src={mainSrc}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Scrollable content */}
        <div className="flex flex-col overflow-y-auto">

          {/* Title + location */}
          {(item.title || item.location || item.description) && (
            <div className="px-5 pt-4 pb-2">
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              {item.location && <p className="text-sm text-white/70">{item.location}</p>}
              {item.description && <p className="mt-1 text-sm text-white/60">{item.description}</p>}
            </div>
          )}

          {/* Thumbnail grid */}
          {images.length > 0 && (
            <div className="grid grid-cols-4 gap-1.5 p-4 sm:grid-cols-6">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainSrc(img.src)}
                  className={`group relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                    mainSrc === img.src
                      ? "border-accent shadow-md"
                      : "border-white/40 hover:border-accent/50"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 25vw, 16vw"
                  />
                  <span
                    className={`absolute bottom-1 left-1 rounded px-1.5 py-0.5 text-[10px] font-semibold text-white ${
                      img.stage === "po" ? "bg-accent/90" : "bg-black/50"
                    }`}
                  >
                    {img.stage === "po" ? "Po" : "Przed"}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
