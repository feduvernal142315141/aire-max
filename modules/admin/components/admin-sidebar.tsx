"use client"

import { ChevronLeft, ChevronRight, Circle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { navItems } from "@/modules/admin/lib/admin-constants"
import type { AdminSection } from "@/modules/admin/types"

interface AdminSidebarProps {
  activeSection: AdminSection
  onSectionChange: (section: AdminSection) => void
  collapsed: boolean
  onToggleCollapsed: () => void
}

export function AdminSidebar({
  activeSection,
  onSectionChange,
  collapsed,
  onToggleCollapsed,
}: AdminSidebarProps) {
  return (
    <aside className="border-border dark:bg-card/80 border-r bg-white/60 backdrop-blur-xl">
      <div className="flex h-full flex-col">
        {/* Collapse toggle */}
        <div className="border-border flex items-center justify-end border-b px-3 py-3">
          {!collapsed && (
            <p className="text-muted-foreground flex-1 pl-1 text-xs font-semibold tracking-widest uppercase">
              Menú
            </p>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground hover:bg-muted/60 h-7 w-7 rounded-lg"
            onClick={onToggleCollapsed}
          >
            {collapsed ? (
              <ChevronRight className="h-3.5 w-3.5" />
            ) : (
              <ChevronLeft className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 p-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                title={collapsed ? item.label : undefined}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-150 ${
                  active
                    ? "bg-primary text-white shadow-[0_4px_14px_rgba(7,156,251,0.35)] dark:bg-sky-500 dark:shadow-[0_4px_14px_rgba(56,189,248,0.25)]"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground dark:hover:bg-muted/40"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            )
          })}
        </nav>

        {/* Status pill */}
        {!collapsed && (
          <div className="px-3 pb-4">
            <div className="border-border bg-muted/30 dark:bg-muted/20 flex items-center gap-2 rounded-xl border px-3 py-2.5">
              <Circle className="h-2 w-2 shrink-0 fill-emerald-500 text-emerald-500" />
              <span className="text-muted-foreground text-xs">Conectado · Supabase</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
