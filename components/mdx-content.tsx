import { MDXRemote } from "next-mdx-remote/rsc"
import Image from "next/image"
import Link from "next/link"
import { CodeBlock } from "@/components/terminal/code-block"
import { Callout } from "@/components/terminal/callout"
import { Mermaid } from "@/components/terminal/mermaid"
import { slugify } from "@/lib/utils"

/**
 * extractCodeProps — safely extract the raw code string and language from a
 * MDX <pre> element's children (a <code> element).
 * Returns { code, lang } or null if extraction fails.
 *
 * MDXRemote passes pre's children as a React element with:
 *   props.children        → the <code> React element
 *   props.children.props.children → the raw code string
 *   props.children.props.className → e.g. "language-python"
 */
function extractCodeProps(
  props: any,
): { code: string; lang: string | undefined } | null {
  try {
    const codeEl = props?.children
    if (!codeEl || typeof codeEl !== "object") return null

    const rawCode = codeEl.props?.children
    if (typeof rawCode !== "string") return null

    const className: string | undefined = codeEl.props?.className
    const lang = className?.replace(/^language-/, "") || undefined

    return { code: rawCode.replace(/\n$/, ""), lang }
  } catch {
    return null
  }
}

/**
 * getHeadingText — extract a plain-string version of heading children
 * so we can slugify it for the anchor id.
 * Handles string children and nested React elements with a .props.children string.
 */
function getHeadingText(children: any): string {
  if (typeof children === "string") return children
  if (Array.isArray(children)) {
    return children
      .map((c) => (typeof c === "string" ? c : c?.props?.children ?? ""))
      .join("")
  }
  if (typeof children === "object" && children !== null) {
    return getHeadingText(children.props?.children ?? "")
  }
  return ""
}

