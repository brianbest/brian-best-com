"use client"

import { track } from "@vercel/analytics"

const CHANNELS = [
  {
    name: "linkedin",
    handle: "linkedin.com/in/brianbest101",
    url: "https://www.linkedin.com/in/brianbest101",
    dotClass: "text-term-green",
    note: "fastest response",
  },
  {
    name: "github",
    handle: "github.com/brianbest",
    url: "https://github.com/brianbest",
    dotClass: "text-term-blue",
    note: "code & projects",
  },
  {
    name: "youtube",
    handle: "youtube.com/@brianbest",
    url: "https://youtube.com/@brianbest",
    dotClass: "text-term-yellow",
    note: "occasional videos",
  },
] as const

function trackContactClick(label: string, destination: string) {
  track("contact_click", {
    location: "contact_page",
    label,
    destination,
  })
}

export function ContactChannels() {
  return (
    <div className="border border-term-rule bg-term-bg-2">
      {CHANNELS.map((channel, i) => (
        <a
          key={channel.name}
          href={channel.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-3 md:gap-4 px-5 md:px-7 py-4 hover:bg-term-bg-3 transition-colors ${
            i !== 0 ? "border-t border-term-rule" : ""
          }`}
          onClick={() => trackContactClick(channel.name, channel.url)}
        >
          <span className={`font-mono text-[13px] ${channel.dotClass}`}>●</span>
          <span className="font-mono text-[13px] text-term-fg w-[76px] shrink-0">
            {channel.name}
          </span>
          <span className="font-mono text-[12px] text-term-fg-soft truncate">
            {channel.handle}
          </span>
          <span className="hidden md:inline font-mono text-[11px] text-term-fg-muted ml-auto">
            # {channel.note}
          </span>
          <span className="font-mono text-[13px] text-term-fg-muted group-hover:text-term-accent transition-colors md:ml-4 ml-auto">
            →
          </span>
        </a>
      ))}

      {/* Primary CTA row */}
      <div className="border-t border-term-rule px-5 md:px-7 py-5">
        <a
          href="https://www.linkedin.com/in/brianbest101"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-term-accent text-term-bg font-mono text-[13px] font-bold tracking-[0.02em] px-[18px] py-[12px] hover:bg-term-accent-deep transition-colors glow-accent"
          onClick={() =>
            trackContactClick("Message Me on LinkedIn", "https://www.linkedin.com/in/brianbest101")
          }
        >
          Message me on LinkedIn →
        </a>
      </div>
    </div>
  )
}
