import { ChatExperience } from "@/components/chat/chat-experience"
import { getPosts } from "@/lib/posts"

export const metadata = {
  title: "Chat with Brian's AI | Brian Best",
  description:
    "Ask Brian's AI about his background, or paste a job description for an honest fit assessment. Trained on this site only.",
}

export default async function ChatPage() {
  // The "knowledge:" date in the chat header tracks the newest published post.
  const posts = await getPosts()
  const knowledgeDate = posts[0]?.date ?? "2026-05-25"

  return (
    <main className="bg-term-bg text-term-fg">
      <ChatExperience knowledgeDate={knowledgeDate} />
    </main>
  )
}
