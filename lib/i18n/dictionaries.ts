/**
 * EN / FR translation dictionaries.
 *
 * `en` is the source of truth — its shape defines the `Dictionary` type,
 * so `fr` is type-checked to have exactly the same keys.
 */

import type {
  ExperienceId,
  ProjectId,
  SectionId,
  SkillCategoryId,
} from '@/lib/portfolio-data'

export const locales = ['en', 'fr'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
}

const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    resume: 'Resume',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  } satisfies Record<SectionId | 'resume' | 'openMenu' | 'closeMenu', string>,
  toggles: {
    theme: 'Toggle theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    language: 'Change language',
  },
  hero: {
    badge: 'Available for new projects',
    greeting: "Hi, I'm",
    lineLead: 'I craft',
    emphasis: 'thoughtful',
    lineTail: 'interfaces.',
    tagline:
      "I build accessible, fast, and delightful interfaces for the web. I'm a front-end engineer focused on the details that make products feel fast, accessible, and a little bit magical.",
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
  },
  about: {
    title: 'About',
    paragraphs: [
      'I am a front-end engineer who loves living at the intersection of design and engineering. For me, a great interface is one that feels effortless — fast to load, easy to navigate, and accessible to everyone.',
      'My journey started with a curiosity for how things work on the web, and grew into a genuine craft. Today I spend my time building design systems, polishing micro-interactions, and obsessing over the small details that make a product feel alive.',
      "When I am not coding, you will find me sketching UI ideas, reading about typography, or exploring the city with a camera in hand.",
    ],
    factsTitle: 'A few quick facts',
    facts: [
      ['Focus', 'Front-end & design systems'],
      ['Experience', '3+ years shipping products'],
      ['Approach', 'Accessibility & performance first'],
      ['Currently', 'Open to new opportunities'],
    ] as [string, string][],
  },
  skills: {
    title: 'Skills & tools',
    subtitle:
      'The technologies I reach for to turn ideas into polished, production-ready interfaces.',
    categories: {
      languages: 'Languages',
      frameworks: 'Frameworks',
      styling: 'Styling & UI',
      tooling: 'Tooling',
    } satisfies Record<SkillCategoryId, string>,
  },
  projects: {
    title: 'Selected projects',
    subtitle:
      "A handful of things I've designed and built. Each one taught me something new.",
    githubLabel: 'on GitHub',
    liveLabel: 'live site',
    items: {
      lumen: {
        title: 'Lumen Analytics',
        description:
          'A real-time analytics dashboard with streaming charts, saved views, and a fully keyboard-navigable command palette.',
      },
      drift: {
        title: 'Drift — Habit Tracker',
        description:
          'A calm habit tracker with offline support, smooth micro-interactions, and a focus on accessible color contrast.',
      },
      palette: {
        title: 'Palette Studio',
        description:
          'An OKLCH-based color system generator that exports design tokens to CSS, Tailwind, and Figma.',
      },
      opendocs: {
        title: 'Open Docs',
        description:
          'A documentation theme with MDX, instant search, and zero-config dark mode used by several open-source projects.',
      },
    } satisfies Record<ProjectId, { title: string; description: string }>,
  },
  experience: {
    title: 'Experience',
    subtitle:
      'Internships, work-study programs, and freelance work that shaped how I build.',
    items: {
      northwind: {
        role: 'Front-End Engineer',
        type: 'Full-time',
        description:
          'Lead the design-system effort and ship customer-facing features. Improved Lighthouse performance by 38% and drove accessibility to WCAG AA across the product.',
      },
      pixelpeak: {
        role: 'Front-End Developer (Work-study)',
        type: 'Apprenticeship',
        description:
          'Built marketing sites and interactive product pages for agency clients, focusing on smooth animation and responsive layouts.',
      },
      freelance: {
        role: 'Web Developer',
        type: 'Freelance',
        description:
          'Partnered with small businesses to design and develop fast, SEO-friendly websites from concept to deployment.',
      },
      brightbyte: {
        role: 'Junior Developer Intern',
        type: 'Internship',
        description:
          'First professional role — contributed UI components and fixed bugs in a React codebase while learning testing best practices.',
      },
    } satisfies Record<
      ExperienceId,
      { role: string; type: string; description: string }
    >,
  },
  contact: {
    title: "Let's build something together",
    subtitle:
      'I am currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, drop me a message below.',
    name: 'Name',
    namePlaceholder: 'Jane Doe',
    email: 'Email',
    emailPlaceholder: 'jane@example.com',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project or just say hello…',
    send: 'Send message',
    sending: 'Sending…',
    successTitle: 'Message sent!',
    successBody: "Thanks for reaching out — I'll get back to you soon.",
    errorTitle: 'Something went wrong',
    errorBody: 'Your message could not be sent. Please try again later.',
    orEmail: 'Or email me directly',
    validation: {
      nameMin: 'Please enter your name (at least 2 characters).',
      emailInvalid: 'Please enter a valid email address.',
      messageMin: 'Your message should be at least 10 characters.',
      messageMax: 'Your message is too long (1000 characters max).',
    },
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with Next.js, Tailwind & Framer Motion',
    backToTop: 'Back to top',
  },
}

