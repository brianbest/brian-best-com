import { describe, it, expect } from "vitest"
import { slugify, formatDate, formatTerminalDate, cn } from "./utils"

describe("slugify", () => {
  it("lowercases text", () => {
    expect(slugify("Hello World")).toBe("hello-world")
  })

  it("replaces spaces with hyphens", () => {
    expect(slugify("why a separate harness")).toBe("why-a-separate-harness")
  })

  it("strips non-alphanumerics (except hyphens and spaces)", () => {
    expect(slugify("C++ Tips & Tricks!")).toBe("c-tips-tricks")
  })

  it("collapses multiple hyphens", () => {
    expect(slugify("foo   bar")).toBe("foo-bar")
    expect(slugify("foo---bar")).toBe("foo-bar")
  })

  it("trims leading/trailing whitespace", () => {
    expect(slugify("  hello  ")).toBe("hello")
  })

  it("handles empty string", () => {
    expect(slugify("")).toBe("")
  })
})

describe("formatDate", () => {
  it("formats a date-only string in UTC", () => {
    expect(formatDate("2026-05-20")).toBe("May 20, 2026")
  })

  it("formats a date at year boundary", () => {
    expect(formatDate("2026-01-01")).toBe("January 1, 2026")
  })
})

describe("formatTerminalDate", () => {
  it("formats in lowercase", () => {
    expect(formatTerminalDate("2026-05-20")).toBe("may 20, 2026")
  })

  it("returns the input string for invalid dates", () => {
    expect(formatTerminalDate("not-a-date")).toBe("not-a-date")
  })

  it("does not shift the day in negative-offset timezones (UTC)", () => {
    // 2026-05-20 parsed as UTC midnight; formatted in UTC → "may 20", not "may 19"
    expect(formatTerminalDate("2026-05-20")).toBe("may 20, 2026")
  })
})

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("handles conditional classes", () => {
    expect(cn("base", false && "no", true && "yes")).toBe("base yes")
  })

  it("resolves Tailwind conflicts (last wins)", () => {
    expect(cn("p-4", "p-2")).toBe("p-2")
  })
})
