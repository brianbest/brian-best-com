import type React from "react"
import { TerminalNav } from "./terminal/nav"
import { TerminalFooter } from "./terminal/footer"
import { CommandPalette, type PaletteItem } from "./terminal/command-palette"
import { getPosts } from "@/lib/posts"
import { getProjects } from "@/lib/projects"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const [posts, projects] = await Promise.all([getPosts(), getProjects()])

  const paletteItems: PaletteItem[] = [
    ...posts.map((post) => ({
      label: post.title,
      hint: "post",
      href: `/blog/${post.slug}`,
      keywords: post.tags.join(" "),
    })),
    ...projects.map((project) => ({
      label: project.title,
      hint: "project",
      href: project.url || "/projects",
      external: Boolean(project.url),
      keywords: project.tags.join(" "),
    })),
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-term-accent focus:text-term-bg focus:font-mono focus:text-sm"
      >
        Skip to content
      </a>
      <TerminalNav postCount={posts.length} />
      <div id="main-content" className="flex-grow">{children}</div>
      <TerminalFooter />
      <CommandPalette items={paletteItems} />
    </div>
  )
}
