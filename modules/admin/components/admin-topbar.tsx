"use client"

import { Bell, Plus, Search, Settings, Snowflake, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AdminTopbarProps {
  search: string
  onSearchChange: (value: string) => void
  onQuickAction: () => void
}

export function AdminTopbar({ search, onSearchChange, onQuickAction }: AdminTopbarProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <div className="space-y-3 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/90 to-cyan-50/80 px-3 py-2 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]">
              <Snowflake className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-700">Control Center</p>
              <p className="text-sm font-semibold text-slate-900">Aire-Max Panel de Administración</p>
            </div>
          </div>

          <Badge className="border-blue-200 bg-blue-100 text-blue-700">
            <Settings className="mr-1 h-3.5 w-3.5" /> Entorno Admin
          </Badge>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar productos, órdenes, clientes..."
              className="pl-10 rounded-xl bg-white/90"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-xl">
              <Bell className="mr-2 h-4 w-4" /> Notificaciones
            </Button>
            <Button
              onClick={onQuickAction}
              className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-[0_0_22px_rgba(37,99,235,0.35)]"
            >
              <Plus className="mr-2 h-4 w-4" /> Quick action
            </Button>
            <Button variant="outline" className="rounded-xl">
              <Users className="mr-2 h-4 w-4" /> Admin
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
