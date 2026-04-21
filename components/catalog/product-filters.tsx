"use client"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, SlidersHorizontal, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {
  brands,
  categories,
  capacities,
  type ProductBrand,
  type ProductCategory,
  type ProductCapacity,
} from "@/lib/products"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DialogTitle } from "@radix-ui/react-dialog"
import type { FilterState } from "@/hooks/use-products"
import { cn } from "@/lib/utils"

interface ProductFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  activeFiltersCount: number
}

/* ─── Toggle indicator (avoids button-inside-button hydration error) ─────── */
function ToggleIndicator({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        "flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border-2 transition-all duration-150",
        active
          ? "border-primary bg-primary dark:border-sky-500 dark:bg-sky-500"
          : "border-border bg-background dark:bg-muted/30",
      )}
      aria-hidden
    >
      {active && (
        <svg
          viewBox="0 0 10 8"
          className="h-2.5 w-2.5 stroke-white"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 4l3 3 5-6" />
        </svg>
      )}
    </span>
  )
}

/* ─── Chip styles ─────────────────────────────────────────────────────────── */
const chipBase =
  "cursor-pointer rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-1"

const chipActive =
  "bg-gradient-to-r from-primary to-sky-500 text-white shadow-[0_4px_12px_rgba(7,156,251,0.25)] dark:from-blue-600 dark:to-blue-500 dark:shadow-[0_4px_12px_rgba(37,99,235,0.3)] -translate-y-px"

const chipInactive =
  "border border-border bg-muted/40 text-foreground hover:bg-primary/8 hover:border-primary/25 hover:text-primary dark:bg-muted/25 dark:hover:bg-primary/12 dark:hover:text-blue-400 dark:hover:border-blue-700/40"

