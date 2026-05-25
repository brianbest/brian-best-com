"use client"

import { useState } from "react"
import { highlight } from "@/lib/highlight"

interface CodeBlockProps {
  code: string
  title?: string
  lang?: string
  showLineNumbers?: boolean
  footerMeta?: string
  dotColor?: string
}

/**
 * Terminal-style framed code block.
 * - Header: colored dot + title, copy/raw actions
 * - Optional line-number gutter
 * - Syntax-highlighted <pre> (dark theme)
 * - overflow-x-auto for long lines
 * - Optional footer meta bar
 * - Working clipboard copy with "copied" flash state
 */
export function CodeBlock({
  code,
  title,
  lang,
  showLineNumbers = false,
  footerMeta,
  dotColor,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const resolvedDotColor = dotColor ?? "#ef4444" // term-accent

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard not available
    }
  }

  const lines = code.split("\n")
  const lineCount = lines.length
  const displayTitle = title ?? (lang ? `${lang}` : "")

  return (
    <div className="my-6 bg-term-bg-2 border border-term-rule font-mono text-[13px] overflow-hidden">
      {/* Header bar */}
      <div className="px-4 py-[10px] bg-term-bg-3 border-b border-term-rule flex items-center justify-between">
        <span className="flex items-center gap-2 text-[11px] text-term-fg-soft">
          <span
            className="inline-block w-[6px] h-[6px]"
            style={{ background: resolvedDotColor }}
          />
          {displayTitle && <span>{displayTitle}</span>}
        </span>
        <span className="flex items-center gap-3 text-[11px] text-term-fg-muted">
          <button
            onClick={handleCopy}
            className="hover:text-term-fg transition-colors cursor-pointer"
            type="button"
          >
            {copied ? "copied!" : "copy"}
          </button>
          <a
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(code)}`}
            download={title ? `${title.split("·").pop()?.trim() ?? "code"}.txt` : "code.txt"}
            className="hover:text-term-fg transition-colors"
          >
            raw
          </a>
        </span>
      </div>

      {/* Body */}
      <div className="flex overflow-x-auto">
        {showLineNumbers && (
          <div
            className="py-[18px] px-0 pl-[14px] text-right text-term-fg-muted border-r border-term-rule select-none"
            style={{ minWidth: 44, fontSize: 12.5 }}
          >
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i} className="leading-[1.65]">
                {i + 1}
              </div>
            ))}
          </div>
        )}
        <pre
          className="m-0 flex-1 leading-[1.65] overflow-x-auto text-[13px]"
          style={{ padding: showLineNumbers ? "18px 24px" : "18px 24px" }}
        >
          {highlight(code, "dark")}
        </pre>
      </div>

      {/* Footer meta */}
      {footerMeta && (
        <div className="px-4 py-[10px] bg-term-bg-3 border-t border-term-rule flex items-center justify-between text-[11px] text-term-fg-muted">
          <span>{footerMeta}</span>
        </div>
      )}
    </div>
  )
}
