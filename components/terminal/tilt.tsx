"use client"

import { useRef, type ReactNode } from "react"

interface TiltProps {
  children: ReactNode
  className?: string
  /** Max rotation in degrees. Keep small — this is a nudge, not a carnival. */
  max?: number
}

/**
 * Subtle 3D tilt that follows the pointer. Writes transforms directly to the
 * DOM via requestAnimationFrame so pointer moves never trigger React renders.
 * No-ops for touch input and prefers-reduced-motion.
 */
export function Tilt({ children, className, max = 3 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef<number | null>(null)

  const reset = () => {
    if (frame.current != null) cancelAnimationFrame(frame.current)
    const el = ref.current
    if (el) {
      el.style.transform = ""
      el.style.transition = "transform 0.35s ease"
    }
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5

    if (frame.current != null) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      el.style.transition = "transform 0.08s ease-out"
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`
    })
  }

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  )
}
