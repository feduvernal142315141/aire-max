"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Users, MapPin, Phone, Shield, Star, TrendingUp, Zap, Heart, Wrench } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NosotrosPage() {
  const [counts, setCounts] = useState({ years: 0, clients: 0, satisfaction: 0, equipment: 0 })

  useEffect(() => {
    const targets = { years: 15, clients: 5000, satisfaction: 98, equipment: 10000 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        years: Math.min(Math.floor((targets.years * step) / steps), targets.years),
        clients: Math.min(Math.floor((targets.clients * step) / steps), targets.clients),
        satisfaction: Math.min(Math.floor((targets.satisfaction * step) / steps), targets.satisfaction),
        equipment: Math.min(Math.floor((targets.equipment * step) / steps), targets.equipment),
      })
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col pt-16 md:pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eaf7ff] via-[#f9fcff] to-[#ffffff]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#079cfb] opacity-[0.08] blur-[120px] rounded-full animate-breathe" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-16 space-y-6"
          >
            <Badge className="w-fit mx-auto bg-white/80 backdrop-blur-sm border border-primary/20 text-primary">
              Sobre Nosotros
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0f172a]">
              Expertos en{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Climatización</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#079cfb] to-[#00e0ff] opacity-30"
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-[620px] mx-auto leading-relaxed opacity-90">
              Más de 15 años brindando soluciones de climatización profesional con compromiso, calidad y excelencia en
              el servicio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Award, value: counts.years, suffix: "+", label: "Años de Experiencia" },
              { icon: Users, value: counts.clients, suffix: "+", label: "Clientes Satisfechos" },
              { icon: Shield, value: counts.satisfaction, suffix: "%", label: "Tasa de Satisfacción" },
              { icon: TrendingUp, value: counts.equipment, suffix: "+", label: "Equipos Instalados" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              >
                <Card className="bg-white/50 backdrop-blur-lg border border-[rgba(7,156,251,0.08)] shadow-[0_8px_40px_rgba(3,126,204,0.1)] hover:shadow-[0_12px_50px_rgba(3,126,204,0.15)] hover:-translate-y-2 transition-all duration-300 group">
                  <CardContent className="pt-8 pb-6 space-y-4 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#079cfb]/10 to-[#00e0ff]/10 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(7,156,251,0.15)] group-hover:shadow-[0_0_30px_rgba(7,156,251,0.3)] transition-all duration-300"
                    >
                      <stat.icon className="w-8 h-8 text-[#037ecc] animate-icon-breathe" />
                    </motion.div>
                    <motion.div
                      key={stat.value}
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      className="text-4xl font-bold text-[#037ecc] group-hover:scale-105 transition-transform duration-300"
                    >
                      {stat.value}
                      {stat.suffix}
                    </motion.div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <Card className="overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all bg-gradient-to-br from-[#e0f2fe] via-white to-white">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-10 space-y-6">
                    <div className="relative inline-block">
                      <h2 className="text-3xl font-serif font-bold text-[#0f172a]">Nuestra Historia</h2>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#079cfb] to-[#00e0ff]"
                      />
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Aire-Max nació en 2008 con la visión de transformar la industria de la climatización en México.
                        Comenzamos como un pequeño taller familiar y hoy somos líderes en soluciones HVAC para hogares y
                        empresas.
                      </p>
                      <p className="text-[#037ecc] font-semibold italic">
                        "Cada instalación es una promesa de confort y confianza."
                      </p>
                    </div>
                    <div className="space-y-3 pt-4">
                      {[
                        { icon: Zap, text: "Eficiencia Energética" },
                        { icon: Heart, text: "Atención Personalizada" },
                        { icon: Wrench, text: "Garantía Certificada" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#079cfb]/10 to-[#00e0ff]/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-[#037ecc]" />
                          </div>
                          <span className="text-sm font-medium text-[#0f172a]">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#079cfb]/20 to-transparent" />
                    <img
                      src="/modern-air-conditioning-unit-installation-professi.jpg"
                      alt="Instalación profesional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <Card className="border-2 border-transparent hover:border-primary/20 transition-all bg-gradient-to-b from-[#f8fbff] to-[#ffffff]">
              <CardContent className="p-8 md:p-10 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-[#0f172a] text-center">Certificaciones y Alianzas</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Certificación EPA 608",
                    "Partner Oficial Daikin",
                    "Distribuidor Autorizado LG",
                    "Certificación AHRI",
                    "Partner Samsung HVAC",
                    "ISO 9001:2015",
                  ].map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, borderColor: "rgba(7,156,251,0.3)" }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[rgba(7,156,251,0.08)] hover:border-[#079cfb] hover:shadow-[0_0_20px_rgba(7,156,251,0.15)] transition-all duration-300"
                    >
                      <Star className="w-5 h-5 text-[#037ecc] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#0f172a]">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="border-2 border-transparent hover:border-primary/20 transition-all relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-[#079cfb] animate-pulse-slow" />
                <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-[#079cfb] animate-pulse-slow delay-100" />
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full bg-[#079cfb] animate-pulse-slow delay-200" />
              </div>
              <CardContent className="p-8 md:p-10 space-y-6 relative z-10">
                <h2 className="text-3xl font-serif font-bold text-[#0f172a] text-center">Cobertura Nacional</h2>
                <div className="flex flex-col items-center gap-6">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <MapPin className="w-12 h-12 text-[#037ecc]" />
                  </motion.div>
                  <p className="text-center text-muted-foreground leading-relaxed max-w-2xl">
                    Brindamos servicio en toda la República Mexicana con tiempos de respuesta garantizados
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 w-full">
                    {[
                      { zone: "Zona Metropolitana", time: "24h" },
                      { zone: "Ciudades principales", time: "48h" },
                      { zone: "Resto del país", time: "72h" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="text-center p-6 rounded-xl bg-gradient-to-br from-[#079cfb]/5 to-[#00e0ff]/5 border border-[rgba(7,156,251,0.1)]"
                      >
                        <div className="text-sm text-muted-foreground mb-2">{item.zone}</div>
                        <div className="text-2xl font-bold text-[#037ecc]">{item.time}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-[#037ecc] to-[#00baff] text-primary-foreground border-0 overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
              </div>
              <CardContent className="relative py-12 md:py-16 text-center space-y-6">
                <div className="flex justify-center gap-8 mb-4">
                  {[
                    { icon: Shield, text: "Garantía 24h" },
                    { icon: Award, text: "Técnicos certificados" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">¿Listo para trabajar con nosotros?</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Únete a miles de clientes satisfechos que confían en Aire-Max para sus necesidades de climatización
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="bg-white text-[#037ecc] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Link href="/contacto">
                      <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse-icon" />
                      Contactar Ahora
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
