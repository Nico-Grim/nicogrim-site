import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.enum(['app', 'game', 'tool', 'website']),
    status: z.enum(['development', 'beta', 'live', 'discontinued']),
    heroImage: z.string().optional(),
    features: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),
    screenshots: z.array(z.string()).optional(),
    links: z.object({
      appStore: z.string().optional(),
      playStore: z.string().optional(),
      web: z.string().optional(),
      github: z.string().optional(),
    }).optional(),
    techStack: z.array(z.string()),
    releaseDate: z.string(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
  }),
});

export const collections = { products, blog };
