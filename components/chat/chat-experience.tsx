"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useChat } from "@ai-sdk/react"
import type { UIMessage } from "ai"
import { cn } from "@/lib/utils"
import { FitAssessment } from "@/components/chat/fit-assessment"

// ──────────────────────────────────────────────────────────────────────
// Constants — real backend limits (see lib/ai/validation.ts)
//   chat text part: max 4000 chars
//   job description: 50–15000 chars
// The knowledge date mirrors the latest post on the site.
// ──────────────────────────────────────────────────────────────────────
type Mode = "ask" | "jd"

const ASK_MAX = 4000
const JD_MAX = 15000
const JD_MIN = 50
const KNOWLEDGE_DATE = "2026-05-25"
const MODEL_LABEL = "gpt-4.1"

const STARTER_PROMPTS = [
  "What languages does Brian work in?",
  "Is he open to remote?",
  "Walk me through his most ambitious project",
  "What's his leadership style?",
]

const ASK_FOLLOW_UPS = [
  "What's a technical decision he's proud of?",
  "How does he approach working with AI agents?",
  "What are his career goals?",
  "Where is he based?",
]

function timeLabel(d = new Date()) {
  return d
    .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
    .toLowerCase()
}

function textFromMessage(m: UIMessage) {
  return (m.parts ?? [])
    .map((p) => (p.type === "text" ? p.text : ""))
    .join("")
}

export interface ChatSource {
  slug: string
  date: string
}

