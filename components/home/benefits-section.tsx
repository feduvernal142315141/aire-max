import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { homeBenefitsData } from "@/data"
import { IconResolver } from "@/components/shared"

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Premium gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9fcff] via-[#eaf6ff] to-[#d9f0ff]" />

      {/* Radial illumination behind title */}
      <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#079cfb] opacity-10 blur-[150px]" />

      {/* Animated light bubbles */}
      <div className="animate-float absolute top-[20%] left-[10%] h-[200px] w-[200px] rounded-full bg-white opacity-[0.08] blur-[80px]" />
      <div
        className="animate-float absolute right-[15%] bottom-[30%] h-[250px] w-[250px] rounded-full bg-[#00e0ff] opacity-[0.06] blur-[100px]"
        style={{ animationDelay: "2s", animationDuration: "10s" }}
      />
      <div
        className="animate-float absolute top-[50%] left-[20%] h-[180px] w-[180px] rounded-full bg-[#079cfb] opacity-[0.05] blur-[90px]"
        style={{ animationDelay: "1s", animationDuration: "12s" }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-6 lg:px-32">
        {/* Title with shine animation */}
        <div className="animate-fade-up mb-16 space-y-3 text-center md:mb-20">
          <h2
            className="relative inline-block font-serif text-[28px] font-bold text-[#0f172a] md:text-[38px] lg:text-5xl"
            style={{ textShadow: "0 2px 8px rgba(7,156,251,0.1)" }}
          >
            ¿Por qué elegir{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent">
                Aire-Max
              </span>
              {/* Shine effect that passes over text */}
              <span className="animate-shimmer-slow absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </span>
            ?
          </h2>
          <p
            className="mx-auto max-w-2xl text-[18px] text-[#64748b]"
            style={{ letterSpacing: "0.05em" }}
          >
            Somos tu socio confiable en climatización con servicio integral
          </p>
        </div>

        {/* Benefits Grid - Desktop 2x2 */}
        <div className="mx-auto hidden max-w-5xl gap-8 md:grid md:grid-cols-2">
          {homeBenefitsData.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-up relative rounded-2xl border border-[#079cfb]/8 bg-white/70 p-8 shadow-[0_4px_40px_rgba(7,156,251,0.05)] backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_50px_rgba(7,156,251,0.12)]"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Hover glow effect in top-left corner */}
              <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-[#00baff] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

              {/* Icon container with glow */}
              <div className="relative mb-6">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/60 bg-[#079cfb]/8 shadow-[0_0_20px_rgba(7,156,251,0.2)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <IconResolver name={feature.icon} className="h-7 w-7 text-[#037ecc]" />
                </div>
                {/* Decorative icon in background */}
                <IconResolver
                  name={feature.icon}
                  className="absolute -right-2 -bottom-2 h-12 w-12 text-[#079cfb] opacity-[0.05]"
                />
              </div>

              {/* Text content */}
              <div className="space-y-3">
                <h3 className="text-[20px] font-semibold text-[#0f172a]">{feature.title}</h3>
                <p className="max-w-[220px] text-[15px] leading-[1.6rem] text-[#475569]">
                  {feature.description}
                </p>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-[#079cfb]/20" />
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll with snap */}
        <div className="scrollbar-hide -mx-6 snap-x snap-mandatory overflow-x-auto px-6 md:hidden">
          <div className="flex gap-5 pb-4">
            {homeBenefitsData.map((feature, index) => (
              <div
                key={index}
                className="w-[85vw] flex-shrink-0 snap-center rounded-2xl border border-[#079cfb]/8 bg-white/70 p-6 shadow-[0_4px_40px_rgba(7,156,251,0.05)] backdrop-blur-lg"
              >
                {/* Icon container */}
                <div className="mb-5">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/60 bg-[#079cfb]/8 shadow-[0_0_20px_rgba(7,156,251,0.2)] backdrop-blur-sm">
                    <IconResolver name={feature.icon} className="h-7 w-7 text-[#037ecc]" />
                  </div>
                </div>

                {/* Text content - centered on mobile */}
                <div className="space-y-3 text-center">
                  <h3 className="text-[18px] font-semibold text-[#0f172a]">{feature.title}</h3>
                  <p className="text-[15px] leading-[1.6rem] text-[#475569]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA for mobile */}
        <div className="mt-12 text-center md:hidden">
          <Button
            variant="outline"
            className="border-[#079cfb]/20 bg-white/40 text-[#0f172a] backdrop-blur-sm hover:bg-white/60"
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
  )
}
