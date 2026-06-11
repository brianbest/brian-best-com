import Link from "next/link"
import { ContactChannels } from "@/components/terminal/contact-channels"

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Brian Best — LinkedIn is the fastest channel, or ask his AI assistant anything first.",
}

export default function ContactPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* ── Header section ─────────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 pb-8 border-b border-term-rule">
        <div className="font-mono text-[12px] text-term-fg-muted flex items-baseline gap-4 mb-6">
          <span>
            <span className="text-term-accent">$</span> ./contact --list-channels
          </span>
        </div>

        <h1 className="font-sans font-extrabold text-term-fg tracking-[-0.04em] leading-[0.95] mt-0 mb-3 text-[48px] md:text-[88px]">
          Get in touch<span className="text-term-accent cursor-blink">_</span>
        </h1>

        <p className="font-sans text-term-fg-soft leading-relaxed font-normal mt-4 mb-0 max-w-[800px] text-[15px] md:text-[19px]">
          Have a question, a role worth discussing, or something you want to build?
          Pick a channel — LinkedIn gets the fastest response.
        </p>
      </section>

      {/* ── Channels section ───────────────────────────── */}
      <section className="px-5 md:px-14 pt-10 pb-14">
        <div className="flex gap-4 font-mono text-[11px] text-term-fg-muted mb-6">
          <span className="text-term-accent">$</span>
          <span>3 channels found · usually responds within a day</span>
        </div>

        <div className="max-w-[820px]">
          <ContactChannels />

          {/* Async alternative: the AI */}
          <Link
            href="/chat"
            className="mt-6 block bg-term-bg-2 border border-term-rule p-[18px] md:p-6 hover:border-term-accent transition-colors"
          >
            <div className="font-mono text-[11px] text-term-accent uppercase tracking-[0.05em] mb-2">
              Prefer async?
            </div>
            <div className="font-sans font-semibold text-term-fg text-[17px] md:text-[19px] leading-[1.3] tracking-[-0.01em]">
              Ask my AI before you reach out
            </div>
            <p className="font-sans text-term-fg-soft text-[13.5px] md:text-[14.5px] leading-[1.5] mt-2 mb-3">
              It has read everything on this site — career history, skills, projects — and can
              vet a job description for fit, honestly. No login, no waiting on time zones.
            </p>
            <div className="inline-block bg-term-accent text-term-bg font-mono text-[13px] font-semibold py-[10px] px-[14px]">
              Chat with Brian&rsquo;s AI →
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
