"use client";

import { useEffect, useState, useCallback } from "react";
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
  const images = [
    ...(item.poImages ?? []).map((src) => ({ src, stage: "po" as const })),
    ...(item.przedImages ?? []).map((src) => ({ src, stage: "przed" as const })),
  ];

  const defaultMain = item.poImages?.[0] ?? getImageSrc(item.mainImage, 1200, 750);
  const lightboxImages = images.length > 0 ? images : [{ src: defaultMain, stage: "po" as const }];

  const [mainSrc, setMainSrc] = useState(defaultMain);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = () => {
    const idx = lightboxImages.findIndex((img) => img.src === mainSrc);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + lightboxImages.length) % lightboxImages.length : null));
  }, [lightboxImages.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % lightboxImages.length : null));
  }, [lightboxImages.length]);

  // Keyboard: Esc closes lightbox (or modal), arrows navigate
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex((i) => {
          if (i !== null) return null; // close lightbox only
          onClose();
          return null;
        });
        return;
      }
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  // Sync mainSrc when navigating inside lightbox
  useEffect(() => {
    if (lightboxIndex !== null) {
      setMainSrc(lightboxImages[lightboxIndex].src);
    }
  }, [lightboxIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* ── Project modal ── */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4"
        onClick={onClose}
      >
        <div
          className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close modal */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white shadow backdrop-blur-sm transition-colors hover:bg-white/80 hover:text-dark"
            aria-label="Zamknij"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main image — click to open lightbox */}
          <button
            onClick={openLightbox}
            className="group relative h-[38vh] sm:h-[42vh] lg:h-[46vh] w-full shrink-0 cursor-zoom-in overflow-hidden bg-black/40"
            aria-label="Otwórz pełny podgląd zdjęcia"
          >
            <Image
              key={mainSrc}
              src={mainSrc}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
            />
            {/* Zoom hint */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="flex translate-y-2 items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
                Powiększ
              </span>
            </div>
          </button>

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

      {/* ── Full-screen lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
          onClick={closeLightbox}
        >
          {/* Image */}
          <div className="relative h-full w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              key={lightboxImages[lightboxIndex].src}
              src={lightboxImages[lightboxIndex].src}
              alt={item.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Close lightbox */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
            aria-label="Zamknij podgląd"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter + stage badge */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold text-white ${
                lightboxImages[lightboxIndex].stage === "po" ? "bg-accent/90" : "bg-white/20"
              }`}
            >
              {lightboxImages[lightboxIndex].stage === "po" ? "Po" : "Przed"}
            </span>
            <span className="text-sm text-white/50">
              {lightboxIndex + 1} / {lightboxImages.length}
            </span>
          </div>

          {/* Prev / Next arrows */}
          {lightboxImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                aria-label="Poprzednie zdjęcie"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                aria-label="Następne zdjęcie"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
