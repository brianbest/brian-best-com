"use client"

import { useState, useMemo } from "react"
import { TagPill } from "@/components/terminal/tag-pill"
import { PostCard } from "@/components/post-card"
import type { PostMeta } from "@/lib/posts"

interface BlogIndexProps {
  posts: PostMeta[]
}

export function BlogIndex({ posts }: BlogIndexProps) {
  const [activeTag, setActiveTag] = useState<string>("*")

  // Derive sorted unique tags from all posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    for (const post of posts) {
      for (const tag of post.tags) {
        tagSet.add(tag)
      }
    }
    return ["*", ...Array.from(tagSet).sort()]
  }, [posts])

  // Filter posts by active tag
  const filtered = useMemo(() => {
    if (activeTag === "*") return posts
    return posts.filter((p) => p.tags.includes(activeTag))
  }, [posts, activeTag])

  return (
    <>
      {/* ── Header section ─────────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 pb-8 border-b border-term-rule">
        {/* Command line */}
        <div className="font-mono text-[12px] text-term-fg-muted flex items-baseline gap-4 mb-6">
          <span>
            <span className="text-term-accent">$</span> cd ~/writing &amp;&amp; ls -lah --sort=date
          </span>
        </div>

        {/* Big headline */}
        <h1 className="font-sans font-extrabold text-term-fg tracking-[-0.04em] leading-[0.95] mt-0 mb-3 text-[48px] md:text-[88px]">
          ~/writing<span className="text-term-accent">/</span>
        </h1>

        {/* Intro paragraph */}
        <p className="font-sans text-term-fg-soft leading-relaxed font-normal mt-4 mb-0 max-w-[800px] text-[15px] md:text-[19px]">
          Working notes on building with LLMs — patterns, harnesses, evals, the parts nobody puts in
          the demo. Written primarily for future-me opening a fresh chat. You&rsquo;re welcome to read along.
        </p>

        {/* Filter row */}
        <div className="mt-9 flex flex-col md:grid md:grid-cols-[2fr_auto_auto_auto] gap-4 items-start md:items-center">
          {/* Tag pills */}
          <div className="flex items-center gap-0">
            <span className="font-mono text-[12px] text-term-fg-muted mr-[10px] shrink-0">
              --tag=
            </span>
            {/* Mobile: horizontal scroll strip */}
            <div className="flex gap-[6px] overflow-x-auto -mr-5 md:mr-0 pr-5 md:pr-0 md:flex-wrap pb-[6px] md:pb-0">
              {allTags.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActiveTag(t)}
                  className="shrink-0"
                  aria-pressed={activeTag === t}
                >
                  <TagPill tag={t} active={activeTag === t} />
                </button>
              ))}
            </div>
          </div>

          {/* Search box — decorative */}
          <div className="hidden md:flex items-center gap-2 font-mono text-[12px] text-term-fg-muted px-[14px] py-2 bg-term-bg-2 border border-term-rule shrink-0">
            <span className="text-term-accent">/</span>
            <span>fuzzy-find...</span>
            <span className="ml-3 px-[6px] py-[1px] bg-term-bg border border-term-rule text-[10px]">
              ⌘ K
            </span>
          </div>

          {/* RSS chip — decorative */}
          <a
            href="/rss.xml"
            className="hidden md:block font-mono text-[11px] text-term-fg-muted px-[14px] py-2 bg-term-bg-2 border border-term-rule hover:text-term-fg hover:border-term-accent transition-colors shrink-0"
          >
            ↓ rss
          </a>

          {/* llms.txt chip — decorative */}
          <a
            href="/llms-full.txt"
            className="hidden md:block font-mono text-[11px] text-term-fg-muted px-[14px] py-2 bg-term-bg-2 border border-term-rule hover:text-term-fg hover:border-term-accent transition-colors shrink-0"
          >
            ↓ llms.txt
          </a>
        </div>
      </section>

      {/* ── Card grid section ──────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 pb-14">
        {/* Status line */}
        <div className="flex gap-4 font-mono text-[11px] text-term-fg-muted mb-6">
          <span className="text-term-accent">$</span>
          <span>
            showing {filtered.length} of {posts.length} · sorted by --date desc
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="font-mono text-[13px] text-term-fg-muted py-16 text-center border border-term-rule bg-term-bg-2">
            <span className="text-term-accent">$</span> no posts match --tag=
            <span className="text-term-fg">{activeTag}</span>
          </div>
        ) : (
          /* 1px gap panel grid — gap-px on bg-term-rule creates 1px dividers */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-term-rule border border-term-rule">
            {filtered.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}

        {/* Footer hint */}
        <div className="mt-10 pt-6 border-t border-term-rule flex flex-col md:flex-row justify-between gap-3 font-mono text-[12px] text-term-fg-muted">
          <span>
            <span className="text-term-accent">$</span> press{" "}
            <kbd className="text-term-fg bg-term-bg-2 px-[6px] py-[1px] border border-term-rule not-italic">
              j
            </kbd>
            /
            <kbd className="text-term-fg bg-term-bg-2 px-[6px] py-[1px] border border-term-rule not-italic">
              k
            </kbd>{" "}
            to navigate ·{" "}
            <kbd className="text-term-fg bg-term-bg-2 px-[6px] py-[1px] border border-term-rule not-italic">
              ↵
            </kbd>{" "}
            to open
          </span>
          <span>
            showing 1–{filtered.length} of {posts.length}
          </span>
        </div>
      </section>
    </>
  )
}
