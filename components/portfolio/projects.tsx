'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/portfolio/brand-icons'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Badge } from '@/components/ui/badge'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useI18n } from '@/lib/i18n/context'
import { projects, type ProjectMeta } from '@/lib/portfolio-data'

export function Projects() {
  const { t } = useI18n()

  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        index="03"
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}

function ProjectCard({ project }: { project: ProjectMeta }) {
  const { t } = useI18n()
  const content = t.projects.items[project.id]

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
    >
      {/* Subtle glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {content.title}
        </h3>
        <div className="flex items-center gap-1">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${content.title} ${t.projects.githubLabel}`}
              className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <GithubIcon className="size-4" />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${content.title} ${t.projects.liveLabel}`}
              className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
        {content.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="rounded-full border-border font-mono text-xs font-normal text-muted-foreground"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </motion.article>
  )
}
