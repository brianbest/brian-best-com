import { Github, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/brianbest",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/brianbest",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@brianbest",
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      name: "BlueSky",
      url: "https://bsky.app/profile/brianbest.bsky.social",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 2L2 12l10 10 10-10-10-10z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-persona-grey hover:text-persona-red transition-colors"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  )
}
