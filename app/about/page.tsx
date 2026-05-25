import { SocialLinks } from "@/components/social-links"
import Image from "next/image"

export const metadata = {
  title: "About | Brian Best",
  description: "Learn more about Brian Best, Principal Software Developer at Axonify",
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bungee text-4xl md:text-5xl text-persona-red mb-8">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1">
            <div className="relative w-full aspect-square overflow-hidden border-4 border-persona-white transform rotate-2 shadow-thief">
              <Image
                src="/brianabout.jpeg"
                alt="Brian Best"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div className="col-span-2 prose prose-invert prose-red max-w-none">
            <h1>Hey, I'm Brian Best</h1>
            <h2>Principal Software Developer @ Axonify</h2>
            <p>I write code, untangle gnarly bugs, and sprinkle in some AI magic to make life easier for everyone.</p>

            <h3>My Journey</h3>
            <ul className="timeline">
              <li><strong>Axonify</strong> – Software Developer → Principal (Mar&nbsp;2020&nbsp;–&nbsp;Present)<br />
                Grew from developer to Principal. Now co‑leading an agentic AI &ldquo;code factory&rdquo; and shipping LLM‑powered features into the product; earlier built the retrieval infrastructure behind our LLM agents and the first AI‑assisted support tooling.</li>
              <li><strong>Combinaut</strong> – Frontend Developer (Jul&nbsp;2017&nbsp;–&nbsp;Apr&nbsp;2020)<br />
                Built marketing platforms and patient‑facing web frontends for a US hospital client in a regulated healthcare environment.</li>
              <li><strong>Ubique Networks</strong> – Software Engineer (Aug&nbsp;2016&nbsp;–&nbsp;Jul&nbsp;2017)<br />
                Led a small web team building an Angular + Node.js app on Express and WebSockets.</li>
              <li><strong>Phased.io</strong> – Co‑founder &amp; CTO (Sep&nbsp;2014&nbsp;–&nbsp;Aug&nbsp;2016)<br />
                Took an idea to a funded product — raised CAD&nbsp;$75k, joined the Propel ICT accelerator, and shipped a MEAN‑stack app with iOS/Android.</li>
            </ul>

            <h3>Tech Stack</h3>
            <ul className="tech-stack">
              <li className="chip">TypeScript / JavaScript</li>
              <li className="chip">Java</li>
              <li className="chip">Python</li>
              <li className="chip">Node.js</li>
              <li className="chip">React</li>
              <li className="chip">SQL</li>
              <li className="chip">Google Cloud Platform</li>
              <li className="chip">Docker</li>
              <li className="chip">MCP &amp; Agentic AI</li>
            </ul>

            <h3>Building with AI</h3>
            <p>I don&rsquo;t just use AI tooling — I build it: agentic systems, MCP servers, and RAG pipelines that ship to enterprise customers within real compliance boundaries. Lately I co‑lead an in‑house agentic AI &ldquo;code factory&rdquo; that implements, tests, and reviews changes against our production codebase.</p>

            <h3>Why Me?</h3>
            <ul>
              <li>12+&nbsp;years of writing production code (and the scars to prove it).</li>
              <li>Blend of people‑skills &amp; tech chops—I&rsquo;ve been a radio DJ and a founder.</li>
              <li>Continuous learning mindset—currently geeking out over agentic AI &amp; LLM systems.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
