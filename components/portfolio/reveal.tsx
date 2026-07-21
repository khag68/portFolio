'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, revealOnce } from '@/lib/animations'

type RevealProps = {
  children: ReactNode
  variants?: Variants
  className?: string
  /** Optional delay (seconds) for fine-tuning sequencing. */
  delay?: number
}

/**
 * Lightweight client wrapper that reveals its children once they scroll
 * into view, using the shared animation variants. Keep heavy page content
 * in Server Components and wrap only the pieces that need motion.
 */
export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      transition={delay ? { delay } : undefined}
      {...revealOnce}
    >
      {children}
    </motion.div>
  )
}
