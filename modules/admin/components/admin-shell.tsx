"use client"

import { useState, type ReactNode } from "react"

import type { AdminSection } from "@/modules/admin/types"

import { AdminSidebar } from "./admin-sidebar"
import { AdminTopbar } from "./admin-topbar"

interface AdminShellProps {
  activeSection: AdminSection
  onSectionChange: (section: AdminSection) => void
  search: string
  onSearchChange: (value: string) => void
  onQuickAction: () => void
  children: ReactNode
}

/**
 * Shell de layout del panel admin.
 *
 * Responsabilidades:
 * - Compone sidebar + topbar + área de contenido.
 * - Maneja internamente el estado `collapsed` del sidebar (puro layout).
 * - Forwardea props de dominio (search, onQuickAction, nav) a los hijos sin decidir nada.
 *
 * No sabe nada de productos, filtros ni hooks de dominio.
 * El `useAdminProducts` sigue siendo la única fuente de verdad del dominio.
 */
export function AdminShell({
  activeSection,
  onSectionChange,
  search,
  onSearchChange,
  onQuickAction,
  children,
}: AdminShellProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f3fbff,_#e8f3ff_40%,_#f8fbff_100%)] text-slate-900">
      <div
        className="grid min-h-screen"
        style={{ gridTemplateColumns: collapsed ? "88px 1fr" : "260px 1fr" }}
      >
        <AdminSidebar
          activeSection={activeSection}
          onSectionChange={onSectionChange}
          collapsed={collapsed}
          onToggleCollapsed={() => setCollapsed((prev) => !prev)}
        />

        <main className="flex min-h-screen flex-col">
          <AdminTopbar
            search={search}
            onSearchChange={onSearchChange}
            onQuickAction={onQuickAction}
          />

          {children}
        </main>
      </div>
    </div>
  )
}
