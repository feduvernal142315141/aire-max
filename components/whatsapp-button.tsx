"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WHATSAPP_NUMBER = "1234567890"
const WHATSAPP_MESSAGE =
  "Hola, me gustaría obtener más información sobre sus servicios de climatización."

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div
      className={cn(
        "fixed right-6 bottom-6 z-50 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0",
      )}
    >
      {isExpanded && (
        <div className="animate-scale-in absolute right-0 bottom-full mb-4">
          <div className="max-w-[280px] rounded-2xl border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
            <button
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground absolute top-3 right-3 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-foreground mb-2 text-sm font-semibold">¿Necesitas ayuda?</p>
            <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
              Chatea con nosotros por WhatsApp y obtén una cotización inmediata
            </p>
            <Button
              size="sm"
              asChild
              className="w-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20BA5A] hover:shadow-xl"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Iniciar Chat
              </a>
            </Button>
          </div>
        </div>
      )}

      <div className="relative">
        <Button
          size="lg"
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative z-10 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] md:h-16 md:w-16"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
        </Button>

        <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <div
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-15"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-10"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </div>
  )
}
