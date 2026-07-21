'use client'

import { Languages } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import { cn } from '@/lib/utils'

/**
 * Compact EN/FR switch. Clicking toggles the locale and shows the
 * language the user will switch *to* as a short label.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale, t } = useI18n()
  const next = locale === 'en' ? 'FR' : 'EN'

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.toggles.language}
      title={t.toggles.language}
      className={cn(
        'inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary',
        className,
      )}
    >
      <Languages className="size-4" aria-hidden="true" />
      <span className="font-mono">{next}</span>
    </button>
  )
}
