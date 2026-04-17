import "server-only"

import { installationPlansData, maintenancePlansData } from "@/data"
import type { InstallationPlan, MaintenancePlan } from "@/types"

import { canUseSupabase } from "./_runtime"

export async function findMaintenancePlans(): Promise<MaintenancePlan[]> {
  if (!canUseSupabase()) {
    return maintenancePlansData.map((plan) => ({ ...plan }))
  }

  // TODO S3: query real a Supabase
  return maintenancePlansData.map((plan) => ({ ...plan }))
}

export async function findInstallationPlans(): Promise<InstallationPlan[]> {
  if (!canUseSupabase()) {
    return installationPlansData.map((plan) => ({ ...plan }))
  }

  // TODO S3: query real a Supabase
  return installationPlansData.map((plan) => ({ ...plan }))
}

export async function findPlanById(id: string): Promise<MaintenancePlan | InstallationPlan | null> {
  const maintenance = await findMaintenancePlans()
  const maintenanceMatch = maintenance.find((plan) => plan.id === id)
  if (maintenanceMatch) return maintenanceMatch

  const installation = await findInstallationPlans()
  return installation.find((plan) => plan.id === id) ?? null
}
