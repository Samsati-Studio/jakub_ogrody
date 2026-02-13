import { getGalleryItems } from "@/lib/sanity.queries";
import SectionHeading from "@/components/ui/SectionHeading";
import Section from "@/components/ui/Section";
import GalleryGrid from "./GalleryGrid";
import type { GalleryItem } from "@/types/sanity";

const PLACEHOLDER_ITEMS: GalleryItem[] = [
  {
    _id: "placeholder-1",
    title: "Zakładanie ogrodu przydomowego",
    slug: { current: "zakladanie-ogrodu-przydomowego" },
    category: "zakladanie",
    location: "Rawicz",
    mainImage: "/mariakray-gardening-6803874_1920.jpg",
    description: "Kompleksowe zakładanie ogrodu z trawnikiem i nasadzeniami.",
    featured: true,
    order: 1,
  },
  {
    _id: "placeholder-2",
    title: "Pielęgnacja trawnika",
    slug: { current: "pielegnacja-trawnika" },
    category: "pielegnacja",
    location: "Leszno",
    mainImage: "/clickerhappy-lawn-mower-384589_1920.jpg",
    description: "Regularne koszenie i pielęgnacja trawnika.",
    featured: true,
    order: 2,
  },
  {
    _id: "placeholder-3",
    title: "Rekultywacja terenu",
    slug: { current: "rekultywacja-terenu" },
    category: "zakladanie",
    location: "Wrocław",
    mainImage: "/meineresterampe-molehills-231386_1920.jpg",
    description: "Przygotowanie terenu pod nowy ogród.",
    featured: false,
    order: 3,
  },
  {
    _id: "placeholder-4",
    title: "Porządkowanie drewna opałowego",
    slug: { current: "porzadkowanie-drewna" },
    category: "pielegnacja",
    location: "Wschowa",
    mainImage: "/irina_kukuts-firewood-8313630_1280.jpg",
    description: "Sezonowe porządki i przygotowanie drewna.",
    featured: false,
    order: 4,
  },
  {
    _id: "placeholder-5",
    title: "Ogród rodzinny",
    slug: { current: "ogrod-rodzinny" },
    category: "zakladanie",
    location: "Krobia",
    mainImage: "/trangiahung159-family-7977570_1920.jpg",
    description: "Funkcjonalny ogród dla całej rodziny.",
    featured: true,
    order: 5,
  },
  {
    _id: "placeholder-6",
    title: "Rabaty kwiatowe",
    slug: { current: "rabaty-kwiatowe" },
    category: "zakladanie",
    location: "Głogów",
    mainImage: "/mariakray-garden-6803861_1920.jpg",
    description: "Projektowanie i zakładanie rabat kwiatowych.",
    featured: false,
    order: 6,
  },
  {
    _id: "placeholder-7",
    title: "Pielęgnacja nasadzeń",
    slug: { current: "pielegnacja-nasadzen" },
    category: "pielegnacja",
    location: "Rawicz",
    mainImage: "/mariakray-gardening-6803865_1280.jpg",
    description: "Profesjonalna pielęgnacja roślin ogrodowych.",
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
