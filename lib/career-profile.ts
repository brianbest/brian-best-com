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

export interface Award {
  name: string
  context: string
}

export interface UniqueBackground {
  item: string
  relevance: string
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
  personality: {
    communicationStyle: string[]
    workingStyle: string[]
    values: string[]
  }
  uniqueBackground: UniqueBackground[]
  currentFocus: {
    tagline: string
    areas: string[]
  }
  aiExperience: {
    current: string
    tools: string[]
    philosophy: string
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
  awards: Award[]
  certifications?: {
    name: string
    issuer: string
    year: string
  }[]
}

export const careerProfile: CareerProfile = {
  personal: {
    name: "Brian Best",
    title: "Principal Software Developer",
    location: "Kitchener, Ontario, Canada",
    email: "brian.best.contact@pm.me",
    linkedin: "linkedin.com/in/brianbest101",
    github: "github.com/brianbest",
    website: "brianbest.com",
    summary: `Principal Software Developer at Axonify with 12+ years of full-stack engineering experience and 3+ years architecting production AI systems —
agentic AI, LLM-powered applications, multi-agent orchestration, and Model Context Protocol (MCP) integrations. Currently co-leads an internal agentic AI
"code factory" and drives LLM-powered capabilities into the customer-facing Axonify platform, spanning RAG and retrieval pipelines, secure tool-calling for
AI agents, and conversational interfaces that operate within enterprise compliance boundaries. Advanced from Software Developer to Principal in six years.
Former startup co-founder (raised CAD $75k, Propel ICT accelerator) with a non-traditional path from radio broadcasting into AI/LLM engineering.`,
    tagline: "Agentic engineering - Building the system that builds the system",
  },

  personality: {
    communicationStyle: [
      "Clear and articulate - honed through years of live radio broadcasting",
      "Comfortable presenting to diverse audiences from technical teams to executives",
      "Skilled at translating complex technical concepts into accessible explanations",
      "Experience with live, unscripted communication under pressure",
      "Has proven experince in effective communication that other engineers struggle with"
    ],
    workingStyle: [
      "Collaborative problem solver who values diverse perspectives",
      "Iterative approach - ship early, learn fast, improve continuously",
      "Strong documentation practices for knowledge sharing",
      "Comfortable leading or contributing as individual contributor",
    ],
    values: [
      "Is a builder at heart - he loves to build things and see them come to life",
      "Technical excellence balanced with pragmatism",
      "Continuous learning and growth mindset",
      "Transparency and honest communication",
      "Building meaningful products that make a difference",
    ],
  },

  uniqueBackground: [
    {
      item: "Former radio broadcaster and Director of Production at INDI101",
      relevance: "Developed exceptional live communication skills, content creation abilities, and comfort with public speaking",
    },
    {
      item: "Student Union Chairman representing 14,000 students with $3.1M budget",
      relevance: "Leadership experience at scale, budget management, stakeholder communication, and governance",
    },
    {
      item: "Co-founded Phased.io, raised $75k angel round, completed Propel ICT accelerator",
      relevance: "Entrepreneurial mindset, fundraising experience, startup operations, and product thinking",
    },
    {
      item: "Non-traditional path: Radio -> Web Dev -> Senior Dev -> AI/LLM Specialist",
      relevance: "Demonstrates adaptability, continuous learning, and ability to reinvent and grow",
    },
  ],

  currentFocus: {
    tagline: "Agentic engineering - Building the system that builds the system",
    areas: [
      "Co-leading an internal agentic AI development platform — an in-house \"code factory\" of LLM-powered coding agents",
      "Productizing LLM capabilities into customer-facing enterprise features",
      "MCP (Model Context Protocol) integrations for secure, compliant agent access to production systems",
      "Multi-agent orchestration and agent-augmented workflows",
      "RAG and retrieval pipelines for support automation",
      "System-health ownership and observability across the engineering org",
    ],
  },

  aiExperience: {
    current: "Co-leads an internal agentic AI \"code factory\" of LLM-powered agents and drives LLM capabilities into the customer-facing Axonify platform. Shipped LLM support automation that runs pre-emptive investigation at ticket creation (log analysis, error extraction, RAG retrieval of similar past issues), cutting average time from issue reported to fix deployed from roughly 14 days to 3 days.",
    tools: [
      "MCP (Model Context Protocol) servers & clients",
      "Agentic AI & multi-agent orchestration",
      "RAG and vector search / retrieval pipelines",
      "LLM evaluation, prompt engineering, and system design",
      "Conversational AI interfaces",
      "LLMOps practices for production AI",
      "Claude, GPT, and Gemini model families",
    ],
    philosophy: "Production AI requires enterprise compliance, not just cool demos. Focus on reliability, observability, and real business outcomes.",
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
      "Agentic AI, multi-agent orchestration & MCP tooling",
      "RAG, vector search & retrieval pipelines",
      "Full-Stack JavaScript/TypeScript (+ Java, Python)",
      "Platform Architecture & Distributed Systems Design",
      "API Design (REST, WebSockets & real-time streaming)",
      "Cloud & Infrastructure (GCP, Docker, Linux)",
    ],
    description: `My deepest expertise lies in building production AI systems and full-stack applications. Currently focused on
agentic AI, multi-agent orchestration, MCP integrations, and RAG/retrieval pipelines. Strong background in the JavaScript/TypeScript
ecosystem with Java and Python alongside it, and experience across the stack from React frontends to Node.js services to cloud infrastructure on GCP.`,
  },

