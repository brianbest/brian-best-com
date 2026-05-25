import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { MDXContent } from "@/components/mdx-content"
import { PostToc } from "@/components/post-toc"
import { CopyMarkdownButton, SendToChatButton } from "@/components/terminal/copy-actions"
import { getPost, getPosts, getAdjacentPosts, extractHeadings } from "@/lib/posts"
import { formatTerminalDate } from "@/lib/utils"

type Props = {
  params: Promise<{ slug: string }>
}

// -------------------------------------------------------------------------
// Static params + metadata
// -------------------------------------------------------------------------

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: "Post Not Found | Brian Best" }
  }

  return {
    title: `${post.title} | Brian Best`,
    description: post.summary,
  }
}

// -------------------------------------------------------------------------
// Page
// -------------------------------------------------------------------------

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  const { prev, next } = await getAdjacentPosts(slug)
  const headings = extractHeadings(post.content)

  // Tag helpers
  const firstTag = post.tags[0] ?? "writing"
  const breadcrumb = `writing / ${firstTag} / ${slug}`

  return (
    <div className="max-w-[1440px] mx-auto">
      {/*
       * 3-column grid on desktop: [240px 1fr 260px]
       * Single column on mobile (rails are hidden at < md)
       */}
      <div className="md:grid md:grid-cols-[240px_1fr_260px]">

        {/* ============================================================
         * LEFT RAIL — "On this page" outline
         * Hidden on mobile
         * ============================================================ */}
        <PostToc
          headings={headings}
          wordCount={post.wordCount}
          readingTime={post.readingTime}
        />

        {/* ============================================================
         * MAIN COLUMN — article + prev/next
         * ============================================================ */}
        <main className="bg-term-bg py-8 min-w-0">

          {/* ---- Action bar ---- */}
          <div className="px-5 md:px-14 pb-6 flex items-center justify-between gap-4">
            {/* Breadcrumb */}
            <div className="font-mono text-[12px] text-term-fg-muted truncate min-w-0">
              <span className="text-term-accent">← </span>
              <span>{breadcrumb}</span>
            </div>

            {/* Action buttons (desktop bar variant) */}
            <div className="hidden md:flex items-center gap-[6px] shrink-0">
              <CopyMarkdownButton markdown={post.content} variant="bar" />
              <SendToChatButton href={`/chat?ref=${slug}`} />
            </div>
          </div>

          {/* ---- Article ---- */}
          <article className="px-5 md:px-14 max-w-[820px]">

            {/* Meta line — desktop: # prefix + tags + date + stats */}
            <div className="hidden md:block font-mono text-[12px] text-term-fg-muted mb-6">
              <span className="text-term-accent"># </span>
              {post.tags.map((tag, i) => (
                <span key={tag}>
                  <span className="text-term-green">{tag}</span>
                  {i < post.tags.length - 1 && (
                    <span className="text-term-fg-muted"> · </span>
                  )}
                </span>
              ))}
              <span className="ml-4 text-term-fg-muted">
                · {formatTerminalDate(post.date)} · {post.readingTime} read · {post.wordCount.toLocaleString()} words
              </span>
            </div>

            {/* Meta line — mobile: tags row + date/stats row */}
            <div className="md:hidden mb-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 font-mono text-[11px] text-term-fg-muted mb-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-term-accent">
                    #{tag}
                  </span>
                ))}
              </div>
              {/* Date + stats */}
              <div className="flex items-center gap-3 font-mono text-[11px] text-term-fg-muted">
                <span>{formatTerminalDate(post.date)}</span>
                <span>·</span>
                <span>{post.readingTime} read</span>
                <span>·</span>
                <span>{post.wordCount.toLocaleString()} words</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-sans font-extrabold text-term-fg text-[40px] md:text-[68px] tracking-[-0.035em] leading-[1] mb-6">
              {post.title}
            </h1>

            {/* Summary / lead paragraph */}
            <p className="font-sans text-[18px] md:text-[22px] leading-[1.5] text-term-fg font-normal mb-10">
              {post.summary}
            </p>

            {/* Mobile-only copy actions — below the lead, full-width */}
            <div className="md:hidden flex gap-[6px] mb-8">
              <CopyMarkdownButton
                markdown={post.content}
                variant="bar"
                className="flex-1"
              />
              <SendToChatButton
                href={`/chat?ref=${slug}`}
                className="px-[14px] py-[10px]"
              />
            </div>

            {/* Body */}
            <MDXContent content={post.content} />
          </article>

          {/* ---- Mobile: "For your LLM" actions (right rail is hidden on mobile) ---- */}
          <section className="md:hidden mt-12 mx-5 px-[18px] py-5 bg-term-bg-2 border border-term-rule">
            <div className="font-mono text-[11px] text-term-fg-muted tracking-[0.05em] uppercase mb-3">
              For your LLM
            </div>
            <div className="flex flex-col gap-[6px]">
              <CopyMarkdownButton markdown={post.content} variant="rail" />
              <SendToChatButton
                href={`/chat?ref=${slug}`}
                className="w-full font-mono text-[12px] px-3 py-[10px] border border-term-rule text-left flex justify-between items-center"
              />
            </div>
          </section>

          {/* ---- Prev/next navigation ---- */}
          {(prev || next) && (
            <div className="mt-16 px-5 md:px-14 pt-6 border-t border-term-rule bg-term-bg-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* prev = newer post (left) */}
                <div>
                  {prev ? (
                    <Link href={`/blog/${prev.slug}`} className="block group">
                      <div className="font-mono text-[11px] text-term-fg-muted mb-1.5">
                        ←{" "}
                        <span className="text-term-accent">prev</span>
                        {" · "}
                        {prev.tags[0] ?? "writing"}/
                      </div>
                      <div className="font-sans text-[18px] font-semibold text-term-fg tracking-[-0.01em] leading-[1.25] group-hover:text-term-accent transition-colors">
                        {prev.title}
                      </div>
                      {prev.summary && (
                        <div className="font-sans text-[13px] text-term-fg-soft mt-1 leading-[1.5]">
                          {prev.summary}
                        </div>
                      )}
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>

                {/* next = older post (right) */}
                <div className="md:text-right">
                  {next ? (
                    <Link href={`/blog/${next.slug}`} className="block group">
                      <div className="font-mono text-[11px] text-term-fg-muted mb-1.5">
                        {next.tags[0] ?? "writing"}/ ·{" "}
                        <span className="text-term-accent">next</span> →
                      </div>
                      <div className="font-sans text-[18px] font-semibold text-term-fg tracking-[-0.01em] leading-[1.25] group-hover:text-term-accent transition-colors">
                        {next.title}
                      </div>
                      {next.summary && (
                        <div className="font-sans text-[13px] text-term-fg-soft mt-1 leading-[1.5]">
                          {next.summary}
                        </div>
                      )}
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          )}
        </main>

        {/* ============================================================
         * RIGHT RAIL — FOR YOUR LLM + METADATA + EDIT ON GITHUB
         * Hidden on mobile
         * ============================================================ */}
        <aside className="hidden md:block bg-term-bg-2 border-l border-term-rule px-[18px] py-6 text-[12px]">

          {/* FOR YOUR LLM */}
          <div className="text-[11px] text-term-fg-muted tracking-[0.05em] uppercase mb-[14px]">
            FOR YOUR LLM
          </div>
          <div className="flex flex-col gap-[6px]">
            <CopyMarkdownButton markdown={post.content} variant="rail" />

            {/* View raw — link to raw content */}
            <a
              href={`/api/posts/${slug}/raw`}
              className="w-full font-mono text-[12px] px-3 py-[10px] bg-term-bg text-term-fg-soft border border-term-rule text-left cursor-pointer flex justify-between items-center hover:text-term-fg hover:border-term-accent transition-colors"
            >
              <span>view raw</span>
              <span className="opacity-70">↗</span>
            </a>

            <SendToChatButton
              href={`/chat?ref=${slug}`}
              className="w-full font-mono text-[12px] px-3 py-[10px] border border-term-rule text-left flex justify-between items-center"
            />
          </div>

          {/* METADATA */}
          <div className="mt-7 text-[11px] text-term-fg-muted tracking-[0.05em] uppercase mb-[14px]">
            METADATA
          </div>
          <div className="font-mono text-[11.5px] text-term-fg-soft leading-[1.8]">
            <div>
              <span className="text-term-fg-muted">slug{"    "}</span>
              {post.slug}
            </div>
            <div>
              <span className="text-term-fg-muted">date{"    "}</span>
              {post.date}
            </div>
            <div>
              <span className="text-term-fg-muted">words{"   "}</span>
              {post.wordCount.toLocaleString()}
            </div>
            <div>
              <span className="text-term-fg-muted">read{"    "}</span>
              ~{post.readingTime}
            </div>
            <div>
              <span className="text-term-fg-muted">tags{"    "}</span>
              {post.tags.map((tag, i) => (
                <span key={tag}>
                  <span className="text-term-accent">#{tag}</span>
                  {i < post.tags.length - 1 && " "}
                </span>
              ))}
            </div>
          </div>

          {/* EDIT ON GITHUB */}
          <div className="mt-7 pt-[18px] border-t border-term-rule">
            <div className="text-[11px] text-term-fg-muted tracking-[0.05em] uppercase mb-[10px]">
              EDIT ON GITHUB
            </div>
            <a
              href={`https://github.com/brianbest/brian-best-com/edit/main/content/blog/${slug}.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-term-fg-soft hover:text-term-fg transition-colors break-all leading-[1.5]"
            >
              brian/brian-best.com /{" "}
              <br />
              <span className="text-term-accent">posts / {slug}</span>
            </a>
          </div>
        </aside>

      </div>
    </div>
  )
}
