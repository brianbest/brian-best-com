import { CoverPlaceholder } from "@/components/terminal/cover-placeholder"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/projects"

interface TerminalProjectCardProps {
  project: Project
  index: number
}

export function TerminalProjectCard({ project, index }: TerminalProjectCardProps) {
  const displayIndex = String(index + 1).padStart(2, "0")
  const primaryTag = project.tags[0] ?? "misc"
  const hasUrl = project.url.length > 0

  const card = (
    <>
      {/* Card header bar */}
      <div className="flex items-center justify-between px-4 py-[10px] bg-term-bg-2 border-b border-term-rule font-mono text-[11px] text-term-fg-muted">
        <span className="inline-flex items-center gap-[10px]">
          <span className="text-term-accent">{displayIndex}</span>
          <span>{primaryTag}</span>
        </span>
        {project.featured && (
          <span className="px-2 py-[2px] bg-term-accent-soft text-term-accent uppercase tracking-[0.08em] text-[10px]">
            featured
          </span>
        )}
      </div>

      {/* Cover area — striped placeholder (no project images yet).
          Hidden on mobile to keep cards compact, matching post cards. */}
      <div className="mx-5 mt-5 hidden md:block">
        <CoverPlaceholder label={project.id} height={140} />
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-[14px] flex-1 px-5 pt-5 pb-5">
        <h2 className="font-sans font-bold text-term-fg text-[22px] leading-[1.15] tracking-[-0.02em] m-0">
          {project.title}
        </h2>

        <p className="font-sans text-[14px] text-term-fg-soft leading-relaxed m-0 flex-1 font-normal">
          {project.description}
        </p>

        {/* Footer: tags + open link */}
        <div className="flex items-center justify-between pt-3 border-t border-term-rule-soft">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((t) => (
              <span key={t} className="font-mono text-[11px] text-term-accent">
                #{t}
              </span>
            ))}
          </div>
          {hasUrl ? (
            <span className="font-mono text-[12px] text-term-fg group-hover:text-term-accent transition-colors shrink-0">
              open ›
            </span>
          ) : (
            <span className="font-mono text-[11px] text-term-fg-muted shrink-0">
              local / private
            </span>
          )}
        </div>
      </div>
    </>
  )

  const className = cn(
    "group flex flex-col bg-term-bg md:min-h-[420px] h-full",
    "hover:bg-term-bg-2 transition-colors duration-150",
  )

  if (hasUrl) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className={className}>
        {card}
      </a>
    )
  }

  return <div className={className}>{card}</div>
}
