"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CopyMarkdownButtonProps {
  markdown: string
  variant?: "bar" | "rail"
  className?: string
}

/**
 * CopyMarkdownButton — copies the post's raw markdown to clipboard.
 * variant "bar" → slim button in the action bar (accent bg)
 * variant "rail" → wide left-aligned button in the right rail (with ⌘M hint)
 */
export function CopyMarkdownButton({
  markdown,
  variant = "bar",
  className,
}: CopyMarkdownButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard not available
    }
  }

  if (variant === "rail") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "w-full font-mono text-[12px] px-3 py-[10px] bg-term-accent text-term-bg border-none text-left cursor-pointer font-semibold flex justify-between items-center hover:bg-term-accent-deep transition-colors",
          className,
        )}
      >
        <span>{copied ? "copied!" : "copy as md"}</span>
        <span className="opacity-70">⌘M</span>
      </button>
    )
  }

  // bar variant
  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "font-mono text-[11px] px-[14px] py-[7px] bg-term-accent text-term-bg border-none font-semibold cursor-pointer tracking-[0.03em] hover:bg-term-accent-deep transition-colors",
        className,
      )}
    >
      {copied ? "copied!" : "copy as markdown"}
    </button>
  )
}

interface SendToChatButtonProps {
  href?: string
  className?: string
}

/**
 * SendToChatButton — navigates to /chat (optionally with ref param).
 */
export function SendToChatButton({ href = "/chat", className }: SendToChatButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-mono text-[11px] px-[14px] py-[7px] bg-transparent text-term-fg-soft border border-term-rule cursor-pointer inline-flex items-center gap-1 hover:text-term-fg hover:border-term-accent transition-colors",
        className,
      )}
    >
      send to chat <span>⤴</span>
    </Link>
  )
}
