"use client"

import { careerProfile } from "@/lib/career-profile"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, AlertCircle } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const { skills } = careerProfile

interface SkillColumnProps {
  title: string
  icon: React.ReactNode
  skills: typeof careerProfile.skills.strong
  colorClass: string
  badgeClass: string
}

function SkillColumn({ title, icon, skills, colorClass, badgeClass }: SkillColumnProps) {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <div className="flex flex-col">
      <div className={`flex items-center gap-2 mb-4 ${colorClass}`}>
        {icon}
        <h3 className="font-bungee text-lg">{title}</h3>
      </div>

      <div className="space-y-4">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category}>
            <p className="text-xs text-persona-grey uppercase tracking-wider mb-2">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              <TooltipProvider>
                {categorySkills.map((skill) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className={`cursor-pointer transition-all hover:scale-105 ${badgeClass}`}
                      >
                        {skill.name}
                      </Badge>
                    </TooltipTrigger>
                    {skill.description && (
                      <TooltipContent
                        side="top"
                        className="bg-persona-black border-persona-maroon text-persona-white max-w-xs"
                      >
                        <p>{skill.description}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkillsMatrix() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="font-bungee text-3xl text-persona-red mb-2">Skills Matrix</h2>
        <p className="text-persona-grey max-w-2xl mx-auto">
          An honest assessment of my technical capabilities. Hover over any skill
          to see more details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Strong */}
        <div className="bg-persona-black/50 border border-green-900/50 rounded-lg p-6">
          <SkillColumn
            title="Strong"
            icon={<CheckCircle className="w-5 h-5 text-green-500" />}
            skills={skills.strong}
            colorClass="text-green-500"
            badgeClass="border-green-700 bg-green-900/20 text-green-400 hover:bg-green-900/40"
          />
        </div>

        {/* Moderate */}
        <div className="bg-persona-black/50 border border-yellow-900/50 rounded-lg p-6">
          <SkillColumn
            title="Moderate"
            icon={<Circle className="w-5 h-5 text-yellow-500" />}
            skills={skills.moderate}
            colorClass="text-yellow-500"
            badgeClass="border-yellow-700 bg-yellow-900/20 text-yellow-400 hover:bg-yellow-900/40"
          />
        </div>

        {/* Gaps */}
        <div className="bg-persona-black/50 border border-red-900/50 rounded-lg p-6">
          <SkillColumn
            title="Gaps / Growth Areas"
            icon={<AlertCircle className="w-5 h-5 text-red-500" />}
            skills={skills.gaps}
            colorClass="text-red-500"
            badgeClass="border-red-700 bg-red-900/20 text-red-400 hover:bg-red-900/40"
          />
        </div>
      </div>

      <p className="text-center text-sm text-persona-grey mt-6">
        Acknowledging gaps builds trust. I&apos;m always learning and growing in these areas.
      </p>
    </section>
  )
}
