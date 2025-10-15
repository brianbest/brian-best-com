"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Resume" },
  { href: "/now", label: "Now" },
  { href: "/uses", label: "Uses" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Star aria-hidden="true" className="h-6 w-6 text-primary fill-primary group-hover:animate-pulse" />
            <span className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Brian Best
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors text-sm"
            >
              Get in touch!
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-background transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-border">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Star aria-hidden="true" className="h-6 w-6 text-primary fill-primary" />
              <span className="font-serif text-xl font-bold text-foreground">Brian Best</span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-foreground hover:text-primary transition-colors p-2" 
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors p-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors text-sm mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in touch!
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
