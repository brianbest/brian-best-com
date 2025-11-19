import Link from "next/link"

const NAME = "Brian Best"
const TITLE = "Senior Software Developer"
const SUMMARY =
  "I build resilient software with a craftsman's care, blending enterprise experience with curiosity for what's next. " +
  "Let's connect if you want someone who can turn complex systems into something people love to use."

export default function Home() {
  return (
    <main className="retro-main">
      <article className="profile-card" aria-labelledby="brian-best">
        <p className="eyebrow">Hello!</p>
        <h1 id="brian-best">{NAME}</h1>
        <p className="title">{TITLE}</p>
        <p className="summary">{SUMMARY}</p>
        <p className="summary">You can always find the latest snapshot of my work and impact on LinkedIn.</p>
        <p>
          <Link className="retro-link" href="https://www.linkedin.com/in/brianbest101/" target="_blank" rel="noreferrer">
            Visit my LinkedIn profile
          </Link>
        </p>
      </article>
    </main>
  )
}
