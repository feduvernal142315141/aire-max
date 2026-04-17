"use client"

import Image from "next/image"
import { Minus, Pencil, Plus, Trash2 } from "lucide-react"

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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox
              checked={selectedIds.length > 0 && selectedIds.length === products.length}
              onCheckedChange={onToggleAllVisible}
            />
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
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <Checkbox
                checked={selectedIds.includes(product.id)}
                onCheckedChange={() => onToggleSelect(product.id)}
              />
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
                onFocus={() => onEditingIdChange(product.id)}
                onBlur={() => onEditingIdChange(null)}
                onChange={(e) => onUpdateField(product.id, { price: Number(e.target.value) })}
              />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => onQuickAdjustStock(product.id, -1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <Input
                  type="number"
                  className="h-8 w-16 text-center"
                  value={product.stock}
                  onChange={(e) => onUpdateField(product.id, { stock: Number(e.target.value) })}
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => onQuickAdjustStock(product.id, 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant={product.status === "active" ? "default" : "secondary"}>
                {product.status === "active" ? "Activo" : "Inactivo"}
              </Badge>
            </TableCell>
            <TableCell>{(product.rating ?? 0).toFixed(1)}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => onEdit(product)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => onRemove(product.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
