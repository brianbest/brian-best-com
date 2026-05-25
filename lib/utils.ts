import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date)
}

/**
 * formatTerminalDate — lowercase month, e.g. "may 18, 2026"
 * Matches the prototype's date style.
 *
 * Post frontmatter dates are date-only ("YYYY-MM-DD"), which JS parses as UTC
 * midnight. We format in UTC so the calendar day never shifts back in a
 * negative-offset timezone (which had been rendering "may 19" for 2026-05-20).
 */
export function formatTerminalDate(dateString: string): string {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString
  const formatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date)
  return formatted.toLowerCase()
}

/**
 * slugify — lowercase, strip non-alphanumerics → hyphens.
 * Used by extractHeadings and the markdown heading renderer
 * so anchor IDs match.
 * e.g. "Why a separate harness" → "why-a-separate-harness"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s]+/g, "-")
    .replace(/-+/g, "-")
}
