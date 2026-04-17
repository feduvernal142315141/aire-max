"use client"

import { useEffect, useState } from "react"

import { Toaster } from "@/components/ui/toaster"
import { useAdminProducts } from "@/modules/admin/hooks/use-admin-products"
import type { AdminSection } from "@/modules/admin/types"
import {
  DashboardView,
  InventoryView,
  LoadingView,
  OrdersView,
  PlaceholderView,
} from "@/modules/admin/views"
import { ProductsView } from "@/modules/admin/views/products"

import { AdminShell } from "./admin-shell"

/**
 * Panel de administración — orquestador top-level.
 *
 * Responsabilidades:
 * - Poseer la instancia única de `useAdminProducts` (fuente de verdad del dominio).
 * - Despachar la sección activa a la view correspondiente.
 * - Forwardear al AdminShell las props de topbar (search, onQuickAction).
 *
 * No contiene lógica de dominio ni markup — todo está en views/, hooks/ y components/.
 */
export function AdminPanel() {
  const [activeSection, setActiveSection] = useState<AdminSection>("productos")
  const [isLoading, setIsLoading] = useState(true)

  const admin = useAdminProducts()

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  function renderSection() {
    if (isLoading) return <LoadingView />

    switch (activeSection) {
      case "dashboard":
        return <DashboardView dashboardData={admin.dashboardData} />
      case "productos":
        return <ProductsView admin={admin} />
      case "inventario":
        return (
          <InventoryView
            products={admin.products}
            onAdjustStock={admin.quickAdjustStock}
          />
        )
      case "ordenes":
        return <OrdersView />
      default:
        return <PlaceholderView section={activeSection} />
    }
  }

  return (
    <>
      <AdminShell
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        search={admin.search}
        onSearchChange={admin.setSearch}
        onQuickAction={admin.openCreateDrawer}
      >
        <div className="flex-1 p-4">{renderSection()}</div>
      </AdminShell>
      <Toaster />
    </>
  )
}
