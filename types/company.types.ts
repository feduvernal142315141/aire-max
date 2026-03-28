// ─── Company Info ────────────────────────────────────────────────────────────
export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  yearsExperience: number;
  unitsInstalled: number;
  clientsSatisfied: number;
  satisfactionRate: number;
}

// ─── WhatsApp Config ─────────────────────────────────────────────────────────
export interface WhatsAppConfig {
  number: string;
  defaultMessage: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavLink {
  name: string;
  href: string;
}

export interface FooterLinks {
  productos: NavLink[];
  servicios: NavLink[];
}

// ─── Trust Badge ─────────────────────────────────────────────────────────────
export interface TrustBadge {
  icon: string;
  text: string;
}

// ─── Coverage Zone ───────────────────────────────────────────────────────────
export interface CoverageZone {
  zone: string;
  responseTime: string;
}

// ─── Company Stats (display-ready) ───────────────────────────────────────────
export interface CompanyStat {
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export interface CompanyStats {
  years: CompanyStat;
  clients: CompanyStat;
  satisfaction: CompanyStat;
  equipment: CompanyStat;
}
