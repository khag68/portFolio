'use client'

import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'
import { LanguageProvider } from '@/lib/i18n/context'
import type { Locale } from '@/lib/i18n/dictionaries'

/**
 * App-wide client providers: theme (next-themes, class strategy) and i18n.
 * Kept in a single client boundary so the rest of the tree can stay server-rendered.
 */
export function Providers({
  children,
  initialLocale,
}: {
  children: ReactNode
  initialLocale: Locale
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider initialLocale={initialLocale}>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}
