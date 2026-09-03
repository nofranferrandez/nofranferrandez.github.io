import { defineCollection, z } from 'astro:content';

const calculators = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['FinanceApplication', 'UtilitiesApplication']),
    keywords: z.array(z.string()),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

export const collections = { calculators };
