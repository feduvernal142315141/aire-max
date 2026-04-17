import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wind, Snowflake, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homePopularProductsData } from "@/data";

export function ProductsPreview() {
  return (
    <section className="relative py-[120px] md:py-[120px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9fcff] via-[#eaf6ff] to-[#d9f0ff] animate-light-direction" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#079cfb] opacity-[0.08] blur-[180px] rounded-full" />

      <div className="absolute top-[40%] left-[20%] w-[400px] h-[300px] bg-[#079cfb] opacity-[0.06] blur-[120px] rounded-full" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#079cfb] opacity-[0.06] blur-[120px] rounded-full" />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[300px] bg-[#079cfb] opacity-[0.06] blur-[120px] rounded-full" />

      <div
        className="absolute top-1/2 left-0 w-[350px] h-[500px] bg-[#00e0ff] opacity-[0.08] blur-[140px] animate-float"
        style={{ animationDuration: "15s" }}
      />

      <div
        className="absolute top-[20%] right-[10%] w-[150px] h-[150px] bg-white opacity-[0.06] blur-[80px] rounded-full animate-float"
        style={{ animationDelay: "1s", animationDuration: "12s" }}
      />
      <div
        className="absolute bottom-[30%] left-[15%] w-[180px] h-[180px] bg-white opacity-[0.05] blur-[90px] rounded-full animate-float"
        style={{ animationDelay: "2.5s", animationDuration: "14s" }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <Wind className="absolute top-[15%] left-[8%] w-16 h-16 text-[#079cfb] animate-float" />
        <Snowflake
          className="absolute bottom-[25%] right-[12%] w-14 h-14 text-[#079cfb] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles
          className="absolute top-[50%] right-[25%] w-12 h-12 text-[#079cfb] animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-[48px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="space-y-2 animate-fade-up">
            <h2
              className="text-[28px] md:text-[44px] lg:text-5xl font-serif font-bold text-[#0f172a] relative"
              style={{ letterSpacing: "-0.02em" }}
            >
              Equipos Más{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent">
                  Populares
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 animate-shine-diagonal" />
              </span>
            </h2>
            <p className="text-[18px] text-[#475569] opacity-90 mt-3">
              Los aires acondicionados más vendidos y recomendados
            </p>
          </div>

          <Button
            variant="outline"
            asChild
            className="hidden md:flex bg-white/40 backdrop-blur-sm border-[#037ecc]/20 text-[#037ecc] hover:border-[#00baff] hover:bg-gradient-to-r hover:from-[#037ecc]/5 hover:to-[#00baff]/5 transition-all duration-300 group animate-slide-right"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/catalogo">
              <span className="group-hover:bg-gradient-to-r group-hover:from-[#037ecc] group-hover:to-[#00baff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Ver todo el catálogo
              </span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {homePopularProductsData.map((product, index) => (
            <div
              key={product.productId}
              className="group relative bg-white/70 backdrop-blur-lg border border-[#079cfb]/8 rounded-[24px] shadow-[0_4px_40px_rgba(7,156,251,0.08),0_2px_8px_rgba(255,255,255,0.5)] hover:shadow-[0_12px_50px_rgba(7,156,251,0.15)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] overflow-hidden min-h-[460px] flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative h-[250px] overflow-hidden rounded-t-[24px]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 image-inset-shadow"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/60 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-diagonal-reflection" />

                <Badge
                  className={`absolute top-4 left-4 bg-gradient-to-r ${product.badgeColor} text-white rounded-full text-xs px-3 py-1 shadow-[0_0_10px_rgba(7,156,251,0.3)]`}
                  style={{
                    animation: "glow-pulse 4s ease-in-out infinite",
                  }}
                >
                  {product.badge}
                </Badge>

                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#10b981] to-[#00baff] text-white rounded-full text-xs px-3 py-1 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                  {product.energyBadge}
                </Badge>

                <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <span>Ver detalle</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <p className="text-[14px] font-medium text-[#64748b] mb-1">{product.brand}</p>
                <h3 className="text-[20px] font-semibold text-[#0f172a] mb-8">{product.name}</h3>

                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-[#079cfb]/8 text-[#037ecc] hover:bg-[#00baff]/15 hover:text-[#037ecc] transition-all duration-200 border-0 chip-hover-glow cursor-pointer"
                      title={`${feature} - Tecnología avanzada`}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex-grow" />

                <div className="mb-6 mt-5">
                  <p className="text-[22px] font-bold text-[#037ecc]">${product.price}</p>
                  <p className="text-[14px] text-[#475569] opacity-80 mt-1">
                    Instalación incluida: ${product.priceWithInstallation}
                  </p>
                </div>

                <Button
                  className="w-full text-white shadow-[0_6px_18px_rgba(7,156,251,0.25)] hover:shadow-[0_8px_25px_rgba(7,156,251,0.35)] rounded-full transition-all duration-300 group/btn relative overflow-hidden hover:scale-[1.03] font-semibold"
                  style={{
                    background: "linear-gradient(90deg, #037ecc 0%, #00baff 100%)",
                    padding: "12px 28px",
                    fontSize: "15px",
                    letterSpacing: "0.02em",
                  }}
                  asChild
                >
                  <Link href={`/catalogo/${product.productId}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-600 skew-x-12" />
                    <span className="relative z-10">Ver más</span>
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>

              <div className="absolute inset-0 rounded-[24px] border-2 border-transparent group-hover:border-[#079cfb]/25 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          <div className="flex gap-6 pb-4">
            {homePopularProductsData.map((product) => (
              <div
                key={product.productId}
                className="flex-shrink-0 w-[85vw] snap-center bg-white/70 backdrop-blur-xl border border-[#079cfb]/8 rounded-[24px] shadow-[0_4px_40px_rgba(7,156,251,0.05)] overflow-hidden flex flex-col"
              >
                <div className="relative h-[280px] overflow-hidden rounded-t-[24px]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover image-inset-shadow"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/60 to-transparent" />

                  <Badge
                    className={`absolute top-4 left-4 bg-gradient-to-r ${product.badgeColor} text-white rounded-full text-sm px-4 py-1.5 shadow-[0_0_10px_rgba(7,156,251,0.4)]`}
                  >
                    {product.badge}
                  </Badge>

                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#10b981] to-[#00baff] text-white rounded-full text-sm px-3 py-1 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                    {product.energyBadge}
                  </Badge>
                </div>

                <div className="p-8 flex flex-col flex-grow text-center">
                  <p className="text-[14px] font-medium text-[#64748b] mb-1">{product.brand}</p>
                  <h3 className="text-[20px] font-semibold text-[#0f172a] mb-6">{product.name}</h3>

                  <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-[#079cfb]/8 text-[#037ecc] border-0">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex-grow" />

                  <div className="mb-6">
                    <p className="text-[22px] font-bold text-[#037ecc]">${product.price}</p>
                    <p className="text-[14px] text-[#475569] opacity-85 mt-1">
                      Instalación incluida: ${product.priceWithInstallation}
                    </p>
                  </div>

                  <Button
                    className="w-[80%] mx-auto text-white shadow-[0_6px_20px_rgba(7,156,251,0.25)] rounded-full font-semibold"
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
            className="w-full sm:w-auto bg-white/40 backdrop-blur-sm border-[#037ecc]/20 text-[#037ecc] hover:border-[#00baff] hover:bg-gradient-to-r hover:from-[#037ecc]/5 hover:to-[#00baff]/5"
          >
            <Link href="/catalogo">
              Ver todo el catálogo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
