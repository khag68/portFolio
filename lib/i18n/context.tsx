'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  defaultLocale,
  getDictionary,
  locales,
  type Dictionary,
  type Locale,
} from '@/lib/i18n/dictionaries'

export const LOCALE_COOKIE = 'portfolio-locale'

type I18nContextValue = {
  locale: Locale
  /** The full dictionary for the active locale. */
  t: Dictionary
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = useCallback((next: Locale) => {
    if (!locales.includes(next)) return
    setLocaleState(next)
    // Persist for the next visit (1 year) so there's no flash on reload.
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'fr' : 'en')
  }, [locale, setLocale])

  // Keep the <html lang> attribute in sync for a11y + SEO.
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<I18nContextValue>(
    () => ({ locale, t: getDictionary(locale), setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

/** Access the active locale, its dictionary (`t`), and switchers. */
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within a LanguageProvider')
  }
  return ctx
}
