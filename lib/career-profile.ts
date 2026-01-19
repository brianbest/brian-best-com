// Career Profile Data Structure
// This powers the AI system prompt and UI components

export interface STARNarrative {
  situation: string
  action: string
  result: string
  learning: string
}

export interface Experience {
  id: string
  company: string
  title: string
  location: string
  startDate: string
  endDate: string | null // null = current
  summary: string
  highlights: string[]
  starNarratives: STARNarrative[]
  technologies: string[]
}

export interface Skill {
  name: string
  category: string
  description?: string
}

export interface SkillsMatrix {
  strong: Skill[]
  moderate: Skill[]
  gaps: Skill[]
}

export interface CareerProfile {
  personal: {
    name: string
    title: string
    location: string
    email: string
    linkedin?: string
    github?: string
    website?: string
    summary: string
    tagline: string
  }
  leadershipStyle: {
    philosophy: string
    principles: string[]
  }
  technicalDepth: {
    areas: string[]
    description: string
  }
  careerGoals: {
    shortTerm: string
    longTerm: string
    preferences: string[]
    dealbreakers: string[]
  }
  experiences: Experience[]
  skills: SkillsMatrix
  education: {
    degree: string
    school: string
    year: string
    highlights?: string[]
  }[]
  certifications?: {
    name: string
    issuer: string
    year: string
  }[]
}

// Placeholder career profile - Replace with Brian's actual data
export const careerProfile: CareerProfile = {
  personal: {
    name: "Brian Best",
    title: "Senior Software Developer",
    location: "Ontario, Canada",
    email: "brian@brianbest.com",
    linkedin: "linkedin.com/in/brianbest",
    github: "github.com/brianbest",
    website: "brianbest.com",
    summary: `Experienced Senior Software Developer with a passion for building scalable, maintainable systems.
Currently working at Axonify, focusing on enterprise learning platforms. Strong background in full-stack
development with expertise in modern JavaScript/TypeScript ecosystems, cloud infrastructure, and platform architecture.`,
    tagline: "Building software that makes a difference",
  },

  leadershipStyle: {
    philosophy: `I believe in leading through technical excellence and mentorship. My approach focuses on
empowering team members to grow while maintaining high standards for code quality and system design.
I prefer collaborative decision-making and believe the best solutions emerge from diverse perspectives.`,
    principles: [
      "Lead by example - write the code you want to see",
      "Create psychological safety for honest technical discussions",
      "Balance pragmatism with technical excellence",
      "Invest in documentation and knowledge sharing",
      "Ship iteratively, learn continuously",
    ],
  },

  technicalDepth: {
    areas: [
      "Platform Architecture",
      "API Design & Development",
      "Full-Stack TypeScript/JavaScript",
      "Cloud Infrastructure (AWS)",
      "System Design & Scalability",
    ],
    description: `My deepest expertise lies in designing and building platform-level systems that serve as
foundations for product features. I've led architecture decisions for systems handling significant scale,
focusing on maintainability, developer experience, and operational excellence.`,
  },

  careerGoals: {
    shortTerm: "Continue growing as a technical leader while staying hands-on with code",
    longTerm: "Lead engineering organizations that build impactful products, potentially exploring startup opportunities",
    preferences: [
      "Remote or hybrid work environment",
      "Product-focused engineering culture",
      "Opportunities for technical leadership",
      "Companies solving meaningful problems",
      "Teams that value continuous learning",
    ],
    dealbreakers: [
      "Purely management roles with no coding",
      "Toxic work cultures",
      "Companies without clear product vision",
    ],
  },

  experiences: [
    {
      id: "axonify-senior",
      company: "Axonify",
      title: "Senior Software Developer",
      location: "Waterloo, ON (Remote)",
      startDate: "2020",
      endDate: null,
      summary: "Leading development of enterprise learning platform features serving Fortune 500 clients",
      highlights: [
        "Architected and delivered key platform features improving user engagement by 40%",
        "Led technical design reviews and mentored junior developers",
        "Improved CI/CD pipeline reducing deployment times by 60%",
        "Championed TypeScript adoption across frontend codebase",
      ],
      starNarratives: [
        {
          situation: `When I joined, the frontend codebase was primarily JavaScript with inconsistent patterns
and frequent runtime errors in production. Developer productivity was suffering and bug rates were high.`,
          action: `I proposed and led a phased TypeScript migration strategy. Created a detailed RFC, built
consensus with the team, established coding standards, and implemented the migration incrementally while
maintaining feature velocity. Set up strict type checking and created shared type definitions for API contracts.`,
          result: `Reduced production bugs by 45% and improved developer onboarding time by 30%. The migration
was completed without any major production incidents and is now the standard for all new development.`,
          learning: `Large-scale refactoring requires both technical planning and organizational buy-in.
Breaking changes into small, reversible steps reduces risk and maintains team momentum.`,
        },
        {
          situation: `Our deployment process required manual steps and took over an hour, leading to infrequent
releases and deployment anxiety among developers.`,
          action: `Redesigned the CI/CD pipeline using GitHub Actions. Implemented automated testing gates,
staging environment deployments, and one-click production releases with automatic rollback capabilities.`,
          result: `Reduced deployment time from 60+ minutes to under 15 minutes. Team now deploys multiple
times per day with confidence. Rollback capability has saved us from two potential production incidents.`,
          learning: `Developer experience investments compound over time. Every friction point removed from
the deployment process translates to more features shipped and happier engineers.`,
        },
      ],
      technologies: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "GraphQL"],
    },
    {
      id: "previous-role",
      company: "Previous Company",
      title: "Software Developer",
      location: "Ontario, Canada",
      startDate: "2017",
      endDate: "2020",
      summary: "Full-stack development for SaaS products",
      highlights: [
        "Built microservices architecture from monolith",
        "Implemented real-time features using WebSockets",
        "Led team of 3 developers on key product initiative",
      ],
      starNarratives: [
        {
          situation: `The monolithic application was becoming difficult to scale and deploy.
Changes in one area frequently caused unexpected issues in others.`,
          action: `Designed a migration strategy to extract high-change domains into separate services.
Started with the notification system as a proof of concept, established service communication patterns,
and documented the approach for the team.`,
          result: `Successfully extracted 4 services from the monolith, reducing deployment coupling and
enabling independent scaling. The notification service now handles 10x the previous load.`,
          learning: `Microservices aren't always the answer, but strategic service extraction can provide
significant benefits. The key is identifying the right boundaries based on change frequency and scale needs.`,
        },
      ],
      technologies: ["JavaScript", "Node.js", "React", "MongoDB", "Redis", "Docker"],
    },
  ],

  skills: {
    strong: [
      { name: "TypeScript", category: "Languages", description: "Daily driver, expert-level proficiency" },
      { name: "React", category: "Frontend", description: "5+ years of production experience" },
      { name: "Node.js", category: "Backend", description: "Building APIs and services at scale" },
      { name: "System Design", category: "Architecture", description: "Designing scalable distributed systems" },
      { name: "API Design", category: "Architecture", description: "RESTful and GraphQL API design" },
      { name: "AWS", category: "Cloud", description: "EC2, Lambda, S3, RDS, and more" },
      { name: "PostgreSQL", category: "Databases", description: "Schema design, optimization, and operations" },
      { name: "Git", category: "Tools", description: "Advanced workflows and team practices" },
      { name: "CI/CD", category: "DevOps", description: "Pipeline design and implementation" },
      { name: "Technical Leadership", category: "Soft Skills", description: "Mentoring, code review, architecture decisions" },
    ],
    moderate: [
      { name: "Python", category: "Languages", description: "Scripting and data analysis" },
      { name: "Docker", category: "DevOps", description: "Container orchestration basics" },
      { name: "Kubernetes", category: "DevOps", description: "Basic deployment and management" },
      { name: "MongoDB", category: "Databases", description: "Document modeling and queries" },
      { name: "GraphQL", category: "API", description: "Schema design and resolvers" },
      { name: "Testing", category: "Quality", description: "Unit, integration, and E2E testing" },
      { name: "Agile/Scrum", category: "Process", description: "Sprint planning and retrospectives" },
    ],
    gaps: [
      { name: "Mobile Development", category: "Frontend", description: "Limited React Native experience" },
      { name: "Machine Learning", category: "AI/ML", description: "Conceptual understanding only" },
      { name: "Growth Marketing", category: "Business", description: "Not my area of expertise" },
      { name: "Low-level Systems", category: "Engineering", description: "Limited C/C++/Rust experience" },
      { name: "Data Engineering", category: "Data", description: "Basic understanding of pipelines" },
    ],
  },

  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "University",
      year: "2017",
      highlights: ["Focus on Software Engineering", "Dean's List"],
    },
  ],

  certifications: [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
    },
  ],
}

