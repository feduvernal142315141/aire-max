import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Snowflake, Wind, Sparkles, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[78vh] md:min-h-screen flex items-center overflow-hidden pt-8 md:pt-14">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7fcff] via-[#dff4ff] to-[#c2edff]" />

      <div className="absolute top-20 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#079cfb] opacity-15 blur-[120px] rounded-full animate-float" />
      <div
        className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#00e0ff] opacity-10 blur-[100px] rounded-full animate-float"
        style={{ animationDelay: "1s", animationDuration: "8s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white opacity-80 blur-[150px] rounded-full animate-float"
        style={{ animationDelay: "2s", animationDuration: "12s" }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Snowflake className="absolute top-[20%] left-[10%] w-8 h-8 text-[#079cfb]/5 animate-float" />
        <Wind
          className="absolute top-[60%] right-[15%] w-10 h-10 text-[#079cfb]/5 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles
          className="absolute bottom-[30%] left-[20%] w-6 h-6 text-[#079cfb]/5 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-6 lg:px-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-up mt-8 md:mt-0">
            <Badge className="w-fit bg-white/90 backdrop-blur-sm border border-white/40 text-[#079cfb] hover:bg-white shadow-lg shadow-white/20 animate-glow-pulse px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2 fill-current" />
              +15 años de experiencia
            </Badge>

            <h1 className="text-[30px] leading-[1.2] sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-balance">
              <span className="text-[#0f172a]" style={{ textShadow: "0 1px 3px rgba(255,255,255,0.6)" }}>
                Climatización Profesional
              </span>{" "}
              <span
                className="block mt-2 bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.4)" }}
              >
                para tu Confort Total
              </span>
            </h1>

            <p className="text-[15px] md:text-lg lg:text-xl text-[#334155] opacity-90 leading-relaxed max-w-xl">
              Expertos en venta, instalación y mantenimiento de aires acondicionados. Técnicos certificados, garantía
              extendida y respuesta en 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-8">
              <Button
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-gradient-to-r from-[#037ecc] via-[#00baff] to-[#009df5] hover:from-[#026bb3] hover:to-[#0088d6] text-white shadow-[0_8px_20px_rgba(7,156,251,0.3)] hover:shadow-[0_12px_30px_rgba(7,156,251,0.4)] transition-all duration-500 hover:scale-105 group relative overflow-hidden animate-gradient-x"
                asChild
              >
                <Link href="/catalogo">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  Ver Catálogo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-white/40 backdrop-blur-sm border border-white/60 hover:border-white hover:bg-white/60 text-[#0f172a] transition-all duration-300 hover:scale-105 group shadow-[0_4px_12px_rgba(255,255,255,0.4)]"
                asChild
              >
                <Link href="/contacto">
                  <Phone className="mr-2 h-5 w-5 text-[#079cfb] group-hover:rotate-12 transition-transform animate-pulse-slow" />
                  Contactar Ahora
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] animate-slide-up mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-[2.5rem] blur-3xl" />
            <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.6),0_20px_60px_rgba(7,156,251,0.15)] animate-float">
              <Image
                src="/modern-air-conditioning-unit-installation-professi.jpg"
                alt="Instalación profesional de aire acondicionado"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-shimmer-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
