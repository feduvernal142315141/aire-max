import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wind, Snowflake, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { homePopularProductsData } from "@/data"

export function ProductsPreview() {
  return (
    <section className="relative overflow-hidden py-[120px] md:py-[120px]">
      <div className="animate-light-direction absolute inset-0 bg-gradient-to-b from-[#f9fcff] via-[#eaf6ff] to-[#d9f0ff]" />

      <div className="absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#079cfb] opacity-[0.08] blur-[180px]" />

      <div className="absolute top-[40%] left-[20%] h-[300px] w-[400px] rounded-full bg-[#079cfb] opacity-[0.06] blur-[120px]" />
      <div className="absolute top-[40%] left-1/2 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-[#079cfb] opacity-[0.06] blur-[120px]" />
      <div className="absolute top-[40%] right-[20%] h-[300px] w-[400px] rounded-full bg-[#079cfb] opacity-[0.06] blur-[120px]" />

      <div
        className="animate-float absolute top-1/2 left-0 h-[500px] w-[350px] bg-[#00e0ff] opacity-[0.08] blur-[140px]"
        style={{ animationDuration: "15s" }}
      />

      <div
        className="animate-float absolute top-[20%] right-[10%] h-[150px] w-[150px] rounded-full bg-white opacity-[0.06] blur-[80px]"
        style={{ animationDelay: "1s", animationDuration: "12s" }}
      />
      <div
        className="animate-float absolute bottom-[30%] left-[15%] h-[180px] w-[180px] rounded-full bg-white opacity-[0.05] blur-[90px]"
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
            <h2
              className="relative font-serif text-[28px] font-bold text-[#0f172a] md:text-[44px] lg:text-5xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Equipos Más{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent">
                  Populares
                </span>
                <span className="animate-shine-diagonal absolute inset-0 skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </span>
            </h2>
            <p className="mt-3 text-[18px] text-[#475569] opacity-90">
              Los aires acondicionados más vendidos y recomendados
            </p>
          </div>

          <Button
            variant="outline"
            asChild
            className="group animate-slide-right hidden border-[#037ecc]/20 bg-white/40 text-[#037ecc] backdrop-blur-sm transition-all duration-300 hover:border-[#00baff] hover:bg-gradient-to-r hover:from-[#037ecc]/5 hover:to-[#00baff]/5 md:flex"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/catalogo">
              <span className="transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#037ecc] group-hover:to-[#00baff] group-hover:bg-clip-text group-hover:text-transparent">
                Ver todo el catálogo
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Desktop grid */}
        <div className="mx-auto hidden max-w-7xl gap-12 md:grid md:grid-cols-3">
          {homePopularProductsData.map((product, index) => (
            <div
              key={product.productId}
              className="group animate-fade-up relative flex min-h-[460px] flex-col overflow-hidden rounded-[24px] border border-[#079cfb]/8 bg-white/70 shadow-[0_4px_40px_rgba(7,156,251,0.08),0_2px_8px_rgba(255,255,255,0.5)] backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_12px_50px_rgba(7,156,251,0.15)]"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative h-[250px] overflow-hidden rounded-t-[24px]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="image-inset-shadow object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-white/60 to-transparent" />

                <div className="group-hover:animate-diagonal-reflection absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100" />

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
                <p className="mb-1 text-[14px] font-medium text-[#64748b]">{product.brand}</p>
                <h3 className="mb-8 text-[20px] font-semibold text-[#0f172a]">{product.name}</h3>

                <div className="mb-8 flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="chip-hover-glow cursor-pointer border-0 bg-[#079cfb]/8 text-xs text-[#037ecc] transition-all duration-200 hover:bg-[#00baff]/15 hover:text-[#037ecc]"
                      title={`${feature} - Tecnología avanzada`}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex-grow" />

                <div className="mt-5 mb-6">
                  <p className="text-[22px] font-bold text-[#037ecc]">${product.price}</p>
                  <p className="mt-1 text-[14px] text-[#475569] opacity-80">
                    Instalación incluida: ${product.priceWithInstallation}
                  </p>
                </div>

                <Button
                  className="group/btn relative w-full overflow-hidden rounded-full font-semibold text-white shadow-[0_6px_18px_rgba(7,156,251,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(7,156,251,0.35)]"
                  style={{
                    background: "linear-gradient(90deg, #037ecc 0%, #00baff 100%)",
                    padding: "12px 28px",
                    fontSize: "15px",
                    letterSpacing: "0.02em",
                  }}
                  asChild
                >
                  <Link href={`/catalogo/${product.productId}`}>
                    <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-600 group-hover/btn:translate-x-full" />
                    <span className="relative z-10">Ver más</span>
                    <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
                className="flex w-[85vw] flex-shrink-0 snap-center flex-col overflow-hidden rounded-[24px] border border-[#079cfb]/8 bg-white/70 shadow-[0_4px_40px_rgba(7,156,251,0.05)] backdrop-blur-xl"
              >
                <div className="relative h-[280px] overflow-hidden rounded-t-[24px]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="image-inset-shadow object-cover"
                  />
                  <div className="absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-white/60 to-transparent" />

                  <Badge
                    className={`absolute top-4 left-4 bg-gradient-to-r ${product.badgeColor} rounded-full px-4 py-1.5 text-sm text-white shadow-[0_0_10px_rgba(7,156,251,0.4)]`}
                  >
                    {product.badge}
                  </Badge>

                  <Badge className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-[#10b981] to-[#00baff] px-3 py-1 text-sm text-white shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                    {product.energyBadge}
                  </Badge>
                </div>

                <div className="flex flex-grow flex-col p-8 text-center">
                  <p className="mb-1 text-[14px] font-medium text-[#64748b]">{product.brand}</p>
                  <h3 className="mb-6 text-[20px] font-semibold text-[#0f172a]">{product.name}</h3>

                  <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {product.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="border-0 bg-[#079cfb]/8 text-xs text-[#037ecc]"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex-grow" />

                  <div className="mb-6">
                    <p className="text-[22px] font-bold text-[#037ecc]">${product.price}</p>
                    <p className="mt-1 text-[14px] text-[#475569] opacity-85">
                      Instalación incluida: ${product.priceWithInstallation}
                    </p>
                  </div>

                  <Button
                    className="mx-auto w-[80%] rounded-full font-semibold text-white shadow-[0_6px_20px_rgba(7,156,251,0.25)]"
                    style={{
                      background: "linear-gradient(90deg, #037ecc 0%, #00baff 100%)",
                      padding: "14px 28px",
                      fontSize: "15px",
                    }}
                    asChild
                  >
                    <Link href={`/catalogo/${product.productId}`}>
                      <span>Ver más</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Button
            variant="outline"
            asChild
            className="w-full border-[#037ecc]/20 bg-white/40 text-[#037ecc] backdrop-blur-sm hover:border-[#00baff] hover:bg-gradient-to-r hover:from-[#037ecc]/5 hover:to-[#00baff]/5 sm:w-auto"
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