  careerGoals: {
    shortTerm: "Continue building impactful AI/LLM systems while growing as a technical leader",
    longTerm: "Lead engineering organizations building AI-powered products, potentially exploring startup opportunities again",
    preferences: [
      "Remote or hybrid work environment",
      "Willing to work from an office in Kitchener-Waterloo, ON",
      "AI/LLM focused engineering work",
      "Product-focused engineering culture",
      "Opportunities for technical leadership",
      "Companies solving meaningful problems",
    ],
    dealbreakers: [
      "Purely management roles with no coding",
      "Toxic work cultures",
      "Companies without clear product vision",
    ],
  },

  experiences: [
    {
      id: "axonify-principal",
      company: "Axonify",
      title: "Principal Software Developer",
      location: "Waterloo, ON (Remote)",
      startDate: "Feb 2026",
      endDate: null,
      summary: "Co-leads an internal agentic AI \"code factory\" and drives LLM-powered capabilities into the customer-facing Axonify platform, owning technical strategy for AI-driven automation across the product.",
      highlights: [
        "Co-lead an internal agentic AI development platform — an in-house \"code factory\" of LLM-powered agents that autonomously implements, tests, and reviews changes against the production codebase to accelerate feature delivery",
        "Drive integration of LLM-powered capabilities into the customer-facing Axonify application across multiple learner- and admin-facing workflows",
        "Architect MCP integrations that let agents securely query the production codebase and internal tooling within enterprise compliance boundaries — credential isolation, scoped tool access, and audit logging",
        "Shipped LLM-powered support automation that runs pre-emptive investigation at ticket creation (log analysis, error extraction, reproduction-context capture, RAG retrieval of similar past issues), cutting average time from issue reported to fix deployed from ~14 days to ~3 days",
        "Own technical strategy for AI-driven automation across the platform and serve as in-house productizer translating LLM research into shipped, customer-visible features",
        "Technical owner for system-health and observability tooling consumed across the engineering organization",
      ],
      starNarratives: [
        {
          situation: "Support turnaround was slow — average time from a customer reporting an issue to a fix being deployed was roughly 14 days, hurting customer satisfaction and the team's ability to scale.",
          action: "Designed and shipped LLM-powered support automation that runs pre-emptive investigation the moment a ticket is created: log analysis, error extraction, reproduction-context capture, and RAG-based retrieval of similar past issues and their resolution status (durable fixes vs. manual workarounds). Built it to operate within enterprise compliance boundaries with proper data handling and audit logging.",
          result: "Cut average time from issue reported to fix deployed from ~14 days to ~3 days, enabling scalable customer care without proportional team growth.",
          learning: "Production AI requires enterprise compliance, not just cool demos. Success depends on reliability, observability, and tight integration with the workflows people already use.",
        },
      ],
      technologies: ["LLM/AI", "Agentic AI", "MCP", "RAG", "Vector Search", "TypeScript", "Node.js", "Java", "Python", "GCP", "SQL"],
    },
    {
      id: "axonify-senior",
      company: "Axonify",
      title: "Senior Software Developer",
      location: "Waterloo, ON (Remote)",
      startDate: "Feb 2022",
      endDate: "Feb 2026",
      summary: "Promoted to technical lead. Built the foundational retrieval and context-gathering infrastructure that now powers the platform's LLM agent capabilities, and stood up the first generation of AI-assisted support tooling.",
      highlights: [
        "Designed and built the foundational retrieval and context-gathering infrastructure that now powers the platform's LLM agent capabilities",
        "Stood up the first generation of AI-assisted customer-support tooling; validated cost, latency, and accuracy tradeoffs across multiple model providers before committing to a production architecture",
        "Mentored intermediate and junior developers, contributed to hiring rubrics, and ran cross-team technical reviews",
        "Delivered platform features across Java/JavaScript/SQL on Google Cloud Platform serving millions of enterprise learners across regulated industries (healthcare, retail, food service)",
      ],
      starNarratives: [
        {
          situation: "Axonify wanted to bring LLM capabilities to the product, but there was no infrastructure to feed models reliable, relevant context from the codebase and platform data.",
          action: "Designed and built the foundational retrieval and context-gathering infrastructure now underpinning the platform's LLM agents, and stood up the first AI-assisted support tooling — validating cost, latency, and accuracy tradeoffs across multiple model providers first.",
          result: "Created the retrieval backbone that later LLM agent and support-automation work was built on, and de-risked the production architecture before committing to it.",
          learning: "Getting the retrieval and context layer right is what separates a reliable production AI system from a flashy prototype.",
        },
      ],
      technologies: ["LLM/AI", "RAG", "Vector Search", "TypeScript", "Node.js", "Java", "GCP", "SQL"],
    },
    {
      id: "axonify-developer",
      company: "Axonify",
      title: "Software Developer → Intermediate Software Developer",
      location: "Waterloo, ON (Remote)",
      startDate: "Mar 2020",
      endDate: "Feb 2022",
      summary: "Shipped customer-facing features across the Axonify learning platform on Google Cloud Platform, growing into systems-level ownership and earning successive promotions.",
      highlights: [
        "Shipped customer-facing features across the Axonify learning platform on Google Cloud Platform",
        "Grew into systems-level ownership, earning successive promotions",
        "Onboarded and ramped during the pandemic remote transition",
      ],
      starNarratives: [],
      technologies: ["TypeScript", "React", "Node.js", "Java", "GCP", "SQL"],
    },
    {
      id: "combinaut",
      company: "Combinaut",
      title: "Frontend Developer",
      location: "Ontario, Canada (US healthcare client)",
      startDate: "Jul 2017",
      endDate: "Apr 2020",
      summary: "Built marketing platforms and customer-facing web frontends for a US hospital client in a regulated healthcare environment.",
      highlights: [
        "Built marketing platforms and customer-facing web frontends for a US hospital client, operating within a regulated healthcare environment (content, patient-facing communications, accessibility, and compliance)",
        "Collaborated with US-based stakeholders to ship features across patient-facing and administrative surfaces",
        "Balanced marketing-team requirements against the regulatory constraints of healthcare communications",
      ],
      starNarratives: [],
      technologies: ["JavaScript", "Component-driven frontend", "SQL", "Document stores"],
    },
    {
      id: "ubique",
      company: "Ubique Networks",
      title: "Software Engineer",
      location: "Ontario, Canada",
      startDate: "Aug 2016",
      endDate: "Jul 2017",
      summary: "Led a web development team building an Angular + Node.js application backed by Express and WebSockets.",
      highlights: [
        "Led the web development team building an Angular + Node.js application backed by Express and WebSockets",
        "Ran user-feedback sessions and translated manager-driven requirements into shipped features",
        "Established development practices for the team",
      ],
      starNarratives: [],
      technologies: ["Angular", "Node.js", "Express", "WebSockets", "JavaScript"],
    },
    {
      id: "phased",
      company: "Phased.io",
      title: "Co-Founder & CTO",
      location: "Sydney, Nova Scotia",
      startDate: "Sep 2014",
      endDate: "Aug 2016",
      summary: "Co-founded an early-stage venture, raised a CAD $75k angel round, and was selected for Propel ICT's Build accelerator. Built the product on a MEAN stack with Firebase real-time data plus iOS/Android, and managed a remote team.",
      highlights: [
        "Co-founded an early-stage venture and raised a CAD $75,000 angel round",
        "Selected for Propel ICT's New Brunswick-based Build accelerator cohort",
        "Built the product on a MEAN stack with Firebase real-time data, plus iOS/Android via PhoneGap and integrations including Twilio",
        "Directly managed a remote team of designers and developers; introduced lean product management and analytics practices to drive iteration",
      ],
      starNarratives: [
        {
          situation: "Had a startup idea for a communications platform but needed funding and technical execution to make it real.",
          action: "Co-founded Phased.io, pitched investors and raised a CAD $75k angel round, and was selected for Propel ICT's Build accelerator. Built the product on a MEAN stack with Firebase real-time data plus iOS/Android via PhoneGap and Twilio, and directly managed a remote team of designers and developers.",
          result: "Raised funding, completed the accelerator, and launched iOS/Android applications. Gained invaluable startup and product-leadership experience.",
          learning: "Entrepreneurship teaches you to wear multiple hats - pitching, product management, technical leadership, and team building all at once. Lean product thinking and rapid iteration are essential.",
        },
      ],
      technologies: ["MEAN Stack", "MongoDB", "Express", "Angular", "Node.js", "Firebase", "PhoneGap", "Twilio", "iOS", "Android"],
    },
  ],

