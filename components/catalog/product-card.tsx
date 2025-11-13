import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Wifi, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all overflow-hidden h-full flex flex-col">
      <div className="relative h-48 bg-muted overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.popular && (
            <Badge className="bg-accent text-accent-foreground">
              <Star className="w-3 h-3 mr-1 fill-current" />
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
      <CardContent className="pt-4 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <div>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
            <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{product.capacity} BTU</span>
            <span>•</span>
            <span className="capitalize">{product.category.replace("-", " ")}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.inverter && (
              <Badge variant="outline" className="text-xs">
                <Zap className="w-3 h-3 mr-1" />
                Inverter
              </Badge>
            )}
            {product.wifi && (
              <Badge variant="outline" className="text-xs">
                <Wifi className="w-3 h-3 mr-1" />
                WiFi
              </Badge>
            )}
          </div>
        </div>
        <div className="pt-4 mt-auto space-y-3">
          <div>
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</p>
            )}
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <Badge variant="destructive" className="text-xs">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground">Instalación incluida</p>
          </div>
          <Button className="w-full" asChild>
            <Link href={`/catalogo/${product.id}`}>Ver detalles</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
