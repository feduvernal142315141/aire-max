"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle, Phone, Shield, Star, Truck, Wifi, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { WHATSAPP_NUMBER } from "@/lib/constants"
import type { Product } from "@/types"

interface ProductInfoProps {
  product: Product
}

function EnergyBadge({ rating }: { rating: string }) {
  const colors: Record<string, string> = {
    "A+++": "bg-emerald-500/12 text-emerald-700 border-emerald-400/30 dark:text-emerald-400",
    "A++": "bg-emerald-400/12 text-emerald-700 border-emerald-400/25 dark:text-emerald-400",
    "A+": "bg-teal-400/12 text-teal-700 border-teal-400/25 dark:text-teal-400",
    A: "bg-sky-400/12 text-sky-700 border-sky-400/25 dark:text-sky-400",
  }
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${colors[rating] ?? colors["A"]}`}
    >
      {rating}
    </span>
  )
}

export function ProductInfo({ product }: ProductInfoProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  const waMessage = encodeURIComponent(
    `Hola, me interesa el ${product.name} (${product.capacity} BTU). ¿Podrían darme más información?`,
  )

  return (
    <div className="space-y-6">
      {/* Status row */}
      <div className="flex flex-wrap items-center gap-2">
        {product.popular && (
          <Badge className="border-0 bg-amber-400/90 text-amber-950 dark:bg-amber-500/80">
            <Star className="mr-1 h-3 w-3 fill-current" />
            Popular
          </Badge>
        )}
        {product.nuevo && (
          <Badge className="bg-primary border-0 text-white dark:bg-sky-500">Nuevo</Badge>
        )}
        {product.oferta && (
          <Badge variant="destructive" className="border-0">
            Oferta
          </Badge>
        )}
        <EnergyBadge rating={product.energyRating} />
      </div>

      {/* Title */}
      <div>
        <p className="text-muted-foreground mb-1 text-sm font-semibold tracking-widest uppercase">
          {product.brand}
        </p>
        <h1 className="text-foreground font-serif text-3xl leading-tight font-bold text-balance md:text-4xl">
          {product.name}
        </h1>
        {product.rating && (
          <div className="mt-2 flex items-center gap-1.5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(product.rating!) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm font-medium">
              {product.rating.toFixed(1)}
            </span>
          </div>
        )}
      </div>

      {/* Price block */}
      <div className="border-border bg-muted/20 dark:bg-muted/10 rounded-2xl border px-5 py-4">
        {product.originalPrice && (
          <div className="mb-1 flex items-center gap-3">
            <p className="text-muted-foreground text-base line-through">
              ${product.originalPrice.toLocaleString("es-MX", { minimumFractionDigits: 0 })}
            </p>
            {discount && (
              <span className="border-destructive/20 bg-destructive/10 text-destructive rounded-full border px-2 py-0.5 text-xs font-bold dark:border-red-800/30 dark:bg-red-900/20 dark:text-red-400">
                Ahorras {discount}% · $
                {(product.originalPrice - product.price).toLocaleString("es-MX", {
                  minimumFractionDigits: 0,
                })}
              </span>
            )}
          </div>
        )}
        <p className="text-primary text-4xl font-bold tabular-nums dark:text-sky-400">
          ${product.price.toLocaleString("es-MX", { minimumFractionDigits: 0 })}
        </p>
        <p className="text-muted-foreground mt-1 text-xs">
          Instalación profesional incluida · IVA incluido
        </p>
      </div>

      <Separator />

      {/* Quick specs grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          {
            label: "Capacidad",
            value: `${parseInt(product.capacity).toLocaleString("es-MX")} BTU`,
          },
          { label: "Tipo", value: product.category.replace("-", " "), capitalize: true },
          { label: "Eficiencia", value: product.energyRating },
          { label: "Tecnología", value: product.inverter ? "Inverter" : "On/Off" },
        ].map(({ label, value, capitalize }) => (
          <div
            key={label}
            className="border-border bg-muted/20 dark:bg-muted/10 rounded-xl border px-3 py-2.5"
          >
            <p className="text-muted-foreground text-[10px] font-semibold tracking-widest uppercase">
              {label}
            </p>
            <p
              className={`text-foreground mt-0.5 text-sm font-semibold ${capitalize ? "capitalize" : ""}`}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      <Separator />

      {/* Features */}
      <div>
        <p className="text-foreground mb-3 text-sm font-semibold">Características principales</p>
        <div className="flex flex-wrap gap-2">
          {product.inverter && (
            <span className="border-primary/15 bg-primary/8 text-primary inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium dark:border-sky-700/25 dark:bg-sky-500/12 dark:text-sky-400">
              <Zap className="h-3 w-3 fill-current" />
              Inverter
            </span>
          )}
          {product.wifi && (
            <span className="border-primary/15 bg-primary/8 text-primary inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium dark:border-sky-700/25 dark:bg-sky-500/12 dark:text-sky-400">
              <Wifi className="h-3 w-3" />
              Control WiFi
            </span>
          )}
          {product.features.map((feature) => (
            <span
              key={feature}
              className="border-border bg-muted/40 text-muted-foreground dark:bg-muted/20 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <Separator />

      {/* Description */}
      <div>
        <p className="text-foreground mb-2 text-sm font-semibold">Descripción</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-2.5 pt-2">
        <Button
          size="lg"
          className="group from-primary w-full rounded-xl bg-gradient-to-r to-sky-500 text-white shadow-[0_6px_20px_rgba(7,156,251,0.32)] transition-all hover:shadow-[0_8px_28px_rgba(7,156,251,0.42)] hover:brightness-105 dark:from-sky-500 dark:to-cyan-400"
          asChild
        >
          <Link href="/contacto">
            Solicitar cotización
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
        <Button
          size="lg"
          className="w-full rounded-xl bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.28)] transition-all hover:bg-[#1ebe58] hover:shadow-[0_6px_22px_rgba(37,211,102,0.38)]"
          asChild
        >
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Consultar por WhatsApp
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="w-full rounded-xl" asChild>
          <Link href="/contacto">
            <Phone className="mr-2 h-5 w-5" />
            Llamar a un asesor
          </Link>
        </Button>
      </div>

      {/* Trust strip */}
      <div className="divide-border border-border bg-muted/20 dark:bg-muted/10 divide-y rounded-2xl border">
        {[
          {
            icon: Shield,
            title: "Garantía extendida",
            desc: "Hasta 5 años en equipo e instalación",
          },
          {
            icon: Truck,
            title: "Instalación en 24-48h",
            desc: "Técnicos certificados a domicilio",
          },
          {
            icon: Phone,
            title: "Soporte 24/7",
            desc: "Asistencia técnica siempre disponible",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3 px-4 py-3.5">
            <Icon className="text-primary mt-0.5 h-4.5 w-4.5 shrink-0 dark:text-sky-400" />
            <div>
              <p className="text-foreground text-sm font-semibold">{title}</p>
              <p className="text-muted-foreground text-xs">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
