import { PixelCard } from "@/components/pixel-card"
import { PixelBadge } from "@/components/pixel-badge"

export const metadata = {
  title: "Now | Brian Best",
  description: "What I'm currently working on and learning",
}

export default function NowPage() {
  const lastUpdated = "October 7, 2025"

  const currentFocus = [
    "Leading system health initiatives at Axonify",
    "Building AI-powered developer tools",
    "Exploring edge AI and LLM agents",
    "Mentoring junior developers",
  ]

  const learningGoals = [
    { name: "Advanced TypeScript Patterns", progress: 75 },
    { name: "Edge Computing & AI", progress: 60 },
    { name: "System Design at Scale", progress: 85 },
    { name: "Rust Programming", progress: 40 },
  ]

  const reading = [
    { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", status: "reading" },
    { title: "The Pragmatic Programmer", author: "David Thomas", status: "completed" },
    { title: "Staff Engineer", author: "Will Larson", status: "queue" },
  ]

  const projects = [
    { name: "AI Code Review Assistant", status: "active", tech: ["TypeScript", "OpenAI", "Node.js"] },
    { name: "Personal Blog Redesign", status: "active", tech: ["Next.js", "Tailwind"] },
    { name: "Developer Productivity Tools", status: "planning", tech: ["Rust", "CLI"] },
  ]

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-pixel text-3xl md:text-5xl text-primary mb-4">Now</h1>
          <p className="text-muted-foreground mb-4">
            What I'm currently focused on, learning, and building
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Current Focus */}
        <section className="mb-12">
          <h2 className="font-pixel text-2xl text-primary mb-6">Current Focus</h2>
          <PixelCard className="p-6">
            <ul className="space-y-3">
              {currentFocus.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </PixelCard>
        </section>

        {/* Learning Goals */}
        <section className="mb-12">
          <h2 className="font-pixel text-2xl text-primary mb-6">Learning Goals</h2>
          <div className="space-y-4">
            {learningGoals.map((goal) => (
              <PixelCard key={goal.name} className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-pixel text-sm text-primary">{goal.name}</span>
                  <span className="text-xs font-mono text-muted-foreground">{goal.progress}%</span>
                </div>
                <div className="w-full h-4 bg-muted border-2 border-primary">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </PixelCard>
            ))}
          </div>
        </section>

        {/* Reading List */}
        <section className="mb-12">
          <h2 className="font-pixel text-2xl text-primary mb-6">Reading List</h2>
          <div className="space-y-4">
            {reading.map((book) => (
              <PixelCard key={book.title} className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-pixel text-sm text-primary mb-1">{book.title}</h3>
                    <p className="text-xs text-muted-foreground">by {book.author}</p>
                  </div>
                  <PixelBadge 
                    variant={book.status === "reading" ? "primary" : book.status === "completed" ? "success" : "default"}
                  >
                    {book.status}
                  </PixelBadge>
                </div>
              </PixelCard>
            ))}
          </div>
        </section>

        {/* Side Projects */}
        <section className="mb-12">
          <h2 className="font-pixel text-2xl text-primary mb-6">Side Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <PixelCard key={project.name} className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <h3 className="font-pixel text-sm text-primary">{project.name}</h3>
                  <PixelBadge 
                    variant={project.status === "active" ? "success" : "warning"}
                  >
                    {project.status}
                  </PixelBadge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono bg-muted text-muted-foreground px-2 py-1 border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </PixelCard>
            ))}
          </div>
        </section>

        {/* What's Next */}
        <section>
          <h2 className="font-pixel text-2xl text-primary mb-6">What's Next</h2>
          <PixelCard className="p-6 bg-muted/30">
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex gap-3">
                <span className="text-secondary">▸</span>
                <span>Launch my AI code review tool for teams</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary">▸</span>
                <span>Write more technical blog posts on system design</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary">▸</span>
                <span>Speak at a local tech meetup about AI integration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary">▸</span>
                <span>Contribute to open-source TypeScript projects</span>
              </li>
            </ul>
          </PixelCard>
        </section>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t-2 border-primary/20 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            This page is inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">nownownow.com</a>
          </p>
        </div>
      </div>
    </main>
  )
}
