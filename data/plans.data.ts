import type { MaintenancePlan, InstallationPlan } from "@/types"

// ─── Maintenance Plans — Single Source of Truth ──────────────────────────────
// Canonical pricing from planes/page.tsx (customer-facing marketing page).
// Resolves conflict: lib/constants.ts had different prices ($99/$179/$329)
// and mantenimiento/page.tsx had different tiers ($79.99 per visit / $139.99 per year).
// The planes/page.tsx values are the OFFICIAL prices.
export const maintenancePlansData: MaintenancePlan[] = [
  {
    id: "basico",
    name: "Plan Básico",
    price: 49.99,
    period: "mensual",
    description: "Ideal para hogares con un equipo de aire acondicionado",
    features: [
      "2 visitas al año",
      "Limpieza de filtros",
      "Revisión de gas refrigerante",
      "Inspección eléctrica básica",
      "10% descuento en repuestos",
      "Soporte telefónico",
    ],
    popular: false,
    visitsPerYear: 2,
  },
  {
    id: "estandar",
    name: "Plan Estándar",
    price: 89.99,
    period: "mensual",
    description: "Perfecto para hogares con múltiples equipos",
    features: [
      "4 visitas al año",
      "Limpieza profunda de serpentines",
      "Recarga de gas incluida (1 vez/año)",
      "Revisión eléctrica completa",
      "20% descuento en repuestos",
      "Prioridad en emergencias",
      "Soporte 24/7",
    ],
    popular: true,
    visitsPerYear: 4,
  },
  {
    id: "premium",
    name: "Plan Premium",
    price: 149.99,
    period: "mensual",
    description: "Solución completa para negocios y oficinas",
    features: [
      "Visitas ilimitadas",
      "Mantenimiento preventivo mensual",
      "Recarga de gas ilimitada",
      "Reparaciones incluidas",
      "30% descuento en repuestos",
      "Respuesta en menos de 4 horas",
      "Soporte técnico dedicado 24/7",
      "Reemplazo temporal en caso de falla",
    ],
    popular: false,
    visitsPerYear: "unlimited",
  },
]

// ─── Installation Plans — Single Source of Truth ─────────────────────────────
// From instalacion/page.tsx
export const installationPlansData: InstallationPlan[] = [
  {
    id: "split-basico",
    title: "Split Básico",
    price: "Incluido",
    description: "Con la compra del equipo",
    features: ["Hasta 18,000 BTU", "Tubería hasta 3m", "1 perforación", "Garantía 2 años"],
    popular: false,
  },
  {
    id: "split-premium",
    title: "Split Premium",
    price: "$150",
    description: "Instalación adicional",
    features: ["24,000 - 36,000 BTU", "Tubería hasta 5m", "2 perforaciones", "Garantía 3 años"],
    popular: true,
  },
  {
    id: "cassette-piso-techo",
    title: "Cassette/Piso-Techo",
    price: "$350",
    description: "Instalación especializada",
    features: [
      "Cualquier capacidad",
      "Instalación compleja",
      "Múltiples perforaciones",
      "Garantía 5 años",
    ],
    popular: false,
  },
]
