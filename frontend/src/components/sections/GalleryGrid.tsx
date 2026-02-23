"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/types/sanity";
import { urlFor } from "@/lib/sanity.image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GalleryModal from "./GalleryModal";

const CATEGORIES = [
  { value: "all", label: "Wszystkie" },
  { value: "zakladanie", label: "Zakładanie" },
  { value: "pielegnacja", label: "Pielęgnacja" },
  { value: "nawadnianie", label: "Nawadnianie" },
];

function getImageSrc(image: GalleryItem["mainImage"], width: number, height: number): string {
  if (typeof image === "string") return image;
  return urlFor(image).width(width).height(height).url();
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  // Only show categories that have items
  const availableCategories = CATEGORIES.filter(
    (cat) =>
      cat.value === "all" ||
      items.some((item) => item.category === cat.value)
  );

  if (items.length === 0) {
    return (
      <p className="text-center text-dark/60">
        Galeria jest w przygotowaniu. Wróć wkrótce!
      </p>
    );
  }

  return (
    <>
      {/* Category filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {availableCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.value
                ? "bg-accent text-white"
                : "border border-primary/40 text-dark/70 hover:border-primary hover:text-dark"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => {
          const przedSrc = item.images?.find((img) => img.stage === "przed")?.src;

          return (
            <AnimateOnScroll key={item._id} delay={index * 0.05}>
              <button
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl"
              >
                {/* Po — default visible */}
                <Image
                  src={getImageSrc(item.mainImage, 600, 450)}
                  alt={item.title}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Przed — revealed on hover */}
                {przedSrc && (
                  <Image
                    src={przedSrc}
                    alt={`${item.title} — przed`}
                    fill
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}

                {/* Gradient + title overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  {item.location && (
                    <p className="text-sm text-white/80">{item.location}</p>
                  )}
                </div>

                {/* "Przed" badge — appears on hover */}
                {przedSrc && (
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Przed
                  </span>
                )}
              </button>
            </AnimateOnScroll>
          );
        })}
      </div>

      {/* Modal */}
      {selectedItem && (
        <GalleryModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}
