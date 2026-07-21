'use client'

import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/portfolio/brand-icons'
import { useI18n } from '@/lib/i18n/context'
import { profile } from '@/lib/portfolio-data'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground sm:items-start">
          <p>
            © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
          </p>
          <p className="font-mono text-xs">{t.footer.builtWith}</p>
        </div>

        <div className="flex items-center gap-2">
          <FooterLink href={profile.socials.github} label="GitHub">
            <GithubIcon className="size-5" />
          </FooterLink>
          <FooterLink href={profile.socials.linkedin} label="LinkedIn">
            <LinkedinIcon className="size-5" />
          </FooterLink>
          <FooterLink href={`mailto:${profile.email}`} label="Email">
            <Mail className="size-5" />
          </FooterLink>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
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
      className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      {children}
    </a>
  )
}
