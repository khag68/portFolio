'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const SIZE = 384 // px — diameter of the soft glow (24rem)

/**
 * A soft pastel glow that trails the cursor, plus a small precise dot.
 * Purely decorative and pointer-events-none, so it never blocks clicks.
 * Disabled on touch devices and when the user prefers reduced motion.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)

  const x = useMotionValue(-SIZE)
  const y = useMotionValue(-SIZE)

  // Springs give the glow its smooth, fluid lag; the dot stays snappier.
  const glowX = useSpring(x, { damping: 30, stiffness: 180, mass: 0.6 })
  const glowY = useSpring(y, { damping: 30, stiffness: 180, mass: 0.6 })
  const dotX = useSpring(x, { damping: 28, stiffness: 700, mass: 0.4 })
  const dotY = useSpring(y, { damping: 28, stiffness: 700, mass: 0.4 })

  // Offset the glow so it's centered on the pointer.
  const glowLeft = useTransform(glowX, (v) => v - SIZE / 2)
  const glowTop = useTransform(glowY, (v) => v - SIZE / 2)
  const dotLeft = useTransform(dotX, (v) => v - 4)
  const dotTop = useTransform(dotY, (v) => v - 4)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (!finePointer || reducedMotion) return

    setEnabled(true)
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]">
      <motion.div
        style={{
          left: glowLeft,
          top: glowTop,
          width: SIZE,
          height: SIZE,
          background:
            'radial-gradient(circle at center, var(--primary), transparent 60%)',
        }}
        className="absolute rounded-full opacity-[0.12] blur-2xl"
      />
      <motion.div
        style={{ left: dotLeft, top: dotTop }}
        className="absolute size-2 rounded-full bg-primary/70 mix-blend-difference"
      />
    </div>
  )
}
