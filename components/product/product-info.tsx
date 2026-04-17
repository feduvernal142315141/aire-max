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
            <Star className="mr-1 h-3 w-3 fill-current" />
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
        <h1 className="font-serif text-3xl font-bold text-balance md:text-4xl">{product.name}</h1>
      </div>

      {/* Price */}
      <div className="space-y-2">
        {product.originalPrice && (
          <div className="flex items-center gap-3">
            <p className="text-muted-foreground text-lg line-through">
              ${product.originalPrice.toFixed(2)}
            </p>
            <Badge variant="destructive">
              Ahorra ${(product.originalPrice - product.price).toFixed(2)} (
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}
              %)
            </Badge>
          </div>
        )}
        <div className="flex items-baseline gap-2">
          <p className="text-primary text-4xl font-bold">${product.price.toFixed(2)}</p>
        </div>
        <p className="text-muted-foreground text-sm">Instalación profesional incluida</p>
      </div>

      <Separator />

      {/* Quick Info */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-muted-foreground text-sm">Capacidad</p>
          <p className="font-semibold">{product.capacity} BTU</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Tipo</p>
          <p className="font-semibold capitalize">{product.category.replace("-", " ")}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Eficiencia</p>
          <p className="font-semibold">{product.energyRating}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Tecnología</p>
          <p className="font-semibold">{product.inverter ? "Inverter" : "On/Off"}</p>
        </div>
      </div>

      <Separator />

      {/* Features */}
      <div>
        <h3 className="mb-3 font-semibold">Características principales</h3>
        <div className="flex flex-wrap gap-2">
          {product.inverter && (
            <Badge variant="outline" className="text-sm">
              <Zap className="mr-1 h-4 w-4" />
              Inverter
            </Badge>
          )}
          {product.wifi && (
            <Badge variant="outline" className="text-sm">
              <Wifi className="mr-1 h-4 w-4" />
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
        <h3 className="mb-2 font-semibold">Descripción</h3>
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
        <Button size="lg" variant="outline" className="w-full bg-transparent text-lg" asChild>
          <Link href="/contacto">
            <Phone className="mr-2 h-5 w-5" />
            Contactar Asesor
          </Link>
        </Button>
      </div>

      {/* Benefits */}
      <Card className="bg-muted/50 border-0">
        <CardContent className="space-y-3 pt-6">
          <div className="flex items-start gap-3">
            <Shield className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold">Garantía extendida</p>
              <p className="text-muted-foreground text-sm">Hasta 5 años en equipo e instalación</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold">Instalación en 24-48h</p>
              <p className="text-muted-foreground text-sm">Servicio rápido y profesional</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold">Soporte 24/7</p>
              <p className="text-muted-foreground text-sm">Asistencia técnica siempre disponible</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
