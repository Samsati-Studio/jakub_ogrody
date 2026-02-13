import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const deskStructure = (S: any) =>
  S.list()
    .title("Ogrody Jakuba")
    .items([
      S.listItem()
        .title("Galeria")
        .schemaType("galleryItem")
        .child(S.documentTypeList("galleryItem").title("Galeria")),
      S.listItem()
        .title("Opinie")
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("Opinie")),
    ]);

export default defineConfig({
  name: "ogrody-jakuba",
  title: "Ogrody Jakuba",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET || "production",

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
