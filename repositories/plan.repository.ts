import "server-only"

import { installationPlansData, maintenancePlansData } from "@/data"
import { createSupabaseAdminClient } from "@/lib/supabase/admin"
import type { InstallationPlan, MaintenancePlan } from "@/types"

import { canUseSupabase } from "./_runtime"

function mapMaintenanceRow(row: {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: string[]
  popular: boolean
  visits_per_year: string | null
}): MaintenancePlan {
  return {
    id: row.id as MaintenancePlan["id"],
    name: row.name,
    price: row.price,
    period: row.period as MaintenancePlan["period"],
    description: row.description,
    features: row.features,
    popular: row.popular,
    visitsPerYear:
      row.visits_per_year === "unlimited" ? "unlimited" : Number(row.visits_per_year ?? 1),
  }
}

function mapInstallationRow(row: {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  popular: boolean
}): InstallationPlan {
  return {
    id: row.id,
    title: row.name,
    price: `$${row.price.toFixed(0)}`,
    description: row.description,
    features: row.features,
    popular: row.popular,
  }
}

export async function findMaintenancePlans(): Promise<MaintenancePlan[]> {
  if (!canUseSupabase()) {
    return maintenancePlansData.map((plan) => ({ ...plan }))
  }

  const supabase = createSupabaseAdminClient()
  const { data, error } = await supabase
    .from("plans")
    .select("*")
    .eq("kind", "maintenance")
    .order("price", { ascending: true })

  if (error || !data?.length) {
    return maintenancePlansData.map((plan) => ({ ...plan }))
  }

  return data.map(mapMaintenanceRow)
}

export async function findInstallationPlans(): Promise<InstallationPlan[]> {
  if (!canUseSupabase()) {
    return installationPlansData.map((plan) => ({ ...plan }))
  }

  const supabase = createSupabaseAdminClient()
  const { data, error } = await supabase
    .from("plans")
    .select("*")
    .eq("kind", "installation")
    .order("price", { ascending: true })

  if (error || !data?.length) {
    return installationPlansData.map((plan) => ({ ...plan }))
  }

  return data.map(mapInstallationRow)
}

export async function findPlanById(id: string): Promise<MaintenancePlan | InstallationPlan | null> {
  const maintenance = await findMaintenancePlans()
  const maintenanceMatch = maintenance.find((plan) => plan.id === id)
  if (maintenanceMatch) return maintenanceMatch

  const installation = await findInstallationPlans()
  return installation.find((plan) => plan.id === id) ?? null
}
