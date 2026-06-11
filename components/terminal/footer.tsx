/**
 * TerminalFooter — matches BFooter / BMobileFooter from the prototype.
 * Desktop: left echo + right links in a row.
 * Mobile: stacked (echo on top, links below).
 */
export function TerminalFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 py-6 border-t border-term-rule bg-term-bg-2 font-mono text-[12px] text-term-fg-muted">
      {/* Desktop layout */}
      <div className="hidden md:flex justify-between items-center">
        <div>
          <span className="text-term-accent">$</span> echo &quot;© {year} brian best — handcrafted in vim&quot;
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/brianbest"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-term-fg transition-colors"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/brianbest101"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-term-fg transition-colors"
          >
            linkedin
          </a>
          <a href="/contact" className="hover:text-term-fg transition-colors">
            contact
          </a>
          <a href="/rss.xml" className="hover:text-term-fg transition-colors">
            rss.xml
          </a>
          <a href="/llms-full.txt" className="hover:text-term-fg transition-colors">
            llms-full.txt
          </a>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col gap-[14px]">
        <div className="text-term-fg-soft">
          <span className="text-term-accent">$</span> © {year} brian best
        </div>
        <div className="flex gap-[18px] flex-wrap">
          <a
            href="https://github.com/brianbest"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-term-fg transition-colors"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/brianbest101"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-term-fg transition-colors"
          >
            linkedin
          </a>
          <a href="/contact" className="hover:text-term-fg transition-colors">
            contact
          </a>
          <a href="/rss.xml" className="hover:text-term-fg transition-colors">
            rss
          </a>
          <a href="/llms-full.txt" className="hover:text-term-fg transition-colors">
            llms.txt
          </a>
        </div>
      </div>
    </footer>
  )
}
