import { ChatExperience } from "@/components/chat/chat-experience"
import { getPosts } from "@/lib/posts"

export const metadata = {
  title: "Chat with Brian's AI",
  description:
    "Ask Brian's AI about his background, or paste a job description for an honest fit assessment. Trained on this site only.",
}

export default async function ChatPage() {
  // The "knowledge:" date in the chat header tracks the newest published post.
  // Sources in the right rail are derived from actual posts, not hardcoded.
  const posts = await getPosts()
  const knowledgeDate = posts[0]?.date ?? "2026-05-25"
  const sources = posts.slice(0, 4).map((p) => ({ slug: p.slug, date: p.date }))

  return (
    <main className="bg-term-bg text-term-fg">
      <ChatExperience knowledgeDate={knowledgeDate} sources={sources} />
    </main>
  )
}
