import Link from "next/link"
import { Star, Sparkles, BookOpen, Code, Zap } from "lucide-react"

export const metadata = {
  title: "Now | Brian Best",
  description: "What I'm currently working on and learning - Updated regularly",
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
    <main className="overflow-x-hidden">
      {/* Hero Section with Dark Green Background */}
      <section className="relative min-h-[60vh] bg-[#2C4A3E] text-[#F5F1E8] overflow-hidden">

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#F4B942] mb-4">
              <Sparkles size={32} className="animate-pulse" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-none tracking-tight text-[#E8DCC8] mb-6">
              Now
            </h1>
            <p className="text-[#E8DCC8] text-xl max-w-2xl mb-4">
              What I'm currently focused on, learning, and building
            </p>
            <p className="text-[#E8DCC8] text-sm">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Large "NOW" text in background */}
        <div className="absolute bottom-0 right-0 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-10 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          NOW
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E8944A] flex items-center justify-center">
                <Zap size={24} className="text-white" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">Current Focus</h2>
            </div>
            
            <div className="bg-white border-2 border-[#1A1A1A] p-8">
              <ul className="space-y-4">
                {currentFocus.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <Star size={20} fill="#E8944A" className="text-[#E8944A] flex-shrink-0 mt-1" />
                    <span className="text-[#1A1A1A] text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Goals Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24 relative">
        {/* Large "LEARN" text in background */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-20 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          LEARN
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F4B942] mb-12">Learning Goals</h2>
            
            <div className="space-y-6">
              {learningGoals.map((goal) => (
                <div key={goal.name} className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm p-6 border-2 border-[#F4B942]">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-serif text-lg text-[#F5F1E8]">{goal.name}</span>
                    <span className="text-sm text-[#E8DCC8]">{goal.progress}%</span>
                  </div>
                  <div className="w-full h-6 bg-[rgba(0,0,0,0.5)] border-2 border-[#E8944A]">
                    <div 
                      className="h-full bg-[#E8944A] transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reading List Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E8944A] flex items-center justify-center">
                <BookOpen size={24} className="text-white" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">Reading List</h2>
            </div>
            
            <div className="space-y-4">
              {reading.map((book) => (
                <div key={book.title} className="bg-white border-2 border-[#1A1A1A] p-6 hover:border-[#E8944A] transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">{book.title}</h3>
                      <p className="text-sm text-[#6C6C6C]">by {book.author}</p>
                    </div>
                    <span className={`px-4 py-2 text-sm font-semibold ${
                      book.status === "reading" 
                        ? "bg-[#E8944A] text-white" 
                        : book.status === "completed" 
                        ? "bg-[#2C4A3E] text-white" 
                        : "bg-[#E8DCC8] text-[#1A1A1A] border-2 border-[#1A1A1A]"
                    }`}>
                      {book.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section className="bg-[#E8944A] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center">
                <Code size={24} className="text-[#F4B942]" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">Side Projects</h2>
            </div>
            
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.name} className="bg-white border-2 border-[#1A1A1A] p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <h3 className="font-serif text-xl text-[#1A1A1A]">{project.name}</h3>
                    <span className={`px-4 py-2 text-sm font-semibold inline-block ${
                      project.status === "active" 
                        ? "bg-[#2C4A3E] text-white" 
                        : "bg-[#F4B942] text-[#1A1A1A]"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-[#E8DCC8] text-[#1A1A1A] px-3 py-1 border border-[#1A1A1A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F4B942] mb-12">What's Next</h2>
            
            <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm p-8 border-2 border-[#F4B942]">
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-[#F4B942] text-xl">▸</span>
                  <span className="text-[#E8DCC8]">Launch my AI code review tool for teams</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[#F4B942] text-xl">▸</span>
                  <span className="text-[#E8DCC8]">Write more technical blog posts on system design</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[#F4B942] text-xl">▸</span>
                  <span className="text-[#E8DCC8]">Speak at a local tech meetup about AI integration</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[#F4B942] text-xl">▸</span>
                  <span className="text-[#E8DCC8]">Contribute to open-source TypeScript projects</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-[#F4B942]/20 text-center">
              <p className="text-sm text-[#E8DCC8]">
                This page is inspired by{" "}
                <a 
                  href="https://nownownow.com/about" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#F4B942] hover:text-[#D4A854] transition-colors underline"
                >
                  nownownow.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
