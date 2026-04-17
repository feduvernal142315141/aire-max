import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { homeBenefitsData } from "@/data";
import { IconResolver } from "@/components/shared";

export function BenefitsSection() {
  return (
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

        {/* Benefits Grid - Desktop 2x2 */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {homeBenefitsData.map((feature, index) => (
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
                  <IconResolver name={feature.icon} className="w-7 h-7 text-[#037ecc]" />
                </div>
                {/* Decorative icon in background */}
                <IconResolver
                  name={feature.icon}
                  className="absolute -bottom-2 -right-2 w-12 h-12 text-[#079cfb] opacity-[0.05]"
                />
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
            {homeBenefitsData.map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] snap-center bg-white/70 backdrop-blur-lg border border-[#079cfb]/8 rounded-2xl p-6 shadow-[0_4px_40px_rgba(7,156,251,0.05)]"
              >
                {/* Icon container */}
                <div className="mb-5">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#079cfb]/8 backdrop-blur-sm border border-white/60 flex items-center justify-center shadow-[0_0_20px_rgba(7,156,251,0.2)]">
                    <IconResolver name={feature.icon} className="w-7 h-7 text-[#037ecc]" />
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
  );
}
