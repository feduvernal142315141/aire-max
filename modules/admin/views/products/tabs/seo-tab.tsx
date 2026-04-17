"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { ProductAdminView } from "@/types"

export interface SeoTabProps {
  draft: ProductAdminView
  setDraft: (fn: (prev: ProductAdminView) => ProductAdminView) => void
}

export function SeoTab({ draft, setDraft }: SeoTabProps) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_6px_20px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="space-y-2">
        <Label className="text-slate-700">Slug</Label>
        <Input
          className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
          value={draft.slug}
          onChange={(e) => setDraft((p) => ({ ...p, slug: e.target.value }))}
        />
      </div>
      <div className="mt-4 space-y-2">
        <Label className="text-slate-700">Meta title</Label>
        <Input
          className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
          value={draft.metaTitle}
          onChange={(e) => setDraft((p) => ({ ...p, metaTitle: e.target.value }))}
        />
      </div>
      <div className="mt-4 space-y-2">
        <Label className="text-slate-700">Meta description</Label>
        <Textarea
          className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
          rows={4}
          value={draft.metaDescription}
          onChange={(e) => setDraft((p) => ({ ...p, metaDescription: e.target.value }))}
        />
      </div>
    </div>
  )
}
