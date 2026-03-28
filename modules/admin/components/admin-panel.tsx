"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import {
  BarChart3,
  Bell,
  Box,
  Boxes,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Gauge,
  LayoutDashboard,
  Megaphone,
  Minus,
  Package,
  Pencil,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  Sparkles,
  Tags,
  Trash2,
  Truck,
  Users,
} from "lucide-react"

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { adminOrdersMock, adminProductsMock } from "@/modules/admin/mock-data"
import type { AdminProduct, AdminSection, ProductFilters, ProductStatus, StockHealth } from "@/modules/admin/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const FILTERS_KEY = "admin-products-filters-v1"

const defaultFilters: ProductFilters = {
  brands: [],
  types: [],
  btu: [],
  status: "all",
  priceRange: [0, 2500],
}

const navItems: { id: AdminSection; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "productos", label: "Productos", icon: Box },
  { id: "categorias", label: "Categorías", icon: Tags },
  { id: "inventario", label: "Inventario", icon: Package },
  { id: "ordenes", label: "Órdenes", icon: ShoppingCart },
  { id: "clientes", label: "Clientes", icon: Users },
  { id: "promociones", label: "Promociones", icon: Megaphone },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "configuracion", label: "Configuración", icon: Settings },
]

function getStockHealth(stock: number): StockHealth {
  if (stock <= 5) return "low"
  if (stock <= 15) return "medium"
  return "high"
}

function stockHealthBadge(stock: number) {
  const health = getStockHealth(stock)

  if (health === "low") {
    return <Badge className="bg-red-500/15 text-red-700 border-red-300">🔴 Bajo stock</Badge>
  }

  if (health === "medium") {
    return <Badge className="bg-yellow-500/15 text-yellow-700 border-yellow-300">🟡 Stock medio</Badge>
  }

  return <Badge className="bg-emerald-500/15 text-emerald-700 border-emerald-300">🟢 Disponible</Badge>
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
  }).format(value)
}

function initialDraft(): AdminProduct {
  return {
    id: `p-${Math.random().toString(36).slice(2, 8)}`,
    image: "/placeholder.svg",
    name: "",
    brand: "",
    type: "split",
    btu: "12000",
    price: 0,
    salePrice: undefined,
    stock: 0,
    status: "active",
    rating: 5,
    sku: "",
    inverter: true,
    wifi: false,
    energy: "A++",
    description: "",
    tags: [],
    slug: "",
    metaTitle: "",
    metaDescription: "",
  }
}

