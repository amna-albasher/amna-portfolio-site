import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    accent: z.string(),
    order: z.number(),
    problem: z.array(z.string()),
    approach: z.array(z.string()),
    keyDecisions: z.array(z.string()),
    architecture: z.string(),
    results: z.array(z.string()),
    draft: z.boolean().default(false),
    terminalCommand: z.string(),
    terminalLines: z.array(z.string()),
    filters: z.array(z.enum(["DevOps", "AI", "Cloud"])),
    github: z.string(),
    liveDemo: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    accent: z.string(),
    comingSoon: z.boolean().default(true),
    coverIcon: z.enum(["layers", "fork", "route"]),
    categories: z.array(z.string()),
  }),
});

export const collections = { projects, blog };
