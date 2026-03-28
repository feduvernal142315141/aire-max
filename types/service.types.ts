// ─── Service Type ────────────────────────────────────────────────────────────
export const SERVICE_TYPE = {
  INSTALACION: "instalacion",
  MANTENIMIENTO: "mantenimiento",
  REPARACION: "reparacion",
} as const;

export type ServiceType = (typeof SERVICE_TYPE)[keyof typeof SERVICE_TYPE];

// ─── Service ─────────────────────────────────────────────────────────────────
export interface Service {
  id: ServiceType;
  name: string;
  description: string;
  features: string[];
  link: string;
  icon: string;
}

// ─── Installation Step ───────────────────────────────────────────────────────
export interface InstallationStep {
  step: string;
  title: string;
  description: string;
}

// ─── Maintenance Section ─────────────────────────────────────────────────────
export interface MaintenanceSection {
  title: string;
  items: string[];
}

// ─── Maintenance Benefit ─────────────────────────────────────────────────────
export interface MaintenanceBenefit {
  title: string;
  description: string;
  stat: string;
}
