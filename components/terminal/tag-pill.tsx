import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TagPillProps {
  tag: string
  active?: boolean
  href?: string
  className?: string
}

/**
 * Terminal-style tag pill.
 * active → bg-term-accent + text-term-bg (red fill)
 * default → bg-term-bg-2 + border-term-rule + text-term-fg-soft
 */
export function TagPill({ tag, active = false, href, className }: TagPillProps) {
  const classes = cn(
    "inline-flex items-center font-mono text-xs px-[10px] py-[6px] border cursor-pointer transition-colors",
    active
      ? "bg-term-accent text-term-bg border-term-accent font-bold"
      : "bg-term-bg-2 text-term-fg-soft border-term-rule hover:border-term-accent hover:text-term-fg",
    className,
  )

  const label = tag === "*" ? "*" : `#${tag}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    )
  }

  return <span className={classes}>{label}</span>
}
