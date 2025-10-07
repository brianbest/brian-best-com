"use client"

import { cn } from "@/lib/utils"

interface FilterTab {
  id: string
  label: string
  count?: number
}

interface FilterTabsProps {
  tabs: FilterTab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "font-pixel text-xs px-4 py-2 border-2 transition-all",
            activeTab === tab.id
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-transparent text-foreground border-border hover:border-primary hover:bg-primary/10"
          )}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ml-2 opacity-60">({tab.count})</span>
          )}
        </button>
      ))}
    </div>
  )
}
