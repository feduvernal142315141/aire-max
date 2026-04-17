import type { Service, InstallationStep, MaintenanceSection, MaintenanceBenefit } from "@/types"

// ─── Main Services ───────────────────────────────────────────────────────────
// From servicios/page.tsx
export const servicesData: Service[] = [
  {
    id: "instalacion",
    name: "Instalación Profesional",
    description:
      "Instalación certificada con garantía. Cumplimos todas las normas de seguridad y eficiencia energética.",
    features: [
      "Instalación en 24-48 horas",
      "Técnicos certificados",
      "Garantía de instalación",
      "Limpieza del área incluida",
    ],
    link: "/servicios/instalacion",
    icon: "Wrench",
  },
  {
    id: "mantenimiento",
    name: "Mantenimiento",
    description:
      "Planes de mantenimiento preventivo y correctivo para alargar la vida útil de tu equipo.",
    features: [
      "Planes mensuales y anuales",
      "Revisión completa del sistema",
      "Limpieza profunda",
      "Descuentos por contrato",
    ],
    link: "/servicios/mantenimiento",
    icon: "ThermometerSun",
  },
  {
    id: "reparacion",
    name: "Reparación",
    description: "Servicio técnico especializado para todo tipo de aires acondicionados y marcas.",
    features: [
      "Diagnóstico gratuito",
      "Respuesta en 24 horas",
      "Repuestos originales",
      "Garantía en reparaciones",
    ],
    link: "/servicios/reparacion",
    icon: "Snowflake",
  },
]

// ─── Installation Steps ──────────────────────────────────────────────────────
// From instalacion/page.tsx
export const installationStepsData: InstallationStep[] = [
  {
    step: "01",
    title: "Evaluación",
    description:
      "Visitamos tu espacio para evaluar las necesidades y determinar la mejor ubicación.",
  },
  {
    step: "02",
    title: "Planificación",
    description: "Diseñamos el plan de instalación y coordinamos fecha y hora contigo.",
  },
  {
    step: "03",
    title: "Instalación",
    description: "Nuestros técnicos instalan el equipo siguiendo normas de seguridad.",
  },
  {
    step: "04",
    title: "Pruebas",
    description: "Realizamos pruebas completas y te enseñamos a usar tu nuevo equipo.",
  },
]

// ─── Installation Includes ───────────────────────────────────────────────────
// From instalacion/page.tsx
export const installationIncludesData: string[] = [
  "Visita técnica previa sin costo",
  "Instalación de unidad interior y exterior",
  "Tubería de cobre de hasta 3 metros",
  "Cable eléctrico y protecciones",
  "Perforación de pared (1 orificio)",
  "Soporte y anclajes",
  "Pruebas de funcionamiento",
  "Limpieza del área de trabajo",
  "Capacitación de uso",
  "Garantía de instalación por 2 años",
  "Certificado de instalación",
  "Soporte post-instalación",
]

// ─── Maintenance Sections ────────────────────────────────────────────────────
// From mantenimiento/page.tsx
export const maintenanceSectionsData: MaintenanceSection[] = [
  {
    title: "Limpieza Completa",
    items: ["Filtros de aire", "Serpentines", "Drenaje", "Carcasa exterior"],
  },
  {
    title: "Revisión Técnica",
    items: ["Nivel de refrigerante", "Presión del sistema", "Conexiones eléctricas", "Termostato"],
  },
  {
    title: "Optimización",
    items: ["Ajuste de temperatura", "Calibración", "Lubricación", "Pruebas de rendimiento"],
  },
]

// ─── Maintenance Benefits ────────────────────────────────────────────────────
// From mantenimiento/page.tsx
export const maintenanceBenefitsData: MaintenanceBenefit[] = [
  {
    title: "Ahorro Energético",
    description: "Hasta 30% menos consumo eléctrico",
    stat: "30%",
  },
  {
    title: "Vida Útil",
    description: "Extiende la duración del equipo",
    stat: "+5 años",
  },
  {
    title: "Aire Limpio",
    description: "Mejor calidad del aire interior",
    stat: "100%",
  },
  {
    title: "Menos Averías",
    description: "Previene reparaciones costosas",
    stat: "80%",
  },
]
