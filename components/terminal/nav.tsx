"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { track } from "@vercel/analytics"
import { cn } from "@/lib/utils"

type ActiveSection = "home" | "writing" | "work" | "about" | "chat"

/** Derive the active nav section from the current path when not explicitly set. */
function deriveActive(pathname: string | null): ActiveSection | undefined {
  if (!pathname) return undefined
  if (pathname === "/") return "home"
  if (pathname.startsWith("/blog")) return "writing"
  if (pathname.startsWith("/projects")) return "work"
  if (pathname.startsWith("/about")) return "about"
  if (pathname.startsWith("/chat")) return "chat"
  return undefined
}

interface TerminalNavProps {
  active?: ActiveSection
  /**
   * Total post count for the ~/writing badge.
   * Accept as prop (not fetched here — this is a client component).
   * Defaults to 4 (current real count).
   */
  postCount?: number
}

const TABS: { key: ActiveSection; label: string; href: string }[] = [
  { key: "home", label: "~/index", href: "/" },
  { key: "work", label: "~/work", href: "/projects" },
  { key: "writing", label: "~/writing", href: "/blog" },
  { key: "about", label: "~/about", href: "/about" },
]

const GLYPHS: Record<ActiveSection, string> = {
  home: "○",
  work: "◉",
  writing: "▣",
  about: "✦",
  chat: "›",
}

function TabItem({
  tabKey,
  label,
  href,
  isActive,
  badge,
  onClick,
}: {
  tabKey: ActiveSection
  label: string
  href: string
  isActive: boolean
  badge?: number
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 px-[18px] py-[10px] font-mono text-[13px] border-r border-term-rule cursor-pointer transition-colors",
        "border-t-2",
        isActive
          ? "text-term-fg bg-term-bg border-t-term-accent relative -top-px"
          : "text-term-fg-soft bg-transparent border-t-transparent hover:text-term-fg",
      )}
    >
      <span className="text-term-fg-muted text-[11px]">{GLYPHS[tabKey]}</span>
      {label}
      {badge != null && (
        <span className="ml-1 text-term-accent text-[11px]">{badge}</span>
      )}
    </Link>
  )
}

