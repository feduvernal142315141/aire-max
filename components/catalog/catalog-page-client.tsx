"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Grid3x3, List, MessageCircle } from "lucide-react"

import { ProductCard } from "@/components/catalog/product-card"
import { ProductFilters } from "@/components/catalog/product-filters"
import { ProductSort } from "@/components/catalog/product-sort"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useProducts } from "@/hooks/use-products"
import { WHATSAPP_NUMBER } from "@/lib/constants"
import type { Product } from "@/types"

interface CatalogPageClientProps {
  initialProducts: Product[]
}

export function CatalogPageClient({ initialProducts }: CatalogPageClientProps) {
  const {
    filters,
    sortBy,
    viewMode,
    filteredProducts,
    activeFiltersCount,
    setFilters,
    setSortBy,
    setViewMode,
  } = useProducts(initialProducts)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Adaptive section background */}
      <div className="bg-section fixed inset-0 -z-10" />

      {/* Ambient orbs — subtle in both modes */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 h-96 w-96 rounded-full bg-[#079cfb]/5 blur-3xl dark:bg-sky-500/8"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-[#079cfb]/5 blur-3xl dark:bg-cyan-500/8"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8 md:pt-32 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-6 text-center md:mb-12"
        >
          <div className="absolute left-1/2 -z-10 h-32 w-[600px] -translate-x-1/2 rounded-full bg-[#079cfb]/8 blur-3xl dark:bg-sky-500/10" />

          <h1 className="text-foreground mb-2 font-serif text-3xl font-bold tracking-tight md:mb-3 md:text-5xl">
            Catálogo de Equipos{" "}
            <span className="from-primary bg-gradient-to-r to-[#00baff] bg-clip-text text-transparent dark:from-sky-400 dark:to-cyan-300">
              Aire-Max
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl px-4 text-sm opacity-90 md:text-lg">
            Encuentra el sistema ideal para tu espacio
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside>
            <ProductFilters
              filters={filters}
              onFiltersChange={setFilters}
              activeFiltersCount={activeFiltersCount}
            />
          </aside>

          <div className="space-y-6">
            {/* Toolbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-border dark:bg-card/70 flex flex-col items-start justify-between gap-4 rounded-2xl border bg-white/70 p-4 shadow-[0_10px_40px_rgba(7,156,251,0.05)] backdrop-blur-lg sm:flex-row sm:items-center md:p-5 dark:shadow-none"
            >
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-foreground text-sm font-semibold md:text-base">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "producto" : "productos"}
                </p>
                {activeFiltersCount > 0 && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <Badge className="from-primary border-0 bg-gradient-to-r to-sky-500 text-white shadow-[0_0_10px_rgba(7,156,251,0.3)] dark:from-sky-500 dark:to-cyan-400">
                      {activeFiltersCount} {activeFiltersCount === 1 ? "filtro" : "filtros"}
                    </Badge>
                  </motion.div>
                )}
              </div>

              <div className="flex w-full items-center gap-3 sm:w-auto">
                <div className="border-border bg-muted/30 dark:bg-muted/40 flex items-center gap-1 rounded-lg border p-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    title="Vista cuadrícula"
                    className={`h-8 w-8 cursor-pointer rounded-md p-0 transition-all duration-200 ${
                      viewMode === "grid"
                        ? "from-primary bg-gradient-to-r to-sky-500 text-white shadow-[0_2px_8px_rgba(7,156,251,0.25)] dark:from-sky-500 dark:to-cyan-400"
                        : "text-muted-foreground hover:bg-background/60 hover:text-foreground dark:hover:bg-muted/60"
                    }`}
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("list")}
                    title="Vista lista"
                    className={`h-8 w-8 cursor-pointer rounded-md p-0 transition-all duration-200 ${
                      viewMode === "list"
                        ? "from-primary bg-gradient-to-r to-sky-500 text-white shadow-[0_2px_8px_rgba(7,156,251,0.25)] dark:from-sky-500 dark:to-cyan-400"
                        : "text-muted-foreground hover:bg-background/60 hover:text-foreground dark:hover:bg-muted/60"
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                <ProductSort value={sortBy} onChange={setSortBy} />
              </div>
            </motion.div>

            {/* Product grid */}
            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div
                  key="products-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`grid gap-6 md:gap-10 ${
                    viewMode === "grid"
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
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
                  className="px-4 py-16 text-center md:py-20"
                >
                  <div className="border-border dark:bg-card/70 mx-auto max-w-md rounded-2xl border bg-white/70 p-8 shadow-[0_10px_40px_rgba(7,156,251,0.05)] backdrop-blur-lg md:p-10 dark:shadow-none">
                    <div className="mb-4 text-6xl opacity-20">❄️</div>
                    <p className="text-foreground mb-2 text-lg font-semibold">
                      No encontramos equipos con esas características
                    </p>
                    <p className="text-muted-foreground mb-6 text-sm opacity-85">
                      Intenta ajustar los filtros para ver más resultados
                    </p>
                    <Link
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, necesito asesoría para elegir un equipo de aire acondicionado")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gradient-to-r from-[#00d86a] to-[#00a34b] text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,216,106,0.3)] dark:from-emerald-500 dark:to-green-500">
                        <MessageCircle className="animate-pulse-slow mr-2 h-4 w-4" />
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
