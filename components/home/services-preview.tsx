import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { homeServicesData } from "@/data"
import { IconResolver } from "@/components/shared"

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="bg-section absolute inset-0" />

      <div className="animate-breathe absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#00baff] opacity-[0.2] blur-[180px] dark:opacity-[0.12]" />

      <div className="absolute top-[30%] left-[15%] h-[400px] w-[400px] rounded-full bg-[#079cfb] opacity-[0.08] blur-[140px] dark:opacity-[0.12]" />
      <div className="absolute top-[30%] right-[15%] h-[400px] w-[400px] rounded-full bg-[#079cfb] opacity-[0.08] blur-[140px] dark:opacity-[0.12]" />

      <div
        className="animate-float absolute top-1/2 left-0 h-[600px] w-[300px] bg-white opacity-[0.12] blur-[120px] dark:bg-sky-950 dark:opacity-[0.06]"
        style={{ animationDuration: "10s" }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-[48px]">
        <div className="animate-fade-up mb-16 space-y-3 text-center md:mb-20">
          <h2 className="section-heading text-foreground">
            Nuestros{" "}
            <span className="relative inline-block">
              <span className="from-primary bg-gradient-to-r to-[#00baff] bg-clip-text text-transparent dark:from-sky-400 dark:to-cyan-300">
                Servicios
              </span>
              <span className="bg-primary/25 absolute -bottom-1 left-1/2 h-[2px] w-[60%] -translate-x-1/2 rounded-full" />
            </span>
          </h2>
          <p className="section-body mx-auto mt-4 max-w-2xl">
            Soluciones completas de climatización con tecnología de vanguardia
          </p>
        </div>

        {/* Desktop grid */}
        <div className="mx-auto hidden max-w-7xl gap-10 md:grid md:grid-cols-3">
          {homeServicesData.map((service, index) => (
            <div
              key={index}
              className="group animate-fade-up border-border dark:bg-card/60 relative flex min-h-[440px] flex-col rounded-2xl border bg-white/60 shadow-[0_10px_40px_rgba(7,156,251,0.08),0_2px_8px_rgba(255,255,255,0.6)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(7,156,251,0.15)] dark:shadow-none dark:hover:shadow-[0_12px_40px_rgba(56,189,248,0.08)]"
              style={{
                animationDelay: `${index * 0.08}s`,
              }}
            >
              <div className="flex flex-grow flex-col p-10">
                {/* Hover glow effect - cyan in top-left corner */}
                <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-[#00baff] opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20" />

                <div className="relative mb-6">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 shadow-[0_0_10px_rgba(7,156,251,0.15)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(0,186,255,0.3), rgba(0,186,255,0.1) 70%)",
                    }}
                  >
                    <IconResolver name={service.icon} className="h-8 w-8" />
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
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ filter: "drop-shadow(0 0 8px rgba(0,186,255,0.4))" }}
                  />
                </div>

                <h3 className="text-foreground group-hover:text-primary mt-5 mb-3 text-lg font-semibold transition-colors duration-300 dark:group-hover:text-sky-400">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="mb-6 flex-grow space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground flex items-start gap-3 pl-1 text-sm"
                    >
                      <div className="bg-primary/10 mt-0.5 flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 className="text-primary h-2.5 w-2.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Button
                    className="group/btn from-primary w-full rounded-xl bg-gradient-to-r to-[#00baff] font-semibold text-white shadow-[0_4px_14px_rgba(7,156,251,0.25)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(7,156,251,0.38)] hover:brightness-105 dark:from-sky-500 dark:to-cyan-400"
                    asChild
                  >
                    <Link href={service.link}>
                      Más información
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <IconResolver
                name={service.icon}
                className="pointer-events-none absolute right-4 bottom-4 h-20 w-20 text-[#079cfb] opacity-[0.03]"
              />
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="scrollbar-hide -mx-6 snap-x snap-mandatory overflow-x-auto px-6 md:hidden">
          <div className="flex gap-5 pb-4">
            {homeServicesData.map((service, index) => (
              <div
                key={index}
                className="border-border dark:bg-card/60 flex w-[85vw] flex-shrink-0 snap-center flex-col rounded-2xl border bg-white/60 shadow-[0_10px_40px_rgba(7,156,251,0.08),0_2px_8px_rgba(255,255,255,0.6)] backdrop-blur-xl dark:shadow-none"
                style={{
                  padding: "40px 24px",
                }}
              >
                <div className="mb-6 flex justify-center">
                  <div
                    className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/60 shadow-[0_0_10px_rgba(7,156,251,0.15)] backdrop-blur-sm"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(0,186,255,0.3), rgba(0,186,255,0.1) 70%)",
                    }}
                  >
                    <IconResolver name={service.icon} className="h-9 w-9" />
                  </div>
                </div>

                <div className="flex-grow space-y-4 text-center">
                  <h3 className="text-foreground text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 text-left">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground flex items-start gap-3 text-sm"
                      >
                        <div className="bg-primary/10 mt-0.5 flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full">
                          <CheckCircle2 className="text-primary h-2.5 w-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="from-primary mt-7 w-full rounded-xl bg-gradient-to-r to-[#00baff] font-semibold text-white shadow-[0_4px_14px_rgba(7,156,251,0.25)] hover:brightness-105 dark:from-sky-500 dark:to-cyan-400"
                  asChild
                >
                  <Link href={service.link}>
                    Más información
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
            <path
              d="M0 10 Q50 0, 100 10 T200 10"
              stroke="url(#separatorGradient)"
              strokeWidth="2"
              fill="none"
            />
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
  )
}
