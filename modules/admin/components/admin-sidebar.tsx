"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

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
    <aside className="border-r border-white/40 bg-white/65 shadow-[inset_-1px_0_0_rgba(255,255,255,0.65)] backdrop-blur-xl">
      <div className="flex h-full flex-col p-4">
        <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/40 bg-white/70 px-3 py-2 shadow-sm">
          {!collapsed && (
            <div>
              <p className="font-semibold">Aire-Max Admin</p>
              <p className="text-xs text-slate-500">Demo tenant: Matriz CDMX</p>
            </div>
          )}
          <Button variant="ghost" size="icon" onClick={onToggleCollapsed}>
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-[0_0_24px_rgba(37,99,235,0.35)]"
                    : "hover:bg-white/80"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            )
          })}
        </nav>

        <div className="mt-auto rounded-2xl border border-blue-100 bg-white/80 p-3 text-xs text-slate-600">
          {!collapsed ? "Mock mode: sin integración API" : "Mock"}
        </div>
      </div>
    </aside>
  )
}
