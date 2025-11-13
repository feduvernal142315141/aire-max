import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Snowflake,
  Wrench,
  Shield,
  Clock,
  Star,
  CheckCircle2,
  Phone,
  ArrowRight,
  Zap,
  ThermometerSun,
  Wind,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] md:min-h-screen flex items-center overflow-hidden pt-14">
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
            <div className="space-y-6 md:space-y-8 animate-fade-up mt-24 md:mt-0">
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
                  className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-gradient-to-r from-[#037ecc] via-[#00baff] to-[#009df5] hover:from-[#026bb3] hover:to-[#0088d6] text-white shadow-[0_8px_20px_rgba(7,156,251,0.3)] hover:shadow-[0_12px_30px_rgba(7,156,251,0.4)] transition-all duration-500 hover:scale-105 group relative overflow-hidden animate-gradient-x"
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
                  className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white/40 backdrop-blur-sm border border-white/60 hover:border-white hover:bg-white/60 text-[#0f172a] transition-all duration-300 hover:scale-105 group shadow-[0_4px_12px_rgba(255,255,255,0.4)]"
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

      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Premium gradient background with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9fcff] via-[#eaf6ff] to-[#d9f0ff]" />

        {/* Radial illumination behind title */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#079cfb] opacity-10 blur-[150px] rounded-full" />

        {/* Animated light bubbles */}
        <div className="absolute top-[20%] left-[10%] w-[200px] h-[200px] bg-white opacity-[0.08] blur-[80px] rounded-full animate-float" />
        <div
          className="absolute bottom-[30%] right-[15%] w-[250px] h-[250px] bg-[#00e0ff] opacity-[0.06] blur-[100px] rounded-full animate-float"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        />
        <div
          className="absolute top-[50%] left-[20%] w-[180px] h-[180px] bg-[#079cfb] opacity-[0.05] blur-[90px] rounded-full animate-float"
          style={{ animationDelay: "1s", animationDuration: "12s" }}
        />

        <div className="container mx-auto px-6 md:px-6 lg:px-32 relative z-10">
          {/* Title with shine animation */}
          <div className="text-center mb-16 md:mb-20 space-y-3 animate-fade-up">
            <h2
              className="text-[28px] md:text-[38px] lg:text-5xl font-serif font-bold text-[#0f172a] relative inline-block"
              style={{ textShadow: "0 2px 8px rgba(7,156,251,0.1)" }}
            >
              ¿Por qué elegir{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent">
                  Aire-Max
                </span>
                {/* Shine effect that passes over text */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-slow" />
              </span>
              ?
            </h2>
            <p className="text-[18px] text-[#64748b] max-w-2xl mx-auto" style={{ letterSpacing: "0.05em" }}>
              Somos tu socio confiable en climatización con servicio integral
            </p>
          </div>

          {/* Benefits Grid - Desktop 2x2, Mobile horizontal scroll */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Garantía Extendida",
                description: "Hasta 5 años de garantía en equipos e instalación profesional certificada",
              },
              {
                icon: Clock,
                title: "Respuesta 24h",
                description: "Servicio técnico disponible todos los días del año sin excepción",
              },
              {
                icon: Star,
                title: "Técnicos Certificados",
                description: "Personal capacitado con certificaciones oficiales y experiencia comprobada",
              },
              {
                icon: Zap,
                title: "Eficiencia Energética",
                description: "Equipos con tecnología inverter para máximo ahorro en tu factura",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-lg border border-[#079cfb]/8 rounded-2xl p-8 shadow-[0_4px_40px_rgba(7,156,251,0.05)] hover:shadow-[0_8px_50px_rgba(7,156,251,0.12)] transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Hover glow effect in top-left corner */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#00baff] opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-500" />

                {/* Icon container with glow */}
                <div className="relative mb-6">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#079cfb]/8 backdrop-blur-sm border border-white/60 flex items-center justify-center shadow-[0_0_20px_rgba(7,156,251,0.2)] group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-[#037ecc]" />
                  </div>
                  {/* Decorative icon in background */}
                  <feature.icon className="absolute -bottom-2 -right-2 w-12 h-12 text-[#079cfb] opacity-[0.05]" />
                </div>

                {/* Text content */}
                <div className="space-y-3">
                  <h3 className="text-[20px] font-semibold text-[#0f172a]">{feature.title}</h3>
                  <p className="text-[15px] text-[#475569] leading-[1.6rem] max-w-[220px]">{feature.description}</p>
                </div>

                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#079cfb]/20 transition-colors duration-500" />
              </div>
            ))}
          </div>

          {/* Mobile: Horizontal scroll with snap */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            <div className="flex gap-5 pb-4">
              {[
                {
                  icon: Shield,
                  title: "Garantía Extendida",
                  description: "Hasta 5 años de garantía en equipos e instalación profesional certificada",
                },
                {
                  icon: Clock,
                  title: "Respuesta 24h",
                  description: "Servicio técnico disponible todos los días del año sin excepción",
                },
                {
                  icon: Star,
                  title: "Técnicos Certificados",
                  description: "Personal capacitado con certificaciones oficiales y experiencia comprobada",
                },
                {
                  icon: Zap,
                  title: "Eficiencia Energética",
                  description: "Equipos con tecnología inverter para máximo ahorro en tu factura",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] snap-center bg-white/70 backdrop-blur-lg border border-[#079cfb]/8 rounded-2xl p-6 shadow-[0_4px_40px_rgba(7,156,251,0.05)]"
                >
                  {/* Icon container */}
                  <div className="mb-5">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#079cfb]/8 backdrop-blur-sm border border-white/60 flex items-center justify-center shadow-[0_0_20px_rgba(7,156,251,0.2)]">
                      <feature.icon className="w-7 h-7 text-[#037ecc]" />
                    </div>
                  </div>

                  {/* Text content - centered on mobile */}
                  <div className="space-y-3 text-center">
                    <h3 className="text-[18px] font-semibold text-[#0f172a]">{feature.title}</h3>
                    <p className="text-[15px] text-[#475569] leading-[1.6rem]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA for mobile */}
          <div className="mt-12 text-center md:hidden">
            <Button
              variant="outline"
              className="bg-white/40 backdrop-blur-sm border-[#079cfb]/20 hover:bg-white/60 text-[#0f172a]"
              asChild
            >
              <Link href="/servicios">
                Descubre nuestros servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Premium redesign with all fixes */}
      <section className="relative py-28 md:py-[110px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fcff] via-[#eaf6ff] to-[#d9f0ff]" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00baff] opacity-[0.25] blur-[180px] rounded-full animate-breathe" />

        <div className="absolute top-[30%] left-[15%] w-[400px] h-[400px] bg-[#079cfb] opacity-[0.08] blur-[140px] rounded-full" />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-[#079cfb] opacity-[0.08] blur-[140px] rounded-full" />

        <div
          className="absolute top-1/2 left-0 w-[300px] h-[600px] bg-white opacity-[0.12] blur-[120px] animate-float"
          style={{ animationDuration: "10s" }}
        />

        <div className="container mx-auto px-6 md:px-12 lg:px-[48px] relative z-10">
          <div className="text-center mb-16 md:mb-20 space-y-3 animate-fade-up">
            <h2 className="text-[28px] md:text-[42px] lg:text-5xl font-serif font-bold text-[#0f172a] relative inline-block">
              Nuestros{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#079cfb] to-[#037ecc] bg-clip-text text-transparent">
                  Servicios
                </span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-[#00baff40] rounded-full" />
              </span>
            </h2>
            <p
              className="text-[18px] text-[#475569] opacity-80 max-w-2xl mx-auto mt-3"
              style={{ letterSpacing: "0.02em" }}
            >
              Soluciones completas de climatización con tecnología de vanguardia
            </p>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                icon: Snowflake,
                title: "Venta de Equipos",
                description:
                  "Amplio catálogo de aires acondicionados de las mejores marcas con asesoría personalizada.",
                features: [
                  "Marcas premium certificadas",
                  "Asesoría técnica especializada",
                  "Mejores precios del mercado",
                ],
                link: "/catalogo",
              },
              {
                icon: Wrench,
                title: "Instalación Profesional",
                description:
                  "Instalación certificada con garantía, cumpliendo normas de seguridad y eficiencia energética.",
                features: ["Instalación en 24-48 horas", "Garantía de instalación", "Limpieza completa incluida"],
                link: "/servicios/instalacion",
              },
              {
                icon: ThermometerSun,
                title: "Mantenimiento Integral",
                description: "Planes preventivos y correctivos para alargar la vida útil y eficiencia de tu equipo.",
                features: ["Planes mensuales flexibles", "Revisión técnica completa", "Descuentos por contrato anual"],
                link: "/servicios/mantenimiento",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl border border-[#079cfb]/8 rounded-2xl shadow-[0_10px_40px_rgba(7,156,251,0.08),0_2px_8px_rgba(255,255,255,0.6)] hover:shadow-[0_12px_40px_rgba(7,156,251,0.15)] transition-all duration-500 hover:-translate-y-2 animate-fade-up min-h-[440px] flex flex-col"
                style={{
                  animationDelay: `${index * 0.08}s`,
                  background: "rgba(255,255,255,0.6)",
                }}
              >
                <div className="p-10 flex flex-col flex-grow">
                  {/* Hover glow effect - cyan in top-left corner */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-[#00baff] opacity-0 group-hover:opacity-20 blur-[80px] rounded-full transition-opacity duration-500" />

                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-full backdrop-blur-sm border border-white/60 flex items-center justify-center shadow-[0_0_10px_rgba(7,156,251,0.15)] group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: "radial-gradient(circle at 30% 30%, rgba(0,186,255,0.3), rgba(0,186,255,0.1) 70%)",
                      }}
                    >
                      <service.icon className="w-8 h-8" />
                    </div>
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#037ecc" />
                          <stop offset="100%" stopColor="#00baff" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ filter: "drop-shadow(0 0 8px rgba(0,186,255,0.4))" }}
                    />
                  </div>

                  <h3 className="text-[20px] font-semibold text-[#0f172a] mb-4 mt-5 group-hover:bg-gradient-to-r group-hover:from-[#037ecc] group-hover:to-[#00baff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[15px] text-[#334155] leading-[1.6rem] mb-6 opacity-90">{service.description}</p>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14px] text-[#334155] pl-1">
                        <div className="flex-shrink-0 w-[12px] h-[12px] rounded-full bg-[#079cfb]/10 flex items-center justify-center mt-1 group-hover:rotate-180 transition-transform duration-500">
                          <CheckCircle2 className="w-3 h-3 text-[#037ecc]" />
                        </div>
                        <span className="pl-3">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <Button
                      className="w-full text-white shadow-[0_6px_20px_rgba(7,156,251,0.25)] hover:shadow-[0_8px_25px_rgba(7,156,251,0.35)] rounded-full transition-all duration-300 group/btn relative overflow-hidden hover:scale-[1.03] font-semibold"
                      style={{
                        background: "linear-gradient(90deg, #037ecc 0%, #00baff 100%)",
                        backgroundSize: "200% 100%",
                        padding: "14px 28px",
                        letterSpacing: "0.02em",
                      }}
                      asChild
                    >
                      <Link href={service.link}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-800 skew-x-12" />
                        <span className="relative z-10">Más información</span>
                        <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <service.icon className="absolute bottom-4 right-4 w-20 h-20 text-[#079cfb] opacity-[0.03] pointer-events-none" />
              </div>
            ))}
          </div>

          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            <div className="flex gap-5 pb-4">
              {[
                {
                  icon: Snowflake,
                  title: "Venta de Equipos",
                  description:
                    "Amplio catálogo de aires acondicionados de las mejores marcas con asesoría personalizada.",
                  features: [
                    "Marcas premium certificadas",
                    "Asesoría técnica especializada",
                    "Mejores precios del mercado",
                  ],
                  link: "/catalogo",
                },
                {
                  icon: Wrench,
                  title: "Instalación Profesional",
                  description:
                    "Instalación certificada con garantía, cumpliendo normas de seguridad y eficiencia energética.",
                  features: ["Instalación en 24-48 horas", "Garantía de instalación", "Limpieza completa incluida"],
                  link: "/servicios/instalacion",
                },
                {
                  icon: ThermometerSun,
                  title: "Mantenimiento Integral",
                  description: "Planes preventivos y correctivos para alargar la vida útil y eficiencia de tu equipo.",
                  features: [
                    "Planes mensuales flexibles",
                    "Revisión técnica completa",
                    "Descuentos por contrato anual",
                  ],
                  link: "/servicios/mantenimiento",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] snap-center backdrop-blur-xl border border-[#079cfb]/8 rounded-2xl shadow-[0_10px_40px_rgba(7,156,251,0.08),0_2px_8px_rgba(255,255,255,0.6)] flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    padding: "40px 24px",
                  }}
                >
                  <div className="mb-6 flex justify-center">
                    <div
                      className="w-[72px] h-[72px] rounded-full backdrop-blur-sm border border-white/60 flex items-center justify-center shadow-[0_0_10px_rgba(7,156,251,0.15)]"
                      style={{
                        background: "radial-gradient(circle at 30% 30%, rgba(0,186,255,0.3), rgba(0,186,255,0.1) 70%)",
                      }}
                    >
                      <service.icon className="w-9 h-9" />
                    </div>
                  </div>

                  {/* Text content - centered on mobile with generous spacing */}
                  <div className="text-center space-y-5 flex-grow">
                    <h3 className="text-[20px] font-semibold text-[#0f172a]">{service.title}</h3>
                    <p className="text-[15px] text-[#334155] leading-[1.6rem] opacity-90">{service.description}</p>

                    {/* Features list */}
                    <ul className="space-y-2 text-left">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[14px] text-[#334155]">
                          <div className="flex-shrink-0 w-[12px] h-[12px] rounded-full bg-[#079cfb]/10 flex items-center justify-center mt-1">
                            <CheckCircle2 className="w-3 h-3 text-[#037ecc]" />
                          </div>
                          <span className="pl-3">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full mt-8 text-white shadow-[0_6px_20px_rgba(7,156,251,0.25)] rounded-full font-semibold"
                    style={{
                      background: "linear-gradient(90deg, #037ecc 0%, #00baff 100%)",
                      padding: "14px 28px",
                      letterSpacing: "0.02em",
                    }}
                    asChild
                  >
                    <Link href={service.link}>
                      <span>Más información</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* SVG gradient definition for mobile icons */}
          <svg width="0" height="0" className="md:hidden">
            <defs>
              <linearGradient id="iconGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#037ecc" />
                <stop offset="100%" stopColor="#00baff" />
              </linearGradient>
            </defs>
          </svg>

          {/* Decorative separator - curved line in translucent cyan */}
          <div className="mt-16 flex justify-center">
            <svg width="200" height="20" viewBox="0 0 200 20" className="opacity-20">
              <path d="M0 10 Q50 0, 100 10 T200 10" stroke="url(#separatorGradient)" strokeWidth="2" fill="none" />
              <defs>
                <linearGradient id="separatorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#079cfb" stopOpacity="0" />
                  <stop offset="50%" stopColor="#00baff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#079cfb" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Popular Products Section - Premium showcase redesign */}
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

          <div className="hidden md:grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                name: "Split Inverter 12000 BTU",
                brand: "LG",
                price: "599.99",
                priceWithInstallation: "699.99",
                image: "/lg-split-air-conditioner-white-modern.jpg",
                features: ["Inverter", "WiFi", "A+++"],
                badge: "Popular",
                badgeColor: "from-[#037ecc] to-[#00baff]",
                energyBadge: "A+++",
              },
              {
                name: "Split Inverter 18000 BTU",
                brand: "Samsung",
                price: "799.99",
                priceWithInstallation: "899.99",
                image: "/samsung-split-air-conditioner-sleek-design.jpg",
                features: ["Inverter", "WindFree", "A++"],
                badge: "Recomendado",
                badgeColor: "from-[#00baff] to-[#00e0ff]",
                energyBadge: "A++",
              },
              {
                name: "Split Inverter 24000 BTU",
                brand: "Daikin",
                price: "1099.99",
                priceWithInstallation: "1199.99",
                image: "/daikin-split-air-conditioner-premium.jpg",
                features: ["Inverter", "Purificador", "A+++"],
                badge: "Mejor Valor",
                badgeColor: "from-[#079cfb] to-[#037ecc]",
                energyBadge: "A+++",
              },
            ].map((product, index) => (
              <div
                key={index}
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
                    <Link href={`/catalogo/${index + 1}`}>
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

          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            <div className="flex gap-6 pb-4">
              {[
                {
                  name: "Split Inverter 12000 BTU",
                  brand: "LG",
                  price: "599.99",
                  priceWithInstallation: "699.99",
                  image: "/lg-split-air-conditioner-white-modern.jpg",
                  features: ["Inverter", "WiFi", "A+++"],
                  badge: "Popular",
                  badgeColor: "from-[#037ecc] to-[#00baff]",
                  energyBadge: "A+++",
                },
                {
                  name: "Split Inverter 18000 BTU",
                  brand: "Samsung",
                  price: "799.99",
                  priceWithInstallation: "899.99",
                  image: "/samsung-split-air-conditioner-sleek-design.jpg",
                  features: ["Inverter", "WindFree", "A++"],
                  badge: "Recomendado",
                  badgeColor: "from-[#00baff] to-[#00e0ff]",
                  energyBadge: "A++",
                },
                {
                  name: "Split Inverter 24000 BTU",
                  brand: "Daikin",
                  price: "1099.99",
                  priceWithInstallation: "1199.99",
                  image: "/daikin-split-air-conditioner-premium.jpg",
                  features: ["Inverter", "Purificador", "A+++"],
                  badge: "Mejor Valor",
                  badgeColor: "from-[#079cfb] to-[#037ecc]",
                  energyBadge: "A+++",
                },
              ].map((product, index) => (
                <div
                  key={index}
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
                      <Link href={`/catalogo/${index + 1}`}>
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
    </div>
  )
}
