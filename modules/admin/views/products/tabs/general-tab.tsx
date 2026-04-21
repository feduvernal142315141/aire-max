"use client"

import { Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CATEGORY_OPTIONS } from "@/modules/admin/lib/admin-constants"
import type { ProductAdminView, ProductBrand, ProductCategory } from "@/types"

export interface GeneralTabProps {
  draft: ProductAdminView
  setDraft: (fn: (prev: ProductAdminView) => ProductAdminView) => void
  brands: ProductBrand[]
  tagInput: string
  setTagInput: (s: string) => void
  onAddTag: () => void
  onSuggestAi: () => void
}

const fieldClass =
  "cursor-pointer rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/25 focus-visible:border-primary/50 transition-colors dark:bg-muted/20"
const labelClass = "text-sm font-medium text-foreground"

export function GeneralTab({
  draft,
  setDraft,
  brands,
  tagInput,
  setTagInput,
  onAddTag,
  onSuggestAi,
}: GeneralTabProps) {
  return (
    <div className="space-y-5">
      {/* Nombre */}
      <div className="space-y-1.5">
        <Label className={labelClass}>Nombre del producto</Label>
        <Input
          className={fieldClass}
          placeholder="Ej: Split Inverter 12000 BTU"
          value={draft.name}
          onChange={(e) => setDraft((p) => ({ ...p, name: e.target.value }))}
        />
      </div>

      {/* Marca + Categoría */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className={labelClass}>Marca</Label>
          <Select
            value={draft.brand}
            onValueChange={(value) => setDraft((p) => ({ ...p, brand: value as ProductBrand }))}
          >
            <SelectTrigger className={fieldClass}>
              <SelectValue placeholder="Selecciona marca" />
            </SelectTrigger>
            <SelectContent>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand} className="cursor-pointer">
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className={labelClass}>Categoría</Label>
          <Select
            value={draft.category}
            onValueChange={(value) =>
              setDraft((p) => ({ ...p, category: value as ProductCategory }))
            }
          >
            <SelectTrigger className={fieldClass}>
              <SelectValue placeholder="Selecciona tipo" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORY_OPTIONS.map((category: ProductCategory) => (
                <SelectItem key={category} value={category} className="cursor-pointer">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Descripción */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label className={labelClass}>Descripción</Label>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-primary hover:bg-primary/8 h-7 cursor-pointer gap-1 rounded-full px-2.5 text-xs dark:text-blue-400 dark:hover:bg-blue-950/50"
            onClick={onSuggestAi}
          >
            <Sparkles className="h-3 w-3" />
            Sugerir con IA
          </Button>
        </div>
        <Textarea
          className={fieldClass}
          placeholder="Describe el producto: características, uso recomendado, ventajas..."
          value={draft.description}
          onChange={(e) => setDraft((p) => ({ ...p, description: e.target.value }))}
          rows={4}
        />
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <Label className={labelClass}>Tags</Label>
        <div className="flex gap-2">
          <Input
            className={`${fieldClass} flex-1`}
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="inverter, wifi, premium…"
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), onAddTag())}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-border hover:border-primary/30 hover:bg-primary/5 hover:text-primary cursor-pointer rounded-xl px-4 text-sm"
            onClick={onAddTag}
          >
            Agregar
          </Button>
        </div>
        {(draft.tags ?? []).length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {(draft.tags ?? []).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border-primary/20 bg-primary/8 text-primary rounded-full border text-xs dark:border-blue-700/30 dark:bg-blue-950/40 dark:text-blue-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
