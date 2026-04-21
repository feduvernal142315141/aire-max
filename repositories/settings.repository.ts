import "server-only"

import { companyInfo, whatsappConfig } from "@/data"
import { createSupabaseAdminClient } from "@/lib/supabase/admin"
import { DEFAULT_SETTINGS } from "@/types"
import type { AppSettings } from "@/types"

import { mapSettingsRowToDomain } from "./_mappers"
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

  const supabase = createSupabaseAdminClient()
  const { data, error } = await supabase.from("settings").select("*").single()

  if (error || !data) return fallbackSettings()

  return mapSettingsRowToDomain(data)
}

export async function updateSettings(patch: Partial<AppSettings>): Promise<AppSettings> {
  if (!canUseSupabase()) throwWriteUnavailable("settings.update")

  const supabase = createSupabaseAdminClient()

  const { data, error } = await supabase
    .from("settings")
    .update({
      currency_code: patch.currencyCode,
      currency_locale: patch.currencyLocale,
      tax_rate: patch.taxRate,
      company_name: patch.companyName,
      company_phone: patch.companyPhone,
      company_email: patch.companyEmail,
      company_address: patch.companyAddress,
      whatsapp_number: patch.whatsappNumber,
    })
    .eq("id", true)
    .select("*")
    .single()

  if (error || !data) throw new Error(error?.message ?? "Error actualizando settings")
  return mapSettingsRowToDomain(data)
}
