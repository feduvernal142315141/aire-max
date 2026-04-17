"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import type { ProductAdminView, ProductBrand, ProductCapacity } from "@/types"

import { GeneralTab } from "./tabs/general-tab"
import { MediaTab } from "./tabs/media-tab"
import { PricingTab } from "./tabs/pricing-tab"
import { SeoTab } from "./tabs/seo-tab"
import { SpecsTab } from "./tabs/specs-tab"

export interface ProductDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  editingId: string | null
  draft: ProductAdminView
  setDraft: (fn: (prev: ProductAdminView) => ProductAdminView) => void
  tagInput: string
  setTagInput: (s: string) => void
  onAddTag: () => void
  onSave: () => void
  brands: ProductBrand[]
  capacities: ProductCapacity[]
}

const TAB_TRIGGER_CLASS =
  "rounded-xl text-slate-600 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-[0_8px_18px_rgba(37,99,235,0.35)]"

export function ProductDrawer({
  open,
  onOpenChange,
  editingId,
  draft,
  setDraft,
  tagInput,
  setTagInput,
  onAddTag,
  onSave,
  brands,
  capacities,
}: ProductDrawerProps) {
  const { toast } = useToast()

  const handleSuggestAi = () =>
    toast({
      title: "IA mock",
      description: "Próximo paso: generador automático de descripción.",
    })

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full border-l border-white/40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(241,247,255,0.98)_45%,_rgba(235,244,255,0.98)_100%)] p-0 sm:max-w-[760px]"
      >
        <div className="flex h-full flex-col">
          <div className="border-b border-white/50 bg-gradient-to-r from-blue-600/[0.10] via-cyan-400/[0.08] to-blue-500/[0.06] px-6 py-5 backdrop-blur-xl">
            <SheetHeader className="space-y-3 text-left">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <SheetTitle className="text-2xl font-semibold tracking-tight text-slate-900">
                    {editingId ? "Editar producto" : "Crear producto"}
                  </SheetTitle>
                  <p className="mt-1 text-sm text-slate-600">
                    Formulario premium con edición rápida, specs técnicas y SEO listo para backend.
                  </p>
                </div>
                <Badge className="border-blue-200 bg-blue-100/90 text-blue-700">Mock mode</Badge>
              </div>
            </SheetHeader>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pt-5 pb-28">
            <Tabs defaultValue="general" className="space-y-5">
              <TabsList className="grid h-auto grid-cols-5 rounded-2xl border border-white/70 bg-white/85 p-1 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur">
                <TabsTrigger value="general" className={TAB_TRIGGER_CLASS}>
                  General
                </TabsTrigger>
                <TabsTrigger value="pricing" className={TAB_TRIGGER_CLASS}>
                  Precio
                </TabsTrigger>
                <TabsTrigger value="specs" className={TAB_TRIGGER_CLASS}>
                  Specs
                </TabsTrigger>
                <TabsTrigger value="media" className={TAB_TRIGGER_CLASS}>
                  Media
                </TabsTrigger>
                <TabsTrigger value="seo" className={TAB_TRIGGER_CLASS}>
                  SEO
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                <GeneralTab
                  draft={draft}
                  setDraft={setDraft}
                  brands={brands}
                  tagInput={tagInput}
                  setTagInput={setTagInput}
                  onAddTag={onAddTag}
                  onSuggestAi={handleSuggestAi}
                />
              </TabsContent>

              <TabsContent value="pricing" className="space-y-4">
                <PricingTab draft={draft} setDraft={setDraft} />
              </TabsContent>

              <TabsContent value="specs" className="space-y-4">
                <SpecsTab draft={draft} setDraft={setDraft} capacities={capacities} />
              </TabsContent>

              <TabsContent value="media" className="space-y-4">
                <MediaTab draft={draft} setDraft={setDraft} />
              </TabsContent>

              <TabsContent value="seo" className="space-y-4">
                <SeoTab draft={draft} setDraft={setDraft} />
              </TabsContent>
            </Tabs>
          </div>

          <div className="sticky bottom-0 border-t border-white/60 bg-white/70 px-6 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-xl" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_10px_24px_rgba(37,99,235,0.35)] transition-all hover:shadow-[0_12px_30px_rgba(37,99,235,0.42)] hover:brightness-110"
                onClick={onSave}
              >
                Guardar producto
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
