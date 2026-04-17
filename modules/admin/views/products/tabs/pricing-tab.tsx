"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import type { ProductAdminView } from "@/types"

export interface PricingTabProps {
  draft: ProductAdminView
  setDraft: (fn: (prev: ProductAdminView) => ProductAdminView) => void
}

export function PricingTab({ draft, setDraft }: PricingTabProps) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_6px_20px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label className="text-slate-700">Precio base</Label>
          <Input
            className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
            type="number"
            value={draft.price}
            onChange={(e) => setDraft((p) => ({ ...p, price: Number(e.target.value) }))}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-700">Precio oferta</Label>
          <Input
            className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
            type="number"
            value={draft.originalPrice ?? ""}
            onChange={(e) =>
              setDraft((p) => ({ ...p, originalPrice: Number(e.target.value) || undefined }))
            }
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label className="text-slate-700">Stock</Label>
          <Input
            className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
            type="number"
            value={draft.stock}
            onChange={(e) => setDraft((p) => ({ ...p, stock: Number(e.target.value) }))}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-700">SKU</Label>
          <Input
            className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
            value={draft.sku}
            onChange={(e) => setDraft((p) => ({ ...p, sku: e.target.value }))}
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3">
        <div>
          <p className="font-medium text-slate-800">Estado</p>
          <p className="text-xs text-muted-foreground">Activar o desactivar visibilidad del producto.</p>
        </div>
        <Switch
          checked={draft.status === "active"}
          onCheckedChange={(checked) =>
            setDraft((p) => ({ ...p, status: checked ? "active" : "inactive" }))
          }
        />
      </div>
    </div>
  )
}
