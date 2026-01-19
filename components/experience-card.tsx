"use client"

import { useState } from "react"
import type { Experience, STARNarrative } from "@/lib/career-profile"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Building2,
  MapPin,
  Calendar,
  ChevronDown,
  Target,
  Zap,
  Trophy,
  Lightbulb,
} from "lucide-react"

interface STARNarrativeCardProps {
  narrative: STARNarrative
  index: number
}

function STARNarrativeCard({ narrative, index }: STARNarrativeCardProps) {
  return (
    <div className="bg-persona-black/50 border border-persona-maroon/50 rounded-lg p-4 space-y-4">
      <h5 className="font-bungee text-sm text-persona-red">Story #{index + 1}</h5>

      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-blue-900/30 shrink-0">
            <Target className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <p className="text-xs uppercase text-blue-400 font-medium mb-1">Situation</p>
            <p className="text-persona-grey text-sm">{narrative.situation}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-purple-900/30 shrink-0">
            <Zap className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <p className="text-xs uppercase text-purple-400 font-medium mb-1">Action</p>
            <p className="text-persona-grey text-sm">{narrative.action}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-green-900/30 shrink-0">
            <Trophy className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <p className="text-xs uppercase text-green-400 font-medium mb-1">Result</p>
            <p className="text-persona-grey text-sm">{narrative.result}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-yellow-900/30 shrink-0">
            <Lightbulb className="w-4 h-4 text-yellow-400" />
          </div>
          <div>
            <p className="text-xs uppercase text-yellow-400 font-medium mb-1">Learning</p>
            <p className="text-persona-grey text-sm">{narrative.learning}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-persona-red border-4 border-persona-black -translate-x-1/2" />

      {/* Card */}
      <div className="ml-8 bg-persona-black/30 border border-persona-maroon rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <h3 className="font-bungee text-xl text-persona-white mb-1">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-persona-red">
                <Building2 className="w-4 h-4" />
                <span className="font-medium">{experience.company}</span>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-persona-grey">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {experience.startDate} - {experience.endDate || "Present"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          <p className="text-persona-grey mb-4">{experience.summary}</p>

          {/* Highlights */}
          <ul className="space-y-2 mb-4">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-persona-red mt-1">•</span>
                <span className="text-persona-white">{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-persona-maroon bg-persona-maroon/20 text-persona-grey"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Expandable STAR Narratives */}
        {experience.starNarratives.length > 0 && (
          <Accordion type="single" collapsible className="border-t border-persona-maroon">
            <AccordionItem value="narratives" className="border-none">
              <AccordionTrigger
                className="px-6 py-4 hover:no-underline hover:bg-persona-maroon/10"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <span className="flex items-center gap-2 text-persona-red font-medium">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                  View Full Story ({experience.starNarratives.length} narrative
                  {experience.starNarratives.length > 1 ? "s" : ""})
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-sm text-persona-grey">
                    The real stories behind the bullet points - including context,
                    specific actions, outcomes, and what I learned.
                  </p>
                  {experience.starNarratives.map((narrative, index) => (
                    <STARNarrativeCard
                      key={index}
                      narrative={narrative}
                      index={index}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </div>
  )
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="font-bungee text-3xl text-persona-red mb-2">Experience</h2>
        <p className="text-persona-grey max-w-2xl mx-auto">
          Click &quot;View Full Story&quot; on any role to see the complete context,
          actions, results, and lessons learned.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-persona-maroon" />

        {/* Experience cards */}
        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}
