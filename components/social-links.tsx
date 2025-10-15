import type { LucideIcon } from "lucide-react"
import { Github, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

const SOCIAL_LINKS: ReadonlyArray<{
  name: string
  url: string
  icon: LucideIcon
}> = [
  {
    name: "GitHub",
    url: "https://github.com/brianbest",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/brianbest",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@brianbest",
    icon: Youtube,
  },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
        <Link
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="text-persona-grey hover:text-persona-red transition-colors"
        >
          <Icon aria-hidden="true" className="h-5 w-5" />
        </Link>
      ))}
    </div>
  )
}
