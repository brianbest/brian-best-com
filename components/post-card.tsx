"use client"

import Link from "next/link"
import { track } from "@vercel/analytics"
import { cn } from "@/lib/utils"
import { formatTerminalDate } from "@/lib/utils"
import type { PostMeta } from "@/lib/posts"

interface PostCardProps {
  post: PostMeta
  index: number
  /** Keyboard (j/k) focus state, driven by the blog index. */
  focused?: boolean
}

export function PostCard({ post, index, focused = false }: PostCardProps) {
  const displayIndex = String(index + 1).padStart(2, "0")
  const primaryTag = post.tags[0] ?? "misc"

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col bg-term-bg md:min-h-[460px] h-full",
        "hover:bg-term-bg-2 transition-colors duration-150",
        focused && "ring-1 ring-inset ring-term-accent bg-term-bg-2",
      )}
      onClick={() =>
        track("post_open", {
          location: "post_card",
          postSlug: post.slug,
          label: post.title,
        })
      }
    >
      {/* Card header bar */}
      <div className="flex items-center justify-between px-4 py-[10px] bg-term-bg-2 border-b border-term-rule font-mono text-[11px] text-term-fg-muted">
        <span className="inline-flex items-center gap-[10px]">
          <span className="text-term-accent">{displayIndex}</span>
          <span>{primaryTag}</span>
        </span>
        <span>{post.readingTime}</span>
      </div>

      {/* Cover area — numbered placeholder (no real cover images yet).
          Hidden on mobile to match the compact BBlogMobile card. */}
      <div className="mx-5 mt-5 hidden md:block">
        <div
          className="relative bg-term-bg-2 border border-term-rule-soft overflow-hidden flex flex-col justify-between p-5"
          style={{ height: 140 }}
        >
          {/* Big faded index number */}
          <div
            className="font-sans font-extrabold leading-none tracking-[-0.04em] select-none text-term-bg-3"
            style={{ fontSize: 72, lineHeight: 0.9 }}
            aria-hidden="true"
          >
            {displayIndex}
          </div>
          {/* Word count bottom-right */}
          <div className="font-mono text-[11px] text-term-fg-muted text-right">
            {post.wordCount.toLocaleString()} words
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-[14px] flex-1 px-5 pt-5 pb-5">
        {/* Date · reading time */}
        <div className="flex gap-[10px] font-mono text-[11px] text-term-fg-muted">
          <span>{formatTerminalDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Title */}
        <h2 className="font-sans font-bold text-term-fg text-[22px] leading-[1.15] tracking-[-0.02em] m-0">
          {post.title}
        </h2>

        {/* Dek / summary */}
        <p className="font-sans text-[14px] text-term-fg-soft leading-relaxed m-0 flex-1 font-normal">
          {post.summary}
        </p>

        {/* Footer: tags + open link */}
        <div className="flex items-center justify-between pt-3 border-t border-term-rule-soft">
          <div className="flex gap-2">
            {post.tags.map((t) => (
              <span key={t} className="font-mono text-[11px] text-term-accent">
                #{t}
              </span>
            ))}
          </div>
          <span className="font-mono text-[12px] text-term-fg group-hover:text-term-accent transition-colors">
            open ›
          </span>
        </div>
      </div>
    </Link>
  )
}
