"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Star, Menu, X, ArrowUpRight, Sparkles } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home", description: "Start from the beginning." },
  { href: "/about", label: "About", description: "Get to know Brian Best." },
  { href: "/projects", label: "Work", description: "Selected client and personal work." },
  { href: "/blog", label: "Journal", description: "Notes, writing, and recent ideas." },
  { href: "/now", label: "Now", description: "What I'm currently focused on." },
  { href: "/uses", label: "Uses", description: "Tools of the trade and daily drivers." },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof document === "undefined") return

    document.body.classList.toggle("overflow-hidden", isMenuOpen)

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#1F3A33]/95 text-[#E8DCC8] backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8DCC8]/10 transition group-hover:bg-[#E8DCC8]/20">
            <Star aria-hidden="true" className="h-5 w-5 text-[#E8944A]" />
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold text-[#F5F1E8] transition group-hover:text-[#E8944A]">
              Brian Best
            </span>
            <span className="text-xs text-[#C9C0B2]">Designer &amp; Creative Partner</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-[#C9C0B2] transition hover:text-[#E8944A]"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 origin-center rounded-full bg-[#E8944A] transition-all group-hover:left-0 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#E8944A]/50 bg-[#E8944A]/10 px-5 py-2 text-sm font-semibold text-[#F5F1E8] transition hover:border-[#E8944A] hover:bg-[#E8944A] hover:text-[#1A1A1A]"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#1F3A33]/80 text-[#F5F1E8] shadow-sm transition hover:border-[#E8944A] hover:text-[#E8944A]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 flex flex-col overflow-hidden bg-gradient-to-b from-[#1F3A33]/95 via-[#243F38]/98 to-[#1F3A33]/95 backdrop-blur-xl transition-all duration-300 ease-out",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-6 pb-6 pt-8">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8DCC8]/15">
              <Sparkles className="h-5 w-5 text-[#E8944A]" aria-hidden="true" />
            </span>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg font-semibold text-[#F5F1E8]">Brian Best</span>
              <span className="text-xs text-[#C9C0B2]">Designing thoughtful experiences</span>
            </div>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#1F3A33]/80 text-[#F5F1E8] transition hover:border-[#E8944A] hover:text-[#E8944A]"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative flex-1 overflow-y-auto">
          <div className="px-6 pb-16">
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-start justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left shadow-sm transition hover:border-[#E8944A]/60 hover:bg-[#E8944A]/10"
                >
                  <div>
                    <span className="block text-base font-semibold text-[#F5F1E8] transition group-hover:text-[#E8944A]">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm text-[#C9C0B2]">{link.description}</span>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 text-[#C9C0B2] transition group-hover:text-[#E8944A]" aria-hidden="true" />
                </Link>
              ))}
            </nav>

            <div className="mt-8 rounded-3xl border border-[#E8DCC8]/20 bg-[#3D5A4C]/80 p-6 text-center shadow-sm">
              <p className="text-sm text-[#C9C0B2]">
                Ready to collaborate on something special?
              </p>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#E8944A] px-6 py-3 text-sm font-semibold text-[#1A1A1A] shadow transition hover:bg-[#D17A2E]"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
