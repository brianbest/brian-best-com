import { SocialLinks } from "./social-links"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t-3 border-primary py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-pixel text-primary text-lg mb-3">Brian Best</p>
            <p className="text-muted-foreground text-sm">Senior Software Developer @ Axonify</p>
            <p className="text-muted-foreground text-xs mt-2 font-mono">Building the future, one pixel at a time.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks />
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 bg-pixel-success animate-blink"></div>
              <p className="text-muted-foreground text-xs font-mono">ONLINE</p>
            </div>
            <p className="text-muted-foreground text-xs mt-2">© {currentYear} Brian Best. All rights reserved.</p>
          </div>
        </div>
        
        {/* Pixel decoration */}
        <div className="mt-8 pt-8 border-t-2 border-primary/20 text-center">
          <p className="text-muted-foreground text-xs font-pixel">
            Made with <span className="text-secondary">♥</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
