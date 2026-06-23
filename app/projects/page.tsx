import type { CSSProperties } from "react"
import { TerminalProjectCard } from "@/components/terminal/project-card"
import { Tilt } from "@/components/terminal/tilt"
import { getProjects } from "@/lib/projects"

export const metadata = {
  title: "~/work",
  description:
    "Side projects and open-source work by Brian Best — agentic AI tooling, MCP servers, and self-hosted infrastructure.",
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  const featuredCount = projects.filter((p) => p.featured).length

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* ── Header section ─────────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 pb-8 border-b border-term-rule">
        {/* Command line */}
        <div className="boot-line font-mono text-[12px] text-term-fg-muted flex items-baseline gap-4 mb-6">
          <span>
            <span className="text-term-accent">$</span> cd ~/work &amp;&amp; ls --sort=featured
          </span>
        </div>

        {/* Big headline */}
        <h1
          className="boot-line font-sans font-extrabold text-term-fg tracking-[-0.04em] leading-[0.95] mt-0 mb-3 text-[48px] md:text-[88px]"
          style={{ "--boot-delay": "100ms" } as CSSProperties}
        >
          ~/work<span className="text-term-accent">/</span>
        </h1>

        {/* Intro paragraph */}
        <p
          className="boot-line font-sans text-term-fg-soft leading-relaxed font-normal mt-4 mb-0 max-w-[800px] text-[15px] md:text-[19px]"
          style={{ "--boot-delay": "200ms" } as CSSProperties}
        >
          Things I build off the clock — agentic AI tooling, MCP servers, and the
          self-hosted infrastructure they run on. Most of it exists to answer a
          question I couldn&rsquo;t stop thinking about.
        </p>
      </section>

      {/* ── Card grid section ──────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 pb-14">
        {/* Status line */}
        <div className="flex gap-4 font-mono text-[11px] text-term-fg-muted mb-6">
          <span className="text-term-accent">$</span>
          <span>
            showing {projects.length} projects · {featuredCount} featured · sorted by --featured
          </span>
        </div>

        {/* 1px gap panel grid — gap-px on bg-term-rule creates 1px dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-term-rule border border-term-rule">
          {projects.map((project, i) => (
            <Tilt key={project.id} className="h-full">
              <TerminalProjectCard project={project} index={i} />
            </Tilt>
          ))}
        </div>
      </section>
    </div>
  )
}
