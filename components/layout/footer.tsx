"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Snowflake,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  Headphones,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"

const WHATSAPP_NUMBER = "1234567890"
const WHATSAPP_MESSAGE = "Hola, me gustaría cotizar un equipo de aire acondicionado."

const footerLinks = {
  productos: [
    { name: "Aires Split", href: "/catalogo?tipo=split" },
    { name: "Aires Inverter", href: "/catalogo?tipo=inverter" },
    { name: "Aires Ventana", href: "/catalogo?tipo=ventana" },
    { name: "Comercial/Industrial", href: "/catalogo?tipo=comercial" },
  ],
  servicios: [
    { name: "Instalación", href: "/servicios#instalacion" },
    { name: "Mantenimiento", href: "/servicios#mantenimiento" },
    { name: "Reparación", href: "/servicios#reparacion" },
    { name: "Planes de Mantenimiento", href: "/planes" },
  ],
}

const trustBadges = [
  { icon: Shield, text: "Garantía 5 años" },
  { icon: Headphones, text: "Soporte 24h" },
  { icon: Award, text: "Técnicos certificados" },
]

export function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fcff] via-[#eaf6ff] to-[#d9f0ff] opacity-50" />
      <div className="animate-breathe absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#00baff]/10 blur-3xl" />
      <div
        className="animate-breathe absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-[#037ecc]/10 blur-3xl"
        style={{ animationDelay: "5s" }}
      />

      <div className="relative border-b border-[#037ecc]/10">
        <div className="container mx-auto px-6 py-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/40 bg-white/60 p-6 shadow-[0_10px_40px_rgba(7,156,251,0.06)] backdrop-blur-xl lg:flex-row lg:gap-8 lg:p-8"
          >
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start lg:gap-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="bg-gradient-radial flex h-12 w-12 items-center justify-center rounded-full border border-[#037ecc]/10 from-[#00baff]/10 to-transparent"
                  >
                    <badge.icon className="h-5 w-5 text-[#037ecc]" />
                  </motion.div>
                  <span className="text-sm font-medium text-[#0f172a]">{badge.text}</span>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                asChild
                className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#00d86a] to-[#00a34b] px-8 py-6 font-semibold text-white shadow-[0_6px_20px_rgba(0,216,106,0.3)] transition-all duration-300 hover:from-[#00a34b] hover:to-[#00d86a]"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Cotiza por WhatsApp</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative border-b border-[#037ecc]/10">
        <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
            {/* Logo + Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Link href="/" className="group mb-6 inline-flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-radial relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#037ecc]/20 from-[#00baff]/20 to-[#037ecc]/10"
                >
                  <Snowflake className="h-7 w-7 text-[#037ecc]" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00baff]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
                <span className="bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text font-serif text-2xl font-bold text-transparent">
                  Aire-Max
                </span>
              </Link>
              <p className="mb-6 text-sm leading-relaxed text-[#475569] opacity-90">
                Más de 15 años ofreciendo soluciones de climatización profesional.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <motion.a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3 text-sm text-[#0f172a] transition-colors hover:text-[#037ecc]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00baff]/10 transition-colors group-hover:bg-[#00baff]/20">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+1 (234) 567-8900</span>
                </motion.a>
                <motion.a
                  href="mailto:info@aire-max.com"
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3 text-sm text-[#0f172a] transition-colors hover:text-[#037ecc]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00baff]/10 transition-colors group-hover:bg-[#00baff]/20">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>info@aire-max.com</span>
                </motion.a>
                <div className="flex items-start gap-3 text-sm text-[#475569]">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#00baff]/10">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Av. Principal 123, Ciudad, País</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#475569]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00baff]/10">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>Lun - Vie: 8:00 - 18:00</span>
                </div>
              </div>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="mb-6 text-base font-semibold text-[#0f172a]">Productos</h3>
              <ul className="space-y-3">
                {footerLinks.productos.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-[#475569] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text hover:text-transparent"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#037ecc] to-[#00baff] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-6 text-base font-semibold text-[#0f172a]">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-[#475569] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text hover:text-transparent"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#037ecc] to-[#00baff] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="mb-6 text-base font-semibold text-[#0f172a]">Contacto</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/nosotros"
                    className="group relative inline-block text-sm text-[#475569] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text hover:text-transparent"
                  >
                    Nosotros
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#037ecc] to-[#00baff] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/proyectos"
                    className="group relative inline-block text-sm text-[#475569] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text hover:text-transparent"
                  >
                    Proyectos
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#037ecc] to-[#00baff] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="group relative inline-block text-sm text-[#475569] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text hover:text-transparent"
                  >
                    FAQ
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#037ecc] to-[#00baff] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="group relative inline-block text-sm text-[#475569] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text hover:text-transparent"
                  >
                    Contacto
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#037ecc] to-[#00baff] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-b from-transparent to-[#037ecc]/5"
      >
        <div className="container mx-auto px-6 py-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p className="text-[#475569] opacity-90">
              © {new Date().getFullYear()} Aire-Max · Todos los derechos reservados
            </p>
            <motion.a
              href="https://www.kodewave-solutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2 text-[#475569] transition-colors hover:text-[#037ecc]"
            >
              <span>Diseñado con</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="inline-block bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent"
              >
                ❄
              </motion.span>
              <span>por</span>
              <span className="bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text font-semibold text-transparent">
                KodeWave Solutions
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
