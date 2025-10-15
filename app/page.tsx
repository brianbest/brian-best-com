import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, Star, Sparkles } from "lucide-react"

const TECH_STACK = {
  primary: ["Java", "JavaScript", "TypeScript", "Node.js"],
  cloud: ["Google Cloud Platform (GCP)", "MySQL", "Kubernetes"],
  ai: ["Large Language Models (LLM)", "LLM Operations (LLMOps)", "Model Context Protocol (MCP)"],
} as const

const LANGUAGES: ReadonlyArray<{ name: string; level: string }> = [
  { name: "English", level: "Fluent" },
  { name: "French", level: "Intermediate" },
  { name: "Vietnamese", level: "Native" },
]

const HOBBIES: ReadonlyArray<{ name: string; subtitle: string }> = [
  { name: "Classical Guitar", subtitle: "Balancing precision with creativity" },
  { name: "Cycling", subtitle: "Exploring Waterloo's trail network" },
  { name: "Digital Art", subtitle: "Visual storytelling experiments" },
  { name: "Coffee Brewing", subtitle: "Dialing in the perfect pour-over" },
]

const OUTLINE_TEXT_STYLE = { WebkitTextStroke: "2px #F4B942" } as const
const OUTLINE_TEXT_ACCENT_STYLE = { WebkitTextStroke: "2px #D4A854" } as const

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Dark Green Background */}
      <section className="relative min-h-screen bg-[#2C4A3E] text-[#F5F1E8] overflow-hidden" id="hero">

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and Text */}
            <div className="relative">
              {/* Star decorations */}
              <div className="absolute -top-8 -left-4 text-[#F4B942]">
                <Sparkles aria-hidden="true" className="animate-pulse" size={40} />
              </div>
              
              {/* Orange background with silhouette */}
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto bg-[#E8944A] overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-center">
                  <Image
                    src="/brian.jpeg"
                    alt="Brian Best"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Star decoration bottom */}
              <div className="absolute -bottom-4 left-1/3 text-[#F4B942]">
                <Star aria-hidden="true" fill="#F4B942" size={32} />
              </div>

              {/* Quote box */}
              <div className="absolute bottom-0 left-0 bg-[#E8944A] text-[#1A1A1A] p-6 max-w-xs text-sm">
                <p className="leading-relaxed">
                  "I love design and anything related to art. I approach each project with a vision and enigmatic style of my own while keeping things functional and inclusive."
                </p>
              </div>
            </div>

            {/* Right side - Portfolio text and info */}
            <div className="relative space-y-8">
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-[#E8DCC8]">
                PORT<br />FOLIO
              </h1>
              
              {/* Outlined text overlays */}
              <div
                className="absolute top-0 right-0 font-serif text-6xl md:text-8xl font-bold text-transparent"
                style={OUTLINE_TEXT_STYLE}
              >
                FOLIO
              </div>

              <div className="space-y-2 mt-8">
                <p className="text-sm text-[#E8DCC8]">
                  <span className="font-semibold">BE:</span> /hannnb
                </p>
                <p className="text-sm text-[#E8DCC8]">
                  <span className="font-semibold">IG:</span> @han.nnb
                </p>
                <p className="text-sm text-[#E8DCC8]">
                  <span className="font-semibold">LI:</span> /han-nnb
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <a
            href="#about"
            className="w-16 h-16 rounded-full bg-[#F4B942] flex flex-col items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="text-[#1A1A1A] text-xs font-medium">Scroll</span>
            <span className="text-[#1A1A1A] text-xs font-medium">down</span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24" id="about">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Introduction */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#E8944A] mb-2">
                  <Star aria-hidden="true" fill="#E8944A" size={24} />
                  <span className="font-serif text-2xl">Brian Best</span>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4">
                  Hello,<br />I'm Brian!
                </h2>
              </div>
              
              <p className="text-[#1A1A1A] text-base leading-relaxed">
                I am a Senior Software Developer based in Waterloo, Canada, specializing in AI-driven systems and enterprise software solutions. At Axonify, I lead the development of LLM-powered support tools and system health initiatives that transform how we serve our customers.
              </p>

              <a
                href="mailto:brian.best@example.com"
                className="inline-flex items-center gap-3 bg-[#E8944A] text-white px-6 py-3 rounded-full hover:bg-[#D17A2E] transition-colors"
              >
                <Mail aria-hidden="true" size={20} />
                <span className="text-sm">brian.best@example.com</span>
              </a>
            </div>

            {/* Right side - Photo and details */}
            <div className="relative">
              <div className="relative w-full max-w-md ml-auto">
                {/* Photo */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src="/brianabout.jpeg"
                    alt="Brian Best"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Green overlay block */}
                  <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-[#3D5A4C] -z-10"></div>
                </div>

                {/* Date badge */}
                <div className="absolute top-8 right-8 bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium text-sm">
                  2nd August 1999
                </div>

                {/* Nationality badge */}
                <div className="absolute bottom-16 right-8 bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium text-sm">
                  Canadian
                </div>

                {/* Contact card */}
                <div className="absolute -bottom-8 left-0 bg-[#1A1A1A] text-white p-6 max-w-xs">
                  <h3 className="font-serif text-2xl mb-4">Contact</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin aria-hidden="true" size={16} />
                      <span>Waterloo, Canada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail aria-hidden="true" size={16} />
                      <span>brian.best@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone aria-hidden="true" size={16} />
                      <span>+1 (226) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24 relative">
        {/* Large "RESUME" text in background */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-20 pointer-events-none"
          style={OUTLINE_TEXT_STYLE}
        >
          RESUME
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F4B942] mb-12">Education</h2>
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star aria-hidden="true" className="text-[#E8944A]" fill="#E8944A" size={24} />
              </div>
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-bold text-[#F5F1E8]">2022-2028</span>
                  <span className="font-serif text-xl text-[#F5F1E8]">University of Waterloo</span>
                </div>
                <p className="text-[#E8DCC8] text-sm">Computer Science</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star aria-hidden="true" className="text-[#E8944A]" fill="#E8944A" size={24} />
              </div>
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-bold text-[#F5F1E8]">2021-2022</span>
                  <span className="font-serif text-xl text-[#F5F1E8]">Conestoga College</span>
                </div>
                <p className="text-[#E8DCC8] text-sm">Software Development</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star aria-hidden="true" className="text-[#E8944A]" fill="#E8944A" size={24} />
              </div>
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-bold text-[#F5F1E8]">2017-2020</span>
                  <span className="font-serif text-xl text-[#F5F1E8]">University of Toronto</span>
                </div>
                <p className="text-[#E8DCC8] text-sm">Business Administration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-[#E8944A] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-12">Experience</h2>
          
          <div className="space-y-8 max-w-3xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star aria-hidden="true" className="text-[#1A1A1A]" fill="#1A1A1A" size={24} />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#1A1A1A] text-lg">Feb 2022 - Present · 3 yrs 9 mos</span>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-semibold">Senior Software Developer</h3>
                  <p className="text-[#1A1A1A] text-sm font-semibold mt-1">Axonify · Waterloo, Ontario, Canada</p>
                </div>
                <p className="text-[#1A1A1A] text-sm leading-relaxed">
                  At Axonify I operate at the intersection of software engineering, customer success, and applied AI. I design and build AI-driven systems that keep our customers productive and our support team efficient. I lead the development of an LLM-powered support agent that triages issues, finds solutions, and files context-rich tickets, cutting turnaround times from days to hours.
                </p>
                <p className="text-[#1A1A1A] text-sm leading-relaxed mt-2">
                  Beyond support-specific agents, I help implement broader AI strategy: automating log analysis, proposing auto-generated training content when regulatory changes hit, and preparing various 3rd party integrations so that routine customer-admin tasks can be automated. I'm also the technical owner for system-health tooling.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star aria-hidden="true" className="text-[#1A1A1A]" fill="#1A1A1A" size={24} />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#1A1A1A] text-lg">Feb 2021 - Feb 2022 · 1 yr 1 mo</span>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-semibold">Intermediate Software Developer</h3>
                  <p className="text-[#1A1A1A] text-sm font-semibold mt-1">Axonify · Waterloo, Ontario, Canada</p>
                </div>
                <p className="text-[#1A1A1A] text-sm leading-relaxed">
                  Contributed to core platform development, modernized legacy systems, and began exploring AI integration opportunities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star aria-hidden="true" className="text-[#1A1A1A]" fill="#1A1A1A" size={24} />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#1A1A1A] text-lg">Mar 2020 - Feb 2021 · 1 yr</span>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-semibold">Software Developer</h3>
                  <p className="text-[#1A1A1A] text-sm font-semibold mt-1">Axonify · Waterloo, Ontario, Canada</p>
                </div>
                <p className="text-[#1A1A1A] text-sm leading-relaxed">
                  Built and maintained features for the Axonify learning platform, working with Java, JavaScript, and cloud technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-12">
            <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">#AI-Driven</span>
            <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">#Technical-Leadership</span>
            <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">#Problem-Solving</span>
            <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">#Innovation</span>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24 relative">
        {/* Large "RESUME" text in background */}
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-10 pointer-events-none"
          style={OUTLINE_TEXT_ACCENT_STYLE}
        >
          RESUME
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#E8944A] mb-12">Technical skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
            {/* Primary Languages */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-6">Languages & Frameworks</h3>
              <div className="space-y-2">
                {TECH_STACK.primary.map((skill) => (
                  <div key={skill} className="inline-block bg-white text-[#1A1A1A] px-4 py-2 mr-2 mb-2 text-sm border-2 border-[#1A1A1A]">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-6">Cloud & Data</h3>
              <div className="space-y-2">
                {TECH_STACK.cloud.map((skill) => (
                  <div key={skill} className="inline-block bg-white text-[#1A1A1A] px-4 py-2 mr-2 mb-2 text-sm border-2 border-[#1A1A1A]">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML Skills */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-6">AI & Machine Learning</h3>
              <div className="space-y-2">
                {TECH_STACK.ai.map((skill) => (
                  <div key={skill} className="inline-block bg-white text-[#1A1A1A] px-4 py-2 mr-2 mb-2 text-sm border-2 border-[#1A1A1A]">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-12 max-w-6xl">
            <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-6">Specialties</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">System Architecture</span>
              <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">AI Integration</span>
              <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">Vector Search</span>
              <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">Enterprise Compliance</span>
              <span className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">System Health Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Language & Hobbies Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24 border-t-2 border-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
            {/* Languages */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">Language</h2>
              <div className="space-y-6">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-serif text-xl font-semibold text-[#1A1A1A]">{lang.name}</span>
                      <span className="text-sm text-[#6C6C6C]">{lang.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">Hobbies & Interests</h2>
              <div className="grid grid-cols-2 gap-6">
                {HOBBIES.map((hobby) => (
                  <div key={hobby.name} className="text-center">
                    <div className="w-16 h-16 bg-[#F4B942] rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Sparkles aria-hidden="true" className="text-[#1A1A1A]" size={28} />
                    </div>
                    <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">{hobby.name}</h4>
                    <p className="text-xs text-[#6C6C6C]">{hobby.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F4B942] mb-12">Activities</h2>
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star aria-hidden="true" className="text-[#E8944A]" fill="#E8944A" size={24} />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#F5F1E8] text-lg">2020</span>
                  <h3 className="font-serif text-xl text-[#F5F1E8] font-semibold">'Tech Innovation' exhibition</h3>
                </div>
                <p className="text-[#E8DCC8] text-sm">Featured innovative projects and solutions</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star aria-hidden="true" className="text-[#E8944A]" fill="#E8944A" size={24} />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#F5F1E8] text-lg">2019</span>
                  <h3 className="font-serif text-xl text-[#F5F1E8] font-semibold">Hackathon winner</h3>
                </div>
                <p className="text-[#E8DCC8] text-sm">Winner of regional coding competition</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
