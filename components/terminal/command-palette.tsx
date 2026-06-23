"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { track } from "@vercel/analytics"
import { cn } from "@/lib/utils"

// ──────────────────────────────────────────────────────────────────────
// The site's command palette — and a working (toy) shell.
// Open with ⌘K / Ctrl+K, the nav chip, or the blog's fuzzy-find box
// (they dispatch the "open-command-palette" window event).
// Type to fuzzy-find pages/posts/projects; or run commands: try `help`.
// ──────────────────────────────────────────────────────────────────────

export interface PaletteItem {
  label: string
  hint: string
  href: string
  external?: boolean
  keywords?: string
}

interface ScrollbackLine {
  text: string
  kind: "cmd" | "out" | "ok" | "err"
}

const PAGES: PaletteItem[] = [
  { label: "~/index", hint: "home", href: "/" },
  { label: "~/work", hint: "projects", href: "/projects", keywords: "projects work" },
  { label: "~/writing", hint: "blog", href: "/blog", keywords: "blog posts writing" },
  { label: "~/about", hint: "about brian", href: "/about", keywords: "about bio career skills" },
  { label: "./contact", hint: "get in touch", href: "/contact", keywords: "contact email linkedin" },
  { label: "./chat", hint: "chat with brian's AI", href: "/chat", keywords: "chat ai assistant job fit" },
]

const COMMANDS = ["help", "ls", "cd", "cat", "whoami", "clear", "exit", "sudo", "rm", "vim"]

/** Cheap fuzzy score: substring beats subsequence beats nothing. */
function fuzzyScore(query: string, target: string): number {
  const q = query.toLowerCase()
  const t = target.toLowerCase()
  if (!q) return 1
  const idx = t.indexOf(q)
  if (idx !== -1) return 100 - idx
  let qi = 0
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++
  }
  return qi === q.length ? 10 : 0
}

