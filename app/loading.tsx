export default function Loading() {
  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-14 pt-10 md:pt-12 pb-8">
      <div className="font-mono text-[13px] md:text-[15px] text-term-fg-muted">
        <span className="text-term-accent">$</span> loading…
      </div>

      <div className="mt-6 space-y-4">
        {/* Name placeholder */}
        <div className="h-[48px] md:h-[88px] w-[280px] md:w-[420px] bg-term-bg-2 animate-pulse" />

        {/* Tagline placeholder */}
        <div className="h-[20px] w-[320px] bg-term-bg-2 animate-pulse" />

        {/* Intro paragraph */}
        <div className="space-y-2 pt-4">
          <div className="h-[18px] w-full max-w-[640px] bg-term-bg-2 animate-pulse" />
          <div className="h-[18px] w-[480px] bg-term-bg-2 animate-pulse" />
        </div>

        {/* Status block */}
        <div className="mt-8 space-y-2">
          <div className="h-[14px] w-[120px] bg-term-bg-2 animate-pulse" />
          <div className="h-[16px] w-[280px] bg-term-bg-2 animate-pulse" />
          <div className="h-[16px] w-[340px] bg-term-bg-2 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
