import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Wifi, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
  viewMode?: "grid" | "list"
}

/* ─── Shared sub-components ─────────────────────────────────────────────────── */

function EnergyBadge({ rating }: { rating: string }) {
  const colors: Record<string, string> = {
    "A+++":
      "bg-emerald-500/15 text-emerald-700 border-emerald-400/30 dark:text-emerald-400 dark:border-emerald-500/25",
    "A++":
      "bg-emerald-400/15 text-emerald-700 border-emerald-400/25 dark:text-emerald-400 dark:border-emerald-500/20",
    "A+": "bg-teal-400/15 text-teal-700 border-teal-400/25 dark:text-teal-400 dark:border-teal-500/20",
    A: "bg-sky-400/15 text-sky-700 border-sky-400/25 dark:text-sky-400 dark:border-sky-500/20",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-wide",
        colors[rating] ?? colors["A"],
      )}
    >
      {rating}
    </span>
  )
}

function StatusBadges({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {product.popular && (
        <Badge className="border-0 bg-amber-400/90 text-[10px] font-semibold text-amber-950 dark:bg-amber-500/80">
          <Star className="mr-1 h-2.5 w-2.5 fill-current" />
          Popular
        </Badge>
      )}
      {product.nuevo && (
        <Badge className="bg-primary border-0 text-[10px] font-semibold text-white dark:bg-sky-500">
          Nuevo
        </Badge>
      )}
      {product.oferta && (
        <Badge variant="destructive" className="border-0 text-[10px] font-semibold">
          Oferta
        </Badge>
      )}
    </div>
  )
}

function FeatureChips({ inverter, wifi }: { inverter: boolean; wifi: boolean }) {
  if (!inverter && !wifi) return null
  return (
    <div className="flex flex-wrap gap-1.5">
      {inverter && (
        <span className="border-primary/15 bg-primary/8 text-primary inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium dark:border-sky-700/25 dark:bg-sky-500/12 dark:text-sky-400">
          <Zap className="h-2.5 w-2.5 fill-current" />
          Inverter
        </span>
      )}
      {wifi && (
        <span className="border-primary/15 bg-primary/8 text-primary inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium dark:border-sky-700/25 dark:bg-sky-500/12 dark:text-sky-400">
          <Wifi className="h-2.5 w-2.5" />
          WiFi
        </span>
      )}
    </div>
  )
}

function PriceBlock({ product, compact = false }: { product: Product; compact?: boolean }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  return (
    <div className="space-y-0.5">
      {product.originalPrice && (
        <div className="flex items-center gap-2">
          <p className="text-muted-foreground text-xs line-through">
            ${product.originalPrice.toLocaleString("es-MX", { minimumFractionDigits: 0 })}
          </p>
          {discount && (
            <span className="border-destructive/20 bg-destructive/10 text-destructive rounded-full border px-1.5 py-px text-[10px] font-bold dark:border-red-800/30 dark:bg-red-900/20 dark:text-red-400">
              −{discount}%
            </span>
          )}
        </div>
      )}
      <p
        className={cn(
          "text-primary font-bold tabular-nums dark:text-sky-400",
          compact ? "text-xl" : "text-2xl",
        )}
      >
        ${product.price.toLocaleString("es-MX", { minimumFractionDigits: 0 })}
      </p>
      <p className="text-muted-foreground text-[10px]">Instalación incluida</p>
    </div>
  )
}

/* ─── Grid card ─────────────────────────────────────────────────────────────── */

