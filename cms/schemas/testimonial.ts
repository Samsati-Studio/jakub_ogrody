import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Opinie",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Imię i nazwisko",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(80),
    }),
    defineField({
      name: "location",
      title: "Lokalizacja",
      type: "string",
      description: "Np. Warszawa, Piaseczno",
    }),
    defineField({
      name: "quote",
      title: "Opinia",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required().min(10).max(500),
    }),
    defineField({
      name: "rating",
      title: "Ocena",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
      options: {
        list: [
          { title: "1 gwiazdka", value: 1 },
          { title: "2 gwiazdki", value: 2 },
          { title: "3 gwiazdki", value: 3 },
          { title: "4 gwiazdki", value: 4 },
          { title: "5 gwiazdek", value: 5 },
        ],
      },
      initialValue: 5,
    }),
    defineField({
      name: "featured",
      title: "Wyróżniona",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "location",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle || "Brak lokalizacji",
      };
    },
  },
});
