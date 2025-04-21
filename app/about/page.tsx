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
                src="/placeholder.svg?height=400&width=400"
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
            <h2>Senior Software Developer @ Axonify</h2>
            <p>
              Hello! I'm Brian Best, a passionate senior software developer currently working at Axonify, where I help
              build cutting-edge learning platforms that empower employees worldwide.
            </p>

            <h3>My Journey</h3>
            <p>
              With over a decade of experience in software development, I've worked across various domains including
              e-learning, fintech, and enterprise applications. My passion lies in creating intuitive, performant web
              applications that solve real problems.
            </p>

            <h3>Tech Stack</h3>
            <ul>
              <li>
                <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express, NestJS
              </li>
              <li>
                <strong>Database:</strong> PostgreSQL, MongoDB
              </li>
              <li>
                <strong>DevOps:</strong> Docker, GitHub Actions, Vercel
              </li>
              <li>
                <strong>Testing:</strong> Jest, React Testing Library, Cypress
              </li>
            </ul>

            <h3>Fun Facts</h3>
            <ul>
              <li>Avid Persona series fan (obviously!)</li>
              <li>Amateur photographer on weekends</li>
              <li>Collect vintage mechanical keyboards</li>
              <li>Contribute to open-source projects in my spare time</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