export function CommandPalette({ items }: { items: PaletteItem[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [selected, setSelected] = useState(0)
  const [lines, setLines] = useState<ScrollbackLine[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollbackRef = useRef<HTMLDivElement>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const allItems = useMemo(() => [...PAGES, ...items], [items])

  const print = useCallback((text: string, kind: ScrollbackLine["kind"] = "out") => {
    setLines((prev) => [...prev.slice(-40), { text, kind }])
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    setInput("")
    setSelected(0)
    for (const t of timers.current) clearTimeout(t)
    timers.current = []
  }, [])

  const go = useCallback(
    (item: PaletteItem) => {
      track("palette_navigate", { destination: item.href })
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer")
      } else {
        router.push(item.href)
      }
      close()
    },
    [router, close],
  )

  const later = useCallback((ms: number, fn: () => void) => {
    timers.current.push(setTimeout(fn, ms))
  }, [])

  const runCommand = useCallback(
    (raw: string) => {
      const cmdline = raw.trim()
      const [cmd, ...args] = cmdline.split(/\s+/)
      const arg = args.join(" ")
      print(`$ ${cmdline}`, "cmd")
      track("palette_command", { command: cmd })

      switch (cmd) {
        case "help":
          print("available commands:")
          print("  ls              list site routes")
          print("  cd <route>      navigate (try: cd ~/writing)")
          print("  cat <page>      open a page (try: cat about)")
          print("  whoami          who is this guy")
          print("  clear           clear the screen")
          print("  exit            close this palette")
          print("…or just type to fuzzy-find pages and posts.")
          break
        case "ls":
          print(PAGES.map((p) => p.label.replace(/^(~\/|\.\/)/, "")).join("  "))
          break
        case "whoami":
          print("brian best — principal software developer")
          print("agentic AI & LLM systems · kitchener, ontario", "out")
          print("status: open to the right thing", "ok")
          break
        case "clear":
          setLines([])
          break
        case "exit":
          close()
          break
        case "cd":
        case "cat": {
          if (!arg) {
            print(`${cmd}: missing operand`, "err")
            break
          }
          const target = allItems
            .map((item) => ({ item, score: fuzzyScore(arg, `${item.label} ${item.hint} ${item.keywords ?? ""}`) }))
            .sort((a, b) => b.score - a.score)[0]
          if (target && target.score > 0) {
            print(`opening ${target.item.label} …`, "ok")
            later(350, () => go(target.item))
          } else {
            print(`${cmd}: ${arg}: No such file or directory`, "err")
          }
          break
        }
        case "sudo":
          if (/hire[\s-]?brian/.test(arg)) {
            print("[sudo] password for recruiter: ********")
            later(450, () => print("access granted ✓", "ok"))
            later(900, () => print("opening secure channel to brian …", "ok"))
            later(1400, () => {
              router.push("/contact")
              close()
            })
          } else {
            print("recruiter is not in the sudoers file. this incident will be reported.", "err")
          }
          break
        case "rm":
          print("rm: permission denied — nice try.", "err")
          break
        case "vim":
          print("this site was handcrafted in vim, but you can't run it here.")
          print("(:q! works on everything except this palette — use esc)")
          break
        default:
          print(`${cmd}: command not found — try \`help\``, "err")
      }
      setInput("")
      setSelected(0)
    },
    [allItems, close, go, later, print, router],
  )

  // Results: a runnable command row first (when input looks like one), then fuzzy matches.
  const isCommand = COMMANDS.includes(input.trim().split(/\s+/)[0] ?? "")
  const matches = useMemo(() => {
    if (isCommand) return []
    const pageSet = new Set<PaletteItem>(PAGES)
    return allItems
      .map((item) => ({
        item,
        base: fuzzyScore(input, `${item.label} ${item.hint} ${item.keywords ?? ""}`),
      }))
      .filter(({ base }) => base > 0)
      // Pages get a small boost so they win close calls against content.
      .sort((a, b) => b.base + (pageSet.has(b.item) ? 5 : 0) - (a.base + (pageSet.has(a.item) ? 5 : 0)))
      .slice(0, 8)
      .map(({ item }) => item)
  }, [allItems, input, isCommand])

  const resultCount = isCommand ? 1 : matches.length

  // Global open/close keybindings + event from nav chip / blog search box.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
        track("palette_open", { trigger: "keyboard" })
      }
    }
    const onOpenEvent = () => {
      setOpen(true)
      track("palette_open", { trigger: "click" })
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("open-command-palette", onOpenEvent)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("open-command-palette", onOpenEvent)
    }
  }, [])

  // Focus input + lock body scroll while open.
  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Keep scrollback pinned to the bottom.
  useEffect(() => {
    const el = scrollbackRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  if (!open) return null

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault()
      close()
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelected((s) => Math.min(s + 1, resultCount - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelected((s) => Math.max(s - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (isCommand) {
        runCommand(input)
      } else if (matches[selected]) {
        go(matches[selected])
      } else if (input.trim()) {
        runCommand(input)
      }
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-[2px] flex items-start justify-center px-4 pt-[16vh] overlay-in"
      onClick={close}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="dialog-in w-full max-w-[640px] bg-term-bg-2 border border-term-rule shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-[9px] bg-term-bg-3 border-b border-term-rule font-mono text-[11px] text-term-fg-muted">
          <span className="inline-flex items-center gap-2">
            <span className="w-[7px] h-[7px] bg-term-accent rounded-full inline-block" />
            brian@web:~
          </span>
          <span>esc to close</span>
        </div>

        {/* Scrollback */}
        {lines.length > 0 && (
          <div
            ref={scrollbackRef}
            className="max-h-[200px] overflow-y-auto px-4 py-3 border-b border-term-rule-soft font-mono text-[12.5px] leading-[1.7]"
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={cn(
                  "whitespace-pre-wrap",
                  line.kind === "cmd" && "text-term-fg",
                  line.kind === "out" && "text-term-fg-soft",
                  line.kind === "ok" && "text-term-green",
                  line.kind === "err" && "text-term-accent",
                )}
              >
                {line.text}
              </div>
            ))}
          </div>
        )}

        {/* Input row */}
        <div className="flex items-center gap-[10px] px-4 py-[14px]">
          <span className="font-mono text-[14px] text-term-accent select-none">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setSelected(0)
            }}
            onKeyDown={onInputKeyDown}
            placeholder="type to search, or try `help`"
            spellCheck={false}
            autoComplete="off"
            className="flex-1 bg-transparent font-mono text-[14px] text-term-fg placeholder:text-term-fg-muted focus:outline-none"
          />
        </div>

        {/* Results */}
        <div className="border-t border-term-rule-soft py-1">
          {isCommand ? (
            <button
              type="button"
              onClick={() => runCommand(input)}
              className={cn(
                "w-full flex items-center justify-between gap-4 px-4 py-[9px] font-mono text-[13px] text-left",
                "bg-term-bg-3 text-term-fg",
              )}
            >
              <span>
                <span className="text-term-green mr-2">›</span>
                run: <span className="text-term-fg">{input.trim()}</span>
              </span>
              <span className="text-[11px] text-term-fg-muted">↵</span>
            </button>
          ) : (
            matches.map((item, i) => (
              <button
                key={item.href + item.label}
                type="button"
                onClick={() => go(item)}
                onMouseEnter={() => setSelected(i)}
                className={cn(
                  "w-full flex items-center justify-between gap-4 px-4 py-[9px] font-mono text-[13px] text-left transition-colors",
                  i === selected ? "bg-term-bg-3 text-term-fg" : "text-term-fg-soft",
                )}
              >
                <span className="truncate">
                  <span className={cn("mr-2", i === selected ? "text-term-accent" : "text-term-fg-muted")}>
                    {i === selected ? "›" : " "}
                  </span>
                  {item.label}
                </span>
                <span className="text-[11px] text-term-fg-muted shrink-0">
                  {item.external ? `${item.hint} ↗` : item.hint}
                </span>
              </button>
            ))
          )}
          {!isCommand && matches.length === 0 && (
            <div className="px-4 py-[9px] font-mono text-[12.5px] text-term-fg-muted">
              no matches — <span className="text-term-fg-soft">↵</span> to run as a command
            </div>
          )}
        </div>

        {/* Footer hints */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-term-rule bg-term-bg-3 font-mono text-[10.5px] text-term-fg-muted">
          <span>↑↓ select · ↵ run · esc close</span>
          <span>
            try <span className="text-term-fg-soft">sudo hire-brian</span>
          </span>
        </div>
      </div>
    </div>
  )
}
