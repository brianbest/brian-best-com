"use client"

import { useChat } from "@ai-sdk/react"
import { useState } from "react"
import { Send, User, Bot, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SUGGESTED_QUESTIONS = [
  "What is your leadership style?",
  "Tell me about a challenging project you led",
  "What technologies are you most experienced with?",
  "What are your career goals?",
  "What's a technical decision you're proud of?",
]

export function AIChat() {
  const { messages, status, sendMessage } = useChat()
  const isLoading = status === "streaming" || status === "submitted"

  const [inputValue, setInputValue] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(true)

  if (messages.length > 0 && showSuggestions) {
    setShowSuggestions(false)
  }

  const handleSuggestionClick = (question: string) => {
    setShowSuggestions(false)
    sendMessage?.({ text: question })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return
    sendMessage?.({ text: inputValue })
    setInputValue("")
  }

  return (
    <div className="flex flex-col h-[600px] max-h-[70vh] bg-persona-black/50 border border-persona-maroon rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-persona-maroon bg-persona-maroon/20">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-persona-red">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bungee text-persona-white text-lg">Ask AI About Me</h3>
          <p className="text-sm text-persona-grey">Get instant answers about my experience</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && showSuggestions && (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-persona-red shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-persona-maroon/30 rounded-lg rounded-tl-none px-4 py-3 max-w-[85%]">
                <p className="text-persona-white">
                  Hi! I&apos;m an AI assistant that can answer questions about Brian&apos;s professional background,
                  skills, and experience. Ask me anything, or try one of these questions to get started:
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 ml-11">
              {SUGGESTED_QUESTIONS.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(question)}
                  className="text-sm px-3 py-2 bg-persona-maroon/20 border border-persona-maroon rounded-full
                           text-persona-grey hover:bg-persona-maroon/40 hover:text-persona-white
                           transition-colors duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => {
          const messageText = (message.parts ?? [])
            .filter((part) => part.type === "text")
            .map((part) => part.text)
            .join("")

          if (!messageText) {
            return null
          }

          return (
          <div
            key={message.id}
            className={cn(
              "flex items-start gap-3",
              message.role === "user" && "flex-row-reverse"
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full shrink-0",
                message.role === "user" ? "bg-persona-grey" : "bg-persona-red"
              )}
            >
              {message.role === "user" ? (
                <User className="w-4 h-4 text-persona-black" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>
            <div
              className={cn(
                "rounded-lg px-4 py-3 max-w-[85%]",
                message.role === "user"
                  ? "bg-persona-red text-white rounded-tr-none"
                  : "bg-persona-maroon/30 text-persona-white rounded-tl-none"
              )}
            >
              <p className="whitespace-pre-wrap">{messageText}</p>
            </div>
          </div>
          )
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-persona-red shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-persona-maroon/30 rounded-lg rounded-tl-none px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-persona-grey rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-persona-grey rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-persona-grey rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Input */}
      <form onSubmit={handleFormSubmit} className="p-4 border-t border-persona-maroon">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about my career..."
            className="flex-1 px-4 py-3 bg-persona-black border border-persona-maroon rounded-lg
                     text-persona-white placeholder:text-persona-grey/50
                     focus:outline-none focus:ring-2 focus:ring-persona-red focus:border-transparent"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="px-4 bg-persona-red hover:bg-persona-maroon text-white"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}
