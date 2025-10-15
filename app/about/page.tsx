import Image from "next/image"
import Link from "next/link"
import { Star, Sparkles, Mail, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "About | Brian Best",
  description: "Senior Software Developer at Axonify specializing in AI-driven systems, LLM integration, and enterprise software solutions. 5+ years of experience building scalable customer care platforms.",
}

export default function AboutPage() {
  const techStack = {
    primary: ["Java", "JavaScript", "TypeScript", "Node.js"],
    cloud: ["Google Cloud Platform (GCP)", "MySQL", "Kubernetes"],
    ai: ["Large Language Models (LLM)", "LLM Operations (LLMOps)", "Model Context Protocol (MCP)"]
  }

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Dark Green Background */}
      <section className="relative min-h-[60vh] bg-[#2C4A3E] text-[#F5F1E8] overflow-hidden">
        {/* Navigation */}
        <div className="absolute top-0 right-0 p-6 md:p-8 z-20 flex items-center gap-6">
          <Link href="/" className="text-[#F5F1E8] hover:text-[#F4B942] transition-colors text-sm">
            Home
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
              About Me
            </h1>
            <p className="text-[#E8DCC8] text-xl max-w-2xl">
              Senior Software Developer building AI-driven systems at the intersection of engineering and innovation
            </p>
          </div>
        </div>

        {/* Large "ABOUT" text in background */}
        <div className="absolute bottom-0 right-0 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-10 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          ABOUT
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Introduction */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#E8944A] mb-2">
                  <Star size={24} fill="#E8944A" />
                  <span className="font-serif text-2xl">Brian Best</span>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4">
                  Hey, I'm Brian!
                </h2>
              </div>
              
              <p className="text-[#1A1A1A] text-base leading-relaxed">
                I operate at the intersection of software engineering, customer success, and applied AI. My work focuses on designing and building AI-driven systems that keep customers productive and support teams efficient—turning large-language-model research into production features that make customer care faster, smarter, and infinitely more scalable.
              </p>

              <p className="text-[#1A1A1A] text-base leading-relaxed">
                At Axonify, I lead the development of LLM-powered support tools and system health initiatives that transform how we serve our customers. I integrate LLMs with MCP tooling and vector-search pipelines while orchestrating secure cloud workflows that respect enterprise compliance.
              </p>

              <div className="inline-flex items-center gap-3 bg-[#E8944A] text-white px-6 py-3 rounded-full hover:bg-[#D17A2E] transition-colors cursor-pointer">
                <Mail size={20} />
                <span className="text-sm">brian.best@example.com</span>
              </div>
            </div>

            {/* Right side - Photo */}
            <div className="relative">
              <div className="relative w-full max-w-md ml-auto">
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

                {/* Experience badge */}
                <div className="absolute top-8 right-8 bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium text-sm">
                  5+ years experience
                </div>

                {/* Role badge */}
                <div className="absolute bottom-16 right-8 bg-[#F4B942] text-[#1A1A1A] px-6 py-2 rounded-full font-medium text-sm">
                  Senior Developer
                </div>

                {/* Contact card */}
                <div className="absolute -bottom-8 left-0 bg-[#1A1A1A] text-white p-6 max-w-xs">
                  <h3 className="font-serif text-2xl mb-4">Contact</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Waterloo, Canada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>mhd892@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>07 82 84 59 00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-[#2C4A3E] py-16 md:py-24 relative">
        {/* Large "CAREER" text in background */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-20 pointer-events-none" style={{
          WebkitTextStroke: '2px #F4B942'
        }}>
          CAREER
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F4B942] mb-12">My Journey</h2>
          
          <div className="space-y-8 max-w-3xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#E8944A" className="text-[#E8944A]" />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#F5F1E8] text-lg">Feb 2022 - Present · 3 yrs 9 mos</span>
                  <h3 className="font-serif text-2xl text-[#F5F1E8] font-semibold">Senior Software Developer</h3>
                  <p className="text-[#F5F1E8] text-sm font-semibold mt-1">Axonify · Waterloo, Ontario, Canada</p>
                </div>
                <p className="text-[#E8DCC8] text-sm leading-relaxed">
                  Leading development of AI-driven systems at the intersection of software engineering, customer success, and applied AI. Building LLM-powered support agents that triage issues, find solutions, and file context-rich tickets—cutting turnaround times from days to hours. Integrating LLMs with MCP tooling and vector-search pipelines while orchestrating secure cloud workflows that respect enterprise compliance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#E8944A" className="text-[#E8944A]" />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#F5F1E8] text-lg">Feb 2021 - Feb 2022 · 1 yr 1 mo</span>
                  <h3 className="font-serif text-2xl text-[#F5F1E8] font-semibold">Intermediate Software Developer</h3>
                  <p className="text-[#F5F1E8] text-sm font-semibold mt-1">Axonify · Waterloo, Ontario, Canada</p>
                </div>
                <p className="text-[#E8DCC8] text-sm leading-relaxed">
                  Contributed to core platform development, implemented broader AI strategy including automated log analysis, auto-generated training content, and 3rd party integrations. Technical owner for system-health tooling.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#E8944A" className="text-[#E8944A]" />
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-[#F5F1E8] text-lg">Mar 2020 - Feb 2021 · 1 yr</span>
                  <h3 className="font-serif text-2xl text-[#F5F1E8] font-semibold">Software Developer</h3>
                  <p className="text-[#F5F1E8] text-sm font-semibold mt-1">Axonify · Waterloo, Ontario, Canada</p>
                </div>
                <p className="text-[#E8DCC8] text-sm leading-relaxed">
                  Built and maintained features for the Axonify learning platform using Java, JavaScript, and cloud technologies. Focused on delivering scalable solutions for enterprise customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="bg-[#E8DCC8] py-16 md:py-24 relative">
        {/* Large "TECH" text in background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 font-serif text-[12rem] md:text-[18rem] font-bold text-transparent opacity-10 pointer-events-none" style={{
          WebkitTextStroke: '2px #D4A854'
        }}>
          TECH
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#E8944A] mb-12">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
            {/* Primary Languages */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-6">Languages & Frameworks</h3>
              <div className="space-y-2">
                {techStack.primary.map((skill) => (
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
                {techStack.cloud.map((skill) => (
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
                {techStack.ai.map((skill) => (
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

      {/* Why Me Section */}
      <section className="bg-[#E8944A] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-12">Why Me?</h2>
          
          <div className="space-y-6 max-w-3xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#1A1A1A" className="text-[#1A1A1A]" />
              </div>
              <p className="text-[#1A1A1A] text-base leading-relaxed">
                5+ years of writing production code, with deep expertise in AI integration and system architecture.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#1A1A1A" className="text-[#1A1A1A]" />
              </div>
              <p className="text-[#1A1A1A] text-base leading-relaxed">
                Technical owner for system-health tooling and AI integration initiatives.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Star size={24} fill="#1A1A1A" className="text-[#1A1A1A]" />
              </div>
              <p className="text-[#1A1A1A] text-base leading-relaxed">
                Expert in LLMOps, vector search pipelines, and enterprise compliance workflows.
              </p>
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
    </main>
  )
}
