"use client"

import { ChevronDown, Package } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
    openCreateDrawer: _openCreateDrawer,
    openEditDrawer,
    saveProduct,
    removeProduct,
    addTag,
    quickAdjustStock,
  } = admin

  return (
    <div className="space-y-6">
      <Card className="border-border dark:bg-card/70 rounded-2xl border bg-white/70 shadow-lg backdrop-blur dark:shadow-none">
        <CardHeader className="space-y-4">
          {/* Header row */}
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            {/* Title + stats */}
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 dark:bg-primary/15 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                <Package className="text-primary h-[18px] w-[18px] dark:text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-base font-semibold">Catálogo de productos</CardTitle>
                <p className="text-muted-foreground text-xs">
                  {products.length} equipos en total · {filteredProducts.length} mostrando
                </p>
              </div>
            </div>

            {/* Bulk actions — visible only when items are selected */}
            {selectedIds.length > 0 && (
              <div className="flex items-center gap-2">
                <Badge className="bg-primary/10 text-primary border-0 text-xs font-semibold dark:bg-blue-500/15 dark:text-blue-400">
                  {selectedIds.length} seleccionado{selectedIds.length !== 1 ? "s" : ""}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer gap-1.5 rounded-xl"
                    >
                      Acciones
                      <ChevronDown className="text-muted-foreground h-3.5 w-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => applyBulkAction("activate")}
                    >
                      Activar seleccionados
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => applyBulkAction("deactivate")}
                    >
                      Desactivar seleccionados
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => applyBulkAction("up10")}
                    >
                      Subir precio +10%
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => applyBulkAction("down10")}
                    >
                      Bajar precio −10%
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive cursor-pointer"
                      onClick={() => applyBulkAction("delete")}
                    >
                      Eliminar seleccionados
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>

          {/* Filters */}
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

      {/* Drawer — rendered as portal, position in tree doesn't matter */}
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
  )
}
