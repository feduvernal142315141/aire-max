"use client"

import { useState } from "react"

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

export function AdminPanel() {
  const [activeSection, setActiveSection] = useState<AdminSection>("productos")

  const admin = useAdminProducts()

  function renderSection() {
    if (admin.isLoading) return <LoadingView />

    switch (activeSection) {
      case "dashboard":
        return <DashboardView dashboardData={admin.dashboardData} />
      case "productos":
        return <ProductsView admin={admin} />
      case "inventario":
        return <InventoryView products={admin.products} onAdjustStock={admin.quickAdjustStock} />
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
