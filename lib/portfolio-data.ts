/**
 * Structural source of truth for portfolio content.
 *
 * Anything language-neutral lives here (links, tech names, dates, ids).
 * All translatable copy lives in `lib/i18n/dictionaries.ts`, keyed by the
 * ids defined below. Components merge the two at render time.
 */

export const profile = {
  name: 'Kouadio augustin',
  email: 'kouadioaugustin68@gmail.com',
  location: 'Abidjan, Côte d’Ivoire',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
}

/** Section ids used for nav anchors + dictionary lookups. */
export const sectionIds = [
  'about',
  'skills',
  'projects',
  'experience',
  'contact',
] as const

export type SectionId = (typeof sectionIds)[number]

/** Skill groups — category ids are localized via the dictionary. */
export type SkillCategoryId = 'languages' | 'frameworks' | 'styling' | 'tooling'

export const skills: { id: SkillCategoryId; items: string[] }[] = [
  { id: 'languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { id: 'frameworks', items: ['React', 'Next.js', 'Remix', 'Astro'] },
  {
    id: 'styling',
    items: ['Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Radix'],
  },
  { id: 'tooling', items: ['Vite', 'Git', 'Vitest', 'Figma'] },
]

/** Project meta — title/description come from the dictionary by `id`. */
export type ProjectId = 'lumen' | 'drift' | 'palette' | 'opendocs'

export type ProjectMeta = {
  id: ProjectId
  tags: string[]
  github?: string
  live?: string
  featured?: boolean
}

export const projects: ProjectMeta[] = [
  {
    id: 'lumen',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'tRPC'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 'drift',
    tags: ['React', 'Framer Motion', 'IndexedDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 'palette',
    tags: ['Next.js', 'Canvas', 'Zustand'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 'opendocs',
    tags: ['Astro', 'MDX', 'TypeScript'],
    github: 'https://github.com',
  },
]

/** Experience meta — role/type/description come from the dictionary by `id`. */
export type ExperienceId =
  | 'northwind'
  | 'pixelpeak'
  | 'freelance'
  | 'brightbyte'

export type ExperienceMeta = {
  id: ExperienceId
  company: string
  period: string
  stack: string[]
}

export const experiences: ExperienceMeta[] = [
  {
    id: 'northwind',
    company: 'Northwind Labs',
    period: '2023 — Present',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Storybook'],
  },
  {
    id: 'pixelpeak',
    company: 'Pixelpeak Studio',
    period: '2022 — 2023',
    stack: ['React', 'Framer Motion', 'GSAP'],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    period: '2021 — 2022',
    stack: ['Next.js', 'Sanity', 'Vercel'],
  },
  {
    id: 'brightbyte',
    company: 'BrightByte',
    period: '2021',
    stack: ['React', 'Jest', 'CSS Modules'],
  },
]
