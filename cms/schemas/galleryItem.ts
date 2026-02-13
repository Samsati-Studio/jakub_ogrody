import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryItem",
  title: "Galeria",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategoria",
      type: "string",
      options: {
        list: [
          { title: "Projektowanie ogrodów", value: "projektowanie" },
          { title: "Zakładanie ogrodów", value: "zakladanie" },
          { title: "Pielęgnacja", value: "pielegnacja" },
          { title: "Nawadnianie", value: "nawadnianie" },
          { title: "Oświetlenie", value: "oswietlenie" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Lokalizacja",
      type: "string",
      description: "Np. Warszawa, Piaseczno",
    }),
    defineField({
      name: "mainImage",
      title: "Zdjęcie główne",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "beforeImage",
      title: "Zdjęcie przed",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "afterImage",
      title: "Zdjęcie po",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Opis",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "featured",
      title: "Wyróżnione",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Kolejność",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Kolejność",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
  },
});
