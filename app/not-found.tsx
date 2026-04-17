import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SearchX, Home, Package, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-16">
      {/* Background gradient consistent with hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7fcff] via-[#dff4ff] to-[#c2edff]" />

      {/* Ambient glows */}
      <div className="animate-float absolute top-10 left-0 h-[300px] w-[300px] rounded-full bg-[#079cfb] opacity-15 blur-[120px] md:h-[500px] md:w-[500px]" />
      <div
        className="animate-float absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-[#00e0ff] opacity-10 blur-[100px] md:h-[400px] md:w-[400px]"
        style={{ animationDelay: "1s", animationDuration: "8s" }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-6 lg:px-32">
        <div className="animate-fade-up mx-auto max-w-2xl space-y-8 text-center">
          {/* Large 404 icon */}
          <div className="relative mx-auto inline-flex items-center justify-center">
            <div className="animate-breathe absolute inset-0 rounded-full bg-gradient-to-br from-[#079cfb]/20 to-[#00e0ff]/20 blur-2xl" />
            <div className="animate-float relative flex h-28 w-28 items-center justify-center rounded-3xl border border-white/60 bg-white/70 shadow-[0_8px_32px_rgba(7,156,251,0.15)] backdrop-blur-md md:h-32 md:w-32">
              <SearchX className="h-14 w-14 text-[#079cfb] md:h-16 md:w-16" strokeWidth={1.5} />
            </div>
          </div>

          {/* 404 label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-widest text-[#037ecc]">ERROR 404</span>
          </div>

          {/* Title with gradient */}
          <h1 className="font-serif text-4xl leading-tight font-bold text-balance sm:text-5xl md:text-6xl">
            <span className="text-[#0f172a]">Página</span>{" "}
            <span className="gradient-text">no encontrada</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-lg text-base leading-relaxed text-[#334155] opacity-90 md:text-lg">
            Parece que la dirección que buscás no existe o fue movida. No te preocupes, te llevamos
            de vuelta al aire fresco.
          </p>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row md:gap-4">
            <Button
              size="lg"
              className="group animate-gradient-x relative overflow-hidden bg-gradient-to-r from-[#037ecc] via-[#00baff] to-[#009df5] px-6 py-4 text-base text-white shadow-[0_8px_20px_rgba(7,156,251,0.3)] transition-all duration-500 hover:scale-105 hover:from-[#026bb3] hover:to-[#0088d6] hover:shadow-[0_12px_30px_rgba(7,156,251,0.4)] md:px-8 md:py-6 md:text-lg"
              asChild
            >
              <Link href="/">
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
                <Home className="mr-2 h-5 w-5" />
                Volver al inicio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border border-white/60 bg-white/40 px-6 py-4 text-base text-[#0f172a] shadow-[0_4px_12px_rgba(255,255,255,0.4)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/60 md:px-8 md:py-6 md:text-lg"
              asChild
            >
              <Link href="/catalogo">
                <Package className="mr-2 h-5 w-5 text-[#079cfb] transition-transform group-hover:rotate-12" />
                Ver catálogo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
