import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    num: z.string(),
    date: z.string(),
    readTime: z.string(),
    tags: z.array(z.object({
      name: z.string(),
      cls: z.string().default(''),
    })),
    vis: z.enum(['v1', 'v2', 'v3', 'v4', 'v5']).default('v1'),
    icon: z.string().default('✖'),
    excerpt: z.string(),
    isEasterEgg: z.boolean().default(false),
  }),
});

export const collections = { articles };
