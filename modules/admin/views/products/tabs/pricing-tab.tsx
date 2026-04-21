"use client"

import { DollarSign } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import type { ProductAdminView } from "@/types"

export interface PricingTabProps {
  draft: ProductAdminView
  setDraft: (fn: (prev: ProductAdminView) => ProductAdminView) => void
}

const fieldClass =
  "rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/25 focus-visible:border-primary/50 transition-colors"
const labelClass = "text-sm font-medium text-foreground"

export function PricingTab({ draft, setDraft }: PricingTabProps) {
  const isActive = draft.status === "active"

  return (
    <div className="space-y-5">
      {/* Precios */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className={labelClass}>Precio de venta</Label>
          <div className="relative">
            <DollarSign className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2" />
            <Input
              className={`${fieldClass} pl-8`}
              type="number"
              placeholder="0.00"
              value={draft.price}
              onChange={(e) => setDraft((p) => ({ ...p, price: Number(e.target.value) }))}
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className={labelClass}>
            Precio tachado <span className="text-muted-foreground font-normal">(opcional)</span>
          </Label>
          <div className="relative">
            <DollarSign className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2" />
            <Input
              className={`${fieldClass} pl-8`}
              type="number"
              placeholder="0.00"
              value={draft.originalPrice ?? ""}
              onChange={(e) =>
                setDraft((p) => ({ ...p, originalPrice: Number(e.target.value) || undefined }))
              }
            />
          </div>
        </div>
      </div>

      {/* Stock + SKU */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className={labelClass}>Stock</Label>
          <Input
            className={fieldClass}
            type="number"
            placeholder="0"
            value={draft.stock}
            onChange={(e) => setDraft((p) => ({ ...p, stock: Number(e.target.value) }))}
          />
        </div>
        <div className="space-y-1.5">
          <Label className={labelClass}>SKU</Label>
          <Input
            className={fieldClass}
            placeholder="LG-SP-12K-INV"
            value={draft.sku}
            onChange={(e) => setDraft((p) => ({ ...p, sku: e.target.value }))}
          />
        </div>
      </div>

      {/* Estado activo */}
      <div className="border-border bg-muted/30 dark:bg-muted/15 flex items-center justify-between rounded-xl border px-4 py-3.5">
        <div className="space-y-0.5">
          <p className="text-foreground text-sm font-medium">Producto activo</p>
          <p className="text-muted-foreground text-xs">Visible en el catálogo público</p>
        </div>
        <Switch
          checked={isActive}
          onCheckedChange={(checked) =>
            setDraft((p) => ({ ...p, status: checked ? "active" : "inactive" }))
          }
        />
      </div>
    </div>
  )
}
