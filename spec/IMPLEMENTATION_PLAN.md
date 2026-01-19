# Implementation Plan: AI-Powered Interactive Career Interface

## Overview

Transform the current portfolio site into an "Un-Resume" - an AI-driven interactive career interface that allows hiring managers to interrogate Brian's experience in real-time.

---

## Phase 1: Foundation & Data Architecture

### 1.1 Install AI Dependencies
- Install Vercel AI SDK (`ai` package)
- Install OpenAI provider (`@ai-sdk/openai`)
- Set up environment variables for API keys

**Files to modify:**
- `package.json`
- `.env.local` (create/update)

### 1.2 Create Career Profile Data Structure
Define comprehensive career data that will power the AI system prompt:

**New file: `lib/career-profile.ts`**
```typescript
// Contains:
// - Personal info & professional summary
// - Work experience with STAR narratives (Situation, Action, Result, Learning)
// - Skills matrix (Strong, Moderate, Gaps)
// - Leadership style & philosophy
// - Technical depth areas
// - Career goals & preferences
```

### 1.3 Create Sanity Schema Extensions (Optional)
If managing career data via CMS:
- Add `experience` document type with expandable narratives
- Add `skill` document type with proficiency levels
- Add `careerProfile` singleton document

**Files to modify:**
- `schemas.ts`

---

## Phase 2: AI Backend Infrastructure

### 2.1 Create AI System Prompt
Craft the system prompt that defines how the AI responds:

**New file: `lib/ai/system-prompt.ts`**
- Inject full career profile
- Define personality/tone guidelines
- Set strict honesty rules (no hallucination)
- Define response format preferences

### 2.2 Create Chat API Route
Server-side endpoint for AI conversations:

**New file: `app/api/chat/route.ts`**
- Uses Vercel AI SDK's `streamText`
- OpenAI provider with GPT-5.2 (`gpt-5.2`)
- System prompt injection
- Streaming response handling

### 2.3 Create Job Fit Analysis API Route
Endpoint for job description analysis:

**New file: `app/api/job-fit/route.ts`**
- Accepts job description text
- Analyzes against career profile
- Returns structured fit assessment
- Binary fit/no-fit with detailed reasoning

---

## Phase 3: Core UI Components

### 3.1 AI Chat Interface Component
The primary "Ask AI About Me" interface:

**New file: `components/ai-chat.tsx`**
- Chat message display (user/assistant bubbles)
- Text input with send button
- Streaming response rendering
- Suggested starter questions
- Loading/typing indicators
- Mobile-responsive design

### 3.2 Skills Matrix Component
Three-column visualization:

**New file: `components/skills-matrix.tsx`**
- **Strong column**: Core competencies with visual indicators
- **Moderate column**: Familiar areas
- **Gaps column**: Honest weaknesses
- Interactive hover states with details
- Clean card-based layout

### 3.3 Experience Card with Expandable Context
Interactive experience section:

**New file: `components/experience-card.tsx`**
- Standard resume bullet point view (collapsed)
- "View Full Story" / "View AI Context" button
- Expandable STAR narrative:
  - **Situation**: The problem/context
  - **Action**: Specific steps taken
  - **Result**: Quantitative outcomes
  - **Learning**: Reflections & growth
- Smooth expand/collapse animation (using Radix Accordion)

### 3.4 Job Fit Assessment Component
Job description analyzer:

**New file: `components/job-fit-analyzer.tsx`**
- Large textarea for pasting JD
- "Analyze Fit" button
- Results display:
  - Fit/No-Fit badge
  - Skills mapping visualization
  - Gap analysis
  - Honest recommendation
- CTA for strong fits (book call/email)

---

## Phase 4: Page Restructure

### 4.1 New Landing Page
Redesign homepage for the "Un-Resume" flow:

**Modify: `app/page.tsx`**
- Clean hero with name, title, professional photo
- Prominent AI chat interface (above fold)
- "Ask me anything about my career" CTA
- Scroll indicator to more sections

### 4.2 New Experience Page/Section
Replace or augment About page:

**Modify: `app/about/page.tsx` OR new `app/experience/page.tsx`**
- Professional summary
- Timeline of experience cards (expandable)
- Skills matrix section
- Education & certifications

### 4.3 Job Fit Page/Section
Dedicated assessment tool:

**New file: `app/job-fit/page.tsx`**
- Job Fit Analyzer component
- Instructions for hiring managers
- Sample results explanation
- Contact CTA

### 4.4 Update Navigation
Add new routes to navbar:

**Modify: `components/navbar.tsx`**
- Update nav links: Home, Experience, Skills, Job Fit, Contact
- Remove Blog/Projects if desired (or keep as secondary)

---

## Phase 5: Styling & Polish

### 5.1 Chat UI Styling
- Message bubbles with persona color scheme
- Typing indicator animation
- Smooth scroll to latest message
- Code block formatting (if AI shares code)

### 5.2 Skills Matrix Styling
- Three-column responsive grid
- Skill tags with proficiency indicators
- Color coding (green/yellow/red for strong/moderate/gap)

### 5.3 Experience Card Styling
- Clean timeline visual
- Smooth accordion animations
- STAR section visual hierarchy

