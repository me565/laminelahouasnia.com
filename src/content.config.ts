import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // Where the piece first appeared, if it was published elsewhere first.
    originalUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
