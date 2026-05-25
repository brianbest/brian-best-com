import type React from "react"
import { TerminalNav } from "./terminal/nav"
import { TerminalFooter } from "./terminal/footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TerminalNav />
      <div className="flex-grow">{children}</div>
      <TerminalFooter />
    </div>
  )
}
