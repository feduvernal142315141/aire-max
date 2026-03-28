import { maintenancePlansData, installationPlansData } from "@/data";
import type { MaintenancePlan, InstallationPlan, PlanTier } from "@/types";

export async function getMaintenancePlans(): Promise<MaintenancePlan[]> {
  return maintenancePlansData;
}

export async function getMaintenancePlanById(
  id: PlanTier,
): Promise<MaintenancePlan | undefined> {
  return maintenancePlansData.find((plan) => plan.id === id);
}

export async function getInstallationPlans(): Promise<InstallationPlan[]> {
  return installationPlansData;
}
