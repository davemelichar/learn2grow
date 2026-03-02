import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
    type: 'data',
    schema: z.object({
        order: z.number(),
        image: z.string(),
        category: z.enum(['Articles', 'News']),
        date_en: z.string(),
        date_cs: z.string(),
        title_en: z.string(),
        title_cs: z.string(),
        excerpt_en: z.string(),
        excerpt_cs: z.string(),
    }),
});

export const collections = { articles };
