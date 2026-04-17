"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { ProductAdminView } from "@/types"

export interface MediaTabProps {
  draft: ProductAdminView
  setDraft: (fn: (prev: ProductAdminView) => ProductAdminView) => void
}

export function MediaTab({ draft, setDraft }: MediaTabProps) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_6px_20px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="space-y-2">
        <Label className="text-slate-700">URL imagen principal</Label>
        <Input
          className="rounded-xl border-slate-200/90 bg-white/90 focus-visible:ring-2 focus-visible:ring-blue-400/40"
          value={draft.image}
          onChange={(e) => setDraft((p) => ({ ...p, image: e.target.value }))}
        />
      </div>
      <div className="mt-4 rounded-2xl border border-dashed border-blue-300/80 bg-gradient-to-br from-blue-50/80 to-cyan-50/60 p-8 text-center text-sm text-slate-600">
        <p className="font-medium text-slate-700">Drag & drop premium (mock)</p>
        <p className="mt-1 text-xs">
          Subida, orden y selección de imagen principal en próxima fase.
        </p>
      </div>
    </div>
  )
}