### 5.4 Overall Theme Adjustments
**Modify: `app/globals.css` and `tailwind.config.ts`**
- Ensure professional tone while keeping persona aesthetic
- Add new utility classes for AI components
- Responsive breakpoints for all new components

---

## Phase 6: Content Population

### 6.1 Write Career Profile Content
Populate `lib/career-profile.ts` with Brian's actual data:
- Full work history with STAR narratives
- Comprehensive skills assessment
- Leadership philosophy
- Technical depth areas
- Honest gaps and growth areas

### 6.2 Craft AI System Prompt
Fine-tune the AI's personality:
- Professional but personable tone
- Match Brian's communication style
- Strict honesty guidelines
- Edge case handling

### 6.3 Test & Iterate
- Test various question types
- Verify no hallucinations
- Test job fit with real JDs
- Mobile testing

---

## Technical Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                    │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │  AI Chat    │  │ Skills      │  │ Job Fit         │  │
│  │  Component  │  │ Matrix      │  │ Analyzer        │  │
│  └──────┬──────┘  └─────────────┘  └────────┬────────┘  │
│         │                                    │          │
│         ▼                                    ▼          │
│  ┌─────────────────────────────────────────────────────┐│
│  │              API Routes (Server)                    ││
│  │  /api/chat          /api/job-fit                    ││
│  └──────────────────────┬──────────────────────────────┘│
└─────────────────────────┼───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                  Vercel AI SDK                          │
│         (streamText, OpenAI Provider)                   │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   OpenAI API                            │
│                    (gpt-5.2)                            │
└─────────────────────────────────────────────────────────┘
```

---

## File Structure (New/Modified)

```
brian-best-com/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts          # NEW - AI chat endpoint
│   │   └── job-fit/
│   │       └── route.ts          # NEW - Job fit analysis
│   ├── page.tsx                  # MODIFY - New landing page
│   ├── about/page.tsx            # MODIFY - Experience focus
│   ├── job-fit/
│   │   └── page.tsx              # NEW - Job fit tool page
│   └── globals.css               # MODIFY - New styles
├── components/
│   ├── ai-chat.tsx               # NEW - Chat interface
│   ├── skills-matrix.tsx         # NEW - Skills visualization
│   ├── experience-card.tsx       # NEW - Expandable experience
│   ├── job-fit-analyzer.tsx      # NEW - JD analyzer
│   └── navbar.tsx                # MODIFY - New nav items
├── lib/
│   ├── career-profile.ts         # NEW - Career data
│   └── ai/
│       └── system-prompt.ts      # NEW - AI system prompt
├── .env.local                    # MODIFY - Add OPENAI_API_KEY
└── package.json                  # MODIFY - Add AI deps
```

---

## Task Breakdown

### Phase 1: Foundation (Tasks 1-4)
- [ ] Task 1: Install Vercel AI SDK and OpenAI provider
- [ ] Task 2: Set up environment variables
- [ ] Task 3: Create career profile data structure
- [ ] Task 4: Populate career profile with placeholder data

### Phase 2: AI Backend (Tasks 5-8)
- [ ] Task 5: Create AI system prompt module
- [ ] Task 6: Create `/api/chat` route with streaming
- [ ] Task 7: Create `/api/job-fit` route
- [ ] Task 8: Test API routes with curl/Postman

### Phase 3: UI Components (Tasks 9-13)
- [ ] Task 9: Build AI chat component (messages, input, streaming)
- [ ] Task 10: Build skills matrix component
- [ ] Task 11: Build experience card with expandable STAR narrative
- [ ] Task 12: Build job fit analyzer component
- [ ] Task 13: Add component styling and animations

### Phase 4: Page Integration (Tasks 14-18)
- [ ] Task 14: Redesign landing page with AI chat prominent
- [ ] Task 15: Create/update experience page with timeline
- [ ] Task 16: Create job fit page
- [ ] Task 17: Update navigation
- [ ] Task 18: Mobile responsiveness pass

### Phase 5: Content & Polish (Tasks 19-22)
- [ ] Task 19: Write full career profile content
- [ ] Task 20: Fine-tune AI system prompt
- [ ] Task 21: Test all AI interactions
- [ ] Task 22: Final QA and bug fixes

---

## Dependencies to Install

```bash
npm install ai @ai-sdk/openai
```

## Environment Variables Needed

```env
OPENAI_API_KEY=sk-...
```

---

## Success Criteria

1. **AI Chat works**: Users can ask questions and get streaming responses
2. **No hallucinations**: AI only answers based on provided profile
3. **Skills Matrix displays**: Three columns clearly show strengths/gaps
4. **Experience expands**: STAR narratives reveal on click
5. **Job Fit analyzes**: Paste JD → Get honest fit assessment
6. **Mobile responsive**: All features work on mobile
7. **Fast loading**: Page loads quickly, AI streams smoothly

---

## References

- [Vercel AI SDK Docs](https://sdk.vercel.ai/docs)
- [AI SDK OpenAI Provider](https://ai-sdk.dev/providers/ai-sdk-providers/openai)
- [OpenAI GPT-5.2 Model Docs](https://platform.openai.com/docs/models/gpt-5.2)
- [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Streaming with AI SDK](https://blog.logrocket.com/nextjs-vercel-ai-sdk-streaming/)
