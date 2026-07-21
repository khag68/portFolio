# Portfolio

A professional, minimalist single-page developer portfolio built with the Next.js App Router. Features smooth Framer Motion animations, light/dark mode, English/French internationalization, a secure contact form, a spotlight cursor, and navbar scrollspy.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + shadcn/ui (Base UI primitives)
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Forms & Validation:** react-hook-form + Zod (shared client/server schema)
- **Email:** Resend
- **Theming:** next-themes (light/dark)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3002](http://localhost:3002).

## Environment Variables

The contact form validates without any config, but to actually deliver email add these in **Project Settings → Vars**:

| Variable            | Required | Description                                                        |
| ------------------- | -------- | ------------------------------------------------------------------ |
| `RESEND_API_KEY`    | Yes      | Your Resend API key. Without it, the form shows a friendly error.  |
| `CONTACT_TO_EMAIL`  | No       | Recipient address for incoming messages.                           |
| `CONTACT_FROM_EMAIL`| No       | Verified sender address (must be a domain verified in Resend).     |

## Project Structure

```
app/
  layout.tsx              # Fonts, metadata, providers, <html> theming
  globals.css             # Design tokens (light + soft-dark palettes)
  page.tsx                # Server Component — composes all sections
  actions/
    contact.ts            # Server action: Zod re-validation + Resend send
components/
  providers.tsx           # ThemeProvider + LanguageProvider wrapper
  ui/                     # shadcn primitives (button, card, badge, tabs)
  portfolio/
    navbar.tsx            # Glass nav, scrollspy, theme + language toggles
    hero.tsx              # Animated hero with staggered entrance
    about.tsx             # About section
    skills.tsx            # Staggered skill badge grid
    projects.tsx          # Hover-animated project cards
    experience.tsx        # Tabbed experience timeline
    contact.tsx           # Contact form (react-hook-form + Zod)
    footer.tsx            # Contact CTA + social links
    section-heading.tsx   # Reusable numbered heading
    reveal.tsx            # Scroll-reveal wrapper
    brand-icons.tsx       # Inline GitHub/LinkedIn SVGs
    cursor-glow.tsx       # Spotlight glow cursor follower
    scroll-to-top.tsx     # Floating back-to-top button
    theme-toggle.tsx      # Sun/moon light-dark switch
    language-toggle.tsx   # EN/FR switch
lib/
  animations.ts           # Shared Framer Motion variants
  portfolio-data.ts       # All content + section IDs
  contact-schema.ts       # Shared Zod schema (client + server)
  i18n/
    context.tsx           # LanguageProvider + useI18n hook
    dictionaries.ts       # EN/FR translation dictionaries
```

## Features

### Internationalization (EN/FR)

A lightweight React context (`lib/i18n/context.tsx`) reads from type-checked dictionaries. The navbar toggle switches language instantly with no reload and persists the choice in a cookie. English is the default.

### Theming

`next-themes` drives light/dark mode with matching OKLCH palettes defined in `globals.css`. The sun/moon toggle lives in the navbar.

### Contact Form

`lib/contact-schema.ts` defines a single Zod schema used both for live client-side validation (react-hook-form) and as the security boundary inside the `sendContactMessage` server action. Includes a honeypot field, HTML escaping, and `replyTo`.

### Motion & Effects

- **Reusable variants** in `lib/animations.ts` (`fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer`) keep animation consistent across sections.
- **Scrollspy** highlights the active section in the navbar via `IntersectionObserver`, with an animated pill indicator (shared `layoutId`).
- **Spotlight cursor** trails a soft pastel glow (disabled on touch / reduced-motion).
- **Scroll-to-top** button fades in after scrolling.

## Customization

Edit `lib/portfolio-data.ts` for your name, projects, experience, and links, and update the copy in `lib/i18n/dictionaries.ts` for both languages. Drop your `resume.pdf` in `/public`.

## Deploy

Deploy to Vercel and add the environment variables above in your project settings.
