import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { homeServicesData } from "@/data";
import { IconResolver } from "@/components/shared";

export function ServicesPreview() {
  return (
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

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {homeServicesData.map((service, index) => (
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
                    <IconResolver name={service.icon} className="w-8 h-8" />
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

              <IconResolver
                name={service.icon}
                className="absolute bottom-4 right-4 w-20 h-20 text-[#079cfb] opacity-[0.03] pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          <div className="flex gap-5 pb-4">
            {homeServicesData.map((service, index) => (
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
                    <IconResolver name={service.icon} className="w-9 h-9" />
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
  );
}
