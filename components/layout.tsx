import type React from "react"
import { TerminalNav } from "./terminal/nav"
import { TerminalFooter } from "./terminal/footer"
import { getPosts } from "@/lib/posts"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const posts = await getPosts()

  return (
    <div className="flex flex-col min-h-screen">
      <TerminalNav postCount={posts.length} />
      <div className="flex-grow">{children}</div>
      <TerminalFooter />
    </div>
  )
}
