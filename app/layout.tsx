import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import { cookies } from 'next/headers'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'
import { LOCALE_COOKIE } from '@/lib/i18n/context'
import { defaultLocale, locales, type Locale } from '@/lib/i18n/dictionaries'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
// Elegant serif used for tasteful italic accents in headings.
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Alex Rivera — Front-End Engineer',
  description:
    'Front-end engineer crafting accessible, performant, and delightful web experiences with React, Next.js, and TypeScript.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f5' },
    { media: '(prefers-color-scheme: dark)', color: '#1c1f26' },
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Read the saved locale so the first paint already matches the user's choice.
  const cookieStore = await cookies()
  const saved = cookieStore.get(LOCALE_COOKIE)?.value
  const initialLocale: Locale = locales.includes(saved as Locale)
    ? (saved as Locale)
    : defaultLocale

  return (
    <html
      lang={initialLocale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} scroll-smooth bg-background`}
    >
      <body className="font-sans antialiased">
        <Providers initialLocale={initialLocale}>
          {children}
          <Toaster position="bottom-right" />
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