// Helper function to get full profile as text for AI context
export function getProfileAsText(): string {
  const p = careerProfile

  return `
# Career Profile: ${p.personal.name}

## Overview
**Title:** ${p.personal.title}
**Location:** ${p.personal.location}
**Tagline:** ${p.personal.tagline}

## Professional Summary
${p.personal.summary}

## Leadership Style
${p.leadershipStyle.philosophy}

Key Principles:
${p.leadershipStyle.principles.map((pr) => `- ${pr}`).join("\n")}

## Technical Depth
Areas of Expertise: ${p.technicalDepth.areas.join(", ")}

${p.technicalDepth.description}

## Work Experience
${p.experiences
  .map(
    (exp) => `
### ${exp.title} at ${exp.company}
${exp.startDate} - ${exp.endDate || "Present"} | ${exp.location}

${exp.summary}

Key Achievements:
${exp.highlights.map((h) => `- ${h}`).join("\n")}

Technologies: ${exp.technologies.join(", ")}

Detailed Narratives:
${exp.starNarratives
  .map(
    (star, i) => `
Story ${i + 1}:
- Situation: ${star.situation}
- Action: ${star.action}
- Result: ${star.result}
- Learning: ${star.learning}
`
  )
  .join("\n")}
`
  )
  .join("\n")}

## Skills Assessment

### Strong Competencies (Expert Level)
${p.skills.strong.map((s) => `- ${s.name} (${s.category}): ${s.description || ""}`).join("\n")}

### Moderate Skills (Proficient)
${p.skills.moderate.map((s) => `- ${s.name} (${s.category}): ${s.description || ""}`).join("\n")}

### Acknowledged Gaps (Areas for Growth)
${p.skills.gaps.map((s) => `- ${s.name} (${s.category}): ${s.description || ""}`).join("\n")}

## Career Goals
**Short-term:** ${p.careerGoals.shortTerm}
**Long-term:** ${p.careerGoals.longTerm}

Preferences:
${p.careerGoals.preferences.map((pr) => `- ${pr}`).join("\n")}

Dealbreakers:
${p.careerGoals.dealbreakers.map((d) => `- ${d}`).join("\n")}

## Education
${p.education.map((edu) => `- ${edu.degree}, ${edu.school} (${edu.year})`).join("\n")}

## Certifications
${p.certifications?.map((cert) => `- ${cert.name}, ${cert.issuer} (${cert.year})`).join("\n") || "None listed"}
`
}
