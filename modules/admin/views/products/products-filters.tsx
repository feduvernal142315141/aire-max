"use client"

import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { tupleToRange } from "@/lib/range"
import { formatCurrency } from "@/modules/admin/lib/admin-formatters"
import { CATEGORY_OPTIONS, PRICE_RANGE_MAX } from "@/modules/admin/lib/admin-constants"
import type { ProductFilters } from "@/modules/admin/types"
import type {
  Product,
  ProductBrand,
  ProductCapacity,
  ProductCategory,
  ProductStatus,
} from "@/types"

export interface ProductsFiltersProps {
  filters: ProductFilters
  setFilters: (fn: (prev: ProductFilters) => ProductFilters) => void
  search: string
  setSearch: (s: string) => void
  brands: ProductBrand[]
  capacities: ProductCapacity[]
  products: Product[]
  toggleFilterArray: <K extends "brands" | "categories" | "capacities">(
    key: K,
    value: ProductFilters[K][number],
  ) => void
}

/* ─── Shared chip styles ─────────────────────────────────────────────────── */
const chipBase =
  "cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-1"

const chipActive =
  "bg-gradient-to-r from-primary to-sky-500 text-white shadow-[0_2px_8px_rgba(7,156,251,0.25)] dark:from-blue-600 dark:to-blue-500 dark:shadow-[0_2px_8px_rgba(37,99,235,0.3)]"

const chipInactive =
  "border border-border bg-muted/40 text-foreground hover:border-primary/30 hover:bg-primary/8 hover:text-primary dark:bg-muted/20 dark:hover:bg-primary/12 dark:hover:text-blue-400"

export function ProductsFilters({
  filters,
  setFilters,
  search,
  setSearch,
  brands,
  capacities,
  products,
  toggleFilterArray,
}: ProductsFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {/* ─── Búsqueda ─── */}
        <div className="space-y-2 xl:col-span-2">
          <Label className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            Búsqueda
          </Label>
          <div className="relative">
            <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              list="admin-search-suggestions"
              placeholder="Nombre, marca, BTU..."
              className="focus-visible:ring-primary/30 rounded-xl pl-9 text-sm"
            />
          </div>
          <datalist id="admin-search-suggestions">
            {products.map((p) => (
              <option
                key={p.id}
                value={`${p.brand} ${p.capacity} ${p.category} ${p.inverter ? "inverter" : ""}`}
              />
            ))}
          </datalist>
        </div>

        {/* ─── Marca ─── */}
        <div className="space-y-2">
          <Label className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            Marca
          </Label>
          <div className="border-border bg-muted/20 dark:bg-muted/10 flex flex-wrap gap-1.5 rounded-xl border p-2.5">
            {brands.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => toggleFilterArray("brands", brand)}
                className={cn(chipBase, filters.brands.includes(brand) ? chipActive : chipInactive)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Tipo ─── */}
        <div className="space-y-2">
          <Label className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            Tipo
          </Label>
          <div className="border-border bg-muted/20 dark:bg-muted/10 flex flex-wrap gap-1.5 rounded-xl border p-2.5">
            {CATEGORY_OPTIONS.map((category: ProductCategory) => (
              <button
                key={category}
                type="button"
                onClick={() => toggleFilterArray("categories", category)}
                className={cn(
                  chipBase,
                  filters.categories.includes(category) ? chipActive : chipInactive,
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Estado ─── */}
        <div className="space-y-2">
          <Label className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            Estado
          </Label>
          <Select
            value={filters.status}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, status: value as ProductStatus | "all" }))
            }
          >
            <SelectTrigger className="focus-visible:ring-primary/30 cursor-pointer rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="cursor-pointer" value="all">
                Todos
              </SelectItem>
              <SelectItem className="cursor-pointer" value="active">
                Activos
              </SelectItem>
              <SelectItem className="cursor-pointer" value="inactive">
                Inactivos
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* ─── BTU ─── */}
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
          Capacidad (BTU)
        </Label>
        <div className="border-border bg-muted/20 dark:bg-muted/10 flex flex-wrap gap-1.5 rounded-xl border p-2.5">
          {capacities.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => toggleFilterArray("capacities", value)}
              className={cn(
                chipBase,
                filters.capacities.includes(value) ? chipActive : chipInactive,
              )}
            >
              {parseInt(value).toLocaleString("es-MX")}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Precio ─── */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            Precio
          </Label>
          <span className="text-primary text-xs font-bold tabular-nums dark:text-blue-400">
            {formatCurrency(filters.priceRange.min)} – {formatCurrency(filters.priceRange.max)}
          </span>
        </div>
        <Slider
          min={0}
          max={PRICE_RANGE_MAX}
          step={50}
          value={[filters.priceRange.min, filters.priceRange.max]}
          onValueChange={(values) =>
            setFilters((prev) => ({ ...prev, priceRange: tupleToRange(values) }))
          }
          className="py-2"
        />
        <div className="text-muted-foreground/60 flex justify-between text-[10px]">
          <span>$0</span>
          <span>{formatCurrency(PRICE_RANGE_MAX)}</span>
        </div>
      </div>
    </div>
  )
}
