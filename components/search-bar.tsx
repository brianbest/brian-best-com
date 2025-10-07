"use client"

import { Search, X } from "lucide-react"
import { PixelInput } from "./pixel-input"
import { useState, useEffect } from "react"

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function SearchBar({ onSearch, placeholder = "Search..." }: SearchBarProps) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch(query)
    }, 300)

    return () => clearTimeout(debounce)
  }, [query, onSearch])

  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <PixelInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="pl-12 pr-12"
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
