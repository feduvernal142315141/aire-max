import { CatalogPageClient } from "@/components/catalog/catalog-page-client"
import { getProducts } from "@/services"

/** Siempre datos frescos desde Supabase (evita HTML estático del build en caché del dominio production). */
export const dynamic = "force-dynamic"

export default async function CatalogoPage() {
  const initialProducts = await getProducts()

  return <CatalogPageClient initialProducts={initialProducts} />
}
