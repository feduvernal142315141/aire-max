"use client"

import { useCallback, useEffect, useMemo, useState, useTransition } from "react"

import {
  createProductAction,
  listProductsAction,
  removeProductAction,
  updateProductAction,
} from "@/app/actions/products"
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
  isLoading: boolean
  isSaving: boolean
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
  const [isPending, startTransition] = useTransition()

  const [products, setProducts] = useState<ProductAdminView[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState<ProductFilters>(readPersistedFilters)
  const [search, setSearch] = useState("")
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<ProductAdminView>(initialDraft)
  const [tagInput, setTagInput] = useState("")

  // ─── Shared refresh logic (used after save / delete / bulk actions) ─────────
  const reloadProducts = useCallback(async () => {
    const { data, error } = await listProductsAction()
    if (error) {
      toast({ title: "Error al cargar productos", description: error, variant: "destructive" })
    }
    setProducts(data as ProductAdminView[])
    setIsLoading(false)
  }, [toast])

  // ─── Initial load — async function defined inline to satisfy react-hooks ─────
  useEffect(() => {
    async function load() {
      const { data, error } = await listProductsAction()
      if (error) {
        toast({ title: "Error al cargar productos", description: error, variant: "destructive" })
      }
      setProducts(data as ProductAdminView[])
      setIsLoading(false)
    }
    void load()
  }, [toast])

  // Persistencia de filtros
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
    const top = [...products].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 3)
    return { todaySales: 0, soldToday: 0, noStock, top }
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
      toast({ title: "No hay selección", description: "Seleccioná al menos un producto." })
      return
    }

    // Optimistic update
    const snapshot = products
    setProducts((prev) => {
      if (action === "delete") return prev.filter((p) => !selectedIds.includes(p.id))
      return prev.map((p) => {
        if (!selectedIds.includes(p.id)) return p
        if (action === "activate") return { ...p, status: "active" as const }
        if (action === "deactivate") return { ...p, status: "inactive" as const }
        if (action === "up10") return { ...p, price: Number((p.price * 1.1).toFixed(2)) }
        return { ...p, price: Number((p.price * 0.9).toFixed(2)) }
      })
    })
    setSelectedIds([])

    startTransition(async () => {
      const targets = snapshot.filter((p) => selectedIds.includes(p.id))
      const results = await Promise.all(
        targets.map((p) => {
          if (action === "delete") return removeProductAction(p.id)
          const newPrice =
            action === "up10"
              ? Number((p.price * 1.1).toFixed(2))
              : action === "down10"
                ? Number((p.price * 0.9).toFixed(2))
                : undefined
          const patch: Partial<ProductAdminView> = {}
          if (action === "activate") patch.status = "active"
          if (action === "deactivate") patch.status = "inactive"
          if (newPrice !== undefined) patch.price = newPrice
          return updateProductAction(p.id, patch)
        }),
      )

      const failed = results.filter((r) => r.error)
      if (failed.length > 0) {
        toast({
          title: "Algunos cambios fallaron",
          description: `${failed.length} de ${targets.length} operaciones fallaron. Recargando...`,
          variant: "destructive",
        })
        await reloadProducts()
      } else {
        toast({
          title: "Acción aplicada",
          description: `${action} aplicado a ${targets.length} productos.`,
        })
      }
    })
  }

  function updateProductField(id: string, patch: Partial<ProductAdminView>) {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)))
    startTransition(async () => {
      const { error } = await updateProductAction(id, patch)
      if (error) {
        toast({ title: "Error al actualizar", description: error, variant: "destructive" })
        await reloadProducts()
      }
    })
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
      setDrawerOpen(false)

      startTransition(async () => {
        const { error } = await updateProductAction(editingId, draft)
        if (error) {
          toast({ title: "Error al guardar", description: error, variant: "destructive" })
          await reloadProducts()
          return
        }
        toast({ title: "Producto actualizado", description: `${draft.name} guardado.` })
      })
    } else {
      const tempId = `__temp__${Date.now()}`
      const optimistic = { ...draft, id: tempId }
      setProducts((prev) => [optimistic, ...prev])
      setDrawerOpen(false)

      startTransition(async () => {
        const { data, error } = await createProductAction(draft)
        if (error || !data) {
          setProducts((prev) => prev.filter((p) => p.id !== tempId))
          toast({
            title: "Error al crear",
            description: error ?? "Error inesperado.",
            variant: "destructive",
          })
          return
        }
        setProducts((prev) => prev.map((p) => (p.id === tempId ? (data as ProductAdminView) : p)))
        toast({ title: "Producto creado", description: `${draft.name} agregado al catálogo.` })
      })
    }
  }

  function removeProduct(id: string) {
    const snapshot = products
    setProducts((prev) => prev.filter((p) => p.id !== id))

    startTransition(async () => {
      const { error } = await removeProductAction(id)
      if (error) {
        setProducts(snapshot)
        toast({ title: "Error al eliminar", description: error, variant: "destructive" })
        return
      }
      toast({ title: "Producto eliminado", description: "Eliminado del catálogo." })
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
    const product = products.find((p) => p.id === id)
    if (!product) return
    const newStock = Math.max(0, (product.stock ?? 0) + delta)

    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, stock: newStock } : p)))

    startTransition(async () => {
      const { error } = await updateProductAction(id, { stock: newStock })
      if (error) {
        toast({ title: "Error al ajustar stock", description: error, variant: "destructive" })
        await reloadProducts()
      }
    })
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
    isLoading,
    isSaving: isPending,
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
