import { PixelCard } from "@/components/pixel-card"

export const metadata = {
  title: "Uses | Brian Best",
  description: "Tools, software, and hardware I use daily",
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
    "Communication": [
      { name: "Slack", description: "Team communication at work" },
      { name: "Discord", description: "Developer communities and side project coordination" },
      { name: "Zoom", description: "Video calls and screen sharing" },
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
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-pixel text-3xl md:text-5xl text-primary mb-4">Uses</h1>
          <p className="text-muted-foreground">
            A comprehensive list of tools, software, and hardware I use for development and productivity
          </p>
        </div>

        {/* Hardware */}
        <section className="mb-12">
          <h2 className="font-pixel text-2xl text-primary mb-6 flex items-center gap-3">
            <span className="w-3 h-3 bg-primary"></span>
            Hardware
          </h2>
          <div className="space-y-4">
            {hardware.map((item) => (
              <PixelCard key={item.name} className="p-4">
                <h3 className="font-pixel text-sm text-primary mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </PixelCard>
            ))}
          </div>
        </section>

        {/* Software */}
        <section className="mb-12">
          <h2 className="font-pixel text-2xl text-primary mb-6 flex items-center gap-3">
            <span className="w-3 h-3 bg-secondary"></span>
            Software & Tools
          </h2>
          {Object.entries(software).map(([category, tools]) => (
            <div key={category} className="mb-8">
              <h3 className="font-pixel text-lg text-secondary mb-4">{category}</h3>
              <div className="space-y-4">
                {tools.map((tool) => (
                  <PixelCard key={tool.name} hoverable={false} className="p-4">
                    <h4 className="font-pixel text-xs text-primary mb-1">{tool.name}</h4>
                    <p className="text-xs text-muted-foreground">{tool.description}</p>
                  </PixelCard>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* VS Code Extensions */}
        <section className="mb-12">
          <h2 className="font-pixel text-2xl text-primary mb-6 flex items-center gap-3">
            <span className="w-3 h-3 bg-accent"></span>
            VS Code Extensions
          </h2>
          <PixelCard className="p-6">
            <ul className="space-y-2">
              {extensions.map((extension, index) => (
                <li key={index} className="flex gap-3 items-start text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground">{extension}</span>
                </li>
              ))}
            </ul>
          </PixelCard>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="font-pixel text-2xl text-primary mb-6 flex items-center gap-3">
            <span className="w-3 h-3 bg-pixel-success"></span>
            Services & Cloud
          </h2>
          <div className="space-y-4">
            {services.map((service) => (
              <PixelCard key={service.name} className="p-4">
                <h3 className="font-pixel text-sm text-primary mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </PixelCard>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section>
          <h2 className="font-pixel text-2xl text-primary mb-6">Productivity Workflow</h2>
          <PixelCard className="p-6 bg-muted/30">
            <div className="space-y-4 text-sm text-foreground">
              <p>
                <span className="font-pixel text-primary text-xs">MORNING:</span> Start with a review of overnight alerts and CI/CD status. Use Notion to plan the day's tasks and priorities.
              </p>
              <p>
                <span className="font-pixel text-primary text-xs">DEVELOPMENT:</span> Deep focus sessions with noise-cancelling headphones. Use GitHub Copilot and custom AI tools to accelerate development. Test frequently with Docker containers.
              </p>
              <p>
                <span className="font-pixel text-primary text-xs">COLLABORATION:</span> Slack for async communication, Zoom for sync meetings. Document decisions and architectural choices in Notion.
              </p>
              <p>
                <span className="font-pixel text-primary text-xs">LEARNING:</span> Dedicate time to reading technical articles, experimenting with new tools, and contributing to open source.
              </p>
            </div>
          </PixelCard>
        </section>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t-2 border-primary/20 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            This page is inspired by <a href="https://uses.tech" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">uses.tech</a>
          </p>
        </div>
      </div>
    </main>
  )
}
