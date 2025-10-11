import { SocialLinks } from "@/components/social-links"
import { PixelBadge } from "@/components/pixel-badge"
import { PixelCard } from "@/components/pixel-card"
import Image from "next/image"

export const metadata = {
  title: "About | Brian Best",
  description: "Learn more about Brian Best, Senior Software Developer at Axonify",
}

export default function AboutPage() {
  const techStack = [
    "Java", "JavaScript", "TypeScript", "Node.js", "SQL", 
    "CSS", "Tailwind", "Next.js", "GCP", "Supabase", "Kubernetes"
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
                  <span className="text-sm font-pixel text-primary">15 YRS</span>
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
                I write code, untangle gnarly bugs, and sprinkle in some AI magic to make life easier for everyone.
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
                      <p className="text-xs text-muted-foreground mb-2">Senior Software Developer · Mar 2020 – Present</p>
                      <p className="text-sm text-foreground">
                        Keeping our customer‑care engine humming, leading system‑health initiatives, and weaving AI‑powered tooling into the workflow.
                      </p>
                    </div>
                  </div>
                </PixelCard>

                <PixelCard hoverable={false} className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary mt-2"></div>
                    <div>
                      <p className="font-pixel text-sm text-primary mb-1">Digicraft Software</p>
                      <p className="text-xs text-muted-foreground mb-2">Intermediate → Senior Dev · 2016 – 2020</p>
                      <p className="text-sm text-foreground">
                        Built CMS‑driven websites & apps, modernised legacy code, and mentored juniors.
                      </p>
                    </div>
                  </div>
                </PixelCard>

                <PixelCard hoverable={false} className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-accent mt-2"></div>
                    <div>
                      <p className="font-pixel text-sm text-primary mb-1">Combinaut / UBIQUE</p>
                      <p className="text-xs text-muted-foreground mb-2">Front‑End Developer · 2014 – 2016</p>
                      <p className="text-sm text-foreground">
                        Crafted Angular UIs and responsive experiences.
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
                From automated issue triage to code‑review copilots and GPT‑powered test generators, I lean on AI to slice through repetitive tasks. That frees me up to focus on the fun stuff—architecting features and shipping delightful experiences faster than ever.
              </p>
            </section>

            <section>
              <h3 className="font-pixel text-xl text-primary mb-4">Why Me?</h3>
              <ul className="space-y-2">
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary">▸</span>
                  <span>15 years of writing production code (and the scars to prove it).</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary">▸</span>
                  <span>Blend of people‑skills & tech chops—I've been a radio DJ and a founder.</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-primary">▸</span>
                  <span>Continuous learning mindset—currently geeking out over edge AI & LLM agents.</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
