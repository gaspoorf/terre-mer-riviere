import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  // Schéma de contenu
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/blog", // Chemin vers ton dossier "content/blog"
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date",
            required: false,
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            required: false,
          },
        ],
      },

      {
        name: "home",
        label: "Home Page",
        path: "content/home", // Chemin vers ton dossier "content/home"
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",  // Utilisation de "object" pour des sous-sections répétables
            name: "first",
            label: "First Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "text",
                label: "Text",
              },
            ],
          },
          {
            type: "object",  // Utilisation de "object" pour des sous-sections répétables
            name: "blocks",
            label: "Content Blocks",
            list: true,  // Ajoute l'option "list: true" pour permettre d'avoir plusieurs objets
            fields: [
              {
                type: "string",
                name: "title",
                label: "Block Title",
              },
              {
                type: "image",
                name: "image",
                label: "Block Image",
              },
              {
                type: "string",
                name: "text",
                label: "Block Text",
              },
            ],
          },
          {
            type: "object",  // Utilisation de "object" pour des sous-sections répétables
            name: "contact",
            label: "Contact Section",
            list: true,  // Ajoute l'option "list: true" pour permettre d'avoir plusieurs objets
            fields: [
              {
                type: "string",
                name: "title",
                label: "Contact Title",
              },
              {
                type: "image",
                name: "image",
                label: "Contact Image",
              },
              {
                type: "string",
                name: "text",
                label: "Contact Text",
              },
            ],
          },
        ],
      },
    ],
  },
});
