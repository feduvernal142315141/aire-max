"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const GRID_COLS = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
} as const

interface ResponsiveGridProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  columns?: keyof typeof GRID_COLS
  mobileCardWidth?: string
  className?: string
  gap?: string
}

export function ResponsiveGrid<T>({
  items,
  renderItem,
  columns = 3,
  mobileCardWidth = "85vw",
  className,
  gap = "gap-8",
}: ResponsiveGridProps<T>) {
  return (
    <>
      {/* Desktop: Grid layout */}
      <div className={cn("hidden md:grid", GRID_COLS[columns], gap, className)}>
        {items.map((item, index) => renderItem(item, index))}
      </div>

      {/* Mobile: Horizontal scroll with snap */}
      <div className="scrollbar-hide -mx-6 snap-x snap-mandatory overflow-x-auto px-6 md:hidden">
        <div className={cn("flex pb-4", gap)}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center"
              style={{ width: mobileCardWidth }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
