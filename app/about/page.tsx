import { SocialLinks } from "@/components/social-links"
import Image from "next/image"

export const metadata = {
  title: "About | Brian Best",
  description: "Learn more about Brian Best, Senior Software Developer at Axonify",
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
            <h2>Senior Software Developer @ Axonify</h2>
            <p>I write code, untangle gnarly bugs, and sprinkle in some AI magic to make life easier for everyone.</p>

            <h3>My Journey</h3>
            <ul className="timeline">
              <li><strong>Axonify</strong> – Senior Software Developer (Mar&nbsp;2020&nbsp;–&nbsp;Present)<br />
                Keeping our customer‑care engine humming, leading system‑health initiatives, and weaving AI‑powered tooling into the workflow.</li>
              <li><strong>Digicraft Software Consulting</strong> – Intermediate → Senior Dev (2016&nbsp;–&nbsp;2020)<br />
                Built CMS‑driven websites &amp; apps, modernised legacy code, and mentored juniors.</li>
              <li><strong>Combinaut / UBIQUE NETWORKS</strong> – Front‑End Developer (2014&nbsp;–&nbsp;2016)<br />
                Crafted Angular UIs and responsive experiences.</li>
              <li><strong>Phased.io</strong> – Co‑founder &amp; CTO (2013&nbsp;–&nbsp;2015)<br />
                Took an idea from napkin to funded product, juggling pitching, building, &amp; shipping.</li>
            </ul>

            <h3>Tech Stack</h3>
            <ul className="tech-stack">
              <li className="chip">Java</li>
              <li className="chip">JavaScript / TypeScript</li>
              <li className="chip">Node.js</li>
              <li className="chip">SQL</li>
              <li className="chip">CSS / Tailwind</li>
              <li className="chip">Next.js</li>
              <li className="chip">Google Cloud Platform</li>
              <li className="chip">Supabase</li>
              <li className="chip">Kubernetes</li>
            </ul>

            <h3>Level‑Up with AI</h3>
            <p>From automated issue triage to code‑review copilots and GPT‑powered test generators, I lean on AI to slice through repetitive tasks. That frees me up to focus on the fun stuff—architecting features and shipping delightful experiences faster than ever.</p>

            <h3>Why Me?</h3>
            <ul>
              <li>15&nbsp;years of writing production code (and the scars to prove it).</li>
              <li>Blend of people‑skills &amp; tech chops—I've been a radio DJ and a founder.</li>
              <li>Continuous learning mindset—currently geeking out over edge AI &amp; LLM agents.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
