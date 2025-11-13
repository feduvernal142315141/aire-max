"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Snowflake, Phone, Mail, MapPin, Clock, Shield, Award, Headphones, ArrowRight } from "lucide-react"
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00baff]/10 rounded-full blur-3xl animate-breathe" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#037ecc]/10 rounded-full blur-3xl animate-breathe"
        style={{ animationDelay: "5s" }}
      />

      <div className="relative border-b border-[#037ecc]/10">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 p-6 lg:p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(7,156,251,0.06)]"
          >
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-radial from-[#00baff]/10 to-transparent border border-[#037ecc]/10"
                  >
                    <badge.icon className="w-5 h-5 text-[#037ecc]" />
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
                className="relative overflow-hidden bg-gradient-to-r from-[#00d86a] to-[#00a34b] hover:from-[#00a34b] hover:to-[#00d86a] text-white shadow-[0_6px_20px_rgba(0,216,106,0.3)] rounded-full px-8 py-6 font-semibold transition-all duration-300"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span>Cotiza por WhatsApp</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative border-b border-[#037ecc]/10">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Logo + Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-radial from-[#00baff]/20 to-[#037ecc]/10 border border-[#037ecc]/20"
                >
                  <Snowflake className="w-7 h-7 text-[#037ecc]" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00baff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <span className="font-serif text-2xl font-bold bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent">
                  Aire-Max
                </span>
              </Link>
              <p className="text-[#475569] text-sm leading-relaxed opacity-90 mb-6">
                Más de 15 años ofreciendo soluciones de climatización profesional.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <motion.a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-sm text-[#0f172a] hover:text-[#037ecc] transition-colors group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00baff]/10 group-hover:bg-[#00baff]/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+1 (234) 567-8900</span>
                </motion.a>
                <motion.a
                  href="mailto:info@aire-max.com"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-sm text-[#0f172a] hover:text-[#037ecc] transition-colors group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00baff]/10 group-hover:bg-[#00baff]/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@aire-max.com</span>
                </motion.a>
                <div className="flex items-start gap-3 text-sm text-[#475569]">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00baff]/10 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Av. Principal 123, Ciudad, País</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#475569]">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00baff]/10">
                    <Clock className="w-4 h-4" />
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
              <h3 className="font-semibold text-[#0f172a] text-base mb-6">Productos</h3>
              <ul className="space-y-3">
                {footerLinks.productos.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-[#475569] hover:text-transparent hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text transition-all duration-300"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#037ecc] to-[#00baff] group-hover:w-full transition-all duration-300" />
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
              <h3 className="font-semibold text-[#0f172a] text-base mb-6">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-[#475569] hover:text-transparent hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text transition-all duration-300"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#037ecc] to-[#00baff] group-hover:w-full transition-all duration-300" />
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
              <h3 className="font-semibold text-[#0f172a] text-base mb-6">Contacto</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/nosotros"
                    className="group relative inline-block text-sm text-[#475569] hover:text-transparent hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text transition-all duration-300"
                  >
                    Nosotros
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#037ecc] to-[#00baff] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/proyectos"
                    className="group relative inline-block text-sm text-[#475569] hover:text-transparent hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text transition-all duration-300"
                  >
                    Proyectos
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#037ecc] to-[#00baff] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="group relative inline-block text-sm text-[#475569] hover:text-transparent hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text transition-all duration-300"
                  >
                    FAQ
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#037ecc] to-[#00baff] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="group relative inline-block text-sm text-[#475569] hover:text-transparent hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text transition-all duration-300"
                  >
                    Contacto
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#037ecc] to-[#00baff] group-hover:w-full transition-all duration-300" />
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
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-[#475569] opacity-90">
              © {new Date().getFullYear()} Aire-Max · Todos los derechos reservados
            </p>
            <motion.a
              href="https://www.kodewave-solutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-[#475569] hover:text-[#037ecc] transition-colors group"
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
              <span className="font-semibold bg-gradient-to-r from-[#037ecc] to-[#00baff] bg-clip-text text-transparent">
                KodeWave Solutions
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
