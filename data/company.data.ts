import type {
  CompanyInfo,
  WhatsAppConfig,
  NavLink,
  FooterLinks,
  TrustBadge,
  CoverageZone,
  CompanyStats,
} from "@/types";

// ─── WhatsApp Config — Single Source of Truth ────────────────────────────────
export const whatsappConfig: WhatsAppConfig = {
  number: "1234567890",
  defaultMessage:
    "Hola, me gustaría obtener más información sobre sus servicios de climatización.",
};

// ─── Company Info — Single Source of Truth ───────────────────────────────────
export const companyInfo: CompanyInfo = {
  name: "Aire-Max",
  tagline: "Expertos en Climatización",
  phone: "+1 (234) 567-8900",
  email: "info@aire-max.com",
  address: "Av. Principal 123, Ciudad, País",
  hours: "Lun - Vie: 8:00 - 18:00 | Sáb: 9:00 - 14:00",
  yearsExperience: 15,
  unitsInstalled: 10000,
  clientsSatisfied: 5000,
  satisfactionRate: 98,
};

// ─── Navigation Links ────────────────────────────────────────────────────────
export const navLinksData: NavLink[] = [
  { name: "Inicio", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Servicios", href: "/servicios" },
  { name: "Planes", href: "/planes" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "FAQ", href: "/faq" },
  { name: "Contacto", href: "/contacto" },
];

// ─── Footer Links ────────────────────────────────────────────────────────────
export const footerLinksData: FooterLinks = {
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
};

// ─── Trust Badges ────────────────────────────────────────────────────────────
export const trustBadgesData: TrustBadge[] = [
  { icon: "Shield", text: "Garantía 5 años" },
  { icon: "Headphones", text: "Soporte 24h" },
  { icon: "Award", text: "Técnicos certificados" },
];

// ─── Certifications ──────────────────────────────────────────────────────────
export const certificationsData: string[] = [
  "Certificación EPA 608",
  "Partner Oficial Daikin",
  "Distribuidor Autorizado LG",
  "Certificación AHRI",
  "Partner Samsung HVAC",
  "ISO 9001:2015",
];

// ─── Coverage Zones ──────────────────────────────────────────────────────────
export const coverageZonesData: CoverageZone[] = [
  { zone: "Zona Metropolitana", responseTime: "24h" },
  { zone: "Ciudades principales", responseTime: "48h" },
  { zone: "Resto del país", responseTime: "72h" },
];

// ─── Company Stats (display-ready for nosotros page) ─────────────────────────
export const companyStatsData: CompanyStats = {
  years: {
    icon: "Award",
    value: companyInfo.yearsExperience,
    suffix: "+",
    label: "Años de Experiencia",
  },
  clients: {
    icon: "Users",
    value: companyInfo.clientsSatisfied,
    suffix: "+",
    label: "Clientes Satisfechos",
  },
  satisfaction: {
    icon: "Shield",
    value: companyInfo.satisfactionRate,
    suffix: "%",
    label: "Tasa de Satisfacción",
  },
  equipment: {
    icon: "TrendingUp",
    value: companyInfo.unitsInstalled,
    suffix: "+",
    label: "Equipos Instalados",
  },
};
