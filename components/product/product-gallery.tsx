"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import type { Product } from "@/lib/products"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductGalleryProps {
  product: Product
}

export function ProductGallery({ product }: ProductGalleryProps) {
  // In a real app, products would have multiple images
  const images = [product.image, product.image, product.image]
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <Card className="bg-muted relative aspect-square overflow-hidden">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
        />
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-1/2 left-4 -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-1/2 right-4 -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </Card>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                currentImage === index
                  ? "border-primary"
                  : "hover:border-muted-foreground/20 border-transparent"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} ${index + 1}`}
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
