"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

// ──────────────────────────────────────────────────────────────────────
// Fit band derivation
// The analysis text always contains one of these phrases (see /api/job-fit
// system prompt). We derive an *estimated* score + label from the phrase —
// the number is illustrative of the band, not a precise model output.
// ──────────────────────────────────────────────────────────────────────

export type FitBand = {
  level: "STRONG FIT" | "MODERATE FIT" | "NOT A FIT"
  label: string
  score: number
  /** bar fill, 0–100 */
  percent: number
}

export function deriveFitBand(analysis: string): FitBand | null {
  // Order matters: check the most specific phrase first.
  if (/NOT A FIT/i.test(analysis)) {
    return { level: "NOT A FIT", label: "WEAK MATCH", score: 3.0, percent: 30 }
  }
  if (/STRONG FIT/i.test(analysis)) {
    return { level: "STRONG FIT", label: "STRONG MATCH", score: 8.5, percent: 85 }
  }
  if (/MODERATE FIT/i.test(analysis)) {
    return { level: "MODERATE FIT", label: "WORTH A CALL", score: 6.0, percent: 60 }
  }
  return null
}

// ──────────────────────────────────────────────────────────────────────
// Best-effort markdown parse of the analysis into sections.
// The response uses **bold headers** and "- bullet" lines. We bucket
// bullets under whichever header they follow, then classify each section
// as "align" (positives) or "flag" (concerns/gaps) by header keywords.
// If nothing parses, callers fall back to rendering the raw text.
// ──────────────────────────────────────────────────────────────────────

type ParsedBullet = { label?: string; detail: string }
type ParsedSection = { heading: string; kind: "align" | "flag" | "neutral"; bullets: ParsedBullet[] }

const FLAG_HINTS = /(gap|concern|flag|weak|missing|caveat|watch|risk|lack|limitation|not\s+a\s+fit|stretch|grow)/i
const ALIGN_HINTS = /(align|strength|match|fit|why|where|qualif|experience|edge|pro|plus|advantage)/i

function classifyHeading(heading: string): "align" | "flag" | "neutral" {
  if (FLAG_HINTS.test(heading)) return "flag"
  if (ALIGN_HINTS.test(heading)) return "align"
  return "neutral"
}

/** Split a bullet "Backend depth — 12 years…" into label + detail. */
function splitBullet(raw: string): ParsedBullet {
  const text = raw.trim()
  // Try "**Label** rest", "Label: rest", or "Label — rest"
  const boldMatch = text.match(/^\*\*(.+?)\*\*[:\s—-]*\s*(.*)$/)
  if (boldMatch && boldMatch[2]) return { label: boldMatch[1].trim(), detail: boldMatch[2].trim() }

  const sepMatch = text.match(/^([^:—]{2,48}?)\s*[:—]\s+(.+)$/)
  if (sepMatch) return { label: sepMatch[1].trim(), detail: sepMatch[2].trim() }

  return { detail: text }
}

export function parseAnalysis(analysis: string): ParsedSection[] {
  const lines = analysis.split("\n")
  const sections: ParsedSection[] = []
  let current: ParsedSection | null = null

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) continue

    // Header forms: **Header**, ## Header, ### Header
    const boldHeader = line.match(/^\*\*(.+?)\*\*:?$/)
    const hashHeader = line.match(/^#{2,4}\s+(.+?):?$/)
    const heading = boldHeader?.[1] ?? hashHeader?.[1]

    if (heading) {
      current = { heading: heading.trim(), kind: classifyHeading(heading), bullets: [] }
      sections.push(current)
      continue
    }

    // Bullet forms: "- ", "* ", "• "
    const bulletMatch = line.match(/^[-*•]\s+(.+)$/)
    if (bulletMatch) {
      if (!current) {
        current = { heading: "", kind: "neutral", bullets: [] }
        sections.push(current)
      }
      current.bullets.push(splitBullet(bulletMatch[1]))
      continue
    }

    // A non-bullet, non-header line: treat as a standalone detail under current.
    // Strip a leading fit phrase line so it doesn't pollute the body.
    if (current) {
      current.bullets.push(splitBullet(line))
    }
  }

  // Only keep sections that actually have content.
  return sections.filter((s) => s.bullets.length > 0)
}

