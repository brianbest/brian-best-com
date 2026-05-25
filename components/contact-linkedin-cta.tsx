"use client"

import { track } from "@vercel/analytics"

export function ContactLinkedInCta() {
  return (
    <a
      href="https://www.linkedin.com/in/brianbest101"
      className="inline-block font-bungee text-xl bg-persona-red text-persona-black px-8 py-4 shadow-thief hover:transform hover:-translate-y-1 hover:rotate-1 transition-transform"
      onClick={() =>
        track("contact_click", {
          location: "contact_page",
          label: "Message Me on LinkedIn",
          destination: "https://www.linkedin.com/in/brianbest101",
        })
      }
    >
      Message Me on LinkedIn
    </a>
  )
}
