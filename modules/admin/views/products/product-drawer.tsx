"use client"

import { Package, Save, X } from "lucide-react"

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
  "cursor-pointer rounded-lg text-sm font-medium text-muted-foreground transition-all duration-150" +
  " data-[state=active]:bg-primary data-[state=active]:text-white" +
  " data-[state=active]:shadow-[0_4px_12px_rgba(7,156,251,0.25)]" +
  " dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:shadow-[0_4px_12px_rgba(37,99,235,0.3)]" +
  " hover:text-foreground hover:bg-muted/50"

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
      title: "IA — próximamente",
      description: "Generador automático de descripción con inteligencia artificial.",
    })

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="border-border bg-background flex w-full flex-col border-l p-0 sm:max-w-[720px]"
      >
        {/* Header */}
        <div className="border-border shrink-0 border-b px-6 py-5">
          <SheetHeader className="text-left">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-xl dark:bg-blue-500/15 dark:text-blue-400">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <SheetTitle className="text-foreground text-lg leading-tight font-semibold">
                  {editingId ? "Editar producto" : "Nuevo producto"}
                </SheetTitle>
                <p className="text-muted-foreground mt-0.5 text-xs">
                  {editingId
                    ? `Editando · ID ${editingId}`
                    : "Completa la información del producto"}
                </p>
              </div>
            </div>
          </SheetHeader>
        </div>

        {/* Tabs + content */}
        <div className="flex-1 overflow-y-auto">
          <Tabs defaultValue="general" className="flex h-full flex-col">
            {/* Tab bar */}
            <div className="border-border bg-background/95 sticky top-0 z-10 border-b px-6 py-2 backdrop-blur-sm">
              <TabsList className="border-border bg-muted/40 dark:bg-muted/20 inline-flex h-auto gap-1 rounded-xl border p-1">
                {["general", "pricing", "specs", "media", "seo"].map((tab) => (
                  <TabsTrigger key={tab} value={tab} className={TAB_TRIGGER_CLASS}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab content */}
            <div className="flex-1 px-6 py-5">
              <TabsContent value="general" className="mt-0 space-y-0">
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

              <TabsContent value="pricing" className="mt-0 space-y-0">
                <PricingTab draft={draft} setDraft={setDraft} />
              </TabsContent>

              <TabsContent value="specs" className="mt-0 space-y-0">
                <SpecsTab draft={draft} setDraft={setDraft} capacities={capacities} />
              </TabsContent>

              <TabsContent value="media" className="mt-0 space-y-0">
                <MediaTab draft={draft} setDraft={setDraft} />
              </TabsContent>

              <TabsContent value="seo" className="mt-0 space-y-0">
                <SeoTab draft={draft} setDraft={setDraft} />
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Footer actions */}
        <div className="border-border bg-background/95 shrink-0 border-t px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-border text-muted-foreground hover:text-foreground cursor-pointer gap-1.5 rounded-xl"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
              Cancelar
            </Button>
            <Button
              className="from-primary flex-1 cursor-pointer gap-2 rounded-xl bg-gradient-to-r to-sky-500 text-white shadow-[0_4px_16px_rgba(7,156,251,0.3)] transition-all duration-200 hover:shadow-[0_6px_22px_rgba(7,156,251,0.4)] hover:brightness-105 dark:from-blue-600 dark:to-blue-500 dark:shadow-[0_4px_16px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_6px_22px_rgba(37,99,235,0.4)]"
              onClick={onSave}
            >
              <Save className="h-4 w-4" />
              {editingId ? "Guardar cambios" : "Crear producto"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
