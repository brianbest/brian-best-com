import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { Prompt } from "@/components/terminal/prompt"
import { SocialLinks } from "@/components/social-links"
import { careerProfile } from "@/lib/career-profile"

export const metadata = {
  title: "~/about",
  description:
    "Brian Best — Principal Software Developer at Axonify. 12+ years of full-stack engineering, 3+ years building production AI systems: agentic AI, MCP integrations, and RAG pipelines.",
}

function formatYears(startDate: string, endDate: string | null): string {
  const start = startDate.split(" ").at(-1) ?? startDate
  const end = endDate ? (endDate.split(" ").at(-1) ?? endDate) : "present"
  return `${start} — ${end}`
}

const SKILL_GROUPS = [
  { key: "strong", label: "strong", marker: "✓", markerClass: "text-term-green" },
  { key: "moderate", label: "moderate", marker: "~", markerClass: "text-term-yellow" },
  { key: "gaps", label: "gaps", marker: "–", markerClass: "text-term-fg-muted" },
] as const

export default function AboutPage() {
  const { personal, experiences, skills, uniqueBackground, education, awards, aiExperience } =
    careerProfile

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* ─── WHOAMI + BIO ───────────────────────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 md:pt-12 pb-10 border-b border-term-rule">
        <div className="boot-line">
          <Prompt>whoami</Prompt>
        </div>
        <div
          className="boot-line pl-6 text-term-fg-muted font-mono text-[13px] mt-1 mb-8"
          style={{ "--boot-delay": "100ms" } as CSSProperties}
        >
          {personal.name.toLowerCase().replace(" ", "-")} · {personal.title.toLowerCase()} ·{" "}
          {personal.location.toLowerCase().replace(", canada", "")}
        </div>

        <div className="boot-line" style={{ "--boot-delay": "200ms" } as CSSProperties}>
          <Prompt>cat ./about.md</Prompt>
        </div>
        <div className="boot-line pl-6 mt-3" style={{ "--boot-delay": "300ms" } as CSSProperties}>
          <h1 className="font-sans font-extrabold text-term-fg leading-[0.95] tracking-[-0.04em] text-[48px] md:text-[88px] m-0">
            ~/about<span className="text-term-accent">/</span>
          </h1>

          <div className="mt-3 font-mono text-[13px] md:text-[15px] text-term-fg-soft">
            <span className="text-term-accent"># </span>
            {personal.tagline.toLowerCase()}
          </div>

          {/* Photo + bio */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
            <div className="max-w-[280px]">
              <Image
                src="/brianabout.jpeg"
                alt="Brian Best"
                width={560}
                height={560}
                className="w-full h-auto object-cover border border-term-rule"
              />
              <div className="mt-4 flex items-center justify-between">
                <SocialLinks location="about_page" />
                <span className="font-mono text-[11px] text-term-fg-muted">
                  ./brianabout.jpeg
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 max-w-[720px]">
              <p className="font-sans font-normal text-term-fg-soft leading-[1.55] text-[16px] md:text-[17px] m-0">
                I&rsquo;m a Principal Software Developer at Axonify with 12+ years of full-stack
                engineering behind me and the last 3+ spent architecting production AI systems.
                These days I co-lead an in-house agentic AI &ldquo;code factory&rdquo; — LLM-powered
                agents that implement, test, and review changes against our production codebase —
                and drive LLM capabilities into the customer-facing platform: RAG and retrieval
                pipelines, secure MCP tool-calling, and conversational interfaces that hold up
                inside enterprise compliance boundaries.
              </p>
              <p className="font-sans font-normal text-term-fg-soft leading-[1.55] text-[16px] md:text-[17px] m-0">
                My path here was not the usual one: radio broadcasting, then web development, then
                co-founding a startup (raised CAD $75k, Propel ICT accelerator), then six years at
                Axonify growing from developer to principal. The through-line is communication —
                years of live, unscripted radio turn out to be excellent training for explaining
                complex systems to anyone.
              </p>
              <p className="font-sans font-normal text-term-fg-soft leading-[1.55] text-[16px] md:text-[17px] m-0">
                My working philosophy: {aiExperience.philosophy.toLowerCase().replace(/\.$/, "")}.
                I build the kind of software that holds up when the demo ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAREER TIMELINE ────────────────────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 pb-10 border-b border-term-rule">
        <Prompt>git log ./career</Prompt>
        <div className="pl-0 md:pl-6 mt-5">
          <div className="border border-term-rule bg-term-bg-2">
            {experiences.map((role, i) => (
              <div
                key={role.id}
                className={`px-5 md:px-7 py-5 ${i !== 0 ? "border-t border-term-rule" : ""}`}
              >
                {/* Mobile: stacked */}
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
                      {role.summary}
                    </div>
                  </div>
                </div>

                {/* Desktop: 3-col grid */}
                <div
                  className="hidden md:grid gap-8 items-start"
                  style={{ gridTemplateColumns: "200px 1fr 56px" }}
                >
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

                  <div>
                    <div className="font-sans font-bold text-term-fg text-[20px] tracking-[-0.015em]">
                      {role.title}
                      <span className="text-term-fg-muted font-normal"> — </span>
                      {role.company}
                    </div>
                    <div className="mt-1.5 font-sans font-normal text-term-fg-soft text-[14.5px] leading-[1.55]">
                      {role.summary}
                    </div>
                  </div>

                  <div className="font-mono text-[11px] text-term-fg-muted text-right">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─────────────────────────────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 pb-10 border-b border-term-rule">
        <Prompt>ls ./skills --group-by=confidence</Prompt>
        <div className="pl-0 md:pl-6 mt-5 grid grid-cols-1 lg:grid-cols-3 gap-px bg-term-rule border border-term-rule">
          {SKILL_GROUPS.map(({ key, label, marker, markerClass }) => (
            <div key={key} className="bg-term-bg flex flex-col">
              <div className="px-4 py-[10px] bg-term-bg-2 border-b border-term-rule font-mono text-[11px] text-term-fg-muted flex justify-between">
                <span>
                  <span className="text-term-accent">## </span>
                  {label}
                </span>
                <span>{skills[key].length}</span>
              </div>
              <div className="px-4 py-3 flex flex-col">
                {skills[key].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-baseline justify-between gap-3 py-[5px] font-mono text-[13px]"
                    title={skill.description}
                  >
                    <span className="text-term-fg">
                      <span className={`${markerClass} mr-2`}>{marker}</span>
                      {skill.name}
                    </span>
                    <span className="text-term-fg-muted text-[11px] shrink-0">
                      {skill.category.toLowerCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pl-0 md:pl-6 mt-3 font-mono text-[11px] text-term-fg-muted">
          <span className="text-term-accent">$</span> gaps listed on purpose — honesty beats
          keyword-stuffing
        </div>
      </section>

      {/* ─── BACKGROUND ─────────────────────────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 pb-10 border-b border-term-rule">
        <Prompt kind="#">cat ./background.txt</Prompt>
        <div className="pl-0 md:pl-6 mt-5 flex flex-col gap-4 max-w-[820px]">
          {uniqueBackground.map((bg) => (
            <div key={bg.item} className="flex gap-3">
              <span className="font-mono text-[14px] text-term-accent shrink-0 leading-[1.5]">
                ›
              </span>
              <div>
                <div className="font-sans font-semibold text-term-fg text-[15.5px] leading-[1.4]">
                  {bg.item}
                </div>
                <div className="font-sans font-normal text-term-fg-soft text-[13.5px] leading-[1.5] mt-1">
                  {bg.relevance}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education + awards metadata block */}
        <div className="pl-0 md:pl-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[820px]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-term-fg-muted mb-3">
              education
            </div>
            <div className="flex flex-col gap-3">
              {education.map((edu) => (
                <div key={edu.degree} className="font-mono text-[11.5px] leading-[1.6]">
                  <div className="text-term-fg">{edu.degree}</div>
                  <div className="text-term-fg-muted">
                    {edu.school} · {edu.year}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <span className="text-term-green"> · {edu.highlights.join(" · ").toLowerCase()}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-term-fg-muted mb-3">
              awards
            </div>
            <div className="flex flex-col gap-3">
              {awards.map((award) => (
                <div key={award.name} className="font-mono text-[11.5px] leading-[1.6]">
                  <div className="text-term-fg">{award.name}</div>
                  <div className="text-term-fg-muted">{award.context}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHAT CTA ───────────────────────────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 pb-14">
        <Link
          href="/chat"
          className="block bg-term-bg-2 border border-term-rule p-[18px] md:p-6 hover:border-term-accent transition-colors max-w-[820px]"
        >
          <div className="font-mono text-[11px] text-term-accent uppercase tracking-[0.05em] mb-2">
            Brian&rsquo;s AI
          </div>
          <div className="font-sans font-semibold text-term-fg text-[17px] md:text-[19px] leading-[1.3] tracking-[-0.01em]">
            Want the interactive version of this page?
          </div>
          <p className="font-sans text-term-fg-soft text-[13.5px] md:text-[14.5px] leading-[1.5] mt-2 mb-3">
            My AI has read everything here — the career history, the skills matrix, the gaps —
            and answers honestly. Ask it anything, or paste a job description for a fit check.
          </p>
          <div className="inline-block bg-term-accent text-term-bg font-mono text-[13px] font-semibold py-[10px] px-[14px]">
            Chat with Brian&rsquo;s AI →
          </div>
        </Link>
      </section>
    </div>
  )
}