export function ChatExperience({
  knowledgeDate = KNOWLEDGE_DATE,
  sources = [],
}: {
  knowledgeDate?: string
  sources?: ChatSource[]
} = {}) {
  const [mode, setMode] = useState<Mode>("ask")

  // ── Ask mode (general chat) ─────────────────────────────────────────
  const { messages, status, sendMessage, setMessages } = useChat()
  const askLoading = status === "streaming" || status === "submitted"
  const askError = status === "error"
  const [askInput, setAskInput] = useState("")

  // ── JD mode ─────────────────────────────────────────────────────────
  const [jdInput, setJdInput] = useState("")
  const [jdAnalysis, setJdAnalysis] = useState<string | null>(null)
  const [jdSubmitted, setJdSubmitted] = useState<string | null>(null)
  const [jdLoading, setJdLoading] = useState(false)
  const [jdError, setJdError] = useState<string | null>(null)
  const [jdTime, setJdTime] = useState<string>("")

  const threadRef = useRef<HTMLDivElement>(null)
  // Keep the thread scrolled to the latest content.
  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, jdAnalysis, askLoading, jdLoading])

  // ── Actions ─────────────────────────────────────────────────────────
  const sendAsk = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || askLoading || trimmed.length > ASK_MAX) return
    sendMessage({ text: trimmed })
    setAskInput("")
  }

  const analyzeJd = async () => {
    const jd = jdInput.trim()
    if (jd.length < JD_MIN || jd.length > JD_MAX || jdLoading) return

    setJdLoading(true)
    setJdError(null)
    setJdAnalysis(null)
    setJdSubmitted(jd)
    setJdTime(timeLabel())

    try {
      const res = await fetch("/api/job-fit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription: jd }),
      })

      if (res.status === 429) {
        const body = await res.json().catch(() => null)
        setJdError(
          body?.error ??
            "Brian's AI is catching its breath — too many job descriptions in a short window. Give it a minute and try again.",
        )
        return
      }

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        setJdError(body?.error ?? "Couldn't analyze that one. Please try again.")
        return
      }

      const data = (await res.json()) as { analysis?: string }
      if (!data.analysis) {
        setJdError("The response came back empty. Please try again.")
        return
      }
      setJdAnalysis(data.analysis)
      setJdInput("")
    } catch {
      setJdError("Network error reaching the analyzer. Please try again.")
    } finally {
      setJdLoading(false)
    }
  }

  const newChat = () => {
    setMessages([])
    setAskInput("")
    setJdInput("")
    setJdAnalysis(null)
    setJdSubmitted(null)
    setJdError(null)
    setMode("ask")
  }

  const askEmpty = messages.length === 0 && !askLoading
  const askChars = askInput.length
  const jdChars = jdInput.length

  return (
    <div className="min-h-[calc(100vh-52px)] grid grid-cols-1 md:grid-cols-[260px_1fr_280px]">
      {/* ════════════ LEFT SIDEBAR (desktop only) ════════════ */}
      <LeftSidebar onNewChat={newChat} />

      {/* ════════════ MAIN CHAT AREA ════════════ */}
      <main className="flex flex-col min-w-0 min-h-[calc(100vh-52px)]">
        {/* ── Mobile title strip ── */}
        <div className="md:hidden px-5 pt-[18px] pb-3 border-b border-term-rule">
          <div className="flex items-center justify-between mb-[6px]">
            <div className="flex items-center gap-[10px]">
              <span className="w-6 h-6 bg-term-accent text-term-bg font-bold text-[12px] grid place-items-center">
                B
              </span>
              <span className="font-sans text-[17px] font-bold text-term-fg tracking-[-0.01em]">
                Brian&rsquo;s AI
              </span>
            </div>
            <span className="font-mono text-[10px] text-term-green inline-flex items-center gap-1">
              <span className="w-[5px] h-[5px] bg-term-green rounded-full" />
              connected
            </span>
          </div>
          <div className="font-mono text-[11px] text-term-fg-muted">
            trained on this site · {MODEL_LABEL}
          </div>
        </div>

        {/* ── Desktop mode tabs + status strip ── */}
        <div className="hidden md:flex items-center px-12 pt-5 border-b border-term-rule">
          <ModeTab
            active={mode === "ask"}
            onClick={() => setMode("ask")}
            glyph="›"
            label="Ask about Brian"
          />
          <ModeTab
            active={mode === "jd"}
            onClick={() => setMode("jd")}
            glyph="▣"
            label="Vet a job description"
          />
          <div className="flex-1" />
          <div className="font-mono text-[11px] text-term-fg-muted flex items-center gap-[14px]">
            <span>
              <span className="text-term-green">●</span> connected
            </span>
            <span>{MODEL_LABEL}</span>
            <span>knowledge: {knowledgeDate}</span>
          </div>
        </div>

        {/* ── Mobile segmented control ── */}
        <div className="md:hidden flex px-5 py-[14px] bg-term-bg-2 border-b border-term-rule">
          <button
            type="button"
            onClick={() => setMode("ask")}
            className={cn(
              "flex-1 px-[10px] py-2 text-center font-mono text-[12px] border border-term-rule border-r-0 transition-colors",
              mode === "ask"
                ? "bg-term-accent text-term-bg font-bold border-term-accent"
                : "text-term-fg-soft",
            )}
          >
            Ask about Brian
          </button>
          <button
            type="button"
            onClick={() => setMode("jd")}
            className={cn(
              "flex-1 px-[10px] py-2 text-center font-mono text-[12px] border border-term-rule transition-colors",
              mode === "jd"
                ? "bg-term-accent text-term-bg font-bold border-term-accent"
                : "text-term-fg-soft",
            )}
          >
            Vet a JD
          </button>
        </div>

        {/* ── Thread ── */}
        <div ref={threadRef} className="flex-1 overflow-y-auto" aria-busy={askLoading || jdLoading}>
          <div className="px-4 py-5 md:px-12 md:py-8 flex flex-col gap-6 md:gap-8 max-w-[900px] w-full md:self-center">
            {mode === "ask" ? (
              <AskThread
                messages={messages}
                empty={askEmpty}
                loading={askLoading}
                error={askError}
                onStarter={sendAsk}
              />
            ) : (
              <JdThread
                submitted={jdSubmitted}
                analysis={jdAnalysis}
                loading={jdLoading}
                error={jdError}
                time={jdTime}
                onSwitchToAsk={(q) => {
                  setMode("ask")
                  sendAsk(q)
                }}
              />
            )}
          </div>
        </div>

        {/* ── Input dock ── */}
        <InputDock
          mode={mode}
          askInput={askInput}
          setAskInput={setAskInput}
          jdInput={jdInput}
          setJdInput={setJdInput}
          askChars={askChars}
          jdChars={jdChars}
          askLoading={askLoading}
          jdLoading={jdLoading}
          onSendAsk={() => sendAsk(askInput)}
          onAnalyzeJd={analyzeJd}
        />
      </main>

      {/* ════════════ RIGHT RAIL (desktop only) ════════════ */}
      <RightRail sources={sources} />
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────
// Mode tab (desktop)
// ──────────────────────────────────────────────────────────────────────
function ModeTab({
  active,
  onClick,
  glyph,
  label,
}: {
  active: boolean
  onClick: () => void
  glyph: string
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-5 py-3 font-mono text-[13px] inline-flex items-center gap-2 cursor-pointer transition-colors",
        active
          ? "text-term-fg font-semibold border-b-2 border-term-accent -mb-px"
          : "text-term-fg-soft hover:text-term-fg",
      )}
    >
      <span className={active ? "text-term-accent" : ""}>{glyph}</span>
      {label}
    </button>
  )
}