  skills: {
    strong: [
      { name: "MCP (Model Context Protocol)", category: "AI/LLM", description: "Building MCP servers & clients for secure AI tool-calling" },
      { name: "LLMOps", category: "AI/LLM", description: "Production AI systems with enterprise compliance" },
      { name: "LLM Engineering", category: "AI/LLM", description: "LLM-powered apps, evaluation, and prompt engineering" },
      { name: "Agentic AI", category: "AI/LLM", description: "Autonomous & multi-agent orchestration with safe guardrails" },
      { name: "RAG", category: "AI/LLM", description: "Retrieval-augmented generation for grounded LLM responses" },
      { name: "Vector Search", category: "AI/LLM", description: "Semantic search and retrieval pipelines" },
      { name: "Conversational AI", category: "AI/LLM", description: "Chat and assistant interfaces over LLMs" },
      { name: "JavaScript/TypeScript", category: "Languages", description: "Full-stack development, daily driver" },
      { name: "Java", category: "Languages", description: "Enterprise backend development" },
      { name: "SQL", category: "Databases", description: "Query optimization and schema design" },
      { name: "Node.js", category: "Backend", description: "Server-side JavaScript and APIs" },
      { name: "React", category: "Frontend", description: "Component architecture and state management" },
      { name: "Google Cloud Platform", category: "Cloud", description: "GCP infrastructure and services" },
      { name: "Docker & Docker Compose", category: "Cloud & Infra", description: "Containerized services and multi-stack deployments" },
      { name: "System Design", category: "Architecture", description: "Scalable distributed systems design" },
      { name: "Technical Leadership", category: "Soft Skills", description: "Mentoring, code review, architecture decisions" },
      { name: "Communication", category: "Soft Skills", description: "Public speaking, technical presentations, stakeholder communication" },
    ],
    moderate: [
      { name: "Python", category: "Languages", description: "Scripting and AI/ML tooling" },
      { name: "Vue.js", category: "Frontend", description: "Component-based frontend development" },
      { name: "Angular", category: "Frontend", description: "Enterprise frontend applications" },
      { name: "Linux (Arch, Ubuntu)", category: "Cloud & Infra", description: "Daily-driver and self-hosted server administration" },
      { name: "AWS", category: "Cloud", description: "Cloud infrastructure services" },
      { name: "MongoDB", category: "Databases", description: "Document database design" },
      { name: "GraphQL", category: "API", description: "Schema design and resolvers" },
    ],
    gaps: [
      { name: "Mobile Development", category: "Frontend", description: "Limited native mobile experience" },
      { name: "Low-level Systems", category: "Engineering", description: "Limited C/C++/Rust experience" },
      { name: "Data Engineering", category: "Data", description: "Basic understanding of pipelines" },
    ],
  },

