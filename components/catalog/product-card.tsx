import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Wifi, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  viewMode?: "grid" | "list"
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-xl">
      <div className="bg-muted relative h-48 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.popular && (
            <Badge className="bg-accent text-accent-foreground">
              <Star className="mr-1 h-3 w-3 fill-current" />
              Popular
            </Badge>
          )}
          {product.nuevo && <Badge className="bg-primary text-primary-foreground">Nuevo</Badge>}
          {product.oferta && <Badge variant="destructive">Oferta</Badge>}
        </div>
        <Badge variant="secondary" className="absolute top-3 right-3">
          {product.energyRating}
        </Badge>
      </div>
      <CardContent className="flex flex-1 flex-col pt-4">
        <div className="flex-1 space-y-2">
          <div>
            <p className="text-muted-foreground text-sm">{product.brand}</p>
            <h3 className="line-clamp-2 text-lg font-semibold">{product.name}</h3>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <span>{product.capacity} BTU</span>
            <span>•</span>
            <span className="capitalize">{product.category.replace("-", " ")}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.inverter && (
              <Badge variant="outline" className="text-xs">
                <Zap className="mr-1 h-3 w-3" />
                Inverter
              </Badge>
            )}
            {product.wifi && (
              <Badge variant="outline" className="text-xs">
                <Wifi className="mr-1 h-3 w-3" />
                WiFi
              </Badge>
            )}
          </div>
        </div>
        <div className="mt-auto space-y-3 pt-4">
          <div>
            {product.originalPrice && (
              <p className="text-muted-foreground text-sm line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
            )}
            <div className="flex items-baseline gap-2">
              <p className="text-primary text-2xl font-bold">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <Badge variant="destructive" className="text-xs">
                  -
                  {Math.round(
                    ((product.originalPrice - product.price) / product.originalPrice) * 100,
                  )}
                  %
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-xs">Instalación incluida</p>
          </div>
          <Button className="w-full" asChild>
            <Link href={`/catalogo/${product.id}`}>Ver detalles</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
