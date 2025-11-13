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

export interface FilterState {
  brands: ProductBrand[]
  categories: ProductCategory[]
  capacities: ProductCapacity[]
  priceRange: [number, number]
  inverter: boolean | null
  wifi: boolean | null
}

interface ProductFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  activeFiltersCount: number
}

export function ProductFilters({ filters, onFiltersChange, activeFiltersCount }: ProductFiltersProps) {
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
    onFiltersChange({ ...filters, inverter: filters.inverter === null ? true : filters.inverter ? false : null })
  }

  const handleWifiToggle = () => {
    onFiltersChange({ ...filters, wifi: filters.wifi === null ? true : filters.wifi ? false : null })
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

  const filteredBrands = brands.filter((brand) => brand.toLowerCase().includes(brandSearch.toLowerCase()))

  const FiltersContent = () => (
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
            className="w-full bg-white/30 border-[rgba(7,156,251,0.2)] hover:bg-white/50 transition-all duration-200 rounded-full py-2.5"
          >
            <X className="w-4 h-4 mr-2" />
            Limpiar filtros ({activeFiltersCount})
          </Button>
        </motion.div>
      )}

      <div className="space-y-3">
        <h3 className="font-semibold text-sm text-[#0f172a]">Tipo de Equipo</h3>
        <div className="flex flex-wrap gap-2.5 mb-4">
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
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  filters.categories.includes(category.value)
                    ? "bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white shadow-[0_4px_12px_rgba(7,156,251,0.25)] -translate-y-0.5"
                    : "bg-[rgba(7,156,251,0.08)] text-[#037ecc] border border-[rgba(7,156,251,0.05)] hover:bg-[rgba(7,156,251,0.15)]"
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
          <h3 className="font-semibold text-sm text-[#0f172a]">Marca</h3>
          {brandSearch && <span className="text-xs text-[#475569]">{filteredBrands.length} marcas coinciden</span>}
        </div>
        <div className="relative">
          <motion.div
            animate={{ rotate: brandSearch ? [0, 10, -10, 0] : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          >
            <Search className="w-4 h-4 text-[#037ecc]" />
          </motion.div>
          <Input
            type="text"
            placeholder="Buscar marca..."
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            className="pl-10 py-2.5 my-3 bg-white/50 border-[rgba(7,156,251,0.12)] focus:border-[#037ecc] rounded-xl shadow-[inset_0_2px_4px_rgba(7,156,251,0.05)]"
          />
        </div>
        <div className="flex flex-wrap gap-2.5 mb-4">
          {filteredBrands.map((brand) => (
            <motion.button
              key={brand}
              onClick={() => handleBrandToggle(brand)}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filters.brands.includes(brand)
                  ? "bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white shadow-[0_4px_12px_rgba(7,156,251,0.25)] -translate-y-0.5"
                  : "bg-[rgba(7,156,251,0.08)] text-[#037ecc] border border-[rgba(7,156,251,0.05)] hover:bg-[rgba(7,156,251,0.15)]"
              }`}
            >
              {brand}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-sm text-[#0f172a]">Capacidad (BTU)</h3>
        <div className="flex flex-wrap gap-2.5 mb-4">
          {capacities.map((capacity) => (
            <motion.button
              key={capacity.value}
              onClick={() => handleCapacityToggle(capacity.value)}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filters.capacities.includes(capacity.value)
                  ? "bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white shadow-[0_4px_12px_rgba(7,156,251,0.25)] -translate-y-0.5"
                  : "bg-[rgba(7,156,251,0.08)] text-[#037ecc] border border-[rgba(7,156,251,0.05)] hover:bg-[rgba(7,156,251,0.15)]"
              }`}
            >
              {capacity.label}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-sm text-[#0f172a]">Rango de Precio</h3>
        <div className="flex justify-between items-center">
          <motion.span
            key={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-bold bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent"
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
        <h3 className="font-semibold text-sm text-[#0f172a]">Características</h3>
        <div className="space-y-3">
          <motion.div
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ${
              filters.inverter === true
                ? "bg-gradient-to-r from-[#037ecc]/10 to-[#00baff]/10 border-2 border-[#037ecc]/30"
                : "bg-white/40 border border-[rgba(7,156,251,0.08)]"
            }`}
            onClick={handleInverterToggle}
          >
            <Label htmlFor="inverter" className="text-sm font-medium cursor-pointer text-[#0f172a]">
              Tecnología Inverter
            </Label>
            <Checkbox id="inverter" checked={filters.inverter === true} onCheckedChange={handleInverterToggle} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ${
              filters.wifi === true
                ? "bg-gradient-to-r from-[#037ecc]/10 to-[#00baff]/10 border-2 border-[#037ecc]/30"
                : "bg-white/40 border border-[rgba(7,156,251,0.08)]"
            }`}
            onClick={handleWifiToggle}
          >
            <Label htmlFor="wifi" className="text-sm font-medium cursor-pointer text-[#0f172a]">
              Control WiFi
            </Label>
            <Checkbox id="wifi" checked={filters.wifi === true} onCheckedChange={handleWifiToggle} />
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
        className="hidden lg:block sticky top-24"
      >
        <div className="p-6 rounded-2xl bg-white/65 backdrop-blur-xl border border-[rgba(7,156,251,0.08)] shadow-[0_10px_40px_rgba(7,156,251,0.05)]">
          <div className="flex items-center gap-2 mb-6">
            <SlidersHorizontal className="w-5 h-5 text-[#037ecc]" />
            <h2 className="text-lg font-semibold text-[#0f172a]">Filtros</h2>
          </div>
          <FiltersContent />
        </div>
      </motion.div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.96 }}>
            <Button
              variant="outline"
              className="lg:hidden w-full bg-white/70 backdrop-blur-lg border-[rgba(7,156,251,0.08)] hover:bg-white/90 rounded-full py-6 font-semibold"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtros
              {activeFiltersCount > 0 && (
                <Badge className="ml-2 bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white border-0 shadow-[0_0_10px_rgba(7,156,251,0.3)]">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </motion.div>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="h-[85vh] overflow-y-auto scroll-smooth overscroll-contain bg-white/75 backdrop-blur-2xl border border-[rgba(7,156,251,0.08)] shadow-[0_12px_40px_rgba(7,156,251,0.12),inset_0_10px_40px_rgba(255,255,255,0.4)] rounded-t-2xl w-[94%] max-w-[480px] mx-auto left-[3%] right-[3%]"
        >
          <DialogTitle className="sr-only">Filtros</DialogTitle>
          <SheetHeader className="px-2 pb-4 border-b border-[rgba(7,156,251,0.05)] mb-4">
            <SheetTitle className="text-[#0f172a] text-lg font-bold">Filtros</SheetTitle>
          </SheetHeader>
          <div className="px-5 py-4 pb-6">
            <FiltersContent />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky bottom-0 left-0 right-0 px-3 py-3 bg-white/95 backdrop-blur-xl border-t border-[rgba(7,156,251,0.1)] -mx-6 -mb-6"
          >
            <Button
              onClick={() => setIsOpen(false)}
              className="w-full mx-0 mb-2 h-14 rounded-full bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white font-semibold shadow-[0_6px_20px_rgba(7,156,251,0.25)] hover:shadow-[0_8px_30px_rgba(7,156,251,0.35)] hover:brightness-110 hover:-translate-y-0.5 transition-all duration-250"
            >
              Aplicar filtros
            </Button>
          </motion.div>
        </SheetContent>
      </Sheet>
    </>
  )
}