export function TerminalNav({ active, postCount = 4 }: TerminalNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const resolvedActive = active ?? deriveActive(pathname)

  const handleNavClick = (label: string, href: string) => {
    track("cta_click", { location: "nav", label, destination: href })
    setMobileOpen(false)
  }

  return (
    <>
      {/* ── Desktop nav (md+) ── */}
      <nav className="hidden md:flex bg-term-bg-2 border-b border-term-rule items-stretch pl-4">
        {/* Monogram + brand */}
        <div className="flex items-center gap-3 px-6 border-r border-term-rule">
          <Link
            href="/"
            onClick={() => handleNavClick("brand", "/")}
            className="flex items-center gap-3 no-underline"
          >
            <div className="w-8 h-8 bg-term-accent text-term-bg font-mono font-bold text-[15px] grid place-items-center flex-shrink-0">
              $
            </div>
            <span className="font-mono font-semibold text-term-fg text-[14px]">brianbest.com</span>
          </Link>
        </div>

        {/* Tabs */}
        {TABS.map((tab) => (
          <TabItem
            key={tab.key}
            tabKey={tab.key}
            label={tab.label}
            href={tab.href}
            isActive={resolvedActive === tab.key}
            badge={tab.key === "writing" ? postCount : undefined}
            onClick={() => handleNavClick(tab.label, tab.href)}
          />
        ))}

        {/* Spacer */}
        <div className="flex-1 border-r border-term-rule" />

        {/* Command palette chip */}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
          aria-label="Open command palette"
          className="flex items-center gap-2 px-[14px] font-mono text-[11px] text-term-fg-muted hover:text-term-fg border-r border-term-rule transition-colors cursor-pointer"
        >
          <span className="px-[7px] py-[2px] bg-term-bg border border-term-rule">⌘ K</span>
        </button>

        {/* Chat CTA */}
        <Link
          href="/chat"
          onClick={() => handleNavClick("chat", "/chat")}
          className="flex items-center gap-2 px-[18px] font-mono text-[13px] text-term-fg hover:text-term-accent transition-colors no-underline"
        >
          <span className="w-[7px] h-[7px] bg-term-accent rounded-full pulse-soft" />
          <span>Chat with Brian&rsquo;s AI</span>
          <span className="ml-2 px-2 py-0.5 bg-term-accent text-term-bg text-[10px] font-bold tracking-[0.06em]">
            LIVE
          </span>
        </Link>
      </nav>

      {/* ── Mobile nav (< md) ── */}
      <nav className="md:hidden bg-term-bg-2 border-b border-term-rule px-[14px] h-[52px] flex items-center justify-between gap-[10px]">
        {/* Left: monogram + brand */}
        <div className="flex items-center gap-[10px]">
          <Link href="/" onClick={() => handleNavClick("brand", "/")} className="flex items-center gap-[10px]">
            <div className="w-7 h-7 bg-term-accent text-term-bg font-mono font-bold text-[14px] grid place-items-center">
              $
            </div>
            <span className="font-mono font-semibold text-term-fg text-[13px]">brianbest.com</span>
          </Link>
        </div>

        {/* Right: chat pill + hamburger */}
        <div className="flex items-center gap-[10px]">
          <Link
            href="/chat"
            onClick={() => handleNavClick("chat", "/chat")}
            className="inline-flex items-center gap-[6px] px-[11px] py-[7px] bg-term-accent text-term-bg font-mono text-[12px] font-semibold no-underline glow-accent"
          >
            <span className="w-[5px] h-[5px] bg-term-bg rounded-full pulse-soft" />
            Chat with Brian&rsquo;s AI
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-[4px] p-[10px_4px] cursor-pointer"
          >
            <span className="block w-[18px] h-[1.5px] bg-term-fg" />
            <span className="block w-[18px] h-[1.5px] bg-term-fg" />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu overlay ── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-term-bg flex flex-col">
          {/* Header */}
          <div className="px-[14px] h-[52px] flex items-center justify-between border-b border-term-rule bg-term-bg-2">
            <Link href="/" onClick={() => handleNavClick("brand", "/")} className="flex items-center gap-[10px]">
              <div className="w-7 h-7 bg-term-accent text-term-bg font-mono font-bold text-[14px] grid place-items-center">
                $
              </div>
              <span className="font-mono font-semibold text-term-fg text-[13px]">brianbest.com</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="font-mono text-term-fg-muted text-[20px] leading-none cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-5 pt-8 gap-2">
            {TABS.map((tab) => (
              <Link
                key={tab.key}
                href={tab.href}
                onClick={() => handleNavClick(tab.label, tab.href)}
                className={cn(
                  "font-mono text-[18px] py-4 border-b border-term-rule flex items-center justify-between",
                  resolvedActive === tab.key ? "text-term-fg" : "text-term-fg-soft",
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="text-term-fg-muted text-[14px]">{GLYPHS[tab.key]}</span>
                  {tab.label}
                </span>
                {tab.key === "writing" && (
                  <span className="text-term-accent text-[13px]">{postCount}</span>
                )}
              </Link>
            ))}

            <Link
              href="/chat"
              onClick={() => handleNavClick("chat", "/chat")}
              className="font-mono text-[18px] py-4 border-b border-term-rule text-term-fg-soft flex items-center justify-between"
            >
              <span className="flex items-center gap-3">
                <span className="text-term-accent w-[7px] h-[7px] rounded-full inline-block" />
                chat
              </span>
              <span className="text-term-accent text-[10px] font-bold tracking-[0.06em] px-2 py-0.5 bg-term-accent text-term-bg">
                LIVE
              </span>
            </Link>

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                window.dispatchEvent(new CustomEvent("open-command-palette"))
              }}
              className="font-mono text-[18px] py-4 border-b border-term-rule text-term-fg-soft flex items-center gap-3 text-left"
            >
              <span className="text-term-fg-muted text-[14px]">›</span>
              search / terminal
            </button>
          </nav>
        </div>
      )}
    </>
  )
}
