"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dark shadow-md transition-colors hover:bg-white"
          aria-label="Zamknij"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Main image */}
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={getImageSrc(item.mainImage, 1200, 750)}
            alt={item.title}
            fill
            className="rounded-t-2xl object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="mb-1 text-2xl font-bold text-dark">{item.title}</h2>
          {item.location && (
            <p className="mb-4 text-accent">{item.location}</p>
          )}
          {item.description && (
            <p className="mb-6 text-dark/70">{item.description}</p>
          )}

          {/* Before / After */}
          {item.beforeImage && item.afterImage && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-dark">
                Przed i po
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={getImageSrc(item.beforeImage, 600, 450)}
                    alt={`${item.title} — przed`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                    Przed
                  </span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={getImageSrc(item.afterImage, 600, 450)}
                    alt={`${item.title} — po`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                    Po
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