function GridCard({ product }: { product: Product }) {
  return (
    <article className="group border-border hover:border-primary/20 dark:bg-card/70 flex h-full flex-col overflow-hidden rounded-2xl border bg-white/75 shadow-[var(--elevation-1)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--elevation-3)] dark:hover:border-sky-700/30 dark:hover:shadow-[0_16px_48px_rgba(56,189,248,0.07)]">
      {/* Image */}
      <Link href={`/catalogo/${product.id}`} className="block shrink-0">
        <div className="from-muted/80 to-muted/40 relative h-52 overflow-hidden bg-gradient-to-br">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          {/* Hover shine sweep */}
          <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />

          {/* Status badges — top left */}
          <div className="absolute top-3 left-3">
            <StatusBadges product={product} />
          </div>

          {/* Energy rating — top right */}
          <div className="absolute top-3 right-3">
            <EnergyBadge rating={product.energyRating} />
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Brand + rating */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            {product.brand}
          </p>
          {product.rating && (
            <span className="flex items-center gap-0.5 text-xs font-medium text-amber-500 dark:text-amber-400">
              <Star className="h-3 w-3 fill-current" />
              {product.rating.toFixed(1)}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="text-foreground line-clamp-2 text-base leading-snug font-semibold">
          {product.name}
        </h3>

        {/* Capacity + category */}
        <p className="text-muted-foreground text-xs">
          {parseInt(product.capacity).toLocaleString("es-MX")} BTU
          {" · "}
          <span className="capitalize">{product.category.replace("-", " ")}</span>
        </p>

        {/* Feature chips */}
        <FeatureChips inverter={product.inverter} wifi={product.wifi} />

        {/* Spacer */}
        <div className="mt-auto space-y-3 pt-1">
          <PriceBlock product={product} />
          <Button
            asChild
            className="group/btn from-primary w-full rounded-xl bg-gradient-to-r to-sky-500 text-white shadow-[0_4px_14px_rgba(7,156,251,0.25)] transition-all duration-200 hover:shadow-[0_6px_20px_rgba(7,156,251,0.38)] hover:brightness-105 dark:from-sky-500 dark:to-cyan-400"
          >
            <Link href={`/catalogo/${product.id}`}>
              Ver detalles
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

/* ─── List card ─────────────────────────────────────────────────────────────── */

function ListCard({ product }: { product: Product }) {
  return (
    <article className="group border-border hover:border-primary/20 dark:bg-card/70 flex overflow-hidden rounded-2xl border bg-white/75 shadow-[var(--elevation-1)] backdrop-blur-sm transition-all duration-300 hover:shadow-[var(--elevation-2)] dark:hover:border-sky-700/30 dark:hover:shadow-[0_8px_28px_rgba(56,189,248,0.07)]">
      {/* Image */}
      <Link
        href={`/catalogo/${product.id}`}
        className="from-muted/80 to-muted/40 relative w-36 shrink-0 overflow-hidden bg-gradient-to-br sm:w-44"
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="176px"
        />
        {/* Status badges */}
        <div className="absolute top-2 left-2">
          <StatusBadges product={product} />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center">
        {/* Left info */}
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-muted-foreground text-[10px] font-semibold tracking-widest uppercase">
              {product.brand}
            </p>
            <EnergyBadge rating={product.energyRating} />
            {product.rating && (
              <span className="flex items-center gap-0.5 text-xs font-medium text-amber-500 dark:text-amber-400">
                <Star className="h-3 w-3 fill-current" />
                {product.rating.toFixed(1)}
              </span>
            )}
          </div>
          <h3 className="text-foreground line-clamp-1 text-base font-semibold">{product.name}</h3>
          <p className="text-muted-foreground text-xs">
            {parseInt(product.capacity).toLocaleString("es-MX")} BTU ·{" "}
            <span className="capitalize">{product.category.replace("-", " ")}</span>
          </p>
          <FeatureChips inverter={product.inverter} wifi={product.wifi} />
        </div>

        {/* Right: price + CTA */}
        <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
          <PriceBlock product={product} compact />
          <Button
            asChild
            size="sm"
            className="from-primary rounded-xl bg-gradient-to-r to-sky-500 text-white shadow-[0_4px_14px_rgba(7,156,251,0.25)] transition-all hover:brightness-105 dark:from-sky-500 dark:to-cyan-400"
          >
            <Link href={`/catalogo/${product.id}`}>
              Ver detalles
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

/* ─── Public export ─────────────────────────────────────────────────────────── */

export function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  return viewMode === "list" ? <ListCard product={product} /> : <GridCard product={product} />
}
