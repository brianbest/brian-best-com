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
      <TerminalNav postCount={posts.length} />
      <div className="flex-grow">{children}</div>
      <TerminalFooter />
      <CommandPalette items={paletteItems} />
    </div>
  )
}
