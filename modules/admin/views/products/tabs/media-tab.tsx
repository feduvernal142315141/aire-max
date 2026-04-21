"use client"

import { useRef, useState, useTransition } from "react"
import { ImageIcon, Link2, Upload, X, Loader2 } from "lucide-react"
import Image from "next/image"

import { uploadProductImage } from "@/app/actions/upload"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { ProductAdminView } from "@/types"

export interface MediaTabProps {
  draft: ProductAdminView
  setDraft: (fn: (prev: ProductAdminView) => ProductAdminView) => void
}

const fieldClass =
  "rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/25 focus-visible:border-primary/50 transition-colors dark:bg-muted/20"
const labelClass = "text-sm font-medium text-foreground"

export function MediaTab({ draft, setDraft }: MediaTabProps) {
  const hasImage = Boolean(draft.image)
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadError(null)

    const form = new FormData()
    form.append("file", file)

    startTransition(async () => {
      const result = await uploadProductImage(form)
      if (result.error) {
        setUploadError(result.error)
      } else if (result.url) {
        setDraft((p) => ({ ...p, image: result.url! }))
      }
      // Reset so same file can be re-selected
      if (fileRef.current) fileRef.current.value = ""
    })
  }

  return (
    <div className="space-y-5">
      {/* URL manual */}
      <div className="space-y-1.5">
        <Label className={labelClass}>URL de imagen</Label>
        <div className="relative">
          <Link2 className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2" />
          <Input
            className={`${fieldClass} pl-9`}
            placeholder="https://example.com/imagen.jpg"
            value={draft.image}
            onChange={(e) => setDraft((p) => ({ ...p, image: e.target.value }))}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <span className="bg-border h-px flex-1" />
        <span className="text-muted-foreground text-xs">o sube un archivo</span>
        <span className="bg-border h-px flex-1" />
      </div>

      {/* Upload button */}
      <div className="space-y-2">
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          className="sr-only"
          onChange={handleFileChange}
          disabled={isPending}
        />
        <Button
          type="button"
          variant="outline"
          disabled={isPending}
          onClick={() => fileRef.current?.click()}
          className="border-border bg-muted/20 text-foreground hover:bg-primary/8 hover:border-primary/30 hover:text-primary focus-visible:ring-primary/30 dark:bg-muted/15 dark:hover:bg-primary/12 w-full cursor-pointer gap-2 rounded-xl text-sm font-medium transition-all dark:hover:text-sky-400"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Subiendo…
            </>
          ) : (
            <>
              <Upload className="h-4 w-4" />
              Subir desde dispositivo
            </>
          )}
        </Button>
        <p className="text-muted-foreground text-[11px]">JPEG · PNG · WebP · AVIF — máx. 5 MB</p>
        {uploadError && (
          <p className="border-destructive/30 bg-destructive/8 text-destructive dark:bg-destructive/12 rounded-lg border px-3 py-2 text-xs">
            {uploadError}
          </p>
        )}
      </div>

      {/* Preview */}
      {hasImage ? (
        <div className="border-border bg-muted/20 overflow-hidden rounded-xl border">
          <div className="relative h-52 w-full">
            <Image
              src={draft.image}
              alt="Preview"
              fill
              className="object-contain p-4"
              unoptimized
            />
            <button
              type="button"
              onClick={() => setDraft((p) => ({ ...p, image: "" }))}
              className="border-border bg-background/90 text-muted-foreground hover:bg-destructive/10 hover:text-destructive focus-visible:ring-destructive/40 absolute top-2 right-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
              aria-label="Eliminar imagen"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="border-border border-t px-4 py-2">
            <p className="text-muted-foreground truncate text-xs">{draft.image}</p>
          </div>
        </div>
      ) : (
        <button
          type="button"
          disabled={isPending}
          onClick={() => fileRef.current?.click()}
          className="border-border bg-muted/20 hover:border-primary/30 hover:bg-primary/5 dark:bg-muted/10 flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed py-12 text-center transition-all dark:hover:border-sky-700/40 dark:hover:bg-sky-500/5"
        >
          <div className="border-border bg-background flex h-12 w-12 items-center justify-center rounded-xl border">
            {isPending ? (
              <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
            ) : (
              <ImageIcon className="text-muted-foreground h-5 w-5" />
            )}
          </div>
          <div>
            <p className="text-foreground text-sm font-medium">
              {isPending ? "Subiendo imagen…" : "Sin imagen"}
            </p>
            <p className="text-muted-foreground mt-0.5 text-xs">
              {isPending ? "Por favor espera" : "Haz clic aquí o arrastra un archivo"}
            </p>
          </div>
        </button>
      )}
    </div>
  )
}
