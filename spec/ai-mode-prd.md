# Product Requirements Document: AI-Powered Interactive Career Interface

## 1. Executive Summary

**Product Name:** Interactive Career Interface (aka "The Un-Resume")
**Vision:** To replace the traditional static resume with a dynamic, AI-driven personal website that allows hiring managers to "interrogate" a candidate's experience, demonstrating depth, competence, and honest fit assessment in real-time.
**Core Value Proposition:** Shifts the hiring dynamic from "filtering a document" to "experiencing a professional." It proves expertise through interactive demonstration rather than static claims.

## 2. Problem Statement

* **For Hiring Managers:** They are drowning in hundreds of applications. Traditional resumes are compressed and easily faked (especially with AI tools), making it impossible to distinguish genuine depth from polished fluff in a 6-second scan.
* **For Candidates:** Qualified candidates are lost in the noise of 400+ applicants. Standard resumes fail to capture the nuance, decision-making process, and "lessons learned" behind their achievements.

## 3. Target Audience

* **Primary:** Hiring managers, technical recruiters, and potential founders/employers.
* **Secondary:** The candidate themselves (as a tool to clarify and articulate their own career narrative).

## 4. Functional Requirements

### 4.1. AI Chat Interface ("Ask AI About Me")

* **Description:** A prominent chat interface where visitors can ask natural language questions about the candidate's background.
* **Capabilities:**
* Must answer specific queries (e.g., "What is his leadership style?", "Has he worked with high-scale infrastructure?").
* Must provide detailed, multi-turn answers grounded in the candidate's actual history.
* Must handle edge cases and admit when information is unknown (no hallucinations).


* **Goal:** Demonstrate communication skills and depth of knowledge that is hard to fake.

### 4.2. Expandable "Real Story" Experience Section

* **Description:** An interactive version of the traditional "Experience" list.
* **Feature - "View AI Context":** A button or toggle associated with standard resume bullet points.
* **Functionality:** When clicked, it expands to reveal the full narrative:
* **The Situation:** What was the mess/problem inherited?
* **The Action:** What specific steps were taken (e.g., rightsizing instances, building cost transparency)?
* **The Result:** Quantitative outcomes.
* **The Learning:** A reflective section on what the candidate learned from the process.



### 4.3. Job Fit Assessment Tool

* **Description:** A text input field where a hiring manager can paste a Job Description (JD).
* **Functionality:** The AI analyzes the JD against the candidate's embedded profile and returns a binary "Fit" or "No Fit" analysis.
* **Scenario A (Strong Fit):** explicitly maps skills to requirements and encourages a conversation.
* **Scenario B (Weak Fit):** Honestly advises the user *not* to interview the candidate, explaining why (e.g., "This role requires deep consumer product experience, but my background is primarily B2B infrastructure").


* **Goal:** Save the hiring manager's time and build immense credibility through honesty.

### 4.4. The "Three-Column" Skills Matrix

* **Description:** A transparent visualization of the candidate's technical capabilities.
* **Structure:**
1. **Strong:** Core competencies (e.g., Platform Architecture, API Design).
2. **Moderate:** Areas of familiarity but not mastery.
3. **Gaps/Weaknesses:** Explicitly listed areas where the candidate is weak (e.g., Mobile Development, Growth Marketing).


* **Rationale:** Admitting weaknesses acts as a costly signal that validates the strengths.

## 5. User Flow

1. **Landing:** User arrives at a clean, professional landing page (Name, Title, Logo).
2. **Discovery:** User sees the "Ask AI" prompt and engages in a Q&A to verify specific needs.
3. **Deep Dive:** User scrolls to Experience, clicking "View Context" to read the narrative behind a specific achievement.
4. **Validation:** User interacts with the Skills Matrix to see honest gaps.
5. **Assessment:** User pastes their Job Description into the Fit Assessment tool.
6. **Conversion:** If the fit is strong, the tool prompts the user to book a call or email.

## 6. Technical Considerations

* **Platform:** Web-based application (Video mentions building it in "Lovable" or similar no-code/low-code tools, with code available on GitHub).
* **AI Backend:** Requires integration with an LLM (Large Language Model).
* **System Prompting:** Critical requirement. The "Candidate Profile" must be injected into the system prompt with strict instructions on honesty, tone, and refusal to hallucinate non-existent experience.

## 7. Success Metrics

* **Engagement Time:** Increasing the average time-on-site from ~6 seconds (resume scan) to 2-5 minutes.
* **Interaction Depth:** Number of queries asked in the chat interface per session.
* **Lead Quality:** Conversion rate of "Strong Fit" assessment results to scheduled interviews.


EXAMPLE OF WHAT THIS COULD LOOK LIKE: https://sample-ai-resume.lovable.app/
BE SURE TO USE THAT EXAMPLE TO GUIDE THE DESIGN AND FUNCTIONALITY OF THE PRODUCT.