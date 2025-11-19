import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});


const home = defineCollection({
	schema: z.object({
		title: z.string(),

		first: z.array(
			z.object({
				title: z.string(),
				image: z.string(),
				text: z.string(),
			})
		),

		blocks: z.array(
			z.object({
				title: z.string(),
				image: z.string(),
				svg: z.string(),
				text: z.string(),
				color: z.string(),
				lines: z.number(),
			})
		),

		values: z.array(
			z.object({
				image2: z.string(),
				text1: z.string(),
				text2: z.string(),
				text3: z.string(),
				text4: z.string(),
				svg1: z.string(),
				svg2: z.string(),
				svg3: z.string(),
				svg4: z.string(),
				color: z.string(),
			})
		).optional(),

		contact: z.array(
			z.object({
				title: z.string(),
				image: z.string(),
				text: z.string(),
			})
		),

		footer: z.array(
			z.object({
				title: z.string(),
				mail: z.string(),
				caption: z.string(),
				text: z.string(),
			})
		),	
	}),
});
  

  export const collections = { blog, home };
