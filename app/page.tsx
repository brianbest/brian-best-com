import Image from "next/image"
import Link from "next/link"
import { AIChat } from "@/components/ai-chat"
import { SkillsMatrix } from "@/components/skills-matrix"
import { ExperienceTimeline } from "@/components/experience-card"
import { Button } from "@/components/ui/button"
import { careerProfile } from "@/lib/career-profile"
import { ArrowDown, FileText, Briefcase, Target } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section with AI Chat */}
      <section className="relative overflow-hidden bg-persona-black py-12 md:py-20 min-h-[90vh]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pattern-mask pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left: Intro */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-24 h-24 md:w-32 md:h-32 border-4 border-persona-red rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/brian.jpeg"
                    alt="Brian Best"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h1 className="font-bungee text-3xl md:text-4xl lg:text-5xl text-persona-red">
                    {careerProfile.personal.name}
                  </h1>
                  <p className="text-lg md:text-xl text-persona-white">
                    {careerProfile.personal.title}
                  </p>
                  <p className="text-persona-grey">{careerProfile.personal.location}</p>
                </div>
              </div>

              <p className="text-persona-grey text-lg mb-6 max-w-lg">
                Welcome. This AI interface lets you explore my career in depth.
                Ask questions, review my experience, or assess my fit for your role.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="border-persona-maroon text-persona-grey hover:bg-persona-maroon/20"
                >
                  <Link href="#experience">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Experience
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-persona-maroon text-persona-grey hover:bg-persona-maroon/20"
                >
                  <Link href="#skills">
                    <Target className="w-4 h-4 mr-2" />
                    Skills
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-persona-red hover:bg-persona-maroon text-white"
                >
                  <Link href="/job-fit">
                    <FileText className="w-4 h-4 mr-2" />
                    Job Fit Analysis
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: AI Chat */}
            <div>
              <AIChat />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <a
              href="#experience"
              className="flex flex-col items-center text-persona-grey hover:text-persona-red transition-colors"
            >
              <span className="text-sm mb-2">Explore my experience</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-persona-black/50 py-16">
        <div className="container mx-auto px-4">
          <ExperienceTimeline experiences={careerProfile.experiences} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-persona-black py-16">
        <div className="container mx-auto px-4">
          <SkillsMatrix />
        </div>
      </section>

      {/* Job Fit CTA */}
      <section className="bg-persona-maroon/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bungee text-3xl text-persona-red mb-4">
            Hiring? Let&apos;s See If We&apos;re a Match
          </h2>
          <p className="text-persona-grey max-w-2xl mx-auto mb-8">
            Paste your job description and get an honest assessment of whether I&apos;m
            the right candidate. No fluff, no spin - just straightforward analysis.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-persona-red hover:bg-persona-maroon text-white font-bungee"
          >
            <Link href="/job-fit">
              <FileText className="w-5 h-5 mr-2" />
              Try Job Fit Analyzer
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
