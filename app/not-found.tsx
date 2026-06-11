import Link from "next/link"
import { Prompt } from "@/components/terminal/prompt"

const ROUTES = [
  { label: "index", href: "/" },
  { label: "work", href: "/projects" },
  { label: "writing", href: "/blog" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
  { label: "chat", href: "/chat" },
]

export default function NotFound() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <section className="px-5 md:px-14 pt-14 pb-20">
        <Prompt>cd ./requested-page</Prompt>
        <div className="pl-6 mt-2 font-mono text-[13px] text-term-accent">
          bash: cd: ./requested-page: No such file or directory{" "}
          <span className="text-term-fg-muted">(404)</span>
        </div>

        <div className="mt-10">
          <h1 className="font-sans font-extrabold text-term-fg tracking-[-0.04em] leading-[0.95] text-[48px] md:text-[88px] m-0">
            404<span className="text-term-accent cursor-blink">_</span>
          </h1>
          <p className="font-sans text-term-fg-soft text-[15px] md:text-[18px] mt-4 max-w-[640px]">
            This page doesn&rsquo;t exist — maybe it never did, maybe it moved. Everything that
            does exist is listed below.
          </p>
        </div>

        <div className="mt-10">
          <Prompt>ls ~/</Prompt>
          <div className="pl-6 mt-3 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[14px]">
            {ROUTES.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-term-fg-soft hover:text-term-accent transition-colors"
              >
                {route.label}
                <span className="text-term-fg-muted">/</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="pl-0 mt-12 font-mono text-[12px] text-term-fg-muted">
          <span className="text-term-accent">$</span> tip: press{" "}
          <kbd className="text-term-fg bg-term-bg-2 px-[6px] py-[1px] border border-term-rule not-italic">
            ⌘ K
          </kbd>{" "}
          to search the whole site
        </div>
      </section>
    </div>
  )
}
