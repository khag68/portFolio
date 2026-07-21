'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Badge } from '@/components/ui/badge'
import { scaleIn, staggerContainer } from '@/lib/animations'
import { useI18n } from '@/lib/i18n/context'
import { skills } from '@/lib/portfolio-data'

export function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        index="02"
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.id}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
          >
            <h3 className="mb-4 text-sm font-medium text-foreground">
              {t.skills.categories[group.id]}
            </h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {group.items.map((item) => (
                <motion.li key={item} variants={scaleIn}>
                  <Badge
                    variant="secondary"
                    className="cursor-default rounded-full border border-border bg-secondary/60 px-3 py-1 text-sm font-normal text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </Badge>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </section>
  )
}
