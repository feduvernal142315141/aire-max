"use client"

import { Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
    <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_6px_20px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="space-y-2">
        <Label className="text-slate-700">Nombre</Label>
        <Input
          className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
          value={draft.name}
          onChange={(e) => setDraft((p) => ({ ...p, name: e.target.value }))}
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label className="text-slate-700">Marca</Label>
          <Select
            value={draft.brand}
            onValueChange={(value) => setDraft((p) => ({ ...p, brand: value as ProductBrand }))}
          >
            <SelectTrigger className="rounded-xl border-slate-200/90 bg-white/90 focus:ring-2 focus:ring-blue-400/40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-slate-700">Categoría</Label>
          <Select
            value={draft.category}
            onValueChange={(value) => setDraft((p) => ({ ...p, category: value as ProductCategory }))}
          >
            <SelectTrigger className="rounded-xl border-slate-200/90 bg-white/90 focus:ring-2 focus:ring-blue-400/40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CATEGORY_OPTIONS.map((category: ProductCategory) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-slate-700">Descripción</Label>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-7 rounded-full px-3 text-blue-700 hover:bg-blue-50"
            onClick={onSuggestAi}
          >
            <Sparkles className="mr-1 h-3.5 w-3.5" /> Sugerir con IA
          </Button>
        </div>
        <Textarea
          className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
          value={draft.description}
          onChange={(e) => setDraft((p) => ({ ...p, description: e.target.value }))}
          rows={4}
        />
      </div>
      <div className="mt-4 space-y-2">
        <Label className="text-slate-700">Tags</Label>
        <div className="flex gap-2">
          <Input
            className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="inverter, premium..."
          />
          <Button type="button" variant="outline" className="rounded-xl" onClick={onAddTag}>
            Agregar
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {(draft.tags ?? []).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full border-blue-100 bg-blue-50 text-blue-700"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
