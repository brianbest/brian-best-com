import type React from "react"

interface PromptProps {
  kind?: "$" | "#" | ">"
  children?: React.ReactNode
}

/**
 * Inline terminal prompt line.
 * $ → term-accent (red)
 * # → term-yellow
 * > → term-green
 */
export function Prompt({ kind = "$", children }: PromptProps) {
  const sigil =
    kind === "$"
      ? "text-term-accent"
      : kind === "#"
        ? "text-term-yellow"
        : "text-term-green"

  return (
    <div className="flex gap-[10px] font-mono text-term-fg-soft text-sm leading-[1.6]">
      <span className={`${sigil} select-none`}>{kind}</span>
      <span>{children}</span>
    </div>
  )
}