  education: [
    {
      degree: "Ontario College Graduate Certificate, Interactive Multimedia",
      school: "Sheridan College",
      year: "2012-2013",
      highlights: ["Graduate With Honors", "Valedictorian"],
    },
    {
      degree: "UIT Startup Immersion",
      school: "Cape Breton University",
      year: "2014-2015",
      highlights: [],
    },
    {
      degree: "Ontario College Diploma, Radio Broadcasting",
      school: "Mohawk College",
      year: "2008-2010",
      highlights: [],
    },
  ],

  awards: [
    { name: "Graduate With Honors", context: "Sheridan College" },
    { name: "Valedictorian", context: "Sheridan College" },
    { name: "SSUI Values Award", context: "Sheridan Student Union" },
    { name: "Sheridan Student Union Chairman", context: "Governance of a $3.1M budget and a 14,000-student constituency" },
  ],

  certifications: [],
}

// Helper function to get full profile as text for AI context
export function getProfileAsText(): string {
  const p = careerProfile

  return `
# Career Profile: ${p.personal.name}

## Overview
**Title:** ${p.personal.title}
**Location:** ${p.personal.location}
**Current Focus:** ${p.currentFocus.tagline}

## Professional Summary
${p.personal.summary}

## What Makes Brian Unique
${p.uniqueBackground.map((bg) => `- **${bg.item}**: ${bg.relevance}`).join("\n")}

## Current AI/LLM Focus
${p.aiExperience.current}

**Key Areas:**
${p.currentFocus.areas.map((area) => `- ${area}`).join("\n")}

**AI Tools & Practices:**
${p.aiExperience.tools.map((tool) => `- ${tool}`).join("\n")}

**Philosophy:** ${p.aiExperience.philosophy}

## Communication & Working Style

**Communication Style:**
${p.personality.communicationStyle.map((s) => `- ${s}`).join("\n")}

**Working Style:**
${p.personality.workingStyle.map((s) => `- ${s}`).join("\n")}

**Core Values:**
${p.personality.values.map((v) => `- ${v}`).join("\n")}

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

${exp.technologies.length > 0 ? `Technologies: ${exp.technologies.join(", ")}` : ""}

${
  exp.starNarratives.length > 0
    ? `Detailed Narratives:
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
  .join("\n")}`
    : ""
}
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

## Education
${p.education.map((edu) => `- ${edu.degree}, ${edu.school} (${edu.year})${edu.highlights && edu.highlights.length > 0 ? ` - ${edu.highlights.join(", ")}` : ""}`).join("\n")}

## Awards & Recognition
${p.awards.map((award) => `- ${award.name} (${award.context})`).join("\n")}

## Career Trajectory Highlights
- **Growth at Axonify:** Software Developer -> Intermediate -> Senior -> Principal Software Developer (Mar 2020 - Present)
- **Startup Experience:** Co-founded Phased.io, raised CAD $75k, completed Propel ICT accelerator
- **Leadership at Scale:** Student Union Chairman overseeing 14,000 students and $3.1M budget
- **Non-traditional Path:** Radio broadcasting -> Web development -> AI/LLM engineering
`
}

