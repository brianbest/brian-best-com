import type { CSSProperties } from "react"
import Link from "next/link"
import { Prompt } from "@/components/terminal/prompt"
import { careerProfile } from "@/lib/career-profile"
import { getPosts } from "@/lib/posts"
import { formatTerminalDate } from "@/lib/utils"

// Select the most relevant / chronologically recent experiences for the CV panel.
// We collapse the Axonify roles into the current Principal one and show the
// following roles, giving a clean CV read that mirrors the résumé.
const ROLES_TO_SHOW = [
  "axonify-principal",
  "combinaut",
  "ubique",
  "phased",
]

function formatYears(startDate: string, endDate: string | null): string {
  // Extract just the year portion for a compact "2022 — present" display
  const start = startDate.split(" ").at(-1) ?? startDate
  const end = endDate ? (endDate.split(" ").at(-1) ?? endDate) : "present"
  return `${start} — ${end}`
}

export default async function Home() {
  const posts = await getPosts()
  const latestPosts = posts.slice(0, 3)

  const roles = ROLES_TO_SHOW.map((id) =>
    careerProfile.experiences.find((e) => e.id === id),
  ).filter(Boolean) as typeof careerProfile.experiences

  return (
    <div className="max-w-[1440px] mx-auto">

      {/* ─── HERO BASH SESSION ──────────────────────────────────────── */}
      {/* boot-line: lines flush in sequentially like terminal output
          (CSS-only; stagger via --boot-delay; static under reduced motion) */}
      <section className="px-5 md:px-14 pt-10 md:pt-12 pb-8">

        {/* whoami */}
        <div className="boot-line">
          <Prompt>whoami</Prompt>
        </div>
        <div
          className="boot-line pl-6 text-term-fg-muted font-mono text-[13px] mt-1 mb-8"
          style={{ "--boot-delay": "150ms" } as CSSProperties}
        >
          brian-best (uid=1000, gid=1000, groups=principal, staff, builders)
        </div>

        {/* cat ./about.md */}
        <div className="boot-line" style={{ "--boot-delay": "300ms" } as CSSProperties}>
          <Prompt>cat ./about.md</Prompt>
        </div>
        <div
          className="boot-line pl-6 mt-3 mb-10"
          style={{ "--boot-delay": "450ms" } as CSSProperties}
        >
          {/* Big name headline */}
          <h1 className="font-sans font-extrabold text-term-fg leading-none tracking-[-0.04em] text-[48px] md:text-[88px] m-0">
            {careerProfile.personal.name}
            <span className="text-term-accent cursor-blink">_</span>
          </h1>

          {/* # tagline */}
          <div className="mt-3 font-mono text-[13px] md:text-[15px] text-term-fg-soft">
            <span className="text-term-accent"># </span>
            {careerProfile.personal.title.toLowerCase()} · agentic AI &amp; LLM systems · kitchener, ontario
          </div>

          {/* Intro paragraph */}
          <p className="mt-6 md:mt-8 font-sans font-normal text-term-fg-soft leading-[1.45] text-[17px] md:text-[22px] max-w-[880px]">
            I build resilient software with a craftsman&rsquo;s care — the kind that holds up
            when the demo ends. Lately: an in-house agentic AI &ldquo;code factory,&rdquo; MCP
            integrations, and the plumbing that makes AI reliable in production.
          </p>
        </div>

        {/* ─── STATUS BLOCK ──────────────────────────────────────────── */}
        <div className="boot-line" style={{ "--boot-delay": "650ms" } as CSSProperties}>
          <Prompt>./status --short</Prompt>
        </div>

        {/* Desktop: inline grid. Mobile: bg panel card (BHomeMobile style) */}
        <div
          className="boot-line pl-6 mt-3 mb-10"
          style={{ "--boot-delay": "800ms" } as CSSProperties}
        >
          {/* Mobile card */}
          <div className="md:hidden bg-term-bg-2 border border-term-rule px-[18px] py-4">
            <div className="font-mono text-[11px] text-term-fg-muted uppercase tracking-[0.05em] mb-3">
              ./status
            </div>
            <div className="flex flex-col gap-[10px] font-mono text-[13px]">
              <div>
                <span className="text-term-green mr-2">●</span>
                <span className="text-term-fg-muted">open </span>
                <span className="text-term-fg">to the right thing</span>
              </div>
              <div>
                <span className="text-term-accent mr-2">●</span>
                <span className="text-term-fg-muted">shipping </span>
                <span className="text-term-fg">agentic AI platform + MCP tooling at Axonify</span>
              </div>
              <div>
                <span className="text-term-yellow mr-2">●</span>
                <span className="text-term-fg-muted">reading </span>
                <span className="text-term-fg">A Philosophy of Software Design</span>
              </div>
            </div>
          </div>

          {/* Desktop grid */}
          <div
            className="hidden md:grid gap-y-[10px] gap-x-6 font-mono text-[14px]"
            style={{ gridTemplateColumns: "auto 1fr" }}
          >
            <span className="text-term-green">●</span>
            <span>
              <span className="text-term-fg-muted">open_to_work </span>
              <span className="text-term-fg">= true </span>
              <span className="text-term-fg-muted"># the right thing, not anything</span>
            </span>

            <span className="text-term-accent">●</span>
            <span>
              <span className="text-term-fg-muted">shipping     </span>
              <span className="text-term-fg">= &quot;agentic AI platform + MCP tooling at Axonify&quot;</span>
            </span>

            <span className="text-term-yellow">●</span>
            <span>
              <span className="text-term-fg-muted">reading      </span>
              <span className="text-term-fg">= &quot;A Philosophy of Software Design&quot;</span>
            </span>

            <span className="text-term-blue">●</span>
            <span>
              <span className="text-term-fg-muted">stack        </span>
              <span className="text-term-fg">
                = [&quot;typescript&quot;, &quot;java&quot;, &quot;node&quot;, &quot;react&quot;, &quot;gcp&quot;, &quot;sql&quot;]
              </span>
            </span>
          </div>
        </div>

        {/* ─── LATEST WRITING ────────────────────────────────────────── */}
        <div className="boot-line" style={{ "--boot-delay": "1000ms" } as CSSProperties}>
          <Prompt>ls ./writing | head -3</Prompt>
        </div>
        <div
          className="boot-line pl-6 mt-3 mb-2"
          style={{ "--boot-delay": "1150ms" } as CSSProperties}
        >

          {/* Mobile: stacked list (BHomeMobile "Latest writing") */}
          <div className="md:hidden">
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="font-sans font-bold text-term-fg text-[22px] tracking-[-0.02em] m-0">
                Latest writing
              </h2>
              <Link href="/blog" className="font-mono text-[12px] text-term-accent">
                all →
              </Link>
            </div>
            <div className="flex flex-col">
              {latestPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`block py-[18px] border-b border-term-rule hover:bg-term-bg-2 transition-colors -mx-1 px-1 ${i === 0 ? "border-t border-term-rule" : ""}`}
                >
                  <div className="flex justify-between font-mono text-[11px] text-term-fg-muted mb-2">
                    <span>{formatTerminalDate(post.date)}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="font-sans font-bold text-term-fg text-[18px] tracking-[-0.015em] leading-[1.2] m-0">
                    {post.title}
                  </h3>
                  <p className="font-sans font-normal text-term-fg-soft text-[14px] leading-[1.5] mt-2 mb-0">
                    {post.summary}
                  </p>
                  <div className="mt-[10px] flex gap-2">
                    {post.tags.slice(0, 2).map((t) => (
                      <span key={t} className="font-mono text-[11px] text-term-accent">
                        #{t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop: borderless mono table */}
          <table className="hidden md:table border-collapse font-mono text-[13px] text-term-fg-soft w-full">
            <tbody>
              {latestPosts.map((post) => (
                <tr
                  key={post.slug}
                  className="border-b border-term-rule-soft group"
                >
                  <td className="py-[14px] pr-3 text-term-fg-muted w-[110px] whitespace-nowrap align-middle">
                    {formatTerminalDate(post.date)}
                  </td>
                  <td className="py-[14px] px-3 align-middle">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-sans font-semibold text-term-fg text-[17px] hover:text-term-accent transition-colors"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="py-[14px] px-3 font-sans font-normal text-term-fg-soft text-[14px] align-middle">
                    {post.summary.length > 80
                      ? `${post.summary.slice(0, 78)}…`
                      : post.summary}
                  </td>
                  <td className="py-[14px] pl-3 text-right w-[220px] align-middle">
                    {post.tags.map((t) => (
                      <span key={t} className="text-term-accent ml-2">
                        #{t}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── PREVIOUS ROLES ──────────────────────────────────────────── */}
      <section className="px-5 md:px-14 pt-6 pb-14">
        {/* Section heading */}
        <div className="flex items-baseline gap-[14px] mb-1 flex-wrap">
          <span className="font-mono text-[14px] text-term-accent font-semibold">##</span>
          <h2 className="font-sans font-bold text-term-fg text-[28px] md:text-[32px] tracking-[-0.025em] m-0">
            Previous roles
          </h2>
          <span className="font-mono text-[12px] text-term-fg-muted">
            # where I&rsquo;ve worked, most recent first
          </span>
        </div>
        <p className="font-sans font-normal text-term-fg-soft text-[15px] leading-[1.5] max-w-[720px] mt-2 mb-7">
          Six years at Axonify — developer to principal, now leading AI initiatives — plus
          a healthcare-frontend stint and a startup I co-founded. Full résumé on request.
        </p>

        {/* Roles panel */}
        <div className="border border-term-rule bg-term-bg-2">
          {roles.map((role, i) => (
            <div
              key={role.id}
              className={`
                grid gap-8 px-5 md:px-7 py-5 items-center
                ${i !== 0 ? "border-t border-term-rule" : ""}
              `}
              style={{
                gridTemplateColumns: "1fr",
              }}
            >
              {/* Mobile: stacked layout */}
              <div className="flex flex-col gap-3 md:hidden">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span
                      className={`font-mono text-[12px] tracking-[0.02em] ${
                        role.endDate === null
                          ? "text-term-accent font-semibold"
                          : "text-term-fg-muted"
                      }`}
                    >
                      {formatYears(role.startDate, role.endDate)}
                    </span>
                    {role.endDate === null && (
                      <span className="font-mono text-[10px] text-term-accent tracking-[0.1em] uppercase inline-flex items-center gap-1.5">
                        <span className="w-[5px] h-[5px] bg-term-accent rounded-full inline-block" />
                        current
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[11px] text-term-fg-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <div className="font-sans font-bold text-term-fg text-[18px] tracking-[-0.015em] leading-snug">
                    {role.title}
                    <span className="text-term-fg-muted font-normal"> — </span>
                    {role.company}
                  </div>
                  <div className="mt-1.5 font-sans font-normal text-term-fg-soft text-[13.5px] leading-[1.55]">
                    {role.summary.length > 120
                      ? `${role.summary.slice(0, 118)}…`
                      : role.summary}
                  </div>
                </div>
              </div>

              {/* Desktop: 3-col grid */}
              <div
                className="hidden md:grid gap-8 items-center"
                style={{ gridTemplateColumns: "200px 1fr 56px" }}
              >
                {/* Years col */}
                <div className="flex flex-col gap-1">
                  <div
                    className={`font-mono text-[13px] tracking-[0.02em] ${
                      role.endDate === null
                        ? "text-term-accent font-semibold"
                        : "text-term-fg-muted"
                    }`}
                  >
                    {formatYears(role.startDate, role.endDate)}
                  </div>
                  {role.endDate === null && (
                    <div className="font-mono text-[10px] text-term-accent tracking-[0.1em] uppercase inline-flex items-center gap-1.5">
                      <span className="w-[5px] h-[5px] bg-term-accent rounded-full inline-block" />
                      current
                    </div>
                  )}
                </div>

                {/* Role + summary */}
                <div>
                  <div className="font-sans font-bold text-term-fg text-[20px] tracking-[-0.015em]">
                    {role.title}
                    <span className="text-term-fg-muted font-normal"> — </span>
                    {role.company}
                  </div>
                  <div className="mt-1.5 font-sans font-normal text-term-fg-soft text-[14.5px] leading-[1.55]">
                    {role.summary.length > 140
                      ? `${role.summary.slice(0, 138)}…`
                      : role.summary}
                  </div>
                </div>

                {/* Index number */}
                <div className="font-mono text-[11px] text-term-fg-muted text-right">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CHAT WITH BRIAN'S AI CTA ────────────────────────────────── */}
      <section className="px-5 md:px-14 pt-6 pb-14">
        {/* Mobile: compact CTA card (BHomeMobile style) */}
        <div className="md:hidden">
          <Link href="/chat" className="block bg-term-bg-2 border border-term-rule p-[18px] hover:border-term-accent transition-colors">
            <div className="font-mono text-[11px] text-term-accent uppercase tracking-[0.05em] mb-2">
              Brian&rsquo;s AI
            </div>
            <div className="font-sans font-semibold text-term-fg text-[17px] leading-[1.3] tracking-[-0.01em]">
              Is Brian a good fit for your role?
            </div>
            <p className="font-sans text-term-fg-soft text-[13.5px] leading-[1.5] mt-2 mb-3">
              Ask Brian&rsquo;s AI. It&rsquo;s read everything on this site and can vet a job
              description for fit — honestly.
            </p>
            <div className="bg-term-accent text-term-bg font-mono text-[13px] font-semibold text-center py-[10px] px-[14px]">
              Chat with Brian&rsquo;s AI →
            </div>
          </Link>
        </div>

        {/* Desktop: full CTA card */}
        <div className="hidden md:block">
          {/* Heading row */}
          <div className="flex items-baseline gap-[14px] mb-1 flex-wrap">
            <span className="font-mono text-[14px] text-term-accent font-semibold">##</span>
            <h2 className="font-sans font-bold text-term-fg text-[32px] tracking-[-0.025em] m-0">
              Chat with Brian&rsquo;s AI
            </h2>
            <span className="inline-flex items-center gap-1.5 px-[10px] py-1 bg-term-accent-soft text-term-accent font-mono text-[11px] tracking-[0.05em]">
              <span className="w-[5px] h-[5px] bg-term-accent rounded-full inline-block" />
              LIVE · trained on this site
            </span>
          </div>

          <p className="font-sans font-normal text-term-fg-soft text-[15px] leading-[1.5] max-w-[720px] mt-2 mb-6">
            Two modes. Ask anything about how I work, or paste a job description and get a
            candid fit assessment. No login. No vendor tracking.
          </p>

          {/* Card */}
          <div className="bg-term-bg-2 border border-term-rule">
            {/* Mode tabs */}
            <div className="flex border-b border-term-rule">
              <div className="px-5 py-3 font-mono text-[13px] text-term-fg font-semibold border-b-2 border-term-accent -mb-[1px] inline-flex items-center gap-2">
                <span className="text-term-accent">›</span>
                Ask about Brian
              </div>
              <div className="px-5 py-3 font-mono text-[13px] text-term-fg-muted inline-flex items-center gap-2">
                <span>📋</span>
                Vet a job description
              </div>
              <div className="flex-1" />
              <div className="px-[18px] py-3 font-mono text-[11px] text-term-fg-muted inline-flex items-center gap-2">
                powered by <span className="text-term-fg">claude-haiku-4.5</span>
              </div>
            </div>

            {/* Input + starter chips */}
            <div className="p-6">
              <Link href="/chat" className="block">
                <div className="bg-term-bg border border-term-rule px-[18px] py-[18px] flex justify-between items-center hover:border-term-accent transition-colors">
                  <span className="font-sans font-normal text-term-fg-muted text-[17px]">
                    Ask anything…
                  </span>
                  <span className="font-mono text-[12px] px-[14px] py-2 bg-term-accent text-term-bg font-bold tracking-[0.03em]">
                    ↵ SEND
                  </span>
                </div>
              </Link>

              {/* Starter chips */}
              <div className="mt-4 flex gap-2 flex-wrap">
                {[
                  "What languages does Brian work in?",
                  "Is he open to remote?",
                  "Walk me through his most ambitious project",
                  "What's his approach to AI in production?",
                ].map((chip) => (
                  <Link
                    key={chip}
                    href={`/chat?q=${encodeURIComponent(chip)}`}
                    className="font-sans text-[13px] px-3 py-1.5 bg-term-bg border border-term-rule text-term-fg-soft hover:border-term-accent hover:text-term-fg transition-colors"
                  >
                    {chip}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
