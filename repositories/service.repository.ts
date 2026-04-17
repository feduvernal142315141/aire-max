import "server-only"

import { servicesData } from "@/data"
import type { Service } from "@/types"

import { canUseSupabase } from "./_runtime"

export async function findAllServices(): Promise<Service[]> {
  if (!canUseSupabase()) {
    return servicesData.map((service) => ({ ...service }))
  }

  // TODO S3: query real a Supabase
  return servicesData.map((service) => ({ ...service }))
}

export async function findServiceBySlug(slug: string): Promise<Service | null> {
  const services = await findAllServices()

  return (
    services.find((service) => service.id === slug || service.link.endsWith(`/${slug}`)) ?? null
  )
}
