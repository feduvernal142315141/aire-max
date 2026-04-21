import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { homeBenefitsData } from "@/data"
import { IconResolver } from "@/components/shared"

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Adaptive section background */}
      <div className="bg-section absolute inset-0" />

      {/* Radial illumination behind title */}
      <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#079cfb] opacity-10 blur-[150px] dark:opacity-[0.14]" />

      {/* Animated light bubbles */}
      <div className="animate-float absolute top-[20%] left-[10%] h-[200px] w-[200px] rounded-full bg-white opacity-[0.08] blur-[80px] dark:bg-sky-900 dark:opacity-[0.06]" />
      <div
        className="animate-float absolute right-[15%] bottom-[30%] h-[250px] w-[250px] rounded-full bg-[#00e0ff] opacity-[0.06] blur-[100px] dark:opacity-[0.08]"
        style={{ animationDelay: "2s", animationDuration: "10s" }}
      />
      <div
        className="animate-float absolute top-[50%] left-[20%] h-[180px] w-[180px] rounded-full bg-[#079cfb] opacity-[0.05] blur-[90px] dark:opacity-[0.10]"
        style={{ animationDelay: "1s", animationDuration: "12s" }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-6 lg:px-32">
        {/* Title with shine animation */}
        <div className="animate-fade-up mb-16 space-y-3 text-center md:mb-20">
          <h2 className="section-heading text-foreground">
            ¿Por qué elegir{" "}
            <span className="from-primary bg-gradient-to-r to-[#00baff] bg-clip-text text-transparent dark:from-sky-400 dark:to-cyan-300">
              Aire-Max
            </span>
            ?
          </h2>
          <p className="section-body mx-auto mt-4 max-w-2xl">
            Somos tu socio confiable en climatización con servicio integral
          </p>
        </div>

        {/* Benefits Grid - Desktop 2x2 */}
        <div className="mx-auto hidden max-w-5xl gap-8 md:grid md:grid-cols-2">
          {homeBenefitsData.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-up border-border dark:bg-card/60 relative rounded-2xl border bg-white/70 p-8 shadow-[0_4px_40px_rgba(7,156,251,0.05)] backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_50px_rgba(7,156,251,0.12)] dark:shadow-none dark:hover:shadow-[0_8px_40px_rgba(56,189,248,0.06)]"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Hover glow effect in top-left corner */}
              <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-[#00baff] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

              {/* Icon container with glow */}
              <div className="relative mb-6">
                <div className="bg-primary/8 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/60 shadow-[0_0_20px_rgba(7,156,251,0.2)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 dark:border-sky-800/40 dark:bg-sky-500/10 dark:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                  <IconResolver
                    name={feature.icon}
                    className="text-primary h-7 w-7 dark:text-sky-400"
                  />
                </div>
                <IconResolver
                  name={feature.icon}
                  className="text-primary absolute -right-2 -bottom-2 h-12 w-12 opacity-[0.05]"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-foreground text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="group-hover:border-primary/20 absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll with snap */}
        <div className="scrollbar-hide -mx-6 snap-x snap-mandatory overflow-x-auto px-6 md:hidden">
          <div className="flex gap-5 pb-4">
            {homeBenefitsData.map((feature, index) => (
              <div
                key={index}
                className="border-border dark:bg-card/60 w-[85vw] flex-shrink-0 snap-center rounded-2xl border bg-white/70 p-6 shadow-[0_4px_40px_rgba(7,156,251,0.05)] backdrop-blur-lg dark:shadow-none"
              >
                {/* Icon container */}
                <div className="mb-5">
                  <div className="bg-primary/8 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/60 shadow-[0_0_20px_rgba(7,156,251,0.2)] backdrop-blur-sm dark:border-sky-800/40 dark:bg-sky-500/10">
                    <IconResolver
                      name={feature.icon}
                      className="text-primary h-7 w-7 dark:text-sky-400"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="text-foreground text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
            className="border-primary/20 text-foreground dark:bg-muted/20 dark:text-foreground dark:hover:bg-muted/40 bg-white/40 backdrop-blur-sm hover:bg-white/60 dark:border-sky-800/30"
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
