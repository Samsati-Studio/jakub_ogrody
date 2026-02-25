import type { SanityImageSource } from "@sanity/image-url";

export interface GalleryItem {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  location?: string;
  mainImage: SanityImageSource | string;
  poImages?: string[];
  przedImages?: string[];
  description?: string;
  featured: boolean;
  order: number;
}

export interface Testimonial {
  _id: string;
  name: string;
  location?: string;
  quote: string;
  rating: number;
  featured: boolean;
}
