"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Snowflake, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Servicios", href: "/servicios" },
  { name: "Planes", href: "/planes" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "FAQ", href: "/faq" },
  { name: "Contacto", href: "/contacto" },
]

const WHATSAPP_NUMBER = "1234567890"
const WHATSAPP_MESSAGE =
  "Hola, me gustaría obtener más información sobre sus servicios de climatización."

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`

  return (
    <>
      {/* HEADER */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-down",
          isScrolled
            ? "h-14 bg-white/95 backdrop-blur-md border-b border-white/20 shadow-[0_2px_20px_rgba(0,0,0,0.05)] md:h-16"
            : "h-14 bg-white/20 backdrop-blur-md md:h-18",
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div
                className={cn(
                  "bg-gradient-to-br from-[#079cfb] to-[#037ecc] text-white p-2 md:p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg",
                  !isScrolled && "shadow-[#079cfb]/10",
                )}
              >
                <Snowflake className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <span className="font-serif text-lg md:text-2xl lg:text-3xl font-bold text-[#0f172a]">
                Aire-Max
              </span>
            </Link>

            {/* NAV DESKTOP */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-[#0f172a]/80 hover:text-[#0f172a] transition-all duration-300 py-2
                             after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-[#037ecc] after:to-[#00baff]
                             after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA DESKTOP */}
            <div className="hidden lg:flex items-center gap-3">
              

              <Button
                size="default"
                asChild
                className="gap-2 bg-gradient-to-r from-[#079cfb] to-[#00e0ff] hover:from-[#037ecc] hover:to-[#079cfb] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Cotizar Ahora
                </a>
              </Button>
            </div>

            {/* MENU MOVIL */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
               <Button
                  variant="ghost"
                  className="hover:bg-primary/10 transition-all duration-300 h-16 w-16 md:h-12 md:w-12 flex items-center justify-center rounded-xl"
                >

                  {/* ÍCONO MENU */}
                  <motion.div
                    initial={false}
                    animate={isOpen ? "hidden" : "visible"}
                    variants={{
                      visible: { opacity: 1, scale: 1, rotate: 0 },
                      hidden: { opacity: 0, scale: 0.2, rotate: 90 },
                    }}
                    className="absolute"
                  >
                    <Menu className="h-10 w-10" />
                  </motion.div>

                  {/* ÍCONO X */}
                  <motion.div
                    initial={false}
                    animate={isOpen ? "visible" : "hidden"}
                    variants={{
                      visible: { opacity: 1, scale: 1, rotate: 0 },
                      hidden: { opacity: 0, scale: 0.2, rotate: -90 },
                    }}
                    className="absolute"
                  >
                    <X className="h-8 w-8" />
                  </motion.div>
                </Button>
              </SheetTrigger>

              {/* CONTENIDO DEL MENU */}
              <SheetContent
                side="right"
                className="w-[88vw] p-0 border-l border-white/40 shadow-[0_0_40px_rgba(7,156,251,0.2)] rounded-l-[24px] overflow-hidden bg-gradient-to-br from-white/70 via-white/60 to-[#e7f6ff]/50 backdrop-blur-2xl"
              >
                {/* FIX DE RADIX (IMPORTANTE) */}
                <SheetHeader className="sr-only">
                  <SheetTitle>Menú móvil</SheetTitle>
                </SheetHeader>

                {/* DECORACIONES */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00baff]/20 rounded-full blur-3xl animate-float pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#079cfb]/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

                <div className="relative flex flex-col h-full px-7 pt-[72px] pb-6">
                  {/* LOGO */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-center mb-12"
                  >
                    <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#00baff]/20 blur-3xl rounded-full scale-150" />
                        <div className="relative bg-gradient-to-br from-[#079cfb] to-[#037ecc] text-white p-4 rounded-xl shadow-lg">
                          <Snowflake className="h-8 w-8" />
                        </div>
                      </div>
                      <span className="font-serif text-3xl font-bold text-[#0f172a]">Aire-Max</span>
                    </Link>
                  </motion.div>

                  {/* LINKS */}
                  <nav className="flex flex-col gap-[22px] flex-1">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-[14px] text-lg font-medium text-[#0f172a] hover:text-transparent hover:bg-gradient-to-r hover:from-[#037ecc] hover:to-[#00baff] hover:bg-clip-text rounded-xl transition-all duration-300 relative group"
                        >
                          <span className="relative tracking-[0.5px]">
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#037ecc] to-[#00baff] group-hover:w-full transition-all duration-300 rounded-full" />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* CTA MOBILE */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col gap-3 pt-6 mt-6 -mx-7 px-7 pb-2 bg-white/60 backdrop-blur-lg rounded-t-2xl border-t border-white/40 shadow-[0_-8px_30px_rgba(7,156,251,0.1)]"
                  >
                    

                    <Button
                      asChild
                      className="w-full gap-2 h-12 bg-gradient-to-r from-[#037ecc] to-[#00baff] hover:from-[#026bb3] hover:to-[#0088d6] text-white font-semibold shadow-[0_6px_20px_rgba(7,156,251,0.4)] hover:shadow-[0_8px_24px_rgba(7,156,251,0.5)] rounded-xl relative overflow-hidden group"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000" />
                        Cotizar Ahora
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
