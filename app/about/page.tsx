import { SocialLinks } from "@/components/social-links"
import { PixelBadge } from "@/components/pixel-badge"
import { PixelCard } from "@/components/pixel-card"
import Image from "next/image"

export const metadata = {
  title: "About | Brian Best",
  description: "Senior Software Developer at Axonify specializing in AI-driven systems, LLM integration, and enterprise software solutions. 5+ years of experience building scalable customer care platforms.",
}

export default function AboutPage() {
  const techStack = [
    "Java", "JavaScript", "TypeScript", "Node.js", "MySQL", 
    "CSS", "Tailwind", "Next.js", "GCP", "MCP", "LLMOps", "LLM", "Kubernetes"
  ]

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-pixel text-3xl md:text-5xl text-primary mb-4">About Me</h1>
        <p className="text-muted-foreground mb-12 font-mono">Level 35 Software Developer</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-1">
            <div className="relative w-full aspect-square overflow-hidden border-3 border-primary shadow-pixel-lg mb-6">
              <Image
                src="/brianabout.jpeg"
                alt="Brian Best"
                width={400}
                height={400}
                className="object-cover"
              />
              {/* Pixel corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary"></div>
              <div className="absolute top-0 right-0 w-4 h-4 bg-secondary"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-accent"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary"></div>
            </div>

            {/* Stats Card */}
            <PixelCard className="mb-6 p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-muted-foreground">Experience</span>
                  <span className="text-sm font-pixel text-primary">5+ YRS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-muted-foreground">Projects</span>
                  <span className="text-sm font-pixel text-primary">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-muted-foreground">Coffee</span>
                  <span className="text-sm font-pixel text-primary">∞</span>
                </div>
              </div>
            </PixelCard>

            <SocialLinks />
          </div>

          <div className="col-span-2 space-y-8">
            <section>
              <h2 className="font-pixel text-2xl text-primary mb-4">Hey, I'm Brian Best</h2>
              <p className="text-foreground mb-4">
                I operate at the intersection of software engineering, customer success, and applied AI. My work focuses on designing and building AI-driven systems that keep customers productive and support teams efficient—turning large-language-model research into production features that make customer care faster, smarter, and infinitely more scalable.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-mono text-secondary border-2 border-secondary px-3 py-1">
                <span className="inline-block w-2 h-2 bg-pixel-success rounded-full animate-blink"></span>
                Senior Software Developer @ Axonify
              </div>
            </section>

            <section>
              <h3 className="font-pixel text-xl text-primary mb-6">My Journey</h3>
              <div className="space-y-4">
                <PixelCard hoverable={false} className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary mt-2"></div>
                    <div>
                      <p className="font-pixel text-sm text-primary mb-1">Axonify</p>
                      <p className="text-xs text-muted-foreground mb-2">Senior Software Developer · Feb 2022 – Present</p>
                      <p className="text-sm text-foreground">
                        Leading development of AI-driven systems at the intersection of software engineering, customer success, and applied AI. Building LLM-powered support agents that triage issues, find solutions, and file context-rich tickets—cutting turnaround times from days to hours. Integrating LLMs with MCP tooling and vector-search pipelines while orchestrating secure cloud workflows that respect enterprise compliance.
                      </p>
                    </div>
                  </div>
                </PixelCard>

                <PixelCard hoverable={false} className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary mt-2"></div>
                    <div>
                      <p className="font-pixel text-sm text-primary mb-1">Axonify</p>
                      <p className="text-xs text-muted-foreground mb-2">Intermediate Software Developer · Feb 2021 – Feb 2022</p>
                      <p className="text-sm text-foreground">
                        Contributed to core platform development, implemented broader AI strategy including automated log analysis, auto-generated training content, and 3rd party integrations. Technical owner for system-health tooling.
                      </p>
                    </div>
                  </div>
                </PixelCard>

                <PixelCard hoverable={false} className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-accent mt-2"></div>
                    <div>
                      <p className="font-pixel text-sm text-primary mb-1">Axonify</p>
                      <p className="text-xs text-muted-foreground mb-2">Software Developer · Mar 2020 – Feb 2021</p>
                      <p className="text-sm text-foreground">
                        Built and maintained features for the Axonify learning platform using Java, JavaScript, and cloud technologies. Focused on delivering scalable solutions for enterprise customers.
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </div>
            </section>

            <section>
              <h3 className="font-pixel text-xl text-primary mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <PixelBadge key={tech} variant="default">
                    {tech}
                  </PixelBadge>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-pixel text-xl text-primary mb-4">Level‑Up with AI</h3>
              <p className="text-foreground">
                I'm in-house AI productizer at Axonify—turning large-language-model research into production features. Beyond support-specific agents, I help implement broader AI strategy: automating log analysis, proposing auto-generated training content when regulatory changes hit, and preparing various 3rd party integrations so that routine customer-admin tasks can be automated.
              </p>
            </section>

            <section>
              <h3 className="font-pixel text-xl text-primary mb-4">Why Me?</h3>
              <ul className="space-y-2">
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary">▸</span>
                  <span>5+ years of writing production code, with deep expertise in AI integration and system architecture.</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary">▸</span>
                  <span>Technical owner for system-health tooling and AI integration initiatives.</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary">▸</span>
                  <span>Expert in LLMOps, vector search pipelines, and enterprise compliance workflows.</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
