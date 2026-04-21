"use client"

import Image from "next/image"
import { Minus, Pencil, Plus, Star, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import type { ProductAdminView } from "@/types"

export interface ProductsTableProps {
  products: ProductAdminView[]
  selectedIds: string[]
  onToggleSelect: (id: string) => void
  onToggleAllVisible: () => void
  onUpdateField: (id: string, patch: Partial<ProductAdminView>) => void
  onQuickAdjustStock: (id: string, delta: number) => void
  onEdit: (product: ProductAdminView) => void
  onRemove: (id: string) => void
  onEditingIdChange: (id: string | null) => void
}

/* ─── Shared input class ─────────────────────────────────────────────────── */
const inputClass =
  "rounded-lg border-border bg-background text-sm tabular-nums focus-visible:ring-primary/30 focus-visible:border-primary/50 dark:bg-muted/20"

export function ProductsTable({
  products,
  selectedIds,
  onToggleSelect,
  onToggleAllVisible,
  onUpdateField,
  onQuickAdjustStock,
  onEdit,
  onRemove,
  onEditingIdChange,
}: ProductsTableProps) {
  return (
    <div className="border-border overflow-hidden rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow className="border-border bg-muted/30 hover:bg-muted/30 dark:bg-muted/20">
            <TableHead className="w-10">
              <Checkbox
                className="cursor-pointer"
                checked={selectedIds.length > 0 && selectedIds.length === products.length}
                onCheckedChange={onToggleAllVisible}
              />
            </TableHead>
            <TableHead className="text-muted-foreground w-16 text-xs font-semibold tracking-widest uppercase">
              Img
            </TableHead>
            <TableHead className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              Producto
            </TableHead>
            <TableHead className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              Marca
            </TableHead>
            <TableHead className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              Precio
            </TableHead>
            <TableHead className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              Stock
            </TableHead>
            <TableHead className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              Estado
            </TableHead>
            <TableHead className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              Rating
            </TableHead>
            <TableHead className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              Acciones
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => {
            const isSelected = selectedIds.includes(product.id)
            return (
              <TableRow
                key={product.id}
                className={cn(
                  "border-border transition-colors",
                  isSelected
                    ? "bg-primary/5 dark:bg-blue-500/8"
                    : "hover:bg-muted/30 dark:hover:bg-muted/20",
                )}
              >
                {/* Checkbox */}
                <TableCell>
                  <Checkbox
                    className="cursor-pointer"
                    checked={isSelected}
                    onCheckedChange={() => onToggleSelect(product.id)}
                  />
                </TableCell>

                {/* Imagen */}
                <TableCell>
                  <div className="border-border bg-muted/30 relative h-11 w-11 overflow-hidden rounded-lg border">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                </TableCell>

                {/* Nombre */}
                <TableCell>
                  <div>
                    <p className="text-foreground text-sm leading-snug font-medium">
                      {product.name}
                    </p>
                    <p className="text-muted-foreground mt-0.5 text-xs">{product.sku}</p>
                  </div>
                </TableCell>

                {/* Marca */}
                <TableCell>
                  <span className="text-muted-foreground text-sm">{product.brand}</span>
                </TableCell>

                {/* Precio — editable */}
                <TableCell>
                  <Input
                    type="number"
                    className={cn("h-8 w-28", inputClass)}
                    value={product.price}
                    onFocus={() => onEditingIdChange(product.id)}
                    onBlur={() => onEditingIdChange(null)}
                    onChange={(e) => onUpdateField(product.id, { price: Number(e.target.value) })}
                  />
                </TableCell>

                {/* Stock — editable con +/- */}
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="border-border text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground focus-visible:ring-primary/30 dark:hover:bg-muted/40 h-7 w-7 cursor-pointer rounded-lg border"
                      onClick={() => onQuickAdjustStock(product.id, -1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <Input
                      type="number"
                      className={cn("h-8 w-14 text-center", inputClass)}
                      value={product.stock}
                      onChange={(e) => onUpdateField(product.id, { stock: Number(e.target.value) })}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="border-border text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground focus-visible:ring-primary/30 dark:hover:bg-muted/40 h-7 w-7 cursor-pointer rounded-lg border"
                      onClick={() => onQuickAdjustStock(product.id, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>

                {/* Estado */}
                <TableCell>
                  {product.status === "active" ? (
                    <Badge className="border-0 bg-emerald-500/12 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                      Activo
                    </Badge>
                  ) : (
                    <Badge className="bg-muted/60 text-muted-foreground dark:bg-muted/40 border-0 text-[11px] font-semibold">
                      Inactivo
                    </Badge>
                  )}
                </TableCell>

                {/* Rating */}
                <TableCell>
                  <span className="flex items-center gap-1 text-sm text-amber-500 tabular-nums dark:text-amber-400">
                    <Star className="h-3 w-3 fill-current" />
                    {(product.rating ?? 0).toFixed(1)}
                  </span>
                </TableCell>

                {/* Acciones */}
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      title="Editar producto"
                      className="border-border text-muted-foreground hover:border-primary/30 hover:bg-primary/8 hover:text-primary focus-visible:ring-primary/30 h-8 w-8 cursor-pointer rounded-lg border transition-all duration-150 dark:hover:border-blue-700/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                      onClick={() => onEdit(product)}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      title="Eliminar producto"
                      className="border-border text-muted-foreground hover:border-destructive/30 hover:bg-destructive/8 hover:text-destructive focus-visible:ring-destructive/30 h-8 w-8 cursor-pointer rounded-lg border transition-all duration-150 dark:hover:border-red-800/40 dark:hover:bg-red-500/10 dark:hover:text-red-400"
                      onClick={() => onRemove(product.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}

          {products.length === 0 && (
            <TableRow>
              <TableCell colSpan={9} className="text-muted-foreground py-16 text-center text-sm">
                No hay productos que coincidan con los filtros
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
