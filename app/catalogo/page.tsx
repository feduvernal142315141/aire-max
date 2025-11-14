"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProductFilters, type FilterState } from "@/components/catalog/product-filters"
import { ProductCard } from "@/components/catalog/product-card"
import { ProductSort, type SortOption } from "@/components/catalog/product-sort"
import { products } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Grid3x3, List } from "lucide-react"
import Link from "next/link"
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants"

export default function CatalogoPage() {
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    categories: [],
    capacities: [],
    priceRange: [0, 2000],
    inverter: null,
    wifi: null,
  })

  const [sortBy, setSortBy] = useState<SortOption>("relevance")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false
      }
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false
      }
      if (filters.capacities.length > 0 && !filters.capacities.includes(product.capacity)) {
        return false
      }
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }
      if (filters.inverter !== null && product.inverter !== filters.inverter) {
        return false
      }
      if (filters.wifi !== null && product.wifi !== filters.wifi) {
        return false
      }
      return true
    })
  }, [filters])

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts]
    switch (sortBy) {
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price)
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price)
      case "capacity-asc":
        return sorted.sort((a, b) => Number.parseInt(a.capacity) - Number.parseInt(b.capacity))
      case "capacity-desc":
        return sorted.sort((a, b) => Number.parseInt(b.capacity) - Number.parseInt(a.capacity))
      case "newest":
        return sorted.sort((a, b) => (b.nuevo ? 1 : 0) - (a.nuevo ? 1 : 0))
      case "relevance":
      default:
        return sorted.sort((a, b) => {
          if (a.popular && !b.popular) return -1
          if (!a.popular && b.popular) return 1
          if (a.nuevo && !b.nuevo) return -1
          if (!a.nuevo && b.nuevo) return 1
          if (a.oferta && !b.oferta) return -1
          if (!a.oferta && b.oferta) return 1
          return 0
        })
    }
  }, [filteredProducts, sortBy])

  const activeFiltersCount = useMemo(() => {
    let count = 0
    if (filters.brands.length > 0) count++
    if (filters.categories.length > 0) count++
    if (filters.capacities.length > 0) count++
    if (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 2000) count++
    if (filters.inverter !== null) count++
    if (filters.wifi !== null) count++
    return count
  }, [filters])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-[#f9fcff] via-[#eaf6ff] to-[#d9f0ff] -z-10" />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-[#00baff]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#079cfb]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8 md:pt-32 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6 md:mb-12"
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[rgba(7,156,251,0.08)] rounded-full blur-3xl -z-10" />

          <h1 className="text-2xl md:text-[44px] font-serif font-bold text-[#0f172a] mb-2 md:mb-3 tracking-tight">
            Catálogo de Equipos{" "}
            <span className="bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent">Aire-Max</span>
          </h1>
          <p className="text-sm md:text-lg text-[#475569] opacity-90 max-w-2xl mx-auto px-4">
            Encuentra el sistema ideal para tu espacio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          <aside>
            <ProductFilters filters={filters} onFiltersChange={setFilters} activeFiltersCount={activeFiltersCount} />
          </aside>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 md:p-5 rounded-2xl bg-white/70 backdrop-blur-lg border border-[rgba(7,156,251,0.08)] shadow-[0_10px_40px_rgba(7,156,251,0.05)]"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-sm md:text-base font-semibold text-[#0f172a]">
                  {sortedProducts.length} {sortedProducts.length === 1 ? "producto" : "productos"}
                </p>
                {activeFiltersCount > 0 && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <Badge className="bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white border-0 shadow-[0_0_10px_rgba(7,156,251,0.3)]">
                      {activeFiltersCount} {activeFiltersCount === 1 ? "filtro" : "filtros"}
                    </Badge>
                  </motion.div>
                )}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex items-center gap-1 p-1 rounded-lg bg-white/60 border border-[rgba(7,156,251,0.08)]">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`h-8 w-8 p-0 transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white shadow-[0_2px_8px_rgba(7,156,251,0.25)]"
                        : ""
                    }`}
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`h-8 w-8 p-0 transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-gradient-to-r from-[#037ecc] to-[#00baff] text-white shadow-[0_2px_8px_rgba(7,156,251,0.25)]"
                        : ""
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>

                <ProductSort value={sortBy} onChange={setSortBy} />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {sortedProducts.length > 0 ? (
                <motion.div
                  key="products-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`grid gap-6 md:gap-10 ${
                    viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                  }`}
                >
                  {sortedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <ProductCard product={product} viewMode={viewMode} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-products"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-16 md:py-20 px-4"
                >
                  <div className="max-w-md mx-auto p-8 md:p-10 rounded-2xl bg-white/70 backdrop-blur-lg border border-[rgba(7,156,251,0.08)] shadow-[0_10px_40px_rgba(7,156,251,0.05)]">
                    <div className="text-6xl mb-4 opacity-20">❄️</div>
                    <p className="text-lg font-semibold text-[#0f172a] mb-2">
                      No encontramos equipos con esas características
                    </p>
                    <p className="text-sm text-[#475569] opacity-85 mb-6">
                      Intenta ajustar los filtros para ver más resultados
                    </p>
                    <Link
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, necesito asesoría para elegir un equipo de aire acondicionado")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gradient-to-r from-[#00d86a] to-[#00a34b] text-white hover:shadow-[0_8px_30px_rgba(0,216,106,0.3)] transition-all duration-300">
                        <MessageCircle className="w-4 h-4 mr-2 animate-pulse-slow" />
                        Habla con un asesor
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
