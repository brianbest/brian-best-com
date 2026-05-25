import type React from "react"

interface CalloutProps {
  label?: string
  children: React.ReactNode
}

/**
 * Accent-left callout box.
 * bg-term-accent-soft, 3px left accent border.
 * Mono uppercase label in accent with "!" prefix.
 * Body in Geist (font-sans).
 */
export function Callout({ label = "NOTE TO FUTURE SELF", children }: CalloutProps) {
  return (
    <div className="my-8 px-[22px] py-[18px] bg-term-accent-soft border-l-[3px] border-term-accent font-sans">
      <div className="font-mono text-[11px] text-term-accent tracking-[0.08em] uppercase mb-[6px]">
        <span className="mr-[6px]">!</span>
        {label}
      </div>
      <div className="text-[17px] text-term-fg leading-[1.6]">{children}</div>
    </div>
  )
}
