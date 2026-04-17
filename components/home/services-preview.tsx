import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { homeServicesData } from "@/data"
import { IconResolver } from "@/components/shared"

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-28 md:py-[110px]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fcff] via-[#eaf6ff] to-[#d9f0ff]" />

      <div className="animate-breathe absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#00baff] opacity-[0.25] blur-[180px]" />

      <div className="absolute top-[30%] left-[15%] h-[400px] w-[400px] rounded-full bg-[#079cfb] opacity-[0.08] blur-[140px]" />
      <div className="absolute top-[30%] right-[15%] h-[400px] w-[400px] rounded-full bg-[#079cfb] opacity-[0.08] blur-[140px]" />

      <div
        className="animate-float absolute top-1/2 left-0 h-[600px] w-[300px] bg-white opacity-[0.12] blur-[120px]"
        style={{ animationDuration: "10s" }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-[48px]">
        <div className="animate-fade-up mb-16 space-y-3 text-center md:mb-20">
          <h2 className="relative inline-block font-serif text-[28px] font-bold text-[#0f172a] md:text-[42px] lg:text-5xl">
            Nuestros{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#079cfb] to-[#037ecc] bg-clip-text text-transparent">
                Servicios
              </span>
              <span className="absolute -bottom-1 left-1/2 h-[2px] w-[60%] -translate-x-1/2 rounded-full bg-[#00baff40]" />
            </span>
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-[18px] text-[#475569] opacity-80"
            style={{ letterSpacing: "0.02em" }}
          >
            Soluciones completas de climatización con tecnología de vanguardia
          </p>
        </div>

        {/* Desktop grid */}
        <div className="mx-auto hidden max-w-7xl gap-10 md:grid md:grid-cols-3">
          {homeServicesData.map((service, index) => (
            <div
              key={index}
              className="group animate-fade-up relative flex min-h-[440px] flex-col rounded-2xl border border-[#079cfb]/8 shadow-[0_10px_40px_rgba(7,156,251,0.08),0_2px_8px_rgba(255,255,255,0.6)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(7,156,251,0.15)]"
              style={{
                animationDelay: `${index * 0.08}s`,
                background: "rgba(255,255,255,0.6)",
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

                <h3 className="mt-5 mb-4 text-[20px] font-semibold text-[#0f172a] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#037ecc] group-hover:to-[#00baff] group-hover:bg-clip-text group-hover:text-transparent">
                  {service.title}
                </h3>

                <p className="mb-6 text-[15px] leading-[1.6rem] text-[#334155] opacity-90">
                  {service.description}
                </p>

                <ul className="mb-6 flex-grow space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 pl-1 text-[14px] text-[#334155]"
                    >
                      <div className="mt-1 flex h-[12px] w-[12px] flex-shrink-0 items-center justify-center rounded-full bg-[#079cfb]/10 transition-transform duration-500 group-hover:rotate-180">
                        <CheckCircle2 className="h-3 w-3 text-[#037ecc]" />
                      </div>
                      <span className="pl-3">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <Button
                    className="group/btn relative w-full overflow-hidden rounded-full font-semibold text-white shadow-[0_6px_20px_rgba(7,156,251,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(7,156,251,0.35)]"
                    style={{
                      background: "linear-gradient(90deg, #037ecc 0%, #00baff 100%)",
                      backgroundSize: "200% 100%",
                      padding: "14px 28px",
                      letterSpacing: "0.02em",
                    }}
                    asChild
                  >
                    <Link href={service.link}>
                      <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-800 group-hover/btn:translate-x-full" />
                      <span className="relative z-10">Más información</span>
                      <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
                className="flex w-[85vw] flex-shrink-0 snap-center flex-col rounded-2xl border border-[#079cfb]/8 shadow-[0_10px_40px_rgba(7,156,251,0.08),0_2px_8px_rgba(255,255,255,0.6)] backdrop-blur-xl"
                style={{
                  background: "rgba(255,255,255,0.6)",
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

                {/* Text content - centered on mobile with generous spacing */}
                <div className="flex-grow space-y-5 text-center">
                  <h3 className="text-[20px] font-semibold text-[#0f172a]">{service.title}</h3>
                  <p className="text-[15px] leading-[1.6rem] text-[#334155] opacity-90">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 text-left">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14px] text-[#334155]">
                        <div className="mt-1 flex h-[12px] w-[12px] flex-shrink-0 items-center justify-center rounded-full bg-[#079cfb]/10">
                          <CheckCircle2 className="h-3 w-3 text-[#037ecc]" />
                        </div>
                        <span className="pl-3">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="mt-8 w-full rounded-full font-semibold text-white shadow-[0_6px_20px_rgba(7,156,251,0.25)]"
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
