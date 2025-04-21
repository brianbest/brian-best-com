import { SocialLinks } from "./social-links"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-persona-black border-t border-persona-maroon py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bungee text-persona-red text-lg mb-2">Brian Best</p>
            <p className="text-persona-grey text-sm">Senior Software Developer @ Axonify</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks />
            <p className="text-persona-grey text-sm">© {currentYear} Brian Best. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
