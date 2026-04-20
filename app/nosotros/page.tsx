import type { Metadata } from "next"

import { NosotrosClient } from "./nosotros-client"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Aire-Max — 15 Años en Climatización Profesional",
  description:
    "Conoce la historia de Aire-Max. Más de 15 años brindando soluciones HVAC con técnicos certificados, garantía extendida y cobertura en toda la República Mexicana.",
  keywords: "sobre nosotros, empresa HVAC, técnicos certificados, climatización profesional México",
  openGraph: {
    title: "Sobre Nosotros | Aire-Max",
    description:
      "15 años de experiencia en instalación y mantenimiento de aires acondicionados. Conoce nuestro equipo y certificaciones.",
    type: "website",
  },
}

export default function NosotrosPage() {
  return <NosotrosClient />
}
