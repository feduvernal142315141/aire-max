"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WHATSAPP_NUMBER = "1234567890"
const WHATSAPP_MESSAGE = "Hola, me gustaría obtener más información sobre sus servicios de climatización."

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
        "fixed bottom-6 right-6 z-50 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none",
      )}
    >
      {isExpanded && (
        <div className="absolute bottom-full right-0 mb-4 animate-scale-in">
          <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-5 max-w-[280px]">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-sm font-semibold text-foreground mb-2">¿Necesitas ayuda?</p>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              Chatea con nosotros por WhatsApp y obtén una cotización inmediata
            </p>
            <Button
              size="sm"
              asChild
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
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
          className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 relative z-10"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
        </Button>

        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <div
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-15"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-10"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </div>
  )
}