// ──────────────────────────────────────────────────────────────────────
// ASK MODE thread
// ──────────────────────────────────────────────────────────────────────
function AskThread({
  messages,
  empty,
  loading,
  error,
  onStarter,
}: {
  messages: UIMessage[]
  empty: boolean
  loading: boolean
  error: boolean
  onStarter: (q: string) => void
}) {
  if (empty) {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <span className="w-[18px] h-[18px] mt-[2px] bg-term-accent text-term-bg font-bold text-[11px] grid place-items-center shrink-0">
            B
          </span>
          <div className="font-sans text-[15px] text-term-fg-soft leading-[1.6]">
            <p className="text-term-fg mb-2">
              Hi — I&rsquo;m Brian&rsquo;s AI. Ask me anything about his background, skills, or
              how he works. I&rsquo;m trained on this site only, and I&rsquo;ll be candid,
              including about gaps.
            </p>
            <p className="text-term-fg-muted text-[13.5px]">Try one of these to start:</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 md:ml-[30px]">
          {STARTER_PROMPTS.map((q) => (
            <Chip key={q} onClick={() => onStarter(q)}>
              {q}
            </Chip>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      {messages.map((m) => {
        const text = textFromMessage(m)
        if (!text) return null
        return m.role === "user" ? (
          <UserBubble key={m.id} text={text} />
        ) : (
          <AssistantBubble key={m.id} text={text} />
        )
      })}

      {loading && <TypingIndicator />}

      {error && (
        <div className="self-stretch px-4 py-3 bg-term-bg-2 border border-term-rule border-l-[3px] border-l-term-accent font-sans text-[14px] text-term-fg-soft">
          Brian&rsquo;s AI hit a snag answering that — it may be rate-limited or briefly
          unavailable. Wait a moment and try again.
        </div>
      )}

      {/* Suggested follow-ups after at least one assistant answer */}
      {!loading && messages.some((m) => m.role === "assistant" && textFromMessage(m)) && (
        <div className="mt-2 pt-6 border-t border-term-rule">
          <div className="font-mono text-[11px] text-term-fg-muted tracking-[0.08em] uppercase mb-3">
            Suggested follow-ups
          </div>
          <div className="flex gap-2 flex-wrap">
            {ASK_FOLLOW_UPS.map((s) => (
              <Chip key={s} onClick={() => onStarter(s)}>
                {s}
              </Chip>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

function UserBubble({ text }: { text: string }) {
  const [timestamp] = useState(() => timeLabel())
  return (
    <div className="flex flex-col gap-[6px] md:gap-2 items-end">
      <div className="flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-term-fg-muted">
        <span>you</span>
        <span>·</span>
        <span>{timestamp}</span>
      </div>
      <div className="max-w-[90%] md:max-w-[720px] bg-term-bg-2 border border-term-rule px-4 py-[14px]">
        <p className="font-sans text-[15px] text-term-fg leading-[1.6] whitespace-pre-wrap break-words">
          {text}
        </p>
      </div>
    </div>
  )
}

function AssistantBubble({ text }: { text: string }) {
  const [timestamp] = useState(() => timeLabel())
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-term-fg-muted">
        <span className="inline-flex items-center gap-[6px]">
          <span className="w-[18px] h-[18px] bg-term-accent text-term-bg font-bold text-[11px] grid place-items-center">
            B
          </span>
          Brian&rsquo;s AI
        </span>
        <span>·</span>
        <span>{timestamp}</span>
      </div>
      <div className="w-full md:max-w-[720px] bg-term-bg-2 border border-term-rule border-l-[3px] border-l-term-accent px-4 py-[14px]">
        <p className="font-sans text-[15px] text-term-fg-soft leading-[1.6] whitespace-pre-wrap break-words">
          {text}
        </p>
      </div>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex items-center gap-[6px] font-mono text-[10px] md:text-[11px] text-term-fg-muted">
        <span className="w-[18px] h-[18px] bg-term-accent text-term-bg font-bold text-[11px] grid place-items-center">
          B
        </span>
        Brian&rsquo;s AI
      </div>
      <div className="bg-term-bg-2 border border-term-rule border-l-[3px] border-l-term-accent px-4 py-[14px]">
        <div className="flex gap-[5px]">
          <span className="w-[6px] h-[6px] bg-term-fg-muted rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-[6px] h-[6px] bg-term-fg-muted rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-[6px] h-[6px] bg-term-fg-muted rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────
// JD MODE thread
// ──────────────────────────────────────────────────────────────────────
function JdThread({
  submitted,
  analysis,
  loading,
  error,
  time,
  onSwitchToAsk,
}: {
  submitted: string | null
  analysis: string | null
  loading: boolean
  error: string | null
  time: string
  onSwitchToAsk: (q: string) => void
}) {
  if (!submitted && !loading && !error) {
    // Empty state for JD mode
    return (
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <span className="w-[18px] h-[18px] mt-[2px] bg-term-accent text-term-bg font-bold text-[11px] grid place-items-center shrink-0">
            B
          </span>
          <div className="font-sans text-[15px] text-term-fg-soft leading-[1.6]">
            <p className="text-term-fg mb-2">
              Paste a job description below and I&rsquo;ll give you an honest fit assessment —
              where Brian aligns, what&rsquo;s worth flagging, and whether it&rsquo;s worth a
              conversation.
            </p>
            <p className="text-term-fg-muted text-[13.5px]">
              Roughly {JD_MIN}–{JD_MAX.toLocaleString()} characters. I won&rsquo;t spin it.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const wordCount = submitted ? submitted.trim().split(/\s+/).length : 0

  return (
    <>
      {submitted && (
        <div className="flex flex-col gap-[6px] md:gap-2 items-end">
          <div className="flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-term-fg-muted">
            <span>you</span>
            <span>·</span>
            <span>{time}</span>
          </div>
          <div className="max-w-[90%] md:max-w-[720px] bg-term-bg-2 border border-term-rule px-4 py-[14px]">
            <div className="font-mono text-[10.5px] md:text-[11px] text-term-fg-muted mb-[10px]">
              <span className="text-term-accent">📋</span> pasted job description · {wordCount}{" "}
              words
            </div>
            <pre className="m-0 font-mono text-[11px] md:text-[12.5px] text-term-fg-soft leading-[1.6] whitespace-pre-wrap break-words">
              {submitted.length > 600 ? submitted.slice(0, 600) + "\n…" : submitted}
            </pre>
          </div>
        </div>
      )}

      {/* Assistant turn */}
      <div className="flex flex-col gap-2 items-start">
        <div className="flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-term-fg-muted">
          <span className="inline-flex items-center gap-[6px]">
            <span className="w-[18px] h-[18px] bg-term-accent text-term-bg font-bold text-[11px] grid place-items-center">
              B
            </span>
            Brian&rsquo;s AI
          </span>
          <span>·</span>
          <span>{time}</span>
        </div>

        {loading && <FitLoading />}

        {error && !loading && (
          <div className="w-full bg-term-bg-2 border border-term-rule border-l-[3px] border-l-term-yellow px-4 py-4 md:px-6">
            <div className="font-mono text-[11px] text-term-yellow tracking-[0.08em] uppercase mb-2">
              ! couldn&rsquo;t complete
            </div>
            <p className="font-sans text-[14px] md:text-[15px] text-term-fg-soft leading-[1.6]">
              {error}
            </p>
          </div>
        )}

        {analysis && !loading && <FitAssessment analysis={analysis} />}
      </div>

      {/* Follow-up chips after an assessment — these switch to ask mode */}
      {analysis && !loading && (
        <div className="mt-2 pt-6 border-t border-term-rule">
          <div className="font-mono text-[11px] text-term-fg-muted tracking-[0.08em] uppercase mb-3">
            Follow up
          </div>
          <div className="flex gap-2 flex-wrap">
            {[
              "What's the scope of his current role?",
              "Show me his work on AI agents",
              "Is he open to remote?",
              "What are his strongest skills?",
            ].map((s) => (
              <Chip key={s} onClick={() => onSwitchToAsk(s)}>
                {s}
              </Chip>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

function FitLoading() {
  return (
    <div className="w-full bg-term-bg-2 border border-term-rule border-l-[3px] border-l-term-accent px-4 py-5 md:px-6">
      <div className="font-mono text-[11px] text-term-fg-muted tracking-[0.08em] uppercase mb-3">
        Reading the JD…
      </div>
      <div className="flex gap-[5px] mb-4">
        <span className="w-[6px] h-[6px] bg-term-fg-muted rounded-full animate-bounce [animation-delay:0ms]" />
        <span className="w-[6px] h-[6px] bg-term-fg-muted rounded-full animate-bounce [animation-delay:150ms]" />
        <span className="w-[6px] h-[6px] bg-term-fg-muted rounded-full animate-bounce [animation-delay:300ms]" />
      </div>
      <div className="h-2 w-2/3 bg-term-bg border border-term-rule mb-3" />
      <div className="space-y-2">
        <div className="h-3 w-full bg-term-bg-3" />
        <div className="h-3 w-5/6 bg-term-bg-3" />
        <div className="h-3 w-4/6 bg-term-bg-3" />
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────
// Shared chip
// ──────────────────────────────────────────────────────────────────────
function Chip({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-sans text-[12.5px] md:text-[13px] px-[12px] py-2 md:px-[14px] bg-term-bg-2 border border-term-rule text-term-fg-soft hover:text-term-fg hover:border-term-accent transition-colors cursor-pointer text-left"
    >
      {children}
    </button>
  )
}

// ──────────────────────────────────────────────────────────────────────
// Input dock (bottom, mode-aware)
// ──────────────────────────────────────────────────────────────────────
function InputDock({
  mode,
  askInput,
  setAskInput,
  jdInput,
  setJdInput,
  askChars,
  jdChars,
  askLoading,
  jdLoading,
  onSendAsk,
  onAnalyzeJd,
}: {
  mode: Mode
  askInput: string
  setAskInput: (v: string) => void
  jdInput: string
  setJdInput: (v: string) => void
  askChars: number
  jdChars: number
  askLoading: boolean
  jdLoading: boolean
  onSendAsk: () => void
  onAnalyzeJd: () => void
}) {
  const isJd = mode === "jd"
  const max = isJd ? JD_MAX : ASK_MAX
  const chars = isJd ? jdChars : askChars
  const loading = isJd ? jdLoading : askLoading
  const overLimit = chars > max
  const jdTooShort = isJd && jdChars > 0 && jdChars < JD_MIN
  const canSend = isJd
    ? jdChars >= JD_MIN && jdChars <= JD_MAX && !jdLoading
    : askChars > 0 && askChars <= ASK_MAX && !askLoading

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (isJd) onAnalyzeJd()
      else onSendAsk()
    }
  }

  return (
    <div className="border-t border-term-rule bg-term-bg-2 md:bg-term-bg px-4 py-[14px] md:px-12 md:py-5 md:pb-8">
      <div className="max-w-[900px] mx-auto bg-term-bg md:bg-term-bg-2 border border-term-rule">
        {/* meta row */}
        <div className="flex items-center justify-between px-3 py-2 md:px-4 md:pt-[14px] md:pb-0 border-b border-term-rule md:border-b-0">
          <div className="flex items-center gap-[10px] font-mono text-[10.5px] md:text-[11px] text-term-fg-muted">
            {isJd && (
              <span className="px-2 py-[3px] bg-term-accent-soft text-term-accent font-semibold">
                JD MODE
              </span>
            )}
            <span className="hidden md:inline">
              {isJd ? "paste a JD for a fit assessment" : "ask anything about Brian"}
            </span>
            <span className="md:hidden">{isJd ? "paste a JD…" : "ask…"}</span>
          </div>
          <span
            className={cn(
              "font-mono text-[10px] md:text-[11px]",
              overLimit ? "text-term-accent" : "text-term-fg-muted",
            )}
          >
            {chars.toLocaleString()} / {max.toLocaleString()}
          </span>
        </div>

        {/* input row */}
        <div className="px-3 py-3 md:px-4 md:py-[14px] flex items-end gap-3">
          <textarea
            value={isJd ? jdInput : askInput}
            onChange={(e) => (isJd ? setJdInput(e.target.value) : setAskInput(e.target.value))}
            onKeyDown={handleKeyDown}
            rows={isJd ? 3 : 1}
            placeholder={
              isJd ? "Paste a job description…" : "What would you like to know about Brian?"
            }
            disabled={loading}
            className="flex-1 resize-none bg-transparent font-sans text-[14px] md:text-[16px] text-term-fg placeholder:text-term-fg-muted focus:outline-none leading-[1.5] disabled:opacity-60 min-h-[24px] max-h-[200px]"
          />
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden md:inline font-mono text-[11px] text-term-fg-muted">
              ⏎ send · ⇧⏎ newline
            </span>
            <button
              type="button"
              onClick={isJd ? onAnalyzeJd : onSendAsk}
              disabled={!canSend}
              className={cn(
                "font-mono text-[12px] md:text-[13px] px-3 py-2 md:px-4 font-bold tracking-[0.04em] transition-opacity",
                canSend
                  ? "bg-term-accent text-term-bg cursor-pointer hover:opacity-90"
                  : "bg-term-accent/40 text-term-bg cursor-not-allowed",
              )}
            >
              <span className="hidden md:inline">{loading ? "…" : "SEND ↵"}</span>
              <span className="md:hidden">{loading ? "…" : "↵"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* footnotes */}
      <div className="max-w-[900px] mx-auto mt-2 md:mt-3 flex flex-col md:flex-row md:justify-between gap-1 font-mono text-[10px] md:text-[11px] text-term-fg-muted text-center md:text-left">
        <span>
          {jdTooShort
            ? `A bit more, please — at least ${JD_MIN} characters.`
            : "Brian's AI can be wrong about niche claims — verify before quoting in an offer."}
        </span>
        <span>
          history clears in 24h · no login ·{" "}
          <span className="text-term-accent">privacy ↗</span>
        </span>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────────
// Left sidebar (desktop only)
// ──────────────────────────────────────────────────────────────────────
function LeftSidebar({ onNewChat }: { onNewChat: () => void }) {
  const recents = [
    { title: "Languages and frameworks", sub: "Ask about Brian · just now", active: true },
    { title: "Staff Eng @ Acme AI infra", sub: "JD vetting · 2 min ago" },
    { title: "Salary band + remote ok?", sub: "Ask about Brian · yesterday" },
    { title: "Most ambitious recent project", sub: "Ask about Brian · last week" },
  ]

  return (
    <aside className="hidden md:flex flex-col bg-term-bg-2 border-r border-term-rule px-4 py-6">
      <button
        type="button"
        onClick={onNewChat}
        className="font-mono text-[13px] px-[14px] py-3 bg-term-accent text-term-bg font-semibold cursor-pointer flex justify-between items-center hover:opacity-90 transition-opacity"
      >
        <span>+ New chat</span>
      </button>

      <div className="mt-7 font-mono text-[11px] text-term-fg-muted tracking-[0.08em] uppercase mb-3">
        Recent
      </div>
      {recents.map((c, i) => (
        <div
          key={i}
          className={cn(
            "px-3 py-[10px] mb-[2px] font-sans text-[13px] border-l-2 cursor-default",
            c.active
              ? "bg-term-bg-3 border-l-term-accent text-term-fg"
              : "border-l-transparent text-term-fg-soft",
          )}
        >
          <div className={cn("leading-[1.3]", c.active ? "font-semibold" : "font-medium")}>
            {c.title}
          </div>
          <div className="font-mono text-[11px] text-term-fg-muted mt-1">{c.sub}</div>
        </div>
      ))}

      <div className="mt-8 pt-4 border-t border-term-rule font-mono text-[11px] text-term-fg-muted leading-[1.7]">
        <div className="mb-2">This AI is trained on this site only.</div>
        <a
          href="https://github.com/brianbest"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-term-fg-soft no-underline hover:text-term-fg"
        >
          · github.com/brianbest
        </a>
        <Link
          href="/blog"
          className="block text-term-fg-soft no-underline hover:text-term-fg"
        >
          · the essays
        </Link>
        <a
          href="/llms-full.txt"
          className="block text-term-accent no-underline hover:text-term-fg mt-[10px]"
        >
          ↓ download llms-full.txt
        </a>
      </div>
    </aside>
  )
}

// ──────────────────────────────────────────────────────────────────────
// Right rail (desktop only)
// ──────────────────────────────────────────────────────────────────────
function RightRail({ sources }: { sources: ChatSource[] }) {
  const railSources = sources.slice(0, 4).map((s) => ({
    slug: s.slug,
    sub: `essay · ${s.date.slice(0, 7)}`,
  }))
  return (
    <aside className="hidden md:block bg-term-bg-2 border-l border-term-rule px-5 py-6 text-[12px]">
      <div className="font-mono text-[11px] text-term-fg-muted tracking-[0.08em] uppercase mb-[14px]">
        About this AI
      </div>
      <p className="font-sans text-[13.5px] text-term-fg-soft leading-[1.55]">
        Trained only on this site, Brian&rsquo;s public résumé, and his blog. It won&rsquo;t
        answer questions outside that scope, and it&rsquo;s instructed to be candid — including
        about gaps.
      </p>

      <div className="mt-6 font-mono text-[11px] text-term-fg-muted tracking-[0.08em] uppercase mb-3">
        Sources it can draw on
      </div>
      {railSources.map((s, i) => (
        <a
          key={s.slug}
          href={`/blog/${s.slug}`}
          className={cn(
            "block py-[10px] no-underline",
            i < railSources.length - 1 && "border-b border-term-rule-soft",
          )}
        >
          <div className="font-mono text-[12px] text-term-accent">↗ {s.slug}</div>
          <div className="font-mono text-[11px] text-term-fg-muted mt-[2px]">{s.sub}</div>
        </a>
      ))}
      {railSources.length === 0 && (
        <div className="font-mono text-[11px] text-term-fg-muted py-[10px]">
          No posts published yet.
        </div>
      )}

      <div className="mt-7 px-[14px] py-[14px] border border-dashed border-term-rule font-mono text-[11px] text-term-fg-muted leading-[1.6]">
        <div className="text-term-fg-soft mb-1"># PRIVACY</div>
        <div>
          No chats are stored after 24h. We do not train on your conversation. The system is
          built to stay on-topic.
        </div>
      </div>
    </aside>
  )
}