// Public-safe profile that excludes sensitive negotiation information
export function getPublicProfileAsText(): string {
  const p = careerProfile

  return `
# Career Profile: ${p.personal.name}

## Overview
**Title:** ${p.personal.title}
**Location:** ${p.personal.location}
**Current Focus:** ${p.currentFocus.tagline}

## Professional Summary
${p.personal.summary}

## What Makes Brian Unique
${p.uniqueBackground.map((bg) => `- **${bg.item}**: ${bg.relevance}`).join("\n")}

## Current AI/LLM Focus
${p.aiExperience.current}

**Key Areas:**
${p.currentFocus.areas.map((area) => `- ${area}`).join("\n")}

**Philosophy:** ${p.aiExperience.philosophy}

## Communication & Working Style

**Communication Style:**
${p.personality.communicationStyle.map((s) => `- ${s}`).join("\n")}

**Working Style:**
${p.personality.workingStyle.map((s) => `- ${s}`).join("\n")}

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

${exp.technologies.length > 0 ? `Technologies: ${exp.technologies.join(", ")}` : ""}
`
  )
  .join("\n")}

## Skills Assessment

### Strong Competencies
${p.skills.strong.map((s) => `- ${s.name} (${s.category})`).join("\n")}

### Proficient Skills
${p.skills.moderate.map((s) => `- ${s.name} (${s.category})`).join("\n")}

## Education
${p.education.map((edu) => `- ${edu.degree}, ${edu.school} (${edu.year})${edu.highlights && edu.highlights.length > 0 ? ` - ${edu.highlights.join(", ")}` : ""}`).join("\n")}

## Awards & Recognition
${p.awards.map((award) => `- ${award.name} (${award.context})`).join("\n")}
`
}
