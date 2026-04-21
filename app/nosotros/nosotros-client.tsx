"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  Users,
  MapPin,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Zap,
  Heart,
  Wrench,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useAnimatedStats } from "@/hooks/use-animated-stats"

export function NosotrosClient() {
  const counts = useAnimatedStats()

  return (
    <div className="flex flex-col pt-16 md:pt-20">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="bg-section absolute inset-0" />
        <div className="animate-breathe bg-primary absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[120px] dark:opacity-[0.12]" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 space-y-6 text-center"
          >
            <Badge className="border-primary/20 text-primary mx-auto w-fit border bg-white/80 backdrop-blur-sm">
              Sobre Nosotros
            </Badge>
            <h1 className="text-foreground font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Expertos en{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Climatización</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="from-primary absolute bottom-0 left-0 h-1 bg-gradient-to-r to-[#00e0ff] opacity-30"
                />
              </span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[620px] text-lg leading-relaxed md:text-xl">
              Más de 15 años brindando soluciones de climatización profesional con compromiso,
              calidad y excelencia en el servicio
            </p>
          </motion.div>

          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, value: counts.years, suffix: "+", label: "Años de Experiencia" },
              { icon: Users, value: counts.clients, suffix: "+", label: "Clientes Satisfechos" },
              {
                icon: Shield,
                value: counts.satisfaction,
                suffix: "%",
                label: "Tasa de Satisfacción",
              },
              {
                icon: TrendingUp,
                value: counts.equipment,
                suffix: "+",
                label: "Equipos Instalados",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              >
                <Card className="group border-border bg-card/60 dark:bg-card/70 border shadow-[var(--elevation-1)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--elevation-3)]">
                  <CardContent className="space-y-4 pt-8 pb-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-primary/10 dark:bg-primary/15 mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-[0_0_20px_rgba(7,156,251,0.15)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(7,156,251,0.3)]"
                    >
                      <stat.icon className="animate-icon-breathe text-primary h-8 w-8 dark:text-sky-400" />
                    </motion.div>
                    <motion.div
                      key={stat.value}
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      className="text-primary text-4xl font-bold tabular-nums transition-transform duration-300 group-hover:scale-105 dark:text-sky-400"
                    >
                      {stat.value}
                      {stat.suffix}
                    </motion.div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
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
            className="mx-auto mb-16 max-w-6xl"
          >
            <Card className="hover:border-primary/20 bg-card dark:bg-card/80 overflow-hidden border-2 border-transparent transition-all">
              <CardContent className="p-0">
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="space-y-6 p-8 md:p-10">
                    <div className="relative inline-block">
                      <h2 className="text-foreground font-serif text-3xl font-bold">
                        Nuestra Historia
                      </h2>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="from-primary absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r to-[#00e0ff]"
                      />
                    </div>
                    <div className="text-muted-foreground space-y-4 leading-relaxed">
                      <p>
                        Aire-Max nació en 2008 con la visión de transformar la industria de la
                        climatización en México. Comenzamos como un pequeño taller familiar y hoy
                        somos líderes en soluciones HVAC para hogares y empresas.
                      </p>
                      <p className="text-primary font-semibold italic dark:text-sky-400">
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
                          <div className="bg-primary/10 dark:bg-primary/15 flex h-10 w-10 items-center justify-center rounded-full">
                            <item.icon className="text-primary h-5 w-5 dark:text-sky-400" />
                          </div>
                          <span className="text-foreground text-sm font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#079cfb]/20 to-transparent" />
                    <Image
                      src="/modern-air-conditioning-unit-installation-professi.jpg"
                      alt="Instalación profesional"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
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
            className="mx-auto mb-16 max-w-6xl"
          >
            <Card className="hover:border-primary/20 from-card to-background dark:from-card/80 dark:to-background/80 border-2 border-transparent bg-gradient-to-b transition-all">
              <CardContent className="space-y-6 p-8 md:p-10">
                <h2 className="text-foreground text-center font-serif text-3xl font-bold">
                  Certificaciones y Alianzas
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
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
                      whileHover={{ scale: 1.02 }}
                      className="border-border bg-muted/30 hover:border-primary/30 dark:bg-muted/20 flex items-center gap-3 rounded-xl border p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(7,156,251,0.1)]"
                    >
                      <Star className="text-primary h-5 w-5 flex-shrink-0 dark:text-sky-400" />
                      <span className="text-foreground text-sm font-medium">{cert}</span>
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
            className="mx-auto max-w-6xl"
          >
            <Card className="hover:border-primary/20 relative overflow-hidden border-2 border-transparent transition-all">
              <div className="absolute inset-0 opacity-5">
                <div className="animate-pulse-slow absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-[#079cfb]" />
                <div className="animate-pulse-slow absolute top-1/2 right-1/3 h-3 w-3 rounded-full bg-[#079cfb] delay-100" />
                <div className="animate-pulse-slow absolute bottom-1/3 left-1/2 h-3 w-3 rounded-full bg-[#079cfb] delay-200" />
              </div>
              <CardContent className="relative z-10 space-y-6 p-8 md:p-10">
                <h2 className="text-foreground text-center font-serif text-3xl font-bold">
                  Cobertura Nacional
                </h2>
                <div className="flex flex-col items-center gap-6">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <MapPin className="text-primary h-12 w-12 dark:text-sky-400" />
                  </motion.div>
                  <p className="text-muted-foreground max-w-2xl text-center leading-relaxed">
                    Brindamos servicio en toda la República Mexicana con tiempos de respuesta
                    garantizados
                  </p>
                  <div className="grid w-full gap-6 md:grid-cols-3">
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
                        className="border-border bg-primary/5 dark:bg-primary/8 rounded-xl border p-6 text-center"
                      >
                        <div className="text-muted-foreground mb-2 text-sm">{item.zone}</div>
                        <div className="text-primary text-2xl font-bold tabular-nums dark:text-sky-400">
                          {item.time}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="bg-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="text-primary-foreground relative overflow-hidden border-0 bg-gradient-to-br from-[#037ecc] to-[#00baff]">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
              </div>
              <CardContent className="relative space-y-6 py-12 text-center md:py-16">
                <div className="mb-4 flex justify-center gap-8">
                  {[
                    { icon: Shield, text: "Garantía 24h" },
                    { icon: Award, text: "Técnicos certificados" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <h2 className="font-serif text-3xl font-bold md:text-4xl">
                  ¿Listo para trabajar con nosotros?
                </h2>
                <p className="mx-auto max-w-2xl text-lg opacity-90">
                  Únete a miles de clientes satisfechos que confían en Aire-Max para sus necesidades
                  de climatización
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="group text-primary dark:bg-card dark:hover:bg-card/90 bg-white shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl dark:text-sky-400"
                  >
                    <Link href="/contacto">
                      <Phone className="group-hover:animate-pulse-icon mr-2 h-5 w-5" />
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
