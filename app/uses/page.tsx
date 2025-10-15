import Link from "next/link"
import { Star, Sparkles, Laptop, Code, Wrench, Cloud } from "lucide-react"

export const metadata = {
  title: "Uses | Brian Best",
  description: "Tools, software, and hardware I use daily for development and productivity",
}

export default function UsesPage() {
  const hardware = [
    { name: "MacBook Pro 16\" M3 Max", description: "64GB RAM, 2TB SSD - My primary development machine" },
    { name: "LG UltraWide 34\" Monitor", description: "34WN80C-B - Perfect for multiple windows side-by-side" },
    { name: "Apple Magic Keyboard", description: "Wireless, numeric keypad version" },
    { name: "Logitech MX Master 3", description: "Best mouse I've ever used for productivity" },
    { name: "Sony WH-1000XM5", description: "Noise-cancelling headphones for focus time" },
    { name: "Blue Yeti Microphone", description: "For meetings and podcast recordings" },
  ]

  const software = {
    "Development": [
      { name: "VS Code", description: "My primary editor with vim keybindings" },
      { name: "IntelliJ IDEA", description: "For Java development at work" },
      { name: "iTerm2 + Oh My Zsh", description: "Terminal setup with Starship prompt" },
      { name: "Docker Desktop", description: "Container management and local development" },
      { name: "Postman", description: "API development and testing" },
    ],
    "Design & Creative": [
      { name: "Figma", description: "UI/UX design and prototyping" },
      { name: "Excalidraw", description: "Quick diagrams and wireframes" },
      { name: "Pixelmator Pro", description: "Image editing and pixel art creation" },
    ],
    "Productivity": [
      { name: "Notion", description: "Note-taking, documentation, and project management" },
      { name: "Linear", description: "Issue tracking for side projects" },
      { name: "Raycast", description: "Spotlight replacement with powerful extensions" },
      { name: "Rectangle", description: "Window management on macOS" },
      { name: "1Password", description: "Password management and secrets storage" },
    ],
  }

  const extensions = [
    "GitHub Copilot - AI pair programming",
    "Vim - Vim keybindings for VS Code",
    "Prettier - Code formatting",
    "ESLint - JavaScript/TypeScript linting",
    "GitLens - Enhanced Git integration",
    "Thunder Client - REST API testing",
    "Error Lens - Inline error display",
    "Material Icon Theme - File icons",
    "Tailwind CSS IntelliSense - Tailwind autocomplete",
  ]

  const services = [
    { name: "GitHub", description: "Code hosting and version control" },
    { name: "Vercel", description: "Deployment platform for Next.js apps" },
    { name: "Google Cloud Platform", description: "Cloud infrastructure at work" },
    { name: "Supabase", description: "Database and backend for side projects" },
    { name: "OpenAI API", description: "GPT integration for AI tooling" },
    { name: "Plausible Analytics", description: "Privacy-friendly website analytics" },
  ]

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Dark Green Background */}
      <section className="relative min-h-[60vh] bg-[#2C4A3E] text-[#F5F1E8] overflow-hidden">
        {/* Navigation */}
        <div className="absolute top-0 right-0 p-6 md:p-8 z-20 flex items-center gap-6">
          <Link href="/" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Home
          </Link>
          <Link href="/about" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            About me
          </Link>
          <Link href="/blog" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Resume
          </Link>
          <Link href="/projects" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Work
          </Link>
          <Link href="/contact" className="bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium hover:bg-[#D4A854] transition-colors text-sm">
            Get in touch!
          </Link>
        </div>

        {/* Back Button */}
        <Link href="/" className="absolute top-6 left-6 md:top-8 md:left-8 z-20 w-12 h-12 rounded-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex items-center justify-center text-[#F5F1E8] hover:bg-[rgba(0,0,0,0.5)] transition-all">
          <span className="text-2xl">←</span>
        </Link>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#F4B942] mb-4">
              <Sparkles size={32} className="animate-pulse" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-none tracking-tight text-[#E8DCC8] mb-6">
              Uses
            </h1>
            <p className="text-[#E8DCC8] text-xl max-w-2xl">
              A comprehensive list of tools, software, and hardware I use for development and productivity
            </p>
          </div>
        </div>

        {/* Large "TOOLS" text in background */}
        <div className="absolute bottom-0 right-0 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-10 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          TOOLS
        </div>
      </section>

      {/* Hardware Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-[#E8944A] flex items-center justify-center">
                <Laptop size={24} className="text-white" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">Hardware</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hardware.map((item) => (
                <div key={item.name} className="bg-white border-2 border-[#1A1A1A] p-6 hover:border-[#E8944A] transition-colors">
                  <div className="flex gap-3 mb-3">
                    <Star size={20} fill="#E8944A" className="text-[#E8944A] flex-shrink-0 mt-1" />
                    <h3 className="font-serif text-lg text-[#1A1A1A]">{item.name}</h3>
                  </div>
                  <p className="text-sm text-[#6C6C6C] ml-8">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24 relative">
        {/* Large "CODE" text in background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-20 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          CODE
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-[#E8944A] flex items-center justify-center">
                <Code size={24} className="text-white" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F4B942]">Software & Tools</h2>
            </div>
            
            {Object.entries(software).map(([category, tools]) => (
              <div key={category} className="mb-12">
                <h3 className="font-serif text-2xl text-[#E8944A] mb-6">{category}</h3>
                <div className="space-y-4">
                  {tools.map((tool) => (
                    <div key={tool.name} className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm border-2 border-[#F4B942] p-6">
                      <h4 className="font-serif text-base text-[#F5F1E8] mb-2">{tool.name}</h4>
                      <p className="text-sm text-[#E8DCC8]">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VS Code Extensions Section */}
      <section className="bg-[#E8944A] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center">
                <Wrench size={24} className="text-[#F4B942]" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">VS Code Extensions</h2>
            </div>
            
            <div className="bg-white border-2 border-[#1A1A1A] p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extensions.map((extension, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-[#E8944A] mt-1">•</span>
                    <span className="text-[#1A1A1A] text-sm">{extension}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-[#E8944A] flex items-center justify-center">
                <Cloud size={24} className="text-white" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">Services & Cloud</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.name} className="bg-white border-2 border-[#1A1A1A] p-6 hover:border-[#E8944A] transition-colors">
                  <div className="flex gap-3 mb-3">
                    <Star size={20} fill="#E8944A" className="text-[#E8944A] flex-shrink-0 mt-1" />
                    <h3 className="font-serif text-lg text-[#1A1A1A]">{service.name}</h3>
                  </div>
                  <p className="text-sm text-[#6C6C6C] ml-8">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F4B942] mb-12">Productivity Workflow</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm border-2 border-[#F4B942] p-6">
                <h3 className="font-serif text-xl text-[#F4B942] mb-4">Morning</h3>
                <p className="text-[#E8DCC8] text-sm leading-relaxed">
                  Start with a review of overnight alerts and CI/CD status. Use Notion to plan the day's tasks and priorities.
                </p>
              </div>

              <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm border-2 border-[#F4B942] p-6">
                <h3 className="font-serif text-xl text-[#F4B942] mb-4">Development</h3>
                <p className="text-[#E8DCC8] text-sm leading-relaxed">
                  Deep focus sessions with noise-cancelling headphones. Use GitHub Copilot and custom AI tools to accelerate development. Test frequently with Docker containers.
                </p>
              </div>

              <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm border-2 border-[#F4B942] p-6">
                <h3 className="font-serif text-xl text-[#F4B942] mb-4">Collaboration</h3>
                <p className="text-[#E8DCC8] text-sm leading-relaxed">
                  Slack for async communication, Zoom for sync meetings. Document decisions and architectural choices in Notion.
                </p>
              </div>

              <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm border-2 border-[#F4B942] p-6">
                <h3 className="font-serif text-xl text-[#F4B942] mb-4">Learning</h3>
                <p className="text-[#E8DCC8] text-sm leading-relaxed">
                  Dedicate time to reading technical articles, experimenting with new tools, and contributing to open source.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-[#F4B942]/20 text-center">
              <p className="text-sm text-[#E8DCC8]">
                This page is inspired by{" "}
                <a 
                  href="https://uses.tech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#F4B942] hover:text-[#D4A854] transition-colors underline"
                >
                  uses.tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
