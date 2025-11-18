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
        path: "src/content/blog", // Chemin vers ton dossier "content/blog"
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
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
            label: "Date de publication ",
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Date de mise à jour",
            required: false,
          },
          {
            type: "image",
            name: "heroImage",
            label: "Image principale",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu de l'article",
            isBody: true,
            required: false,
          },
        ],
      },

      {
        name: "home",
        label: "Home Page",
        path: "src/content/home", // Chemin vers ton dossier "content/home"
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
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
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
                name: "svg",
                label: "Icon correspondant",
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
              {
                type: "string",
                name: "color",
                label: "Couleur de fond",
              },
              {
                type: "number",
                name: "lines",
                label: "Lignes de décoration (1, 2 ou 3)",
              },
            ],
          },
          {
            type: "object",
            name: "values",
            label: "Values Section",
            list: true,
            fields: [
              {
                type: "image",
                name: "image2",
                label: "Block Image",
              },
              {
                type: "string",
                name: "text1",
                label: "Valeur 1",
              },
              {
                type: "string",
                name: "text2",
                label: "Valeur 2",
              },
              {
                type: "string",
                name: "text3",
                label: "Valeur 3",
              },
              {
                type: "string",
                name: "text4",
                label: "Valeur 4",
              },
              {
                type: "string",
                name: "color",
                label: "Couleur de fond",
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
          {
            type: "object",  // Utilisation de "object" pour des sous-sections répétables
            name: "footer",
            label: "Footer Section",
            list: true,  // Ajoute l'option "list: true" pour permettre d'avoir plusieurs objets
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "string",
                name: "text",
                label: "Texte",
              },
              {
                type: "string",
                name: "caption",
                label: "Description",
              },
              {
                type: "string",
                name: "mail",
                label: "Email",
              },
            ],
          },
        ],
      },
    ],
  },
});
