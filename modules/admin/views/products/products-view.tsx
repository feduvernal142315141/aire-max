"use client"

import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { UseAdminProductsResult } from "@/modules/admin/hooks/use-admin-products"

import { ProductDrawer } from "./product-drawer"
import { ProductsFilters } from "./products-filters"
import { ProductsTable } from "./products-table"

interface ProductsViewProps {
  admin: UseAdminProductsResult
}

export function ProductsView({ admin }: ProductsViewProps) {
  const {
    products,
    filteredProducts,
    filters,
    setFilters,
    search,
    setSearch,
    selectedIds,
    brands,
    capacities,
    drawerOpen,
    setDrawerOpen,
    editingId,
    setEditingId,
    draft,
    setDraft,
    tagInput,
    setTagInput,
    toggleFilterArray,
    toggleSelect,
    toggleAllVisible,
    applyBulkAction,
    updateProductField,
    openCreateDrawer,
    openEditDrawer,
    saveProduct,
    removeProduct,
    addTag,
    quickAdjustStock,
  } = admin

  return (
    <div className="space-y-6">
      <Card className="rounded-2xl border border-white/20 backdrop-blur bg-white/70 shadow-lg">
        <CardHeader className="space-y-4">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <CardTitle className="text-xl">Productos</CardTitle>
              <CardDescription>DataGrid premium con edición inline y acciones masivas.</CardDescription>
            </div>

            <div className="flex flex-wrap gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-xl">
                    Acciones masivas ({selectedIds.length})
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => applyBulkAction("activate")}>Activar</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyBulkAction("deactivate")}>
                    Desactivar
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyBulkAction("up10")}>
                    Subir precio +10%
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyBulkAction("down10")}>
                    Bajar precio -10%
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => applyBulkAction("delete")}
                    className="text-red-600"
                  >
                    Eliminar
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                onClick={openCreateDrawer}
                className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-[0_0_22px_rgba(37,99,235,0.35)]"
              >
                <Plus className="mr-2 h-4 w-4" /> Nuevo producto
              </Button>

              <ProductDrawer
                open={drawerOpen}
                onOpenChange={setDrawerOpen}
                editingId={editingId}
                draft={draft}
                setDraft={setDraft}
                tagInput={tagInput}
                setTagInput={setTagInput}
                onAddTag={addTag}
                onSave={saveProduct}
                brands={brands}
                capacities={capacities}
              />
            </div>
          </div>

          <ProductsFilters
            filters={filters}
            setFilters={setFilters}
            search={search}
            setSearch={setSearch}
            brands={brands}
            capacities={capacities}
            products={products}
            toggleFilterArray={toggleFilterArray}
          />
        </CardHeader>

        <CardContent>
          <ProductsTable
            products={filteredProducts}
            selectedIds={selectedIds}
            onToggleSelect={toggleSelect}
            onToggleAllVisible={toggleAllVisible}
            onUpdateField={updateProductField}
            onQuickAdjustStock={quickAdjustStock}
            onEdit={openEditDrawer}
            onRemove={removeProduct}
            onEditingIdChange={setEditingId}
          />
        </CardContent>
      </Card>
    </div>
  )
}
