"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Product } from "@/types"

interface ProductGalleryProps {
  product: Product
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const images = [product.image]
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="group border-border bg-muted/30 relative aspect-square overflow-hidden rounded-2xl border">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        {/* Zoom hint */}
        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 dark:border-white/20 dark:bg-black/20">
          <ZoomIn className="h-3.5 w-3.5 text-white" />
        </div>

        {/* Navigation (when multiple images) */}
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="dark:bg-card/70 dark:hover:bg-card absolute top-1/2 left-3 h-9 w-9 -translate-y-1/2 rounded-full border border-white/20 bg-white/70 shadow-md backdrop-blur-sm hover:bg-white"
              onClick={() => setCurrentImage((p) => (p - 1 + images.length) % images.length)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="dark:bg-card/70 dark:hover:bg-card absolute top-1/2 right-3 h-9 w-9 -translate-y-1/2 rounded-full border border-white/20 bg-white/70 shadow-md backdrop-blur-sm hover:bg-white"
              onClick={() => setCurrentImage((p) => (p + 1) % images.length)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={cn(
                "relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-200",
                currentImage === index
                  ? "border-primary shadow-[0_0_0_1px_rgba(7,156,251,0.3)] dark:border-sky-500"
                  : "hover:border-border border-transparent",
              )}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} vista ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
