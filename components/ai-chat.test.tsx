import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { AIChat } from "./ai-chat"

// Mock the useChat hook
const mockSendMessage = vi.fn()

vi.mock("@ai-sdk/react", () => ({
  useChat: vi.fn(() => ({
    messages: [],
    status: "ready",
    sendMessage: mockSendMessage,
  })),
}))

// Import after mock setup
import { useChat } from "@ai-sdk/react"

function createUseChatMock(
  overrides: Partial<ReturnType<typeof useChat>> = {}
): ReturnType<typeof useChat> {
  return {
    id: "test-chat",
    messages: [],
    status: "ready",
    sendMessage: mockSendMessage,
    regenerate: vi.fn(),
    stop: vi.fn(),
    resumeStream: vi.fn(),
    addToolResult: vi.fn(),
    addToolOutput: vi.fn(),
    addToolApprovalResponse: vi.fn(),
    setMessages: vi.fn(),
    clearError: vi.fn(),
    error: undefined,
    ...overrides,
  } as unknown as ReturnType<typeof useChat>
}

// Helper to get the submit button (it only has an icon, no text)
const getSubmitButton = () => screen.getByRole("button", { name: "" })

describe("AIChat", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Reset to default mock
    vi.mocked(useChat).mockReturnValue(createUseChatMock())
  })

  describe("Initial render", () => {
    it("renders the chat header", () => {
      render(<AIChat />)
      expect(screen.getByText("Ask AI About Me")).toBeInTheDocument()
      expect(screen.getByText("Get instant answers about my experience")).toBeInTheDocument()
    })

    it("renders the input field", () => {
      render(<AIChat />)
      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      expect(input).toBeInTheDocument()
    })

    it("renders the submit button", () => {
      render(<AIChat />)
      const button = getSubmitButton()
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute("type", "submit")
    })

    it("shows suggested questions when no messages exist", () => {
      render(<AIChat />)
      expect(screen.getByText("What is your leadership style?")).toBeInTheDocument()
      expect(screen.getByText("Tell me about a challenging project you led")).toBeInTheDocument()
      expect(screen.getByText("What technologies are you most experienced with?")).toBeInTheDocument()
    })

    it("shows intro message when no messages exist", () => {
      render(<AIChat />)
      expect(
        screen.getByText(/I'm an AI assistant that can answer questions about Brian's professional background/)
      ).toBeInTheDocument()
    })
  })

  describe("Input handling", () => {
    it("accepts keyboard input", async () => {
      const user = userEvent.setup()
      render(<AIChat />)

      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      await user.type(input, "Hello world")

      expect(input).toHaveValue("Hello world")
    })

    it("disables submit button when input is empty", () => {
      render(<AIChat />)
      const button = getSubmitButton()
      expect(button).toBeDisabled()
    })

    it("enables submit button when input has text", async () => {
      const user = userEvent.setup()
      render(<AIChat />)

      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      await user.type(input, "Hello")

      const button = getSubmitButton()
      expect(button).not.toBeDisabled()
    })

    it("disables submit button when input is only whitespace", async () => {
      const user = userEvent.setup()
      render(<AIChat />)

      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      await user.type(input, "   ")

      const button = getSubmitButton()
      expect(button).toBeDisabled()
    })

    it("disables input when loading", () => {
      vi.mocked(useChat).mockReturnValue({
        ...createUseChatMock(),
        status: "streaming",
      } as ReturnType<typeof useChat>)

      render(<AIChat />)
      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      expect(input).toBeDisabled()
    })

    it("disables submit button when loading", () => {
      vi.mocked(useChat).mockReturnValue({
        ...createUseChatMock(),
        status: "streaming",
      } as ReturnType<typeof useChat>)

      render(<AIChat />)
      const button = getSubmitButton()
      expect(button).toBeDisabled()
    })

    it("clears input after submitting", async () => {
      const user = userEvent.setup()
      render(<AIChat />)

      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      await user.type(input, "Test message")

      const button = getSubmitButton()
      await user.click(button)

      expect(input).toHaveValue("")
    })
  })

  describe("Form submission", () => {
    it("calls append with user message when form is submitted", async () => {
      const user = userEvent.setup()
      render(<AIChat />)

      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      await user.type(input, "Test question")

      const button = getSubmitButton()
      await user.click(button)

      expect(mockSendMessage).toHaveBeenCalledWith({
        text: "Test question",
      })
    })

    it("submits form when pressing Enter", async () => {
      const user = userEvent.setup()
      render(<AIChat />)

      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      await user.type(input, "Test question{enter}")

      expect(mockSendMessage).toHaveBeenCalledWith({
        text: "Test question",
      })
    })

    it("does not submit when input is empty", async () => {
      const user = userEvent.setup()
      render(<AIChat />)

      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      await user.type(input, "{enter}")

      expect(mockSendMessage).not.toHaveBeenCalled()
    })

    it("does not submit when input is only whitespace", async () => {
      const user = userEvent.setup()
      render(<AIChat />)

      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      await user.type(input, "   {enter}")

      expect(mockSendMessage).not.toHaveBeenCalled()
    })
  })

  describe("Suggested questions", () => {
    it("calls append when clicking a suggested question", async () => {
      const user = userEvent.setup()
      render(<AIChat />)

      const suggestion = screen.getByRole("button", { name: "What is your leadership style?" })
      await user.click(suggestion)

      expect(mockSendMessage).toHaveBeenCalledWith({
        text: "What is your leadership style?",
      })
    })

    it("hides suggestions after clicking one", async () => {
      const user = userEvent.setup()
      const { rerender } = render(<AIChat />)

      const suggestion = screen.getByRole("button", { name: "What is your leadership style?" })
      await user.click(suggestion)

      // Simulate messages being added after append
      vi.mocked(useChat).mockReturnValue({
        ...createUseChatMock(),
        messages: [{ id: "1", role: "user", parts: [{ type: "text", text: "What is your leadership style?" }] }],
      } as ReturnType<typeof useChat>)

      rerender(<AIChat />)

      // Check that the suggestion BUTTON is gone (the text still exists in the message)
      expect(screen.queryByRole("button", { name: "What is your leadership style?" })).not.toBeInTheDocument()
    })
  })

  describe("Messages display", () => {
    it("renders user messages correctly", () => {
      vi.mocked(useChat).mockReturnValue({
        ...createUseChatMock(),
        messages: [
          { id: "1", role: "user", parts: [{ type: "text", text: "Hello, tell me about yourself" }] },
        ],
      } as ReturnType<typeof useChat>)

      render(<AIChat />)
      expect(screen.getByText("Hello, tell me about yourself")).toBeInTheDocument()
    })

    it("renders assistant messages correctly", () => {
      vi.mocked(useChat).mockReturnValue({
        ...createUseChatMock(),
        messages: [
          { id: "1", role: "user", parts: [{ type: "text", text: "Hello" }] },
          { id: "2", role: "assistant", parts: [{ type: "text", text: "Hi! I'm Brian's AI assistant." }] },
        ],
      } as ReturnType<typeof useChat>)

      render(<AIChat />)
      expect(screen.getByText("Hi! I'm Brian's AI assistant.")).toBeInTheDocument()
    })

    it("shows loading indicator when isLoading is true", () => {
      vi.mocked(useChat).mockReturnValue({
        ...createUseChatMock(),
        messages: [{ id: "1", role: "user", parts: [{ type: "text", text: "Hello" }] }],
        status: "streaming",
      } as ReturnType<typeof useChat>)

      render(<AIChat />)
      // Loading indicator has animated bouncing dots
      const loadingDots = document.querySelectorAll(".animate-bounce")
      expect(loadingDots.length).toBe(3)
    })
  })

  describe("Edge cases", () => {
    it("handles sendMessage being undefined", async () => {
      vi.mocked(useChat).mockReturnValue({
        ...createUseChatMock(),
        sendMessage: undefined as unknown as typeof mockSendMessage,
      } as ReturnType<typeof useChat>)

      const user = userEvent.setup()
      render(<AIChat />)

      const suggestion = screen.getByRole("button", { name: "What is your leadership style?" })

      // Should not throw when sendMessage is undefined
      await expect(user.click(suggestion)).resolves.not.toThrow()
    })

    it("handles form submit when append is undefined", async () => {
      vi.mocked(useChat).mockReturnValue({
        ...createUseChatMock(),
        sendMessage: undefined as unknown as typeof mockSendMessage,
      } as ReturnType<typeof useChat>)

      const user = userEvent.setup()
      render(<AIChat />)

      const input = screen.getByPlaceholderText("Ask me anything about my career...")
      await user.type(input, "Test message")

      const button = getSubmitButton()
      // Should not throw when sendMessage is undefined
      await expect(user.click(button)).resolves.not.toThrow()
    })
  })
})
