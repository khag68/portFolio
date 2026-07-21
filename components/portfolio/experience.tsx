'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { useI18n } from '@/lib/i18n/context'
import { experiences } from '@/lib/portfolio-data'

export function Experience() {
  const { t } = useI18n()
  const [active, setActive] = useState(experiences[0].id)

  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        index="04"
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <Tabs
        value={active}
        onValueChange={(value) =>
          setActive(value as (typeof experiences)[number]['id'])
        }
        orientation="vertical"
        className="gap-8 md:flex-row"
      >
        {/* Tab list — companies */}
        <TabsList
          variant="line"
          className="h-fit w-full shrink-0 gap-1 overflow-x-auto md:w-56 md:flex-col"
        >
          {experiences.map((exp) => (
            <TabsTrigger
              key={exp.id}
              value={exp.id}
              className="justify-start rounded-md px-3 py-2 text-left md:w-full"
            >
              {exp.company}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Panels */}
        <div className="relative flex-1">
          {experiences.map((exp) => {
            const content = t.experience.items[exp.id]
            return (
              <TabsContent key={exp.id} value={exp.id}>
                <AnimatePresence mode="wait">
                  {active === exp.id ? (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {content.role}
                        </h3>
                        <span className="text-primary">· {exp.company}</span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                        <span>{exp.period}</span>
                        <span aria-hidden="true">•</span>
                        <span>{content.type}</span>
                      </div>
                      <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                        {content.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-full bg-secondary/60 font-normal text-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </TabsContent>
            )
          })}
        </div>
      </Tabs>
    </section>
  )
}
