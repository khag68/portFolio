'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/portfolio/brand-icons'
import { Button } from '@/components/ui/button'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useI18n } from '@/lib/i18n/context'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  const { t } = useI18n()
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-16"
    >
      {/* Soft pastel glow accents — purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 size-[28rem] rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 size-[24rem] rounded-full bg-accent/10 blur-[120px]"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-sm text-muted-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {t.hero.greeting} {profile.name.split(' ')[0]}.
          <br />
          <span className="text-muted-foreground">
            {t.hero.lineLead}{' '}
            <span className="font-serif italic text-primary">
              {t.hero.emphasis}
            </span>{' '}
            {t.hero.lineTail}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Button  size="lg" className="gap-2 rounded-full">
            <a href="#projects">
              {t.hero.viewWork}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-transparent"
          >
            <a href="#contact">{t.hero.getInTouch}</a>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </span>
          <div className="flex items-center gap-1">
            <SocialIcon href={profile.socials.github} label="GitHub">
              <GithubIcon className="size-4" />
            </SocialIcon>
            <SocialIcon href={profile.socials.linkedin} label="LinkedIn">
              <LinkedinIcon className="size-4" />
            </SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} label="Email">
              <Mail className="size-4" />
            </SocialIcon>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
    >
      {children}
    </a>
  )
}
