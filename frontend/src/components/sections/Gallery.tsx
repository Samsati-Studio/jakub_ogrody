import { getGalleryItems } from "@/lib/sanity.queries";
import SectionHeading from "@/components/ui/SectionHeading";
import Section from "@/components/ui/Section";
import GalleryGrid from "./GalleryGrid";
import type { GalleryItem, ProjectImage } from "@/types/sanity";

function buildImages(
  folder: number,
  poCount: number,
  przedCount: number
): ProjectImage[] {
  const po: ProjectImage[] = Array.from({ length: poCount }, (_, i) => ({
    src: `/projects/${folder}/Po%20(${i + 1}).jpg`,
    stage: "po" as const,
  }));
  const przed: ProjectImage[] = Array.from({ length: przedCount }, (_, i) => ({
    src: `/projects/${folder}/Przed%20(${i + 1}).jpg`,
    stage: "przed" as const,
  }));
  return [...po, ...przed];
}

const PLACEHOLDER_ITEMS: GalleryItem[] = [
  {
    _id: "project-1",
    title: "Projekt 1",
    slug: { current: "projekt-1" },
    category: "zakladanie",
    mainImage: "/projects/1/Po%20(1).jpg",
    images: buildImages(1, 3, 6),
    description: "",
    featured: true,
    order: 1,
  },
  {
    _id: "project-2",
    title: "Projekt 2",
    slug: { current: "projekt-2" },
    category: "zakladanie",
    mainImage: "/projects/2/Po%20(1).jpg",
    images: buildImages(2, 4, 2),
    description: "",
    featured: true,
    order: 2,
  },
  {
    _id: "project-3",
    title: "Projekt 3",
    slug: { current: "projekt-3" },
    category: "zakladanie",
    mainImage: "/projects/3/Po%20(1).jpg",
    images: buildImages(3, 7, 16),
    description: "",
    featured: true,
    order: 3,
  },
  {
    _id: "project-4",
    title: "Projekt 4",
    slug: { current: "projekt-4" },
    category: "zakladanie",
    mainImage: "/projects/4/Po%20(1).jpg",
    images: buildImages(4, 3, 6),
    description: "",
    featured: false,
    order: 4,
  },
  {
    _id: "project-5",
    title: "Projekt 5",
    slug: { current: "projekt-5" },
    category: "zakladanie",
    mainImage: "/projects/5/Po%20(1).jpg",
    images: buildImages(5, 5, 12),
    description: "",
    featured: true,
    order: 5,
  },
  {
    _id: "project-6",
    title: "Projekt 6",
    slug: { current: "projekt-6" },
    category: "zakladanie",
    mainImage: "/projects/6/Po%20(1).jpg",
    images: buildImages(6, 3, 7),
    description: "",
    featured: false,
    order: 6,
  },
  {
    _id: "project-7",
    title: "Projekt 7",
    slug: { current: "projekt-7" },
    category: "zakladanie",
    mainImage: "/projects/7/Po%20(1).jpg",
    images: buildImages(7, 6, 17),
    description: "",
    featured: true,
    order: 7,
  },
];

export default async function Gallery() {
  const cmsItems = await getGalleryItems();
  const items = cmsItems.length > 0 ? cmsItems : PLACEHOLDER_ITEMS;

  return (
    <Section id="realizacje">
      <SectionHeading subtitle="Sprawdź nasze najnowsze projekty i realizacje">
        Nasze realizacje
      </SectionHeading>

      <GalleryGrid items={items} />
    </Section>
  );
}
