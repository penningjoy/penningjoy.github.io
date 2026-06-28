import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each article is a Markdown file in src/content/writing/.
// To publish: drop in a new .md file with the frontmatter below. That's it.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
