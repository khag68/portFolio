'use client'

import { SectionHeading } from '@/components/portfolio/section-heading'
import { Reveal } from '@/components/portfolio/reveal'
import { useI18n } from '@/lib/i18n/context'

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="01" title={t.about.title} />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="space-y-5 text-pretty leading-relaxed text-muted-foreground md:col-span-3">
          {t.about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="space-y-4 md:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-medium text-foreground">
              {t.about.factsTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {t.about.facts.map(([label, value]) => (
                <li key={label} className="flex justify-between gap-4">
                  <span className="text-muted-foreground/70">{label}</span>
                  <span className="text-right text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