/** Render inline **bold** within a plain string. */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/)
    if (bold) {
      return (
        <strong key={i} className="text-term-fg font-semibold">
          {bold[1]}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}

// ──────────────────────────────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────────────────────────────

export function FitAssessment({
  analysis,
  className,
}: {
  analysis: string
  className?: string
}) {
  const band = deriveFitBand(analysis)
  const sections = parseAnalysis(analysis)
  const aligns = sections.filter((s) => s.kind === "align")
  const flags = sections.filter((s) => s.kind === "flag")
  const neutral = sections.filter((s) => s.kind === "neutral")
  // The structured layout is only "clean" if we found at least one classified group.
  const structured = aligns.length > 0 || flags.length > 0

  const [copied, setCopied] = useState(false)
  const copyAssessment = async () => {
    try {
      await navigator.clipboard.writeText(analysis)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard may be unavailable (insecure context) — fail silently.
    }
  }

  return (
    <div
      className={cn(
        "w-full bg-term-bg-2 border border-term-rule border-l-[3px] border-l-term-accent",
        className,
      )}
    >
      {/* ── Fit score band ── */}
      <div className="px-4 py-[14px] md:px-6 md:py-[18px] border-b border-term-rule md:flex md:items-center md:gap-6">
        <div className="md:shrink-0">
          <div className="font-mono text-[10px] md:text-[11px] text-term-fg-muted tracking-[0.08em] uppercase mb-1">
            Fit assessment
          </div>
          <div className="flex items-baseline justify-between md:block">
            <div className="font-sans text-[32px] md:text-[36px] font-extrabold text-term-fg tracking-[-0.025em] leading-none">
              {band ? band.score.toFixed(1) : "—"}
              <span className="text-term-fg-muted text-[18px] md:text-[22px] font-medium">/10</span>
              {band && (
                <span className="hidden md:inline-block ml-[14px] align-middle font-mono text-[13px] px-3 py-1 bg-term-accent text-term-bg font-bold tracking-[0.06em]">
                  {band.label}
                </span>
              )}
            </div>
            {band && (
              <span className="md:hidden font-mono text-[11px] px-[10px] py-1 bg-term-accent text-term-bg font-bold tracking-[0.05em]">
                {band.label}
              </span>
            )}
          </div>
        </div>

        {/* Bar + scale (desktop full scale, mobile simple bar) */}
        <div className="mt-[10px] md:mt-0 md:flex-1 md:ml-6">
          <div className="relative h-[6px] md:h-2 bg-term-bg border border-term-rule">
            <div
              className="absolute left-0 top-0 bottom-0 bg-term-accent"
              style={{ width: `${band ? band.percent : 0}%` }}
            />
            {band && (
              <div
                className="hidden md:block absolute -top-[3px] w-[2px] h-[14px] bg-term-fg"
                style={{ left: `${band.percent}%` }}
              />
            )}
          </div>
          <div className="hidden md:flex justify-between font-mono text-[10px] text-term-fg-muted mt-[6px]">
            <span>poor fit</span>
            <span>worth a call</span>
            <span>strong</span>
            <span>exceptional</span>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="px-[18px] py-4 md:px-7 md:py-6 font-sans text-term-fg-soft text-[14px] md:text-[15px] leading-[1.6]">
        {structured ? (
          <>
            {aligns.length > 0 && (
              <Section
                title="## Where Brian aligns"
                rows={aligns.flatMap((s) => s.bullets)}
                marker="✓"
                markerClass="text-term-green"
              />
            )}
            {flags.length > 0 && (
              <Section
                title="## Worth flagging"
                rows={flags.flatMap((s) => s.bullets)}
                marker="!"
                markerClass="text-term-yellow"
                className="mt-6"
              />
            )}
            {/* Any neutral/un-classified sections render plainly below. */}
            {neutral.map((s, i) => (
              <div key={i} className="mt-6">
                {s.heading && (
                  <div className="font-mono text-[12px] text-term-accent tracking-[0.08em] uppercase mb-3">
                    {s.heading}
                  </div>
                )}
                {s.bullets.map((b, j) => (
                  <p key={j} className="mb-2 last:mb-0">
                    {b.label && <strong className="text-term-fg font-semibold">{b.label}: </strong>}
                    {renderInline(b.detail)}
                  </p>
                ))}
              </div>
            ))}
          </>
        ) : (
          // Fallback: render the analysis text cleanly, preserving line breaks
          // and bolding **headers**. Never crashes on unexpected structure.
          <RawAnalysis analysis={analysis} />
        )}

        {/* ── Next step callout ── */}
        <div className="mt-6 px-[14px] py-3 md:px-[18px] md:py-4 bg-term-accent-soft border-l-[3px] border-term-accent">
          <div className="font-mono text-[10px] md:text-[11px] text-term-accent tracking-[0.06em] uppercase mb-[6px]">
            Next step
          </div>
          <div className="font-sans text-[13.5px] md:text-[15px] text-term-fg leading-[1.55]">
            {band?.level === "NOT A FIT"
              ? "Probably not the closest match — but keep asking; I have plenty more context, or reach out and Brian will keep you in mind."
              : "If this looks right, I can put you in touch with Brian directly. He usually responds within a day."}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href="https://www.linkedin.com/in/brianbest"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] px-[14px] py-2 bg-term-accent text-term-bg font-bold no-underline hover:opacity-90 transition-opacity"
            >
              → Hand off to Brian
            </a>
            <button
              type="button"
              onClick={copyAssessment}
              className="font-mono text-[12px] px-[14px] py-2 bg-transparent border border-term-rule text-term-fg-soft hover:text-term-fg hover:border-term-accent transition-colors cursor-pointer"
            >
              {copied ? "✓ copied" : "copy this assessment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({
  title,
  rows,
  marker,
  markerClass,
  className,
}: {
  title: string
  rows: ParsedBullet[]
  marker: string
  markerClass: string
  className?: string
}) {
  return (
    <div className={className}>
      <div className="font-mono text-[10.5px] md:text-[12px] text-term-accent tracking-[0.08em] uppercase mb-3">
        {title}
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className={cn(
            "flex gap-[10px] md:gap-[14px] py-[7px] md:py-[10px]",
            i < rows.length - 1 && "border-b border-term-rule-soft",
          )}
        >
          <div className={cn("font-mono text-[11px] pt-[2px] min-w-[16px]", markerClass)}>{marker}</div>
          <div className="flex-1">
            {row.label && (
              <div className="font-sans text-[13px] md:text-[14.5px] text-term-fg font-semibold">
                {row.label}
              </div>
            )}
            <div
              className={cn(
                "font-sans text-[12.5px] md:text-[14px] text-term-fg-soft leading-[1.5]",
                row.label && "mt-[2px]",
              )}
            >
              {renderInline(row.detail)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function RawAnalysis({ analysis }: { analysis: string }) {
  return (
    <div className="space-y-2">
      {analysis.split("\n").map((line, i) => {
        const trimmed = line.trim()
        if (!trimmed) return <div key={i} className="h-2" />

        const header = trimmed.match(/^(?:\*\*(.+?)\*\*|#{2,4}\s+(.+?)):?$/)
        if (header) {
          return (
            <div
              key={i}
              className="font-mono text-[12px] text-term-accent tracking-[0.08em] uppercase mt-5 first:mt-0 mb-1"
            >
              {header[1] ?? header[2]}
            </div>
          )
        }

        const bullet = trimmed.match(/^[-*•]\s+(.+)$/)
        if (bullet) {
          return (
            <div key={i} className="flex gap-[10px]">
              <span className="text-term-accent shrink-0">·</span>
              <span>{renderInline(bullet[1])}</span>
            </div>
          )
        }

        return <p key={i}>{renderInline(trimmed)}</p>
      })}
    </div>
  )
}
