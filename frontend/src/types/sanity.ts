import type { SanityImageSource } from "@sanity/image-url";

export interface ProjectImage {
  src: string;
  stage: "przed" | "po";
}

export interface GalleryItem {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  location?: string;
  mainImage: SanityImageSource | string;
  beforeImage?: SanityImageSource | string;
  afterImage?: SanityImageSource | string;
  images?: ProjectImage[];
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
