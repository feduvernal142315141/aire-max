"use client"

import { Bell, Plus, Search, Snowflake } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AdminTopbarProps {
  search: string
  onSearchChange: (value: string) => void
  onQuickAction: () => void
}

export function AdminTopbar({ search, onSearchChange, onQuickAction }: AdminTopbarProps) {
  return (
    <header className="border-border dark:bg-card/90 sticky top-0 z-10 border-b bg-white/80 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        {/* Brand identity */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="from-primary flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br to-sky-600 text-white shadow-[0_4px_14px_rgba(7,156,251,0.35)]">
            <Snowflake className="h-4.5 w-4.5" />
          </div>
          <div className="hidden sm:block">
            <p className="text-foreground text-sm leading-tight font-semibold">Aire-Max</p>
            <p className="text-muted-foreground text-[10px] leading-tight font-medium tracking-widest uppercase">
              Panel Admin
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-lg flex-1">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar productos, categorías..."
            className="bg-background border-border focus-visible:ring-primary/30 rounded-xl pl-10 text-sm"
          />
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:bg-muted/60 hover:text-foreground relative cursor-pointer rounded-xl"
          >
            <Bell className="h-4.5 w-4.5" />
            <span className="bg-primary absolute top-2 right-2 h-1.5 w-1.5 rounded-full" />
          </Button>

          <Button
            onClick={onQuickAction}
            size="sm"
            className="from-primary cursor-pointer rounded-xl bg-gradient-to-r to-sky-500 text-white shadow-[0_4px_14px_rgba(7,156,251,0.3)] transition-all duration-200 hover:shadow-[0_6px_20px_rgba(7,156,251,0.4)] hover:brightness-105 dark:from-blue-600 dark:to-blue-500 dark:shadow-[0_4px_14px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]"
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Nuevo producto
          </Button>
        </div>
      </div>
    </header>
  )
}
