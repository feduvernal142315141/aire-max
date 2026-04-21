import "server-only"

import { servicesData } from "@/data"
import { createSupabaseAdminClient } from "@/lib/supabase/admin"
import type { Service } from "@/types"

import { mapServiceRowToDomain } from "./_mappers"
import { canUseSupabase } from "./_runtime"

export async function findAllServices(): Promise<Service[]> {
  if (!canUseSupabase()) {
    return servicesData.map((service) => ({ ...service }))
  }

  const supabase = createSupabaseAdminClient()
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("created_at", { ascending: true })

  if (error || !data?.length) {
    return servicesData.map((service) => ({ ...service }))
  }

  return data.map(mapServiceRowToDomain)
}

export async function findServiceBySlug(slug: string): Promise<Service | null> {
  if (!canUseSupabase()) {
    return servicesData.find((s) => s.id === slug || s.link.endsWith(`/${slug}`)) ?? null
  }

  const supabase = createSupabaseAdminClient()
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .or(`id.eq.${slug},slug.eq.${slug}`)
    .single()

  if (error || !data) {
    return servicesData.find((s) => s.id === slug || s.link.endsWith(`/${slug}`)) ?? null
  }

  return mapServiceRowToDomain(data)
}
