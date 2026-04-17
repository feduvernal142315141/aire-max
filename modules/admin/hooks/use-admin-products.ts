"use client"

import { useEffect, useMemo, useState } from "react"

import { productsData } from "@/data"
import { useToast } from "@/hooks/use-toast"
import { FILTERS_KEY, defaultFilters, initialDraft } from "@/modules/admin/lib/admin-constants"
import type { ProductFilters } from "@/modules/admin/types"
import type { Product, ProductAdminView, ProductBrand, ProductCapacity } from "@/types"

export interface AdminProductsDashboardData {
  todaySales: number
  soldToday: number
  noStock: number
  top: Product[]
}

export type BulkAction = "activate" | "deactivate" | "up10" | "down10" | "delete"

export interface UseAdminProductsResult {
  products: ProductAdminView[]
  filteredProducts: ProductAdminView[]
  filters: ProductFilters
  setFilters: (fn: (prev: ProductFilters) => ProductFilters) => void
  search: string
  setSearch: (s: string) => void
  selectedIds: string[]
  brands: ProductBrand[]
  capacities: ProductCapacity[]
  dashboardData: AdminProductsDashboardData
  // drawer
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
  editingId: string | null
  setEditingId: (id: string | null) => void
  draft: ProductAdminView
  setDraft: (fn: (prev: ProductAdminView) => ProductAdminView) => void
  tagInput: string
  setTagInput: (s: string) => void
  // actions
  toggleFilterArray: <K extends "brands" | "categories" | "capacities">(
    key: K,
    value: ProductFilters[K][number],
  ) => void
  toggleSelect: (id: string) => void
  toggleAllVisible: () => void
  applyBulkAction: (action: BulkAction) => void
  updateProductField: (id: string, patch: Partial<ProductAdminView>) => void
  openCreateDrawer: () => void
  openEditDrawer: (product: ProductAdminView) => void
  saveProduct: () => void
  removeProduct: (id: string) => void
  addTag: () => void
  quickAdjustStock: (id: string, delta: number) => void
}

