"use client"
import { motion } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"
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

interface ProductFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  activeFiltersCount: number
}

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

  // FiltersContent como JSX compartido — se computa una vez por render y se reusa en desktop + mobile.
  // Evita crear un componente durante render (react-hooks/static-components v7) y mantiene el state
  // compartido sin tener que extraer un componente separado con toda la superficie de props.
  const filtersContent = (
    <div className="space-y-6 px-1">
      {activeFiltersCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="outline"
            onClick={handleClearFilters}
            className="w-full rounded-full border-[rgba(7,156,251,0.2)] bg-white/30 py-2.5 transition-all duration-200 hover:bg-white/50"
          >
            <X className="mr-2 h-4 w-4" />
            Limpiar filtros ({activeFiltersCount})
          </Button>
        </motion.div>
      )}

      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-[#0f172a]">Tipo de Equipo</h3>
        <div className="mb-4 flex flex-wrap gap-2.5">
          {categories.map((category) => {
            const icons: Record<string, string> = {
              split: "❄️",
              cassette: "🌀",
              "piso-techo": "🔲",
              ventana: "🪟",
            }
            return (
              <motion.button
                key={category.value}
                onClick={() => handleCategoryToggle(category.value)}
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  filters.categories.includes(category.value)
                    ? "-translate-y-0.5 bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white shadow-[0_4px_12px_rgba(7,156,251,0.25)]"
                    : "border border-[rgba(7,156,251,0.05)] bg-[rgba(7,156,251,0.08)] text-[#037ecc] hover:bg-[rgba(7,156,251,0.15)]"
                }`}
              >
                <span className="mr-1.5">{icons[category.value]}</span>
                {category.label}
              </motion.button>
            )
          })}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[#0f172a]">Marca</h3>
          {brandSearch && (
            <span className="text-xs text-[#475569]">{filteredBrands.length} marcas coinciden</span>
          )}
        </div>
        <div className="relative">
          <motion.div
            animate={{ rotate: brandSearch ? [0, 10, -10, 0] : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-3 -translate-y-1/2"
          >
            <Search className="h-4 w-4 text-[#037ecc]" />
          </motion.div>
          <Input
            type="text"
            placeholder="Buscar marca..."
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            className="my-3 rounded-xl border-[rgba(7,156,251,0.12)] bg-white/50 py-2.5 pl-10 shadow-[inset_0_2px_4px_rgba(7,156,251,0.05)] focus:border-[#037ecc]"
          />
        </div>
        <div className="mb-4 flex flex-wrap gap-2.5">
          {filteredBrands.map((brand) => (
            <motion.button
              key={brand}
              onClick={() => handleBrandToggle(brand)}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                filters.brands.includes(brand)
                  ? "-translate-y-0.5 bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white shadow-[0_4px_12px_rgba(7,156,251,0.25)]"
                  : "border border-[rgba(7,156,251,0.05)] bg-[rgba(7,156,251,0.08)] text-[#037ecc] hover:bg-[rgba(7,156,251,0.15)]"
              }`}
            >
              {brand}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-[#0f172a]">Capacidad (BTU)</h3>
        <div className="mb-4 flex flex-wrap gap-2.5">
          {capacities.map((capacity) => (
            <motion.button
              key={capacity.value}
              onClick={() => handleCapacityToggle(capacity.value)}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                filters.capacities.includes(capacity.value)
                  ? "-translate-y-0.5 bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white shadow-[0_4px_12px_rgba(7,156,251,0.25)]"
                  : "border border-[rgba(7,156,251,0.05)] bg-[rgba(7,156,251,0.08)] text-[#037ecc] hover:bg-[rgba(7,156,251,0.15)]"
              }`}
            >
              {capacity.label}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-[#0f172a]">Rango de Precio</h3>
        <div className="flex items-center justify-between">
          <motion.span
            key={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-sm font-bold text-transparent"
          >
            ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </motion.span>
        </div>
        <Slider
          min={0}
          max={2000}
          step={50}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className="py-4"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-[#0f172a]">Características</h3>
        <div className="space-y-3">
          <motion.div
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            className={`flex cursor-pointer items-center justify-between rounded-xl p-4 transition-all duration-300 ${
              filters.inverter === true
                ? "border-2 border-[#037ecc]/30 bg-gradient-to-r from-[#037ecc]/10 to-[#00baff]/10"
                : "border border-[rgba(7,156,251,0.08)] bg-white/40"
            }`}
            onClick={handleInverterToggle}
          >
            <Label htmlFor="inverter" className="cursor-pointer text-sm font-medium text-[#0f172a]">
              Tecnología Inverter
            </Label>
            <Checkbox
              id="inverter"
              checked={filters.inverter === true}
              onCheckedChange={handleInverterToggle}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            className={`flex cursor-pointer items-center justify-between rounded-xl p-4 transition-all duration-300 ${
              filters.wifi === true
                ? "border-2 border-[#037ecc]/30 bg-gradient-to-r from-[#037ecc]/10 to-[#00baff]/10"
                : "border border-[rgba(7,156,251,0.08)] bg-white/40"
            }`}
            onClick={handleWifiToggle}
          >
            <Label htmlFor="wifi" className="cursor-pointer text-sm font-medium text-[#0f172a]">
              Control WiFi
            </Label>
            <Checkbox
              id="wifi"
              checked={filters.wifi === true}
              onCheckedChange={handleWifiToggle}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Filters */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="sticky top-24 hidden lg:block"
      >
        <div className="rounded-2xl border border-[rgba(7,156,251,0.08)] bg-white/65 p-6 shadow-[0_10px_40px_rgba(7,156,251,0.05)] backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-[#037ecc]" />
            <h2 className="text-lg font-semibold text-[#0f172a]">Filtros</h2>
          </div>
          {filtersContent}
        </div>
      </motion.div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.96 }}>
            <Button
              variant="outline"
              className="w-full rounded-full border-[rgba(7,156,251,0.08)] bg-white/70 py-6 font-semibold backdrop-blur-lg hover:bg-white/90 lg:hidden"
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filtros
              {activeFiltersCount > 0 && (
                <Badge className="ml-2 border-0 bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white shadow-[0_0_10px_rgba(7,156,251,0.3)]">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </motion.div>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="right-[3%] left-[3%] mx-auto h-[85vh] w-[94%] max-w-[480px] overflow-y-auto overscroll-contain scroll-smooth rounded-t-2xl border border-[rgba(7,156,251,0.08)] bg-white/75 shadow-[0_12px_40px_rgba(7,156,251,0.12),inset_0_10px_40px_rgba(255,255,255,0.4)] backdrop-blur-2xl"
        >
          <DialogTitle className="sr-only">Filtros</DialogTitle>
          <SheetHeader className="mb-4 border-b border-[rgba(7,156,251,0.05)] px-2 pb-4">
            <SheetTitle className="text-lg font-bold text-[#0f172a]">Filtros</SheetTitle>
          </SheetHeader>
          <div className="px-5 py-4 pb-6">{filtersContent}</div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky right-0 bottom-0 left-0 border-t border-[rgba(7,156,251,0.1)] bg-white/95 px-6 py-4 backdrop-blur-xl"
          >
            <Button
              onClick={() => setIsOpen(false)}
              className="mx-0 mb-2 h-14 w-full rounded-full bg-gradient-to-r from-[#037ecc] to-[#00baff] font-semibold text-white shadow-[0_6px_20px_rgba(7,156,251,0.25)] transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(7,156,251,0.35)] hover:brightness-110"
            >
              Aplicar filtros
            </Button>
          </motion.div>
        </SheetContent>
      </Sheet>
    </>
  )
}