const fr: typeof en = {
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    experience: 'Expérience',
    contact: 'Contact',
    resume: 'CV',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  toggles: {
    theme: 'Changer de thème',
    light: 'Clair',
    dark: 'Sombre',
    system: 'Système',
    language: 'Changer de langue',
  },
  hero: {
    badge: 'Disponible pour de nouveaux projets',
    greeting: 'Bonjour, je suis',
    lineLead: 'Je conçois des',
    emphasis: 'interfaces',
    lineTail: 'soignées.',
    tagline:
      "Je crée des interfaces web accessibles, rapides et agréables. Je suis un ingénieur front-end attentif aux détails qui rendent les produits rapides, accessibles et un brin magiques.",
    viewWork: 'Voir mes projets',
    getInTouch: 'Me contacter',
  },
  about: {
    title: 'À propos',
    paragraphs: [
      "Je suis un ingénieur front-end qui adore évoluer à la croisée du design et du développement. Pour moi, une bonne interface est celle qui paraît évidente — rapide à charger, facile à parcourir et accessible à tous.",
      "Mon parcours a commencé par la curiosité de comprendre le fonctionnement du web, et s'est transformé en un véritable savoir-faire. Aujourd'hui, je construis des design systems, peaufine les micro-interactions et soigne les petits détails qui donnent vie à un produit.",
      "Quand je ne code pas, je dessine des idées d'interfaces, je lis sur la typographie ou j'explore la ville un appareil photo à la main.",
    ],
    factsTitle: 'Quelques infos rapides',
    facts: [
      ['Spécialité', 'Front-end & design systems'],
      ['Expérience', '3+ ans à livrer des produits'],
      ['Approche', "Accessibilité & performance d'abord"],
      ['Actuellement', 'Ouvert à de nouvelles opportunités'],
    ],
  },
  skills: {
    title: 'Compétences & outils',
    subtitle:
      'Les technologies que j’utilise pour transformer des idées en interfaces soignées et prêtes pour la production.',
    categories: {
      languages: 'Langages',
      frameworks: 'Frameworks',
      styling: 'Style & UI',
      tooling: 'Outils',
    },
  },
  projects: {
    title: 'Projets sélectionnés',
    subtitle:
      "Quelques réalisations que j'ai conçues et développées. Chacune m'a appris quelque chose de nouveau.",
    githubLabel: 'sur GitHub',
    liveLabel: 'site en ligne',
    items: {
      lumen: {
        title: 'Lumen Analytics',
        description:
          "Un tableau de bord d'analytics en temps réel avec des graphiques en streaming, des vues enregistrées et une palette de commandes entièrement navigable au clavier.",
      },
      drift: {
        title: 'Drift — Suivi d’habitudes',
        description:
          'Un suivi d’habitudes apaisant avec support hors-ligne, micro-interactions fluides et un soin particulier porté au contraste des couleurs.',
      },
      palette: {
        title: 'Palette Studio',
        description:
          'Un générateur de système de couleurs basé sur OKLCH qui exporte des design tokens vers CSS, Tailwind et Figma.',
      },
      opendocs: {
        title: 'Open Docs',
        description:
          'Un thème de documentation avec MDX, recherche instantanée et mode sombre sans configuration, utilisé par plusieurs projets open-source.',
      },
    },
  },
  experience: {
    title: 'Expérience',
    subtitle:
      "Stages, alternances et missions freelance qui ont façonné ma manière de construire.",
    items: {
      northwind: {
        role: 'Ingénieur Front-End',
        type: 'CDI',
        description:
          "Pilote de l'effort sur le design system et livraison de fonctionnalités clients. Performance Lighthouse améliorée de 38 % et accessibilité portée au niveau WCAG AA sur tout le produit.",
      },
      pixelpeak: {
        role: 'Développeur Front-End (Alternance)',
        type: 'Alternance',
        description:
          'Création de sites vitrines et de pages produit interactives pour des clients d’agence, avec un focus sur l’animation fluide et les mises en page responsives.',
      },
      freelance: {
        role: 'Développeur Web',
        type: 'Freelance',
        description:
          'Collaboration avec de petites entreprises pour concevoir et développer des sites rapides et optimisés pour le SEO, du concept au déploiement.',
      },
      brightbyte: {
        role: 'Développeur Junior (Stage)',
        type: 'Stage',
        description:
          "Premier poste professionnel — contribution à des composants UI et correction de bugs dans une base de code React tout en apprenant les bonnes pratiques de test.",
      },
    },
  },
  contact: {
    title: 'Construisons quelque chose ensemble',
    subtitle:
      'Je suis actuellement ouvert à de nouvelles opportunités et collaborations. Une question ou simplement envie de dire bonjour ? Laissez-moi un message ci-dessous.',
    name: 'Nom',
    namePlaceholder: 'Jean Dupont',
    email: 'E-mail',
    emailPlaceholder: 'jean@exemple.com',
    message: 'Message',
    messagePlaceholder: 'Parlez-moi de votre projet ou dites simplement bonjour…',
    send: 'Envoyer le message',
    sending: 'Envoi…',
    successTitle: 'Message envoyé !',
    successBody: 'Merci de votre message — je vous répondrai très vite.',
    errorTitle: 'Une erreur est survenue',
    errorBody: "Votre message n'a pas pu être envoyé. Veuillez réessayer plus tard.",
    orEmail: 'Ou écrivez-moi directement',
    validation: {
      nameMin: 'Veuillez saisir votre nom (au moins 2 caractères).',
      emailInvalid: 'Veuillez saisir une adresse e-mail valide.',
      messageMin: 'Votre message doit contenir au moins 10 caractères.',
      messageMax: 'Votre message est trop long (1000 caractères maximum).',
    },
  },
  footer: {
    rights: 'Tous droits réservés.',
    builtWith: 'Conçu avec Next.js, Tailwind & Framer Motion',
    backToTop: 'Haut de page',
  },
}

export type Dictionary = typeof en

export const dictionaries: Record<Locale, Dictionary> = { en, fr }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}
