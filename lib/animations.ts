import type { Variants, Transition } from 'framer-motion'

/**
 * Shared animation vocabulary for the whole portfolio.
 * Importing these everywhere keeps motion consistent and easy to tune in one place.
 */

// A soft, slightly springy ease that feels smooth rather than mechanical.
export const easeSmooth: Transition['ease'] = [0.22, 1, 0.36, 1]

/** Fade up — the default "enter on scroll" for most blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
}

/** Simple fade — for backgrounds and subtle elements. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeSmooth } },
}

/** Scale-in — nice for cards, avatars, and badges. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeSmooth },
  },
}

/**
 * Stagger container — wrap a list of items with this and give each child
 * one of the variants above to get a cascading reveal.
 */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

/**
 * Convenience props for a "reveal once when scrolled into view" element.
 * Spread onto any <motion.* /> element: {...revealOnce}
 */
export const revealOnce = {
  initial: 'hidden' as const,
  whileInView: 'show' as const,
  viewport: { once: true, amount: 0.2 },
}