export function AdminPanel() {
  const { toast } = useToast()

  const [activeSection, setActiveSection] = useState<AdminSection>("productos")
  const [collapsed, setCollapsed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [products, setProducts] = useState<AdminProduct[]>(adminProductsMock)
  const [filters, setFilters] = useState<ProductFilters>(defaultFilters)
  const [search, setSearch] = useState("")
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<AdminProduct>(initialDraft)
  const [tagInput, setTagInput] = useState("")

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const saved = window.localStorage.getItem(FILTERS_KEY)
    if (saved) {
      setFilters(JSON.parse(saved) as ProductFilters)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(FILTERS_KEY, JSON.stringify(filters))
  }, [filters])

  const brands = useMemo(() => Array.from(new Set(products.map((p) => p.brand))).sort(), [products])
  const btus = useMemo(() => Array.from(new Set(products.map((p) => p.btu))).sort(), [products])

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()

    return products.filter((product) => {
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false
      if (filters.types.length > 0 && !filters.types.includes(product.type)) return false
      if (filters.btu.length > 0 && !filters.btu.includes(product.btu)) return false
      if (filters.status !== "all" && product.status !== filters.status) return false

      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false

      if (!query) return true

      return [product.name, product.brand, product.type, product.btu, product.sku, product.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query)
    })
  }, [products, filters, search])

  const dashboardData = useMemo(() => {
    const noStock = products.filter((p) => p.stock === 0).length
    const todaySales = 18450
    const soldToday = 27
    const top = [...products].sort((a, b) => b.rating - a.rating).slice(0, 3)

    return { todaySales, soldToday, noStock, top }
  }, [products])

  function toggleFilterArray<K extends "brands" | "types" | "btu">(key: K, value: ProductFilters[K][number]) {
    setFilters((prev) => {
      const arr = prev[key] as string[]
      const next = arr.includes(value as string)
        ? arr.filter((item) => item !== value)
        : [...arr, value as string]

      return { ...prev, [key]: next }
    })
  }

  function toggleSelect(id: string) {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  function toggleAllVisible() {
    if (selectedIds.length === filteredProducts.length) {
      setSelectedIds([])
      return
    }
    setSelectedIds(filteredProducts.map((p) => p.id))
  }

  function applyBulkAction(action: "activate" | "deactivate" | "up10" | "down10" | "delete") {
    if (selectedIds.length === 0) {
      toast({ title: "No hay selección", description: "Seleccioná al menos un producto para aplicar acciones masivas." })
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

    toast({ title: "Acción aplicada", description: `Se aplicó ${action} sobre ${selectedIds.length} productos.` })
    setSelectedIds([])
  }

  function updateProductField(id: string, patch: Partial<AdminProduct>) {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)))
  }

  function openCreateDrawer() {
    setEditingId(null)
    setDraft(initialDraft())
    setTagInput("")
    setDrawerOpen(true)
  }

  function openEditDrawer(product: AdminProduct) {
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
      toast({ title: "Producto actualizado", description: `${draft.name} se guardó correctamente.` })
    } else {
      setProducts((prev) => [draft, ...prev])
      toast({ title: "Producto creado", description: `${draft.name} se agregó al catálogo.` })
    }

    setDrawerOpen(false)
  }

  function removeProduct(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id))
    toast({ title: "Producto eliminado", description: "El producto mock fue eliminado del listado." })
  }

  function addTag() {
    if (!tagInput.trim()) return
    if (draft.tags.includes(tagInput.trim())) return

    setDraft((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }))
    setTagInput("")
  }

  function quickAdjustStock(id: string, delta: number) {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p
        return { ...p, stock: Math.max(0, p.stock + delta) }
      }),
    )
  }

  function renderSection() {
    if (isLoading) {
      return (
        <div className="space-y-4">
          <Skeleton className="h-16 w-full rounded-2xl" />
          <Skeleton className="h-72 w-full rounded-2xl" />
          <Skeleton className="h-72 w-full rounded-2xl" />
        </div>
      )
    }

    if (activeSection === "dashboard") {
      return (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card className="rounded-2xl border border-white/20 backdrop-blur bg-white/70 shadow-lg">
              <CardHeader>
                <CardDescription>💰 Ventas hoy</CardDescription>
                <CardTitle>{formatCurrency(dashboardData.todaySales)}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl border border-white/20 backdrop-blur bg-white/70 shadow-lg">
              <CardHeader>
                <CardDescription>📦 Productos vendidos</CardDescription>
                <CardTitle>{dashboardData.soldToday}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl border border-white/20 backdrop-blur bg-white/70 shadow-lg">
              <CardHeader>
                <CardDescription>📉 Sin stock</CardDescription>
                <CardTitle>{dashboardData.noStock}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl border border-white/20 backdrop-blur bg-white/70 shadow-lg">
              <CardHeader>
                <CardDescription>🔥 Top producto</CardDescription>
                <CardTitle className="text-base">{dashboardData.top[0]?.name ?? "-"}</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <Card className="rounded-2xl border border-white/20 backdrop-blur bg-white/70 shadow-lg">
            <CardHeader>
              <CardTitle>Ventas por día (mock)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[48, 62, 39, 77, 69, 81, 54].map((value, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Día {index + 1}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )
    }

    if (activeSection === "productos") {
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
                      <DropdownMenuItem onClick={() => applyBulkAction("deactivate")}>Desactivar</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => applyBulkAction("up10")}>Subir precio +10%</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => applyBulkAction("down10")}>Bajar precio -10%</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => applyBulkAction("delete")} className="text-red-600">
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
                    <SheetTrigger asChild>
                      <Button
                        onClick={openCreateDrawer}
                        className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-[0_0_22px_rgba(37,99,235,0.35)]"
                      >
                        <Plus className="mr-2 h-4 w-4" /> Nuevo producto
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>{editingId ? "Editar producto" : "Crear producto"}</SheetTitle>
                      </SheetHeader>

                      <Tabs defaultValue="general" className="mt-6">
                        <TabsList className="grid grid-cols-5">
                          <TabsTrigger value="general">General</TabsTrigger>
                          <TabsTrigger value="pricing">Precio</TabsTrigger>
                          <TabsTrigger value="specs">Specs</TabsTrigger>
                          <TabsTrigger value="media">Media</TabsTrigger>
                          <TabsTrigger value="seo">SEO</TabsTrigger>
                        </TabsList>

                        <TabsContent value="general" className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label>Nombre</Label>
                            <Input value={draft.name} onChange={(e) => setDraft((p) => ({ ...p, name: e.target.value }))} />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                              <Label>Marca</Label>
                              <Input value={draft.brand} onChange={(e) => setDraft((p) => ({ ...p, brand: e.target.value }))} />
                            </div>
                            <div className="space-y-2">
                              <Label>Tipo</Label>
                              <Select
                                value={draft.type}
                                onValueChange={(value) => setDraft((p) => ({ ...p, type: value as AdminProduct["type"] }))}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="split">Split</SelectItem>
                                  <SelectItem value="cassette">Cassette</SelectItem>
                                  <SelectItem value="piso-techo">Piso-Techo</SelectItem>
                                  <SelectItem value="ventana">Ventana</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Descripción</Label>
                            <Textarea value={draft.description} onChange={(e) => setDraft((p) => ({ ...p, description: e.target.value }))} rows={4} />
                          </div>
                          <div className="space-y-2">
                            <Label>Tags</Label>
                            <div className="flex gap-2">
                              <Input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="inverter, premium..." />
                              <Button type="button" variant="outline" onClick={addTag}>
                                Agregar
                              </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {draft.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="rounded-full">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="pricing" className="space-y-4 mt-4">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                              <Label>Precio base</Label>
                              <Input
                                type="number"
                                value={draft.price}
                                onChange={(e) => setDraft((p) => ({ ...p, price: Number(e.target.value) }))}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Precio oferta</Label>
                              <Input
                                type="number"
                                value={draft.salePrice ?? ""}
                                onChange={(e) => setDraft((p) => ({ ...p, salePrice: Number(e.target.value) || undefined }))}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                              <Label>Stock</Label>
                              <Input
                                type="number"
                                value={draft.stock}
                                onChange={(e) => setDraft((p) => ({ ...p, stock: Number(e.target.value) }))}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>SKU</Label>
                              <Input value={draft.sku} onChange={(e) => setDraft((p) => ({ ...p, sku: e.target.value }))} />
                            </div>
                          </div>
                          <div className="flex items-center justify-between rounded-xl border p-3">
                            <div>
                              <p className="font-medium">Estado</p>
                              <p className="text-xs text-muted-foreground">Activar o desactivar visibilidad del producto.</p>
                            </div>
                            <Switch
                              checked={draft.status === "active"}
                              onCheckedChange={(checked) => setDraft((p) => ({ ...p, status: checked ? "active" : "inactive" }))}
                            />
                          </div>
                        </TabsContent>

                        <TabsContent value="specs" className="space-y-4 mt-4">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                              <Label>BTU</Label>
                              <Input value={draft.btu} onChange={(e) => setDraft((p) => ({ ...p, btu: e.target.value }))} />
                            </div>
                            <div className="space-y-2">
                              <Label>Energía</Label>
                              <Select
                                value={draft.energy}
                                onValueChange={(value) => setDraft((p) => ({ ...p, energy: value as AdminProduct["energy"] }))}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="A+++">A+++</SelectItem>
                                  <SelectItem value="A++">A++</SelectItem>
                                  <SelectItem value="A+">A+</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2 rounded-xl border p-3">
                            <div className="flex items-center justify-between">
                              <span>Inverter</span>
                              <Switch
                                checked={draft.inverter}
                                onCheckedChange={(checked) => setDraft((p) => ({ ...p, inverter: checked }))}
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <span>WiFi</span>
                              <Switch checked={draft.wifi} onCheckedChange={(checked) => setDraft((p) => ({ ...p, wifi: checked }))} />
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="media" className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label>URL imagen principal</Label>
                            <Input value={draft.image} onChange={(e) => setDraft((p) => ({ ...p, image: e.target.value }))} />
                          </div>
                          <div className="rounded-2xl border border-dashed p-6 text-center text-sm text-muted-foreground">
                            Drag & drop mock para múltiples imágenes + orden visual (sin integración).
                          </div>
                        </TabsContent>

                        <TabsContent value="seo" className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label>Slug</Label>
                            <Input value={draft.slug} onChange={(e) => setDraft((p) => ({ ...p, slug: e.target.value }))} />
                          </div>
                          <div className="space-y-2">
                            <Label>Meta title</Label>
                            <Input value={draft.metaTitle} onChange={(e) => setDraft((p) => ({ ...p, metaTitle: e.target.value }))} />
                          </div>
                          <div className="space-y-2">
                            <Label>Meta description</Label>
                            <Textarea
                              rows={4}
                              value={draft.metaDescription}
                              onChange={(e) => setDraft((p) => ({ ...p, metaDescription: e.target.value }))}
                            />
                          </div>
                        </TabsContent>
                      </Tabs>

                      <div className="sticky bottom-0 mt-6 bg-background/90 backdrop-blur py-4">
                        <Button
                          className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-[0_0_22px_rgba(37,99,235,0.35)]"
                          onClick={saveProduct}
                        >
                          Guardar producto
                        </Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                <div className="space-y-2 xl:col-span-2">
                  <Label>Búsqueda inteligente</Label>
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    list="admin-search-suggestions"
                    placeholder='Ej: "LG 12000 inverter"'
                    className="rounded-xl"
                  />
                  <datalist id="admin-search-suggestions">
                    {products.map((p) => (
                      <option key={p.id} value={`${p.brand} ${p.btu} ${p.type} ${p.inverter ? "inverter" : ""}`} />
                    ))}
                  </datalist>
                </div>

                <div className="space-y-2">
                  <Label>Marca</Label>
                  <div className="flex flex-wrap gap-2 rounded-xl border p-2">
                    {brands.map((brand) => (
                      <Button
                        key={brand}
                        type="button"
                        size="sm"
                        variant={filters.brands.includes(brand) ? "default" : "outline"}
                        className="rounded-full"
                        onClick={() => toggleFilterArray("brands", brand)}
                      >
                        {brand}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tipo</Label>
                  <div className="flex flex-wrap gap-2 rounded-xl border p-2">
                    {(["split", "cassette", "piso-techo", "ventana"] as const).map((type) => (
                      <Button
                        key={type}
                        type="button"
                        size="sm"
                        variant={filters.types.includes(type) ? "default" : "outline"}
                        className="rounded-full"
                        onClick={() => toggleFilterArray("types", type)}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Estado</Label>
                  <Select
                    value={filters.status}
                    onValueChange={(value) => setFilters((prev) => ({ ...prev, status: value as ProductStatus | "all" }))}
                  >
                    <SelectTrigger className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="active">Activos</SelectItem>
                      <SelectItem value="inactive">Inactivos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>BTU</Label>
                <div className="flex flex-wrap gap-2 rounded-xl border p-2">
                  {btus.map((value) => (
                    <Button
                      key={value}
                      type="button"
                      size="sm"
                      variant={filters.btu.includes(value) ? "default" : "outline"}
                      className="rounded-full"
                      onClick={() => toggleFilterArray("btu", value)}
                    >
                      {value}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>
                  Precio ({formatCurrency(filters.priceRange[0])} - {formatCurrency(filters.priceRange[1])})
                </Label>
                <Slider
                  min={0}
                  max={2500}
                  step={50}
                  value={filters.priceRange}
                  onValueChange={(values) => setFilters((prev) => ({ ...prev, priceRange: [values[0], values[1]] }))}
                />
              </div>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <Checkbox checked={selectedIds.length > 0 && selectedIds.length === filteredProducts.length} onCheckedChange={toggleAllVisible} />
                    </TableHead>
                    <TableHead>Imagen</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Marca</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <Checkbox checked={selectedIds.includes(product.id)} onCheckedChange={() => toggleSelect(product.id)} />
                      </TableCell>
                      <TableCell>
                        <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                          <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-slate-900">{product.name}</p>
                          <p className="text-xs text-slate-500">{product.sku}</p>
                        </div>
                      </TableCell>
                      <TableCell>{product.brand}</TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          className="h-8 w-28"
                          value={product.price}
                          onFocus={() => setEditingId(product.id)}
                          onBlur={() => setEditingId(null)}
                          onChange={(e) => updateProductField(product.id, { price: Number(e.target.value) })}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => quickAdjustStock(product.id, -1)}>
                            <Minus className="h-3 w-3" />
                          </Button>
                          <Input
                            type="number"
                            className="h-8 w-16 text-center"
                            value={product.stock}
                            onChange={(e) => updateProductField(product.id, { stock: Number(e.target.value) })}
                          />
                          <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => quickAdjustStock(product.id, 1)}>
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={product.status === "active" ? "default" : "secondary"}>
                          {product.status === "active" ? "Activo" : "Inactivo"}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.rating.toFixed(1)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => openEditDrawer(product)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => removeProduct(product.id)}>
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )
    }

    if (activeSection === "inventario") {
      return (
        <Card className="rounded-2xl border border-white/20 backdrop-blur bg-white/70 shadow-lg">
          <CardHeader>
            <CardTitle>Inventario</CardTitle>
            <CardDescription>Alertas por salud de stock + ajustes rápidos.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col gap-2 rounded-xl border p-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">Stock actual: {product.stock}</p>
                </div>
                <div className="flex items-center gap-2">
                  {stockHealthBadge(product.stock)}
                  <Button variant="outline" size="sm" onClick={() => quickAdjustStock(product.id, -1)}>
                    -
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => quickAdjustStock(product.id, 1)}>
                    +
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )
    }

    if (activeSection === "ordenes") {
      return (
        <Card className="rounded-2xl border border-white/20 backdrop-blur bg-white/70 shadow-lg">
          <CardHeader>
            <CardTitle>Órdenes</CardTitle>
            <CardDescription>Tabla avanzada mock con estados y timeline.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Orden</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {adminOrdersMock.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>{formatCurrency(order.total)}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{order.status}</Badge>
                    </TableCell>
                    <TableCell>{order.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )
    }

    return (
      <Card className="rounded-2xl border border-white/20 backdrop-blur bg-white/70 shadow-lg">
        <CardHeader>
          <CardTitle className="capitalize">{activeSection}</CardTitle>
          <CardDescription>
            Módulo preparado en estructura admin. Seguimos con detalles específicos en la próxima iteración.
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f3fbff,_#e8f3ff_40%,_#f8fbff_100%)] text-slate-900">
      <div className="grid min-h-screen" style={{ gridTemplateColumns: collapsed ? "88px 1fr" : "260px 1fr" }}>
        <aside className="border-r border-white/40 bg-white/65 backdrop-blur-xl shadow-[inset_-1px_0_0_rgba(255,255,255,0.65)]">
          <div className="flex h-full flex-col p-4">
            <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/40 bg-white/70 px-3 py-2 shadow-sm">
              {!collapsed && (
                <div>
                  <p className="font-semibold">Aire-Max Admin</p>
                  <p className="text-xs text-slate-500">Demo tenant: Matriz CDMX</p>
                </div>
              )}
              <Button variant="ghost" size="icon" onClick={() => setCollapsed((prev) => !prev)}>
                {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              </Button>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = activeSection === item.id

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-all duration-200 ${
                      active
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-[0_0_24px_rgba(37,99,235,0.35)]"
                        : "hover:bg-white/80"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
                  </button>
                )
              })}
            </nav>

            <div className="mt-auto rounded-2xl border border-blue-100 bg-white/80 p-3 text-xs text-slate-600">
              {!collapsed ? "Mock mode: sin integración API" : "Mock"}
            </div>
          </div>
        </aside>

        <main className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-10 border-b border-white/40 bg-white/70 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 p-4">
              <div className="relative w-full max-w-lg">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar productos, órdenes, clientes..."
                  className="pl-10 rounded-xl bg-white/90"
                />
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" className="rounded-xl">
                  <Bell className="mr-2 h-4 w-4" /> Notificaciones
                </Button>
                <Button
                  onClick={openCreateDrawer}
                  className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-[0_0_22px_rgba(37,99,235,0.35)]"
                >
                  <Plus className="mr-2 h-4 w-4" /> Quick action
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <Users className="mr-2 h-4 w-4" /> Admin
                </Button>
              </div>
            </div>
          </header>

          <div className="flex-1 p-4 md:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl font-semibold capitalize tracking-tight">{activeSection}</h1>
                <p className="text-sm text-slate-600">Panel premium estilo Linear + Stripe + Vercel (mock).</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Sparkles className="mr-1 h-3 w-3" /> UX nivel dios
                </Badge>
                <Badge variant="secondary" className="bg-white/80">
                  {editingId ? "Editando inline" : "Sin edición activa"}
                </Badge>
              </div>
            </div>

            <Separator className="mb-6" />

            {renderSection()}

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                { icon: Boxes, label: "Skeleton en tablas" },
                { icon: Gauge, label: "Microinteracciones" },
                { icon: Truck, label: "Estado órdenes" },
                { icon: CreditCard, label: "Config pagos" },
              ].map((item) => (
                <Card key={item.label} className="rounded-2xl border border-white/20 bg-white/70">
                  <CardContent className="flex items-center gap-2 p-3 text-sm text-slate-700">
                    <item.icon className="h-4 w-4 text-blue-600" /> {item.label}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  )
}
