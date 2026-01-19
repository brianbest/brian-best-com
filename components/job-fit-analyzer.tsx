"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, FileText, CheckCircle, XCircle, AlertCircle, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

type FitLevel = "STRONG FIT" | "MODERATE FIT" | "NOT A FIT" | null

export function JobFitAnalyzer() {
  const [jobDescription, setJobDescription] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [fitLevel, setFitLevel] = useState<FitLevel>(null)
  const [error, setError] = useState<string | null>(null)

  const analyzeJobFit = async () => {
    if (!jobDescription.trim()) return

    setIsAnalyzing(true)
    setError(null)
    setAnalysis(null)
    setFitLevel(null)

    try {
      const response = await fetch("/api/job-fit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription }),
      })

      if (!response.ok) {
        throw new Error("Failed to analyze job fit")
      }

      const data = await response.json()
      setAnalysis(data.analysis)

      // Extract fit level from analysis
      if (data.analysis.includes("STRONG FIT")) {
        setFitLevel("STRONG FIT")
      } else if (data.analysis.includes("MODERATE FIT")) {
        setFitLevel("MODERATE FIT")
      } else if (data.analysis.includes("NOT A FIT")) {
        setFitLevel("NOT A FIT")
      }
    } catch {
      setError("Failed to analyze. Please try again.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getFitIcon = () => {
    switch (fitLevel) {
      case "STRONG FIT":
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case "MODERATE FIT":
        return <AlertCircle className="w-6 h-6 text-yellow-500" />
      case "NOT A FIT":
        return <XCircle className="w-6 h-6 text-red-500" />
      default:
        return null
    }
  }

  const getFitBadgeClass = () => {
    switch (fitLevel) {
      case "STRONG FIT":
        return "bg-green-900/30 border-green-700 text-green-400"
      case "MODERATE FIT":
        return "bg-yellow-900/30 border-yellow-700 text-yellow-400"
      case "NOT A FIT":
        return "bg-red-900/30 border-red-700 text-red-400"
      default:
        return ""
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-bungee text-3xl text-persona-red mb-2">Job Fit Analyzer</h2>
        <p className="text-persona-grey">
          Paste a job description below to get an honest assessment of whether I&apos;m
          a good fit for the role.
        </p>
      </div>

      <div className="space-y-6">
        {/* Input */}
        <div className="bg-persona-black/50 border border-persona-maroon rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-persona-red" />
            <label htmlFor="job-description" className="font-medium text-persona-white">
              Job Description
            </label>
          </div>

          <textarea
            id="job-description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the full job description here..."
            className="w-full h-48 px-4 py-3 bg-persona-black border border-persona-maroon rounded-lg
                     text-persona-white placeholder:text-persona-grey/50
                     focus:outline-none focus:ring-2 focus:ring-persona-red focus:border-transparent
                     resize-none"
            disabled={isAnalyzing}
          />

          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-persona-grey">
              {jobDescription.length} characters
            </p>
            <Button
              onClick={analyzeJobFit}
              disabled={isAnalyzing || !jobDescription.trim()}
              className="bg-persona-red hover:bg-persona-maroon text-white"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Fit"
              )}
            </Button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 text-red-400">
            {error}
          </div>
        )}

        {/* Results */}
        {analysis && (
          <div className="bg-persona-black/50 border border-persona-maroon rounded-lg overflow-hidden">
            {/* Fit Badge */}
            {fitLevel && (
              <div
                className={cn(
                  "flex items-center justify-center gap-3 p-4 border-b border-persona-maroon",
                  getFitBadgeClass()
                )}
              >
                {getFitIcon()}
                <span className="font-bungee text-lg">{fitLevel}</span>
              </div>
            )}

            {/* Analysis */}
            <div className="p-6">
              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-persona-grey">
                  {analysis.split("\n").map((line, i) => {
                    // Bold headers
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return (
                        <h4 key={i} className="font-bungee text-persona-red mt-4 mb-2">
                          {line.replace(/\*\*/g, "")}
                        </h4>
                      )
                    }
                    // Bullet points
                    if (line.startsWith("- ")) {
                      return (
                        <p key={i} className="flex items-start gap-2 my-1">
                          <span className="text-persona-red">•</span>
                          <span>{line.substring(2)}</span>
                        </p>
                      )
                    }
                    return <p key={i}>{line}</p>
                  })}
                </div>
              </div>

              {/* CTA for strong fits */}
              {fitLevel === "STRONG FIT" && (
                <div className="mt-8 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <p className="text-green-400 mb-4">
                    Great news! Based on this analysis, I could be a strong candidate
                    for this role. Let&apos;s connect!
                  </p>
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a href="mailto:brian@brianbest.com?subject=Job Opportunity">
                      <Mail className="w-4 h-4 mr-2" />
                      Get in Touch
                    </a>
                  </Button>
                </div>
              )}

              {fitLevel === "NOT A FIT" && (
                <div className="mt-8 p-4 bg-persona-maroon/20 border border-persona-maroon rounded-lg">
                  <p className="text-persona-grey">
                    Thank you for considering me! While this particular role may not
                    be the best fit, I appreciate your time reviewing my profile. Feel
                    free to keep me in mind for future opportunities that align more
                    closely with my background.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* How it works */}
        {!analysis && !isAnalyzing && (
          <div className="bg-persona-maroon/10 border border-persona-maroon/50 rounded-lg p-6">
            <h3 className="font-bungee text-persona-white mb-4">How It Works</h3>
            <ol className="space-y-3 text-persona-grey">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-persona-red text-white text-sm font-bold shrink-0">
                  1
                </span>
                <span>Paste the complete job description above</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-persona-red text-white text-sm font-bold shrink-0">
                  2
                </span>
                <span>AI analyzes requirements against my actual skills and experience</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-persona-red text-white text-sm font-bold shrink-0">
                  3
                </span>
                <span>Get an honest fit assessment - including gaps and limitations</span>
              </li>
            </ol>
            <p className="mt-4 text-sm text-persona-grey/70">
              This saves time for both of us. If it&apos;s not a fit, I&apos;ll tell you
              honestly rather than waste your time.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
