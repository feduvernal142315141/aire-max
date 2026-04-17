import "server-only"

import { companyInfo, whatsappConfig } from "@/data"
import { DEFAULT_SETTINGS } from "@/types"
import type { AppSettings } from "@/types"

import { canUseSupabase, throwWriteUnavailable } from "./_runtime"

function fallbackSettings(): AppSettings {
  return {
    ...DEFAULT_SETTINGS,
    companyName: companyInfo.name,
    companyPhone: companyInfo.phone,
    companyEmail: companyInfo.email,
    companyAddress: companyInfo.address,
    whatsappNumber: whatsappConfig.number,
  }
}

export async function getSettings(): Promise<AppSettings> {
  if (!canUseSupabase()) {
    return fallbackSettings()
  }

  // TODO S3: query real singleton row en `settings`
  return fallbackSettings()
}

export async function updateSettings(_patch: Partial<AppSettings>): Promise<AppSettings> {
  throwWriteUnavailable("settings.update")
}
