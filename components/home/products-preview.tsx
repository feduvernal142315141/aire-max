import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wind, Snowflake, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { homePopularProductsData } from "@/data"

export function ProductsPreview() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="bg-section absolute inset-0" />

      <div className="absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#079cfb] opacity-[0.08] blur-[180px] dark:opacity-[0.12]" />

      <div className="absolute top-[40%] left-[20%] h-[300px] w-[400px] rounded-full bg-[#079cfb] opacity-[0.06] blur-[120px] dark:opacity-[0.10]" />
      <div className="absolute top-[40%] left-1/2 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-[#079cfb] opacity-[0.06] blur-[120px] dark:opacity-[0.10]" />
      <div className="absolute top-[40%] right-[20%] h-[300px] w-[400px] rounded-full bg-[#079cfb] opacity-[0.06] blur-[120px] dark:opacity-[0.10]" />

      <div
        className="animate-float absolute top-1/2 left-0 h-[500px] w-[350px] bg-[#00e0ff] opacity-[0.08] blur-[140px] dark:opacity-[0.06]"
        style={{ animationDuration: "15s" }}
      />

      <div
        className="animate-float absolute top-[20%] right-[10%] h-[150px] w-[150px] rounded-full bg-white opacity-[0.06] blur-[80px] dark:bg-sky-900 dark:opacity-[0.08]"
        style={{ animationDelay: "1s", animationDuration: "12s" }}
      />
      <div
        className="animate-float absolute bottom-[30%] left-[15%] h-[180px] w-[180px] rounded-full bg-white opacity-[0.05] blur-[90px] dark:bg-sky-900 dark:opacity-[0.06]"
        style={{ animationDelay: "2.5s", animationDuration: "14s" }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <Wind className="animate-float absolute top-[15%] left-[8%] h-16 w-16 text-[#079cfb]" />
        <Snowflake
          className="animate-float absolute right-[12%] bottom-[25%] h-14 w-14 text-[#079cfb]"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles
          className="animate-float absolute top-[50%] right-[25%] h-12 w-12 text-[#079cfb]"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-[48px]">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="animate-fade-up space-y-2">
            <h2 className="section-heading text-foreground">
              Equipos Más{" "}
              <span className="relative inline-block">
                <span className="from-primary bg-gradient-to-r to-[#00baff] bg-clip-text text-transparent dark:from-sky-400 dark:to-cyan-300">
                  Populares
                </span>
              </span>
            </h2>
            <p className="section-body mt-3">
              Los aires acondicionados más vendidos y recomendados
            </p>
          </div>

          <Button
            variant="outline"
            asChild
            className="group border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5 dark:bg-muted/20 hidden bg-white/40 backdrop-blur-sm transition-all duration-300 md:flex dark:border-sky-700/30 dark:text-sky-400 dark:hover:border-sky-600/50"
          >
            <Link href="/catalogo">
              Ver todo el catálogo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Desktop grid */}
        <div className="mx-auto hidden max-w-7xl gap-12 md:grid md:grid-cols-3">
          {homePopularProductsData.map((product, index) => (
            <div
              key={product.productId}
              className="group animate-fade-up border-border dark:bg-card/70 relative flex min-h-[460px] flex-col overflow-hidden rounded-[24px] border bg-white/70 shadow-[0_4px_40px_rgba(7,156,251,0.08),0_2px_8px_rgba(255,255,255,0.5)] backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_12px_50px_rgba(7,156,251,0.15)] dark:shadow-none dark:hover:shadow-[0_12px_40px_rgba(56,189,248,0.08)]"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative h-[250px] overflow-hidden rounded-t-[24px]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="image-inset-shadow object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="dark:from-card/80 absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-white/60 to-transparent" />

                <div className="group-hover:animate-diagonal-reflection absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 dark:via-white/10" />

                <Badge
                  className={`absolute top-4 left-4 bg-gradient-to-r ${product.badgeColor} rounded-full px-3 py-1 text-xs text-white shadow-[0_0_10px_rgba(7,156,251,0.3)]`}
                  style={{
                    animation: "glow-pulse 4s ease-in-out infinite",
                  }}
                >
                  {product.badge}
                </Badge>

                <Badge className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-[#10b981] to-[#00baff] px-3 py-1 text-xs text-white shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                  {product.energyBadge}
                </Badge>

                <div className="absolute inset-0 flex items-center justify-center bg-[#0f172a]/0 transition-colors duration-300 group-hover:bg-[#0f172a]/20">
                  <span className="flex items-center gap-2 font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>Ver detalle</span>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="flex flex-grow flex-col p-8">
                <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-widest uppercase">
                  {product.brand}
                </p>
                <h3 className="text-foreground mb-5 text-lg leading-snug font-semibold">
                  {product.name}
                </h3>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {product.features.map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-primary/8 text-primary border-0 text-xs dark:bg-sky-500/10 dark:text-sky-400"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex-grow" />

                <div className="mb-5 space-y-0.5">
                  <p className="text-primary text-2xl font-bold tabular-nums dark:text-sky-400">
                    ${product.price}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Instalación incluida: ${product.priceWithInstallation}
                  </p>
                </div>

                <Button
                  className="group/btn from-primary w-full rounded-xl bg-gradient-to-r to-[#00baff] font-semibold text-white shadow-[0_4px_14px_rgba(7,156,251,0.25)] transition-all hover:shadow-[0_6px_20px_rgba(7,156,251,0.38)] hover:brightness-105 dark:from-sky-500 dark:to-cyan-400"
                  asChild
                >
                  <Link href={`/catalogo/${product.productId}`}>
                    Ver detalles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Link>
                </Button>
              </div>

              <div className="absolute inset-0 rounded-[24px] border-2 border-transparent transition-colors duration-500 group-hover:border-[#079cfb]/25" />
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="scrollbar-hide -mx-6 snap-x snap-mandatory overflow-x-auto px-6 md:hidden">
          <div className="flex gap-6 pb-4">
            {homePopularProductsData.map((product) => (
              <div
                key={product.productId}
                className="border-border dark:bg-card/70 flex w-[85vw] flex-shrink-0 snap-center flex-col overflow-hidden rounded-[24px] border bg-white/70 shadow-[0_4px_40px_rgba(7,156,251,0.05)] backdrop-blur-xl dark:shadow-none"
              >
                <div className="relative h-[280px] overflow-hidden rounded-t-[24px]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="image-inset-shadow object-cover"
                  />
                  <div className="dark:from-card/80 absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-white/60 to-transparent" />

                  <Badge
                    className={`absolute top-4 left-4 bg-gradient-to-r ${product.badgeColor} rounded-full px-4 py-1.5 text-sm text-white shadow-[0_0_10px_rgba(7,156,251,0.4)]`}
                  >
                    {product.badge}
                  </Badge>

                  <Badge className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-[#10b981] to-[#00baff] px-3 py-1 text-sm text-white shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                    {product.energyBadge}
                  </Badge>
                </div>

                <div className="flex flex-grow flex-col p-7 text-center">
                  <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-widest uppercase">
                    {product.brand}
                  </p>
                  <h3 className="text-foreground mb-4 text-lg font-semibold">{product.name}</h3>

                  <div className="mb-6 flex flex-wrap justify-center gap-1.5">
                    {product.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-primary/8 text-primary border-0 text-xs dark:bg-sky-500/10 dark:text-sky-400"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex-grow" />

                  <div className="mb-5 space-y-0.5">
                    <p className="text-primary text-2xl font-bold tabular-nums dark:text-sky-400">
                      ${product.price}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Instalación incluida: ${product.priceWithInstallation}
                    </p>
                  </div>

                  <Button
                    className="from-primary w-full rounded-xl bg-gradient-to-r to-[#00baff] font-semibold text-white shadow-[0_4px_14px_rgba(7,156,251,0.25)] hover:brightness-105 dark:from-sky-500 dark:to-cyan-400"
                    asChild
                  >
                    <Link href={`/catalogo/${product.productId}`}>
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button
            variant="outline"
            asChild
            className="border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5 dark:bg-muted/20 w-full bg-white/40 backdrop-blur-sm sm:w-auto dark:border-sky-700/30 dark:text-sky-400"
          >
            <Link href="/catalogo">
              Ver todo el catálogo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
