import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Aire-Max | Venta, Instalación y Mantenimiento de Aires Acondicionados",
  description:
    "Expertos en climatización. Venta, instalación profesional y mantenimiento de aires acondicionados. Técnicos certificados, garantía extendida y respuesta en 24h.",
  keywords: "aires acondicionados, instalación AC, mantenimiento HVAC, split, inverter, climatización",
  openGraph: {
    title: "Aire-Max | Expertos en Climatización",
    description: "Venta, instalación y mantenimiento profesional de aires acondicionados",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
