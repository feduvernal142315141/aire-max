import type { Database } from "@/lib/supabase/types.generated"
import type {
  AppSettings,
  ContactSubmission,
  Customer,
  Product,
  ProductAdminView,
  Service,
} from "@/types"

type SettingsRow = Database["public"]["Tables"]["settings"]["Row"]
type ProductRow = Database["public"]["Tables"]["products"]["Row"]
type ServiceRow = Database["public"]["Tables"]["services"]["Row"]
type CustomerRow = Database["public"]["Tables"]["customers"]["Row"]
type ContactRow = Database["public"]["Tables"]["contact_submissions"]["Row"]

export function mapSettingsRowToDomain(row: SettingsRow): AppSettings {
  return {
    currencyCode: row.currency_code as AppSettings["currencyCode"],
    currencyLocale: row.currency_locale,
    taxRate: row.tax_rate,
    companyName: row.company_name,
    companyPhone: row.company_phone,
    companyEmail: row.company_email,
    companyAddress: row.company_address,
    whatsappNumber: row.whatsapp_number,
    updatedAt: row.updated_at,
  }
}

export function mapProductRowToDomain(
  row: ProductRow & { brands?: { name: string } | null },
  brandNameFallback?: string,
): Product {
  const brandName = row.brands?.name ?? brandNameFallback ?? "LG"

  return {
    id: row.id,
    name: row.name,
    brand: brandName as Product["brand"],
    category: row.category,
    capacity: row.capacity,
    energyRating: row.energy_rating,
    price: row.price,
    originalPrice: row.original_price ?? undefined,
    image: row.image_url,
    features: row.features,
    inverter: row.inverter,
    wifi: row.wifi,
    popular: row.popular,
    nuevo: row.nuevo,
    oferta: row.oferta,
    description: row.description,
    stock: row.stock ?? undefined,
    status: row.status ?? undefined,
    rating: row.rating ?? undefined,
    sku: row.sku ?? undefined,
    tags: row.tags ?? undefined,
    slug: row.slug ?? undefined,
    metaTitle: row.meta_title ?? undefined,
    metaDescription: row.meta_description ?? undefined,
  }
}

export function mapProductDomainToRow(
  product: ProductAdminView,
  brandId: string,
): Database["public"]["Tables"]["products"]["Insert"] {
  return {
    id: product.id,
    name: product.name,
    brand_id: brandId,
    category: product.category,
    capacity: product.capacity,
    energy_rating: product.energyRating,
    price: product.price,
    original_price: product.originalPrice ?? null,
    image_url: product.image,
    features: product.features,
    inverter: product.inverter,
    wifi: product.wifi,
    popular: product.popular ?? false,
    nuevo: product.nuevo ?? false,
    oferta: product.oferta ?? false,
    description: product.description,
    stock: product.stock ?? null,
    status: product.status ?? "active",
    rating: product.rating ?? null,
    sku: product.sku ?? null,
    tags: product.tags ?? null,
    slug: product.slug ?? null,
    meta_title: product.metaTitle ?? null,
    meta_description: product.metaDescription ?? null,
  }
}

export function mapServiceRowToDomain(row: ServiceRow): Service {
  return {
    id: row.id as Service["id"],
    name: row.title,
    description: row.description,
    features: row.features ?? [],
    link: `/servicios/${row.slug}`,
    icon: row.icon ?? "Snowflake",
  }
}

export function mapCustomerRowToDomain(row: CustomerRow): Customer {
  return {
    id: row.id,
    userId: row.user_id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    address: row.address,
    createdAt: row.created_at,
  }
}

export function mapContactRowToDomain(row: ContactRow): ContactSubmission {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    service: row.service,
    message: row.message,
    status: row.status,
    createdAt: row.created_at,
  }
}