export function ProductFilters({
  filters,
  onFiltersChange,
  activeFiltersCount,
}: ProductFiltersProps) {
  const [brandSearch, setBrandSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleBrandToggle = (brand: ProductBrand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand]
    onFiltersChange({ ...filters, brands: newBrands })
  }

  const handleCategoryToggle = (category: ProductCategory) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category]
    onFiltersChange({ ...filters, categories: newCategories })
  }

  const handleCapacityToggle = (capacity: ProductCapacity) => {
    const newCapacities = filters.capacities.includes(capacity)
      ? filters.capacities.filter((c) => c !== capacity)
      : [...filters.capacities, capacity]
    onFiltersChange({ ...filters, capacities: newCapacities })
  }

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] })
  }

  const handleInverterToggle = () => {
    onFiltersChange({
      ...filters,
      inverter: filters.inverter === null ? true : filters.inverter ? false : null,
    })
  }

  const handleWifiToggle = () => {
    onFiltersChange({
      ...filters,
      wifi: filters.wifi === null ? true : filters.wifi ? false : null,
    })
  }

  const handleClearFilters = () => {
    onFiltersChange({
      brands: [],
      categories: [],
      capacities: [],
      priceRange: [0, 2000],
      inverter: null,
      wifi: null,
    })
    setBrandSearch("")
  }

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(brandSearch.toLowerCase()),
  )

  const filtersContent = (
    <div className="space-y-6 px-1">
      {/* ─── Clear filters ─── */}
      {activeFiltersCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="outline"
            onClick={handleClearFilters}
            className="border-border text-muted-foreground hover:border-destructive/40 hover:bg-destructive/5 hover:text-destructive focus-visible:ring-primary/30 w-full cursor-pointer rounded-xl py-2.5 transition-all duration-200"
          >
            <X className="mr-2 h-4 w-4" />
            Limpiar filtros ({activeFiltersCount})
          </Button>
        </motion.div>
      )}

      {/* ─── Tipo de equipo ─── */}
      <div className="space-y-3">
        <h3 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
          Tipo de Equipo
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const icons: Record<string, string> = {
              split: "❄️",
              cassette: "🌀",
              "piso-techo": "🔲",
              ventana: "🪟",
              portátil: "💨",
            }
            const isActive = filters.categories.includes(category.value)
            return (
              <motion.button
                key={category.value}
                onClick={() => handleCategoryToggle(category.value)}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(chipBase, isActive ? chipActive : chipInactive)}
              >
                <span className="mr-1">{icons[category.value]}</span>
                {category.label}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* ─── Marca ─── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            Marca
          </h3>
          {brandSearch && (
            <span className="text-muted-foreground text-xs">{filteredBrands.length} marcas</span>
          )}
        </div>
        <div className="relative">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2" />
          <Input
            type="text"
            placeholder="Buscar marca..."
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            className="border-border bg-background/60 placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:ring-primary/20 dark:bg-muted/20 rounded-xl py-2 pl-9 text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filteredBrands.map((brand) => {
            const isActive = filters.brands.includes(brand)
            return (
              <motion.button
                key={brand}
                onClick={() => handleBrandToggle(brand)}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(chipBase, isActive ? chipActive : chipInactive)}
              >
                {brand}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* ─── Capacidad BTU ─── */}
      <div className="space-y-3">
        <h3 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
          Capacidad (BTU)
        </h3>
        <div className="flex flex-wrap gap-2">
          {capacities.map((capacity) => {
            const isActive = filters.capacities.includes(capacity.value)
            return (
              <motion.button
                key={capacity.value}
                onClick={() => handleCapacityToggle(capacity.value)}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(chipBase, isActive ? chipActive : chipInactive)}
              >
                {capacity.label}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* ─── Rango de precio ─── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            Rango de Precio
          </h3>
          <motion.span
            key={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="text-primary text-sm font-bold tabular-nums dark:text-sky-400"
          >
            ${filters.priceRange[0]} – ${filters.priceRange[1]}
          </motion.span>
        </div>
        <Slider
          min={0}
          max={2000}
          step={50}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className="py-3"
        />
        <div className="text-muted-foreground/60 flex justify-between text-[10px]">
          <span>$0</span>
          <span>$2,000</span>
        </div>
      </div>

      {/* ─── Características ─── */}
      <div className="space-y-3">
        <h3 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
          Características
        </h3>
        <div className="space-y-2">
          {/* Inverter — div with role="switch" to avoid button-inside-button */}
          <div
            role="switch"
            aria-checked={filters.inverter === true}
            tabIndex={0}
            onClick={handleInverterToggle}
            onKeyDown={(e) => (e.key === " " || e.key === "Enter") && handleInverterToggle()}
            className={cn(
              "focus-visible:ring-primary/40 flex w-full cursor-pointer items-center justify-between rounded-xl border p-3.5 transition-all duration-200 outline-none select-none focus-visible:ring-2",
              filters.inverter === true
                ? "border-primary/35 bg-primary/8 dark:border-sky-700/40 dark:bg-sky-500/10"
                : "border-border bg-muted/25 hover:border-primary/20 hover:bg-primary/5 dark:bg-muted/15 dark:hover:border-sky-700/30 dark:hover:bg-sky-500/8",
            )}
          >
            <Label className="text-foreground pointer-events-none cursor-pointer text-sm font-medium">
              Tecnología Inverter
            </Label>
            <ToggleIndicator active={filters.inverter === true} />
          </div>

          {/* WiFi */}
          <div
            role="switch"
            aria-checked={filters.wifi === true}
            tabIndex={0}
            onClick={handleWifiToggle}
            onKeyDown={(e) => (e.key === " " || e.key === "Enter") && handleWifiToggle()}
            className={cn(
              "focus-visible:ring-primary/40 flex w-full cursor-pointer items-center justify-between rounded-xl border p-3.5 transition-all duration-200 outline-none select-none focus-visible:ring-2",
              filters.wifi === true
                ? "border-primary/35 bg-primary/8 dark:border-sky-700/40 dark:bg-sky-500/10"
                : "border-border bg-muted/25 hover:border-primary/20 hover:bg-primary/5 dark:bg-muted/15 dark:hover:border-sky-700/30 dark:hover:bg-sky-500/8",
            )}
          >
            <Label className="text-foreground pointer-events-none cursor-pointer text-sm font-medium">
              Control WiFi
            </Label>
            <ToggleIndicator active={filters.wifi === true} />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* ─── Desktop ─── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="sticky top-24 hidden lg:block"
      >
        <div className="border-border dark:bg-card/80 dark:border-border rounded-2xl border bg-white/75 p-6 shadow-[var(--elevation-2)] backdrop-blur-xl dark:shadow-none">
          {/* Panel header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 dark:bg-primary/15 flex h-8 w-8 items-center justify-center rounded-lg">
                <SlidersHorizontal className="text-primary h-4 w-4 dark:text-sky-400" />
              </div>
              <h2 className="text-foreground text-sm font-semibold">Filtros</h2>
            </div>
            {activeFiltersCount > 0 && (
              <Badge className="bg-primary/10 text-primary border-0 text-[10px] font-bold dark:bg-sky-500/15 dark:text-sky-400">
                {activeFiltersCount}
              </Badge>
            )}
          </div>

          {/* Divider */}
          <div className="bg-border mb-5 h-px" />

          {filtersContent}
        </div>
      </motion.div>

      {/* ─── Mobile trigger ─── */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="border-border bg-card/70 hover:bg-card hover:border-primary/25 dark:bg-card/80 dark:hover:bg-card w-full cursor-pointer rounded-xl py-6 font-semibold backdrop-blur-lg transition-all lg:hidden"
          >
            <SlidersHorizontal className="text-primary mr-2 h-4 w-4 dark:text-sky-400" />
            Filtros
            {activeFiltersCount > 0 && (
              <Badge className="from-primary ml-2 border-0 bg-gradient-to-r to-sky-500 text-white shadow-[0_0_10px_rgba(7,156,251,0.25)] dark:from-blue-600 dark:to-blue-500">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>

        <SheetContent
          side="bottom"
          className="border-border bg-background/95 dark:bg-card/95 right-[3%] left-[3%] mx-auto h-[85vh] w-[94%] max-w-[480px] overflow-y-auto overscroll-contain scroll-smooth rounded-t-2xl border shadow-[var(--elevation-4)] backdrop-blur-2xl"
        >
          <DialogTitle className="sr-only">Filtros</DialogTitle>
          <SheetHeader className="border-border mb-4 border-b px-2 pb-4">
            <SheetTitle className="text-foreground text-base font-semibold">Filtros</SheetTitle>
          </SheetHeader>
          <div className="px-5 py-4 pb-6">{filtersContent}</div>

          <div className="border-border bg-background/95 dark:bg-card/95 sticky right-0 bottom-0 left-0 border-t px-6 py-4 backdrop-blur-xl">
            <Button
              onClick={() => setIsOpen(false)}
              className="from-primary h-12 w-full cursor-pointer rounded-xl bg-gradient-to-r to-sky-500 font-semibold text-white shadow-[0_6px_20px_rgba(7,156,251,0.2)] transition-all hover:shadow-[0_8px_30px_rgba(7,156,251,0.35)] hover:brightness-105 dark:from-blue-600 dark:to-blue-500 dark:shadow-[0_6px_20px_rgba(37,99,235,0.25)]"
            >
              Aplicar filtros
              {activeFiltersCount > 0 && ` (${activeFiltersCount})`}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
