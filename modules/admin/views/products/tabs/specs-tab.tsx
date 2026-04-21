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

const fieldClass =
  "cursor-pointer rounded-xl border-border bg-background text-foreground focus:ring-primary/25 focus:border-primary/50 transition-colors dark:bg-muted/20"
const labelClass = "text-sm font-medium text-foreground"

export function SpecsTab({ draft, setDraft, capacities }: SpecsTabProps) {
  return (
    <div className="space-y-5">
      {/* Capacidad + Energía */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className={labelClass}>Capacidad (BTU)</Label>
          <Select
            value={draft.capacity}
            onValueChange={(value) =>
              setDraft((p) => ({ ...p, capacity: value as ProductCapacity }))
            }
          >
            <SelectTrigger className={fieldClass}>
              <SelectValue placeholder="Selecciona" />
            </SelectTrigger>
            <SelectContent>
              {capacities.map((cap) => (
                <SelectItem key={cap} value={cap} className="cursor-pointer">
                  {cap}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className={labelClass}>Eficiencia energética</Label>
          <Select
            value={draft.energyRating}
            onValueChange={(value) =>
              setDraft((p) => ({ ...p, energyRating: value as EnergyRating }))
            }
          >
            <SelectTrigger className={fieldClass}>
              <SelectValue placeholder="Selecciona" />
            </SelectTrigger>
            <SelectContent>
              {ENERGY_OPTIONS.map((rating) => (
                <SelectItem key={rating} value={rating} className="cursor-pointer">
                  {rating}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Toggles */}
      <div className="space-y-2">
        <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
          Características
        </p>
        <div className="divide-border border-border bg-muted/20 dark:bg-muted/10 divide-y rounded-xl border">
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="space-y-0.5">
              <p className="text-foreground text-sm font-medium">Tecnología Inverter</p>
              <p className="text-muted-foreground text-xs">Mayor eficiencia y ahorro de energía</p>
            </div>
            <Switch
              checked={draft.inverter}
              onCheckedChange={(checked) => setDraft((p) => ({ ...p, inverter: checked }))}
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="space-y-0.5">
              <p className="text-foreground text-sm font-medium">Control por WiFi</p>
              <p className="text-muted-foreground text-xs">Compatible con app móvil</p>
            </div>
            <Switch
              checked={draft.wifi}
              onCheckedChange={(checked) => setDraft((p) => ({ ...p, wifi: checked }))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
