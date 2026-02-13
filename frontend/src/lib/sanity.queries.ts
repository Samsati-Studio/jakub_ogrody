import { client } from "./sanity.client";
import type { GalleryItem, Testimonial } from "@/types/sanity";

const revalidateOptions = { next: { revalidate: 60 } };

export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    return await client.fetch(
      `*[_type == "galleryItem"] | order(order asc) {
        _id,
        title,
        slug,
        category,
        location,
        mainImage,
        beforeImage,
        afterImage,
        description,
        featured,
        order
      }`,
      {},
      revalidateOptions
    );
  } catch {
    return [];
  }
}

export async function getFeaturedGalleryItems(): Promise<GalleryItem[]> {
  try {
    return await client.fetch(
      `*[_type == "galleryItem" && featured == true] | order(order asc) {
        _id,
        title,
        slug,
        category,
        location,
        mainImage,
        beforeImage,
        afterImage,
        description,
        featured,
        order
      }`,
      {},
      revalidateOptions
    );
  } catch {
    return [];
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await client.fetch(
      `*[_type == "testimonial"] {
        _id,
        name,
        location,
        quote,
        rating,
        featured
      }`,
      {},
      revalidateOptions
    );
  } catch {
    return [];
  }
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    return await client.fetch(
      `*[_type == "testimonial" && featured == true] {
        _id,
        name,
        location,
        quote,
        rating,
        featured
      }`,
      {},
      revalidateOptions
    );
  } catch {
    return [];
  }
}
