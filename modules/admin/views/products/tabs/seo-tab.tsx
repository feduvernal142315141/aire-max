"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { ProductAdminView } from "@/types"

export interface SeoTabProps {
  draft: ProductAdminView
  setDraft: (fn: (prev: ProductAdminView) => ProductAdminView) => void
}

const fieldClass =
  "rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/25 focus-visible:border-primary/50 transition-colors"
const labelClass = "text-sm font-medium text-foreground"

export function SeoTab({ draft, setDraft }: SeoTabProps) {
  const metaTitleLen = (draft.metaTitle ?? "").length
  const metaDescLen = (draft.metaDescription ?? "").length

  return (
    <div className="space-y-5">
      {/* Slug */}
      <div className="space-y-1.5">
        <Label className={labelClass}>Slug de URL</Label>
        <div className="border-border bg-background focus-within:ring-primary/25 focus-within:border-primary/50 flex items-center overflow-hidden rounded-xl border transition-all focus-within:ring-2">
          <span className="text-muted-foreground pr-1 pl-3 text-xs whitespace-nowrap select-none">
            /catalogo/
          </span>
          <input
            className="text-foreground placeholder:text-muted-foreground/60 flex-1 bg-transparent py-2 pr-3 text-sm outline-none"
            placeholder="split-inverter-12000-btu-lg"
            value={draft.slug}
            onChange={(e) => setDraft((p) => ({ ...p, slug: e.target.value }))}
          />
        </div>
      </div>

      {/* Meta title */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label className={labelClass}>Meta title</Label>
          <span
            className={`text-xs ${metaTitleLen > 60 ? "text-destructive" : "text-muted-foreground"}`}
          >
            {metaTitleLen}/60
          </span>
        </div>
        <Input
          className={fieldClass}
          placeholder="Título para buscadores"
          value={draft.metaTitle}
          onChange={(e) => setDraft((p) => ({ ...p, metaTitle: e.target.value }))}
        />
      </div>

      {/* Meta description */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label className={labelClass}>Meta description</Label>
          <span
            className={`text-xs ${metaDescLen > 160 ? "text-destructive" : "text-muted-foreground"}`}
          >
            {metaDescLen}/160
          </span>
        </div>
        <Textarea
          className={fieldClass}
          placeholder="Descripción breve para resultados de búsqueda"
          rows={4}
          value={draft.metaDescription}
          onChange={(e) => setDraft((p) => ({ ...p, metaDescription: e.target.value }))}
        />
      </div>

      {/* Preview SERP */}
      {(draft.metaTitle || draft.metaDescription) && (
        <div className="border-border bg-muted/20 dark:bg-muted/10 rounded-xl border p-4">
          <p className="text-muted-foreground mb-2 text-[10px] font-semibold tracking-widest uppercase">
            Preview búsqueda
          </p>
          <p className="text-primary line-clamp-1 text-sm font-medium dark:text-blue-400">
            {draft.metaTitle || draft.name}
          </p>
          <p className="mt-0.5 text-xs text-emerald-600 dark:text-emerald-400">
            {`https://aire-max.com/catalogo/${draft.slug || "slug-producto"}`}
          </p>
          <p className="text-muted-foreground mt-1 line-clamp-2 text-xs">
            {draft.metaDescription || draft.description}
          </p>
        </div>
      )}
    </div>
  )
}
