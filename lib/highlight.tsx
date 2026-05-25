import type React from "react"

/**
 * highlight(src, theme) — hand-written syntax highlighter.
 * Ported verbatim from shared.jsx.
 * Returns an array of React span nodes suitable for rendering inside <pre>.
 *
 * Dark color map: kw #ff7b72, str #a5d6ff, com #7d8590 italic,
 * fn #d2a8ff, num #79c0ff, op #ff7b72, txt #e6edf3
 */
export function highlight(src: string, theme: "dark" | "light" = "light"): React.ReactNode {
  const c =
    theme === "dark"
      ? {
          kw: "#ff7b72",
          str: "#a5d6ff",
          com: "#7d8590",
          fn: "#d2a8ff",
          num: "#79c0ff",
          op: "#ff7b72",
          txt: "#e6edf3",
        }
      : {
          kw: "#cf222e",
          str: "#0a3069",
          com: "#6e7781",
          fn: "#8250df",
          num: "#0550ae",
          op: "#cf222e",
          txt: "#1f2328",
        }

  const tokens: React.ReactNode[] = []
  const re =
    /(#[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(from|import|def|return|if|else|None|True|False|class|for|in|as|with|try|except|raise|lambda|print)\b|\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()|\b(\d+)\b|([{}()\[\]:,=\->]+)/g

  let last = 0
  let m: RegExpExecArray | null
  let key = 0

  while ((m = re.exec(src)) !== null) {
    if (m.index > last) {
      tokens.push(
        <span key={key++} style={{ color: c.txt }}>
          {src.slice(last, m.index)}
        </span>,
      )
    }
    if (m[1]) {
      tokens.push(
        <span key={key++} style={{ color: c.com, fontStyle: "italic" }}>
          {m[1]}
        </span>,
      )
    } else if (m[2]) {
      tokens.push(
        <span key={key++} style={{ color: c.str }}>
          {m[2]}
        </span>,
      )
    } else if (m[3]) {
      tokens.push(
        <span key={key++} style={{ color: c.kw, fontWeight: 600 }}>
          {m[3]}
        </span>,
      )
    } else if (m[4]) {
      tokens.push(
        <span key={key++} style={{ color: c.fn }}>
          {m[4]}
        </span>,
      )
    } else if (m[5]) {
      tokens.push(
        <span key={key++} style={{ color: c.num }}>
          {m[5]}
        </span>,
      )
    } else if (m[6]) {
      tokens.push(
        <span key={key++} style={{ color: c.op }}>
          {m[6]}
        </span>,
      )
    }
    last = re.lastIndex
  }

  if (last < src.length) {
    tokens.push(
      <span key={key++} style={{ color: c.txt }}>
        {src.slice(last)}
      </span>,
    )
  }

  return tokens
}
