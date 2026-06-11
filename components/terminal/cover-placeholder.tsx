import type React from "react"

interface CoverPlaceholderProps {
  label: string
  height?: number
}

/**
 * Diagonal stripe placeholder for cover image slots.
 * Dark variant — matches bTokens theme.
 */
export function CoverPlaceholder({ label, height = 200 }: CoverPlaceholderProps) {
  return (
    <div
      className="w-full flex items-center justify-center font-mono text-[12px] tracking-[0.06em] uppercase border border-term-rule text-term-fg-soft"
      style={{
        height,
        background: "repeating-linear-gradient(135deg, #1c1916 0 14px, #23201c 14px 28px)",
      }}
    >
      <span className="bg-term-bg px-[10px] py-[4px] border border-term-rule">{label}</span>
    </div>
  )
}
