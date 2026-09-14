import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    cardSummary: z.string().optional(),
    description: z.string(),
    tech: z.array(z.string()),
    accent: z.string(),
    order: z.number(),
    problem: z.array(z.string()),
    approach: z.array(z.string()),
    approachHeading: z.enum(["Approach", "Solution"]).optional(),
    walkthroughHeading: z.string().optional(),
    dashboardWalkthrough: z.array(z.object({
      title: z.string(),
      description: z.string(),
      placeholder: z.string(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
    })).optional(),
    technicalImplementation: z.array(z.string()).optional(),
    keyDecisions: z.array(z.string()),
    architecture: z.string(),
    architectureNodes: z.array(z.string()).optional(),
    showArchitecture: z.boolean().optional(),
    results: z.array(z.string()),
    role: z.string().optional(),
    keyDecisionsImage: z.string().optional(),
    keyDecisionsImageCaption: z.string().optional(),
    coverImage: z.string().optional(),
    coverImageFit: z.enum(["cover", "contain"]).default("cover"),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    terminalCommand: z.string(),
    terminalLines: z.array(z.string()),
    filters: z.array(z.enum(["DevOps", "AI", "Cloud"])),
    github: z.string().optional(),
    liveDemo: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    accent: z.string(),
    comingSoon: z.boolean().default(true),
    coverIcon: z.enum(["layers", "fork", "route", "search"]),
    coverVariant: z.enum(["gradient", "terminal"]).default("gradient"),
    terminalCommand: z.string().optional(),
    terminalLines: z.array(z.string()).optional(),
    categories: z.array(z.string()),
  }),
});

export const collections = { projects, blog };
