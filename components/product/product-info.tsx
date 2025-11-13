"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Star, Wifi, Zap, Shield, Truck, Phone, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/products"
import Link from "next/link"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {product.popular && (
          <Badge className="bg-accent text-accent-foreground">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Popular
          </Badge>
        )}
        {product.nuevo && <Badge className="bg-primary text-primary-foreground">Nuevo</Badge>}
        {product.oferta && <Badge variant="destructive">Oferta</Badge>}
        <Badge variant="secondary">{product.energyRating}</Badge>
      </div>

      {/* Title and Brand */}
      <div>
        <p className="text-muted-foreground mb-1">{product.brand}</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-balance">{product.name}</h1>
      </div>

      {/* Price */}
      <div className="space-y-2">
        {product.originalPrice && (
          <div className="flex items-center gap-3">
            <p className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</p>
            <Badge variant="destructive">
              Ahorra ${(product.originalPrice - product.price).toFixed(2)} (
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%)
            </Badge>
          </div>
        )}
        <div className="flex items-baseline gap-2">
          <p className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</p>
        </div>
        <p className="text-sm text-muted-foreground">Instalación profesional incluida</p>
      </div>

      <Separator />

      {/* Quick Info */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Capacidad</p>
          <p className="font-semibold">{product.capacity} BTU</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Tipo</p>
          <p className="font-semibold capitalize">{product.category.replace("-", " ")}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Eficiencia</p>
          <p className="font-semibold">{product.energyRating}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Tecnología</p>
          <p className="font-semibold">{product.inverter ? "Inverter" : "On/Off"}</p>
        </div>
      </div>

      <Separator />

      {/* Features */}
      <div>
        <h3 className="font-semibold mb-3">Características principales</h3>
        <div className="flex flex-wrap gap-2">
          {product.inverter && (
            <Badge variant="outline" className="text-sm">
              <Zap className="w-4 h-4 mr-1" />
              Inverter
            </Badge>
          )}
          {product.wifi && (
            <Badge variant="outline" className="text-sm">
              <Wifi className="w-4 h-4 mr-1" />
              Control WiFi
            </Badge>
          )}
          {product.features.map((feature, index) => (
            <Badge key={index} variant="outline" className="text-sm">
              {feature}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Description */}
      <div>
        <h3 className="font-semibold mb-2">Descripción</h3>
        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 pt-4">
        <Button size="lg" className="w-full text-lg" asChild>
          <Link href="/cotizacion">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Solicitar Cotización
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="w-full text-lg bg-transparent" asChild>
          <Link href="/contacto">
            <Phone className="mr-2 h-5 w-5" />
            Contactar Asesor
          </Link>
        </Button>
      </div>

      {/* Benefits */}
      <Card className="bg-muted/50 border-0">
        <CardContent className="pt-6 space-y-3">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Garantía extendida</p>
              <p className="text-sm text-muted-foreground">Hasta 5 años en equipo e instalación</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Instalación en 24-48h</p>
              <p className="text-sm text-muted-foreground">Servicio rápido y profesional</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Soporte 24/7</p>
              <p className="text-sm text-muted-foreground">Asistencia técnica siempre disponible</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
