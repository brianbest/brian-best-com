"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[calc(100vh-52px)] flex items-center justify-center px-5">
      <div className="max-w-[640px] w-full">
        <div className="font-mono text-[13px] md:text-[15px] text-term-fg-muted">
          <span className="text-term-accent">$</span> node ./page.js
        </div>

        <div className="mt-4 mb-8 bg-term-bg-2 border border-term-rule border-l-[3px] border-l-term-accent px-5 py-4">
          <div className="font-mono text-[11px] text-term-accent tracking-[0.08em] uppercase mb-2">
            ! segfault
          </div>
          <div className="font-mono text-[13px] text-term-fg-soft leading-[1.6]">
            Something went wrong rendering this page. The error has been logged.
          </div>
          {error.digest && (
            <div className="mt-2 font-mono text-[11px] text-term-fg-muted">
              ref: {error.digest}
            </div>
          )}
        </div>

        <div className="font-mono text-[13px] text-term-fg-muted mb-4">
          <span className="text-term-accent">$</span> ./retry --fresh
        </div>

        <button
          type="button"
          onClick={reset}
          className="font-mono text-[13px] px-[18px] py-3 bg-term-accent text-term-bg font-bold tracking-[0.04em] hover:bg-term-accent-deep transition-colors cursor-pointer"
        >
          ↻ Try again
        </button>

        <div className="mt-12 font-mono text-[12px] text-term-fg-muted">
          <span className="text-term-fg-soft">Or navigate elsewhere:</span>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/" className="text-term-accent hover:text-term-fg transition-colors">~/index</Link>
            <Link href="/blog" className="text-term-accent hover:text-term-fg transition-colors">~/writing</Link>
            <Link href="/projects" className="text-term-accent hover:text-term-fg transition-colors">~/work</Link>
            <Link href="/about" className="text-term-accent hover:text-term-fg transition-colors">~/about</Link>
            <Link href="/chat" className="text-term-accent hover:text-term-fg transition-colors">~/chat</Link>
            <Link href="/contact" className="text-term-accent hover:text-term-fg transition-colors">~/contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