const components = {
  // ------------------------------------------------------------------
  // Headings — accent ## prefix, slugified id for TOC anchor alignment
  // ------------------------------------------------------------------
  h1: (props: any) => {
    const text = getHeadingText(props.children)
    const id = slugify(text)
    return (
      <h1
        id={id}
        className="font-sans text-[32px] md:text-[40px] font-extrabold text-term-fg mt-12 mb-4 tracking-[-0.03em] leading-[1.05] scroll-mt-24"
        {...props}
      />
    )
  },

  h2: (props: any) => {
    const text = getHeadingText(props.children)
    const id = slugify(text)
    return (
      <h2
        id={id}
        className="font-sans text-[24px] md:text-[32px] font-bold text-term-fg mt-12 mb-4 tracking-[-0.02em] leading-[1.15] scroll-mt-24 flex items-baseline gap-3"
      >
        <span className="font-mono text-[16px] md:text-[20px] font-semibold text-term-accent shrink-0">
          ##
        </span>
        <span>{props.children}</span>
      </h2>
    )
  },

  h3: (props: any) => {
    const text = getHeadingText(props.children)
    const id = slugify(text)
    return (
      <h3
        id={id}
        className="font-sans text-[20px] md:text-[24px] font-semibold text-term-fg mt-8 mb-3 tracking-[-0.015em] leading-[1.2] scroll-mt-24 flex items-baseline gap-2"
      >
        <span className="font-mono text-[13px] md:text-[15px] font-semibold text-term-accent shrink-0">
          ###
        </span>
        <span>{props.children}</span>
      </h3>
    )
  },

  h4: (props: any) => (
    <h4
      className="font-sans text-[18px] font-semibold text-term-fg mt-6 mb-2 tracking-[-0.01em] scroll-mt-24"
      {...props}
    />
  ),

  // ------------------------------------------------------------------
  // Paragraphs
  // ------------------------------------------------------------------
  p: (props: any) => (
    <p
      className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-term-fg-soft my-4"
      {...props}
    />
  ),

  // ------------------------------------------------------------------
  // Inline code
  // ------------------------------------------------------------------
  code: (props: any) => (
    <code
      className="font-mono text-[14px] md:text-[15px] bg-term-bg-2 border border-term-rule text-term-fg px-1.5 py-0.5"
      {...props}
    />
  ),

  // ------------------------------------------------------------------
  // Fenced code blocks — extract code + lang from pre>code children.
  // Special case: language "mermaid" → <Mermaid chart={code} />.
  // Falls back to a styled <pre> if extraction fails.
  // ------------------------------------------------------------------
  pre: (props: any) => {
    const extracted = extractCodeProps(props)

    if (!extracted) {
      // Fallback: plain styled pre (inline code tag is swapped above, so this
      // path only triggers if children isn't a <code> element)
      return (
        <pre className="my-6 bg-term-bg-2 border border-term-rule font-mono text-[13px] p-[18px] overflow-x-auto leading-[1.65] text-term-fg-soft">
          {props.children}
        </pre>
      )
    }

    const { code, lang } = extracted

    // Mermaid diagrams
    if (lang === "mermaid") {
      return (
        <figure className="my-8">
          <Mermaid chart={code} />
        </figure>
      )
    }

    // Shell/console snippets read better without a line gutter (like the
    // prototype's `$ tree` block, accent dot); runnable languages get gutter
    // line numbers + a green status dot. Everything gets a footer meta line.
    const shellLangs = ["bash", "sh", "shell", "zsh", "console", "text", "diff"]
    const isShell = !lang || shellLangs.includes(lang)
    const lineCount = code.split("\n").length
    const showLineNumbers = !isShell && lineCount > 1
    const footerMeta = `${lang ?? "text"} · ${lineCount} line${lineCount === 1 ? "" : "s"} · ${code.length} chars`

    return (
      <CodeBlock
        code={code}
        title={lang || undefined}
        lang={lang}
        showLineNumbers={showLineNumbers}
        footerMeta={footerMeta}
        dotColor={isShell ? "#ef4444" : "#7dd3a8"}
      />
    )
  },

  // ------------------------------------------------------------------
  // Blockquote — wrap in Callout
  // ------------------------------------------------------------------
  blockquote: (props: any) => (
    <Callout>{props.children}</Callout>
  ),

  // ------------------------------------------------------------------
  // Links
  // ------------------------------------------------------------------
  a: (props: any) => {
    const { href = "#", ...rest } = props
    const isExternal = href.startsWith("http") || href.startsWith("//")
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-term-accent hover:underline"
          {...rest}
        />
      )
    }
    return <Link href={href} className="text-term-accent hover:underline" {...rest} />
  },

  // ------------------------------------------------------------------
  // Lists
  // ------------------------------------------------------------------
  ul: (props: any) => (
    <ul
      className="my-4 pl-0 list-none space-y-1 font-sans text-[16px] md:text-[17px] leading-[1.7] text-term-fg-soft"
      {...props}
    />
  ),

  ol: (props: any) => (
    <ol
      className="my-4 pl-0 list-none space-y-1 font-sans text-[16px] md:text-[17px] leading-[1.7] text-term-fg-soft"
      {...props}
    />
  ),

  li: ({ children, ...rest }: any) => (
    <li className="flex gap-2 items-start" {...rest}>
      <span className="font-mono text-term-accent shrink-0 mt-[2px] select-none">—</span>
      <span>{children}</span>
    </li>
  ),

  // ------------------------------------------------------------------
  // Images
  // ------------------------------------------------------------------
  img: (props: any) => (
    <div className="my-8 border border-term-rule overflow-hidden">
      <Image
        {...props}
        width={props.width ?? 1200}
        height={props.height ?? 630}
        className="object-cover w-full"
        alt={props.alt || ""}
      />
    </div>
  ),

  // ------------------------------------------------------------------
  // Figure / figcaption
  // ------------------------------------------------------------------
  figure: (props: any) => (
    <figure className="my-8" {...props} />
  ),

  figcaption: (props: any) => (
    <figcaption
      className="mt-3 font-mono text-[11px] text-term-fg-muted text-center"
      {...props}
    />
  ),

  // ------------------------------------------------------------------
  // Horizontal rule
  // ------------------------------------------------------------------
  hr: () => <hr className="my-10 border-t border-term-rule" />,

  // ------------------------------------------------------------------
  // Strong / em
  // ------------------------------------------------------------------
  strong: (props: any) => (
    <strong className="font-semibold text-term-fg" {...props} />
  ),

  em: (props: any) => (
    <em className="italic text-term-fg-soft" {...props} />
  ),

  // ------------------------------------------------------------------
  // Table
  // ------------------------------------------------------------------
  table: (props: any) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full font-mono text-[13px] border-collapse border border-term-rule text-term-fg-soft"
        {...props}
      />
    </div>
  ),

  th: (props: any) => (
    <th
      className="px-4 py-2 bg-term-bg-3 border border-term-rule text-term-fg font-semibold text-left"
      {...props}
    />
  ),

  td: (props: any) => (
    <td
      className="px-4 py-2 border border-term-rule"
      {...props}
    />
  ),
}

export function MDXContent({ content }: { content: string }) {
  return <MDXRemote source={content} components={components} />
}
