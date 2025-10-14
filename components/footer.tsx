import { SocialLinks } from "./social-links"
import { Star } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2C4A3E] text-[#F5F1E8] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
              <Star className="h-5 w-5 text-[#F4B942] fill-[#F4B942]" />
              <p className="font-serif text-xl font-bold text-[#F4B942]">Brian Best</p>
            </div>
            <p className="text-[#E8DCC8] text-sm">Senior Software Developer @ Axonify</p>
            <p className="text-[#E8DCC8] text-xs mt-2">Building AI-driven solutions for enterprise customer care.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks />
            <p className="text-[#E8DCC8] text-xs mt-2">© {currentYear} Brian Best. All rights reserved.</p>
          </div>
        </div>
        
        {/* Decoration */}
        <div className="mt-8 pt-8 border-t border-[#3D5A4C] text-center">
          <p className="text-[#E8DCC8] text-xs">
            Made with <span className="text-[#F4B942]">♥</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