export function useAdminProducts(): UseAdminProductsResult {
  const { toast } = useToast()

  const [products, setProducts] = useState<ProductAdminView[]>(productsData)
  const [filters, setFilters] = useState<ProductFilters>(readPersistedFilters)
  const [search, setSearch] = useState("")
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<ProductAdminView>(initialDraft)
  const [tagInput, setTagInput] = useState("")

  // Persistencia: solo escritura en efecto (no hay setState aquí — el read vive en lazy initializer).
  useEffect(() => {
    window.localStorage.setItem(FILTERS_KEY, JSON.stringify(filters))
  }, [filters])

  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort() as ProductBrand[],
    [products],
  )
  const capacities = useMemo(
    () => Array.from(new Set(products.map((p) => p.capacity))).sort() as ProductCapacity[],
    [products],
  )

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()

    return products.filter((product) => {
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false
      if (filters.categories.length > 0 && !filters.categories.includes(product.category))
        return false
      if (filters.capacities.length > 0 && !filters.capacities.includes(product.capacity))
        return false
      if (filters.status !== "all" && product.status !== filters.status) return false

      if (product.price < filters.priceRange.min || product.price > filters.priceRange.max)
        return false

      if (!query) return true

      const tagsPart = product.tags?.join(" ") ?? ""
      return [
        product.name,
        product.brand,
        product.category,
        product.capacity,
        product.sku ?? "",
        tagsPart,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    })
  }, [products, filters, search])

  const dashboardData = useMemo<AdminProductsDashboardData>(() => {
    const noStock = products.filter((p) => (p.stock ?? 0) === 0).length
    const todaySales = 18450
    const soldToday = 27
    const top = [...products].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 3)

    return { todaySales, soldToday, noStock, top }
  }, [products])

  function toggleFilterArray<K extends "brands" | "categories" | "capacities">(
    key: K,
    value: ProductFilters[K][number],
  ) {
    setFilters((prev) => {
      const arr = prev[key] as string[]
      const next = arr.includes(value as string)
        ? arr.filter((item) => item !== value)
        : [...arr, value as string]

      return { ...prev, [key]: next as ProductFilters[K] }
    })
  }

  function toggleSelect(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  function toggleAllVisible() {
    if (selectedIds.length === filteredProducts.length) {
      setSelectedIds([])
      return
    }
    setSelectedIds(filteredProducts.map((p) => p.id))
  }

  function applyBulkAction(action: BulkAction) {
    if (selectedIds.length === 0) {
      toast({
        title: "No hay selección",
        description: "Seleccioná al menos un producto para aplicar acciones masivas.",
      })
      return
    }

    setProducts((prev) => {
      if (action === "delete") {
        return prev.filter((p) => !selectedIds.includes(p.id))
      }

      return prev.map((p) => {
        if (!selectedIds.includes(p.id)) return p

        if (action === "activate") return { ...p, status: "active" }
        if (action === "deactivate") return { ...p, status: "inactive" }
        if (action === "up10") return { ...p, price: Number((p.price * 1.1).toFixed(2)) }
        return { ...p, price: Number((p.price * 0.9).toFixed(2)) }
      })
    })

    toast({
      title: "Acción aplicada",
      description: `Se aplicó ${action} sobre ${selectedIds.length} productos.`,
    })
    setSelectedIds([])
  }

  function updateProductField(id: string, patch: Partial<ProductAdminView>) {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)))
  }

  function openCreateDrawer() {
    setEditingId(null)
    setDraft(initialDraft())
    setTagInput("")
    setDrawerOpen(true)
  }

  function openEditDrawer(product: ProductAdminView) {
    setEditingId(product.id)
    setDraft(product)
    setTagInput("")
    setDrawerOpen(true)
  }

  function saveProduct() {
    if (!draft.name || !draft.brand || !draft.sku) {
      toast({ title: "Faltan datos", description: "Completá nombre, marca y SKU para guardar." })
      return
    }

    if (editingId) {
      setProducts((prev) => prev.map((p) => (p.id === editingId ? draft : p)))
      toast({
        title: "Producto actualizado",
        description: `${draft.name} se guardó correctamente.`,
      })
    } else {
      setProducts((prev) => [draft, ...prev])
      toast({ title: "Producto creado", description: `${draft.name} se agregó al catálogo.` })
    }

    setDrawerOpen(false)
  }

  function removeProduct(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id))
    toast({
      title: "Producto eliminado",
      description: "El producto mock fue eliminado del listado.",
    })
  }

  function addTag() {
    if (!tagInput.trim()) return
    const currentTags = draft.tags ?? []
    if (currentTags.includes(tagInput.trim())) return

    setDraft((prev) => ({ ...prev, tags: [...(prev.tags ?? []), tagInput.trim()] }))
    setTagInput("")
  }

  function quickAdjustStock(id: string, delta: number) {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p
        return { ...p, stock: Math.max(0, (p.stock ?? 0) + delta) }
      }),
    )
  }

  return {
    products,
    filteredProducts,
    filters,
    setFilters,
    search,
    setSearch,
    selectedIds,
    brands,
    capacities,
    dashboardData,
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
  }
}

/**
 * Lee los filtros persistidos de localStorage.
 * Implementado como lazy initializer para evitar el anti-patrón de `setState` dentro
 * de `useEffect` en la primera carga (React Compiler v7 lo flaggea como cascading render).
 */
function readPersistedFilters(): ProductFilters {
  if (typeof window === "undefined") return defaultFilters
  try {
    const saved = window.localStorage.getItem(FILTERS_KEY)
    if (!saved) return defaultFilters
    return JSON.parse(saved) as ProductFilters
  } catch {
    return defaultFilters
  }
}
