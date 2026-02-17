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
    title: "Senior Software Developer",
    location: "Ontario, Canada",
    email: "brian@brianbest.com",
    linkedin: "linkedin.com/in/brianbest",
    github: "github.com/brianbest",
    website: "brianbest.com",
    summary: `Senior Software Developer at Axonify with a unique trajectory from radio broadcasting through web development to AI/LLM engineering.
Currently building LLM-powered support agents, MCP tooling, and vector search pipelines. Former startup co-founder who raised $75k in angel funding
and went through the Propel ICT accelerator. Brings exceptional communication skills from radio background combined with hands-on technical leadership
and entrepreneurial experience.`,
    tagline: "Agentic engineering - Building the system that builds the system",
  },

  personality: {
    communicationStyle: [
      "Clear and articulate - honed through years of live radio broadcasting",
      "Comfortable presenting to diverse audiences from technical teams to executives",
      "Skilled at translating complex technical concepts into accessible explanations",
      "Experience with live, unscripted communication under pressure",
    ],
    workingStyle: [
      "Collaborative problem solver who values diverse perspectives",
      "Iterative approach - ship early, learn fast, improve continuously",
      "Strong documentation practices for knowledge sharing",
      "Comfortable leading or contributing as individual contributor",
    ],
    values: [
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
      "LLM-powered support agents for enterprise customers",
      "MCP (Model Context Protocol) tooling for AI integration",
      "Vector search pipelines for semantic retrieval",
      "System health ownership and observability",
      "Production AI with enterprise compliance requirements",
    ],
  },

  aiExperience: {
    current: "Building LLM-powered support agent at Axonify that integrates MCP tooling with the codebase and vector-search pipelines, reducing support turnaround from days to hours",
    tools: [
      "MCP (Model Context Protocol)",
      "Vector databases and semantic search",
      "LLM prompt engineering and system design",
      "AI agent architectures",
      "LLMOps practices for production AI",
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
      "LLM/AI Engineering & MCP Tooling",
      "Full-Stack JavaScript/TypeScript",
      "Platform Architecture & System Design",
      "API Design & Development",
      "Cloud Infrastructure (GCP, AWS)",
    ],
    description: `My deepest expertise lies in building AI-powered systems and full-stack applications. Currently focused on
LLM-powered agents, MCP tooling, and vector search. Strong background in JavaScript/TypeScript ecosystems, with experience
across the stack from React frontends to Node.js services to cloud infrastructure.`,
  },

  careerGoals: {
    shortTerm: "Continue building impactful AI/LLM systems while growing as a technical leader",
    longTerm: "Lead engineering organizations building AI-powered products, potentially exploring startup opportunities again",
    preferences: [
      "Remote or hybrid work environment",
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
      id: "axonify-senior",
      company: "Axonify",
      title: "Senior Software Developer",
      location: "Waterloo, ON (Remote)",
      startDate: "Feb 2022",
      endDate: null,
      summary: "Leading AI/LLM initiatives including LLM-powered support agent, MCP tooling, and vector search pipelines. System health owner for critical platform components.",
      highlights: [
        "Built LLM-powered support agent that reduced customer support turnaround from days to hours",
        "Developed MCP tooling for AI integration with codebase",
        "Implemented vector search pipelines for semantic retrieval",
        "System health owner ensuring platform reliability and observability",
        "Led technical design reviews and mentored developers",
      ],
      starNarratives: [
        {
          situation: "Support team was overwhelmed with ticket volume. Customer support turnaround was measured in days, impacting customer satisfaction and scaling ability.",
          action: "Built an LLM-powered support agent integrating MCP tooling with the codebase and vector-search pipelines. Designed the system for enterprise compliance requirements including proper data handling and audit trails.",
          result: "Cut support turnaround from days to hours. Enabled scalable customer care without proportional team growth. System handles significant volume with high accuracy.",
          learning: "Production AI requires enterprise compliance, not just cool demos. Success depends on reliability, observability, and integration with existing workflows.",
        },
      ],
      technologies: ["LLM/AI", "MCP", "Vector Search", "TypeScript", "Node.js", "Java", "GCP", "SQL"],
    },
    {
      id: "axonify-intermediate",
      company: "Axonify",
      title: "Intermediate Software Developer",
      location: "Waterloo, ON (Remote)",
      startDate: "Feb 2021",
      endDate: "Feb 2022",
      summary: "Promoted from junior role. Took on more complex feature development and began leading technical initiatives.",
      highlights: [
        "Promoted based on strong performance and technical growth",
        "Led feature development for enterprise learning platform",
        "Expanded ownership of platform components",
      ],
      starNarratives: [],
      technologies: ["TypeScript", "React", "Node.js", "Java", "GCP", "SQL"],
    },
    {
      id: "axonify-junior",
      company: "Axonify",
      title: "Software Developer",
      location: "Waterloo, ON (Remote)",
      startDate: "Mar 2020",
      endDate: "Feb 2021",
      summary: "Initial role at Axonify working on enterprise learning platform serving Fortune 500 clients.",
      highlights: [
        "Onboarded quickly during pandemic remote transition",
        "Contributed to key platform features",
        "Demonstrated growth potential leading to promotion",
      ],
      starNarratives: [],
      technologies: ["TypeScript", "React", "Node.js", "Java", "GCP"],
    },
    {
      id: "digicraft",
      company: "Digicraft Software Consulting",
      title: "Developer",
      location: "Ontario, Canada",
      startDate: "Jul 2017",
      endDate: "Jun 2020",
      summary: "Full-stack development across various client projects using CMS platforms and modern frontend frameworks.",
      highlights: [
        "Built CMS solutions and custom web applications",
        "Worked with Rails, React, and Vue.js",
        "Delivered projects across diverse client requirements",
      ],
      starNarratives: [],
      technologies: ["Ruby on Rails", "React", "Vue.js", "JavaScript", "CMS platforms"],
    },
    {
      id: "ubique",
      company: "UBIQUE NETWORKS",
      title: "Software Engineer",
      location: "Ontario, Canada",
      startDate: "Aug 2016",
      endDate: "Jul 2017",
      summary: "Led web development team building applications with Angular and Node.js.",
      highlights: [
        "Led web development team",
        "Built applications using Angular and Node.js",
        "Established development practices for the team",
      ],
      starNarratives: [],
      technologies: ["Angular", "Node.js", "JavaScript"],
    },
    {
      id: "phased",
      company: "Phased.io",
      title: "Co-Founder & CTO",
      location: "Nova Scotia, Canada",
      startDate: "Sep 2014",
      endDate: "Aug 2016",
      summary: "Co-founded startup, raised $75k angel round, completed Propel ICT accelerator. Built MEAN stack product with real-time communications and managed remote development team.",
      highlights: [
        "Raised $75k angel investment round",
        "Selected for Propel ICT accelerator program",
        "Built MEAN stack product with real-time communications",
        "Launched iOS and Android applications",
        "Managed remote development team",
      ],
      starNarratives: [
        {
          situation: "Had a startup idea for a communications platform but needed funding and technical execution to make it real.",
          action: "Co-founded Phased.io, pitched to investors and raised $75k angel round. Built the technical foundation using MEAN stack with real-time communication features. Managed a remote development team and went through the Propel ICT accelerator program.",
          result: "Successfully raised funding, completed accelerator, and launched iOS/Android applications. Gained invaluable startup experience.",
          learning: "Entrepreneurship teaches you to wear multiple hats - pitching, product management, technical leadership, and team building all at once. Lean product thinking and rapid iteration are essential.",
        },
      ],
      technologies: ["MEAN Stack", "MongoDB", "Express", "Angular", "Node.js", "iOS", "Android", "Real-time communications"],
    },
    {
      id: "heimdall",
      company: "Heimdall Networks",
      title: "Frontend Developer",
      location: "Nova Scotia, Canada",
      startDate: "Nov 2014",
      endDate: "Nov 2015",
      summary: "Frontend development with focus on Angular and progressive enhancement techniques.",
      highlights: [
        "Built responsive web applications with Angular",
        "Implemented progressive enhancement for broad device support",
      ],
      starNarratives: [],
      technologies: ["Angular", "JavaScript", "Progressive Enhancement"],
    },
    {
      id: "bang-creative",
      company: "BANG! creative / DOC creative",
      title: "Jr. Web Developer",
      location: "Ontario, Canada",
      startDate: "May 2013",
      endDate: "Apr 2015",
      summary: "Junior web development role focused on WordPress development and UX design.",
      highlights: [
        "Built and customized WordPress sites",
        "Contributed to UX design decisions",
        "Learned professional web development practices",
      ],
      starNarratives: [],
      technologies: ["WordPress", "PHP", "JavaScript", "UX Design"],
    },
    {
      id: "sheridan-su",
      company: "Sheridan Student Union",
      title: "Chairman",
      location: "Oakville, ON",
      startDate: "Oct 2012",
      endDate: "Apr 2013",
      summary: "Elected chairman of student union board representing 14,000 students. Oversaw governance and $3.1M budget.",
      highlights: [
        "Elected to represent 14,000 students",
        "Led board governance and strategic planning",
        "Delegated and oversaw $3.1M annual budget",
        "Won SSUI Values Award for leadership",
      ],
      starNarratives: [
        {
          situation: "Elected as chairman to lead student union board representing 14,000 students at Sheridan College.",
          action: "Led board governance, gathered student feedback to inform decisions, developed strategic vision, and delegated oversight of $3.1M budget to appropriate committees while maintaining accountability.",
          result: "Successfully led the board through the term, maintained budget accountability, and won the SSUI Values Award for leadership contributions.",
          learning: "Leadership at scale requires delegation, clear communication, and stakeholder management. Budget oversight taught financial responsibility and strategic resource allocation.",
        },
      ],
      technologies: [],
    },
    {
      id: "indi101",
      company: "INDI101",
      title: "Host / Director of Production",
      location: "Ontario, Canada",
      startDate: "Sep 2008",
      endDate: "Feb 2012",
      summary: "Hosted 3-hour live radio show 'Role Models' and rose to Director of Production. Managed CRTC compliance and station operations.",
      highlights: [
        "Hosted 3-hour live weekly radio show 'Role Models'",
        "Promoted to Director of Production",
        "Ensured CRTC compliance for station operations",
        "Created station promotions and hired on-air talent",
        "Developed live performance and communication skills",
      ],
      starNarratives: [
        {
          situation: "Started at INDI101 college radio station as an on-air host.",
          action: "Hosted 'Role Models', a 3-hour live show, developing skills in live performance and audience engagement. Rose through the ranks to Director of Production, where I oversaw station promotions, hired talent, and ensured CRTC regulatory compliance.",
          result: "Developed exceptional communication skills, comfort with live unscripted situations, and leadership experience in media production.",
          learning: "Live broadcasting teaches you to think on your feet, communicate clearly under pressure, and engage audiences - skills that transfer directly to technical presentations and stakeholder communication.",
        },
      ],
      technologies: ["Audio Production", "Broadcasting", "Content Creation"],
    },
  ],

  skills: {
    strong: [
      { name: "MCP (Model Context Protocol)", category: "AI/LLM", description: "Building MCP tooling for AI integration" },
      { name: "LLMOps", category: "AI/LLM", description: "Production AI systems with enterprise compliance" },
      { name: "LLM Engineering", category: "AI/LLM", description: "LLM-powered agents and prompt engineering" },
      { name: "Agentic Engineering", category: "AI/LLM", description: "Designing autonomous agent systems with safe orchestration and guardrails" },
      { name: "Vector Search", category: "AI/LLM", description: "Semantic search and retrieval pipelines" },
      { name: "RAG", category: "AI/LLM", description: "Retrieval-augmented generation for grounded LLM responses" },
      { name: "Java", category: "Languages", description: "Enterprise backend development" },
      { name: "JavaScript/TypeScript", category: "Languages", description: "Full-stack development, daily driver" },
      { name: "SQL", category: "Databases", description: "Query optimization and schema design" },
      { name: "CSS", category: "Frontend", description: "Responsive design and modern CSS" },
      { name: "Google Cloud Platform", category: "Cloud", description: "GCP infrastructure and services" },
      { name: "React", category: "Frontend", description: "Component architecture and state management" },
      { name: "Node.js", category: "Backend", description: "Server-side JavaScript and APIs" },
      { name: "System Design", category: "Architecture", description: "Designing scalable distributed systems" },
      { name: "Technical Leadership", category: "Soft Skills", description: "Mentoring, code review, architecture decisions" },
      { name: "Communication", category: "Soft Skills", description: "Public speaking, technical presentations, stakeholder communication" },
    ],
    moderate: [
      { name: "Python", category: "Languages", description: "Scripting and AI/ML tooling" },
      { name: "Ruby on Rails", category: "Backend", description: "Web application development" },
      { name: "Vue.js", category: "Frontend", description: "Component-based frontend development" },
      { name: "Angular", category: "Frontend", description: "Enterprise frontend applications" },
      { name: "AWS", category: "Cloud", description: "Cloud infrastructure services" },
      { name: "Docker", category: "DevOps", description: "Container orchestration" },
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
- **Growth at Axonify:** Software Developer -> Intermediate -> Senior Software Developer (Mar 2020 - Present)
- **Startup Experience:** Co-founded Phased.io, raised $75k, completed Propel ICT accelerator
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
