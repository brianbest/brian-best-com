import { JobFitAnalyzer } from "@/components/job-fit-analyzer"
import { careerProfile } from "@/lib/career-profile"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Job Fit Analysis | Brian Best",
  description: "Paste a job description to get an honest assessment of whether Brian is the right candidate for your role.",
}

export default function JobFitPage() {
  return (
    <main className="min-h-screen bg-persona-black py-12">
      <div className="container mx-auto px-4">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-persona-grey hover:text-persona-red transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-bungee text-4xl md:text-5xl text-persona-red mb-4">
            Job Fit Analyzer
          </h1>
          <p className="text-persona-grey max-w-2xl mx-auto text-lg">
            Let&apos;s save time for both of us. Paste a job description below and I&apos;ll
            give you an honest assessment of my fit - including areas where I might
            not be the best match.
          </p>
        </div>

        {/* Analyzer */}
        <JobFitAnalyzer />

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-persona-maroon/10 border border-persona-maroon/30 rounded-lg p-6 text-center">
            <h3 className="font-bungee text-persona-red mb-2">Honest Assessment</h3>
            <p className="text-persona-grey text-sm">
              If I&apos;m not qualified, I&apos;ll tell you directly - no spin, no fluff.
            </p>
          </div>
          <div className="bg-persona-maroon/10 border border-persona-maroon/30 rounded-lg p-6 text-center">
            <h3 className="font-bungee text-persona-red mb-2">Real Skills Data</h3>
            <p className="text-persona-grey text-sm">
              Analysis based on my actual experience, including acknowledged gaps.
            </p>
          </div>
          <div className="bg-persona-maroon/10 border border-persona-maroon/30 rounded-lg p-6 text-center">
            <h3 className="font-bungee text-persona-red mb-2">Time Saved</h3>
            <p className="text-persona-grey text-sm">
              Know in seconds if there&apos;s potential instead of reviewing a resume.
            </p>
          </div>
        </div>

        {/* Quick facts */}
        <div className="mt-16 bg-persona-black/50 border border-persona-maroon rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-bungee text-persona-white mb-4">Quick Facts</h3>
          <ul className="space-y-2 text-persona-grey">
            <li className="flex items-start gap-2">
              <span className="text-persona-red">•</span>
              <span><strong>Current Role:</strong> {careerProfile.personal.title}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-persona-red">•</span>
              <span><strong>Location:</strong> {careerProfile.personal.location}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-persona-red">•</span>
              <span><strong>Top Skills:</strong> {careerProfile.skills.strong.slice(0, 5).map(s => s.name).join(", ")}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-persona-red">•</span>
              <span><strong>Open To:</strong> {careerProfile.careerGoals.preferences.slice(0, 2).join(", ")}</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
