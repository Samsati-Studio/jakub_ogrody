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
    title: "Ogród w Masłowie",
    slug: { current: "ogrod-maslowo-rosliny" },
    category: "zakladanie",
    location: "Masłowo",
    mainImage: "/projects/1/Po%20(1).jpg",
    images: buildImages(1, 3, 6),
    description: "Na podstawie wcześniej przygotowanego projektu stworzyliśmy nową rabatę kwiatową. Sadzenie nowych roślin oraz przesadzanie istniejących, montaż agrowłókniny, udekorowanie korą sosnową i kamieniem ozdobnym.",
    featured: true,
    order: 1,
  },
  {
    _id: "project-2",
    title: "Trawnik z rolki — Masłowo",
    slug: { current: "trawnik-maslowo" },
    category: "zakladanie",
    location: "Masłowo",
    mainImage: "/projects/2/Po%20(1).jpg",
    images: buildImages(2, 4, 2),
    description: "Na wcześniej przygotowanym terenie zamontowaliśmy trawę w rolkach.",
    featured: false,
    order: 2,
  },
  {
    _id: "project-3",
    title: "Ogród w Wąsoszu",
    slug: { current: "ogrod-wasosz" },
    category: "zakladanie",
    location: "Wąsosz",
    mainImage: "/projects/3/Po%20(1).jpg",
    images: buildImages(3, 7, 16),
    description: "Na podstawie przygotowanego projektu stworzyliśmy ogród na niewielkim terenie, który sprawia efekt całkiem sporego. Nawodnienie, sadzenie roślin i trawnik z rolki.",
    featured: true,
    order: 3,
  },
  {
    _id: "project-4",
    title: "Trawnik i nawodnienie — Wąsosz",
    slug: { current: "trawnik-nawodnienie-wasosz" },
    category: "nawadnianie",
    location: "Wąsosz",
    mainImage: "/projects/4/Po%20(1).jpg",
    images: buildImages(4, 3, 6),
    description: "Montaż trawy w rolkach (650 m²) oraz siatki na krety na wcześniej przygotowanym terenie. Automatyczny system nawadniania Hunter.",
    featured: false,
    order: 4,
  },
  {
    _id: "project-5",
    title: "Trawnik i nawodnienie — Wąsosz II",
    slug: { current: "trawnik-nawodnienie-wasosz-2" },
    category: "nawadnianie",
    location: "Wąsosz",
    mainImage: "/projects/5/Po%20(1).jpg",
    images: buildImages(5, 5, 12),
    description: "Kompleksowy montaż trawy w rolkach (650 m²) oraz automatycznego systemu nawadniania Hunter na w pełni przygotowanym podłożu.",
    featured: true,
    order: 5,
  },
  {
    _id: "project-6",
    title: "Wycinka drzew w Rawiczu",
    slug: { current: "wycinka-rawicz" },
    category: "pielegnacja",
    location: "Rawicz",
    mainImage: "/projects/6/Po%20(1).jpg",
    images: buildImages(6, 3, 7),
    description: "Wycinka drzew iglastych z podnośnika koszowego przy Białym Kościele w Rawiczu.",
    featured: false,
    order: 6,
  },
  {
    _id: "project-7",
    title: "Ogród w Rawiczu",
    slug: { current: "ogrod-rawicz" },
    category: "zakladanie",
    location: "Rawicz",
    mainImage: "/projects/7/Po%20(1).jpg",
    images: buildImages(7, 6, 17),
    description: "Realizacja ogrodu według wcześniej przygotowanego projektu. Montaż automatycznego systemu nawadniania, trawnik z rolki na starannie przygotowanym terenie oraz nasadzenia roślin zgodnie z projektem.",
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
