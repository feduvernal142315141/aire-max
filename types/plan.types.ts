// ─── Plan Tier ───────────────────────────────────────────────────────────────
export const PLAN_TIER = {
  BASICO: "basico",
  ESTANDAR: "estandar",
  PREMIUM: "premium",
} as const;

export type PlanTier = (typeof PLAN_TIER)[keyof typeof PLAN_TIER];

// ─── Plan Period ─────────────────────────────────────────────────────────────
export const PLAN_PERIOD = {
  MENSUAL: "mensual",
  ANUAL: "anual",
  VISITA: "visita",
} as const;

export type PlanPeriod = (typeof PLAN_PERIOD)[keyof typeof PLAN_PERIOD];

// ─── Maintenance Plan ────────────────────────────────────────────────────────
export interface MaintenancePlan {
  id: PlanTier;
  name: string;
  price: number;
  period: PlanPeriod;
  description: string;
  features: string[];
  popular?: boolean;
  visitsPerYear: number | "unlimited";
}

// ─── Installation Plan ───────────────────────────────────────────────────────
export interface InstallationPlan {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}
