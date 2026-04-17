"use client"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ENERGY_OPTIONS } from "@/modules/admin/lib/admin-constants"
import type { EnergyRating, ProductAdminView, ProductCapacity } from "@/types"

export interface SpecsTabProps {
  draft: ProductAdminView
  setDraft: (fn: (prev: ProductAdminView) => ProductAdminView) => void
  capacities: ProductCapacity[]
}

export function SpecsTab({ draft, setDraft, capacities }: SpecsTabProps) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_6px_20px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label className="text-slate-700">Capacidad (BTU)</Label>
          <Select
            value={draft.capacity}
            onValueChange={(value) =>
              setDraft((p) => ({ ...p, capacity: value as ProductCapacity }))
            }
          >
            <SelectTrigger className="rounded-xl border-slate-200/90 bg-white/90 focus:ring-2 focus:ring-blue-400/40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {capacities.map((cap) => (
                <SelectItem key={cap} value={cap}>
                  {cap}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-slate-700">Energía</Label>
          <Select
            value={draft.energyRating}
            onValueChange={(value) =>
              setDraft((p) => ({ ...p, energyRating: value as EnergyRating }))
            }
          >
            <SelectTrigger className="rounded-xl border-slate-200/90 bg-white/90 focus:ring-2 focus:ring-blue-400/40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ENERGY_OPTIONS.map((rating) => (
                <SelectItem key={rating} value={rating}>
                  {rating}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-4 space-y-2 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3">
        <div className="flex items-center justify-between">
          <span className="font-medium text-slate-700">Inverter</span>
          <Switch
            checked={draft.inverter}
            onCheckedChange={(checked) => setDraft((p) => ({ ...p, inverter: checked }))}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-slate-700">WiFi</span>
          <Switch
            checked={draft.wifi}
            onCheckedChange={(checked) => setDraft((p) => ({ ...p, wifi: checked }))}
          />
        </div>
      </div>
    </div>
  )
}
