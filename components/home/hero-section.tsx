import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Snowflake, Wind, Sparkles, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden pt-8 md:min-h-screen md:pt-14">
      {/* Adaptive background — sky blue in light, deep navy in dark */}
      <div className="bg-section absolute inset-0" />

      {/* Primary glow orbs */}
      <div className="animate-float absolute top-20 left-0 h-[300px] w-[300px] rounded-full bg-[#079cfb] opacity-15 blur-[120px] md:h-[600px] md:w-[600px] dark:opacity-20" />
      <div
        className="animate-float absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-[#00e0ff] opacity-10 blur-[100px] md:h-[500px] md:w-[500px] dark:opacity-15"
        style={{ animationDelay: "1s", animationDuration: "8s" }}
      />
      {/* White orb — hidden in dark (would show as jarring white blob) */}
      <div
        className="animate-float absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-80 blur-[150px] dark:bg-sky-950 dark:opacity-30"
        style={{ animationDelay: "2s", animationDuration: "12s" }}
      />

      {/* Floating icons — decorative, very subtle */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Snowflake className="animate-float absolute top-[20%] left-[10%] h-8 w-8 text-[#079cfb]/5 dark:text-sky-400/10" />
        <Wind
          className="animate-float absolute top-[60%] right-[15%] h-10 w-10 text-[#079cfb]/5 dark:text-sky-400/10"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles
          className="animate-float absolute bottom-[30%] left-[20%] h-6 w-6 text-[#079cfb]/5 dark:text-sky-400/10"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-6 lg:px-32">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up mt-8 space-y-6 md:mt-0 md:space-y-8">
            <Badge className="animate-glow-pulse w-fit border border-white/40 bg-white/90 px-4 py-2 text-[#079cfb] shadow-lg shadow-white/20 backdrop-blur-sm hover:bg-white dark:border-sky-800/50 dark:bg-sky-950/80 dark:text-sky-300 dark:shadow-sky-950/50">
              <Sparkles className="mr-2 h-4 w-4 fill-current" />
              +15 años de experiencia
            </Badge>

            <h1 className="font-serif text-3xl leading-tight font-bold text-balance sm:text-4xl md:text-5xl lg:text-[4.5rem]">
              <span className="text-foreground">Climatización Profesional</span>{" "}
              <span className="mt-2 block bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent dark:from-sky-400 dark:to-cyan-300">
                para tu Confort Total
              </span>
            </h1>

            <p className="text-muted-foreground max-w-xl text-base leading-relaxed md:text-lg lg:text-xl">
              Expertos en venta, instalación y mantenimiento de aires acondicionados. Técnicos
              certificados, garantía extendida y respuesta en 24 horas.
            </p>

            <div className="flex flex-col gap-3 pt-8 sm:flex-row md:gap-4">
              <Button
                size="lg"
                className="group animate-gradient-x relative overflow-hidden bg-gradient-to-r from-[#037ecc] via-[#00baff] to-[#009df5] px-6 py-4 text-base text-white shadow-[0_8px_20px_rgba(7,156,251,0.3)] transition-all duration-500 hover:scale-105 hover:shadow-[0_12px_30px_rgba(7,156,251,0.4)] md:px-8 md:py-6 md:text-lg dark:from-sky-500 dark:via-sky-400 dark:to-cyan-400 dark:shadow-sky-900/50"
                asChild
              >
                <Link href="/catalogo">
                  <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
                  Ver Catálogo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-foreground border border-white/60 bg-white/40 px-6 py-4 text-base shadow-[0_4px_12px_rgba(255,255,255,0.4)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/60 md:px-8 md:py-6 md:text-lg dark:border-sky-800/50 dark:bg-sky-950/40 dark:shadow-none dark:hover:border-sky-700/60 dark:hover:bg-sky-950/60"
                asChild
              >
                <Link href="/contacto">
                  <Phone className="animate-pulse-slow mr-2 h-5 w-5 text-[#079cfb] transition-transform group-hover:rotate-12 dark:text-sky-400" />
                  Contactar Ahora
                </Link>
              </Button>
            </div>
          </div>

          <div className="animate-slide-up relative mt-8 h-[350px] sm:h-[400px] md:h-[500px] lg:mt-0 lg:h-[600px]">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/30 to-white/10 blur-3xl dark:from-sky-900/20 dark:to-transparent" />
            <div className="animate-float relative h-full overflow-hidden rounded-[2.5rem] shadow-[0_0_80px_rgba(255,255,255,0.6),0_20px_60px_rgba(7,156,251,0.15)] dark:shadow-[0_0_60px_rgba(7,156,251,0.12),0_20px_60px_rgba(7,156,251,0.08)]">
              <Image
                src="/modern-air-conditioning-unit-installation-professi.jpg"
                alt="Instalación profesional de aire acondicionado"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 dark:from-slate-950/40 dark:via-transparent dark:to-transparent" />
              <div className="animate-shimmer-slow absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
