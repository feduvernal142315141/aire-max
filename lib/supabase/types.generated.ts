// STUB file — sobrescribir cuando conectes Supabase:
// supabase gen types typescript --linked > lib/supabase/types.generated.ts

export interface Database {
  public: {
    Tables: {
      settings: {
        Row: {
          id: boolean
          currency_code: string
          currency_locale: string
          tax_rate: number
          company_name: string
          company_phone: string | null
          company_email: string | null
          company_address: string | null
          whatsapp_number: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: Partial<Database["public"]["Tables"]["settings"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["settings"]["Row"]>
      }
      brands: {
        Row: {
          id: string
          name: string
          slug: string
          logo_url: string | null
          created_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["brands"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["brands"]["Row"]>
      }
      products: {
        Row: {
          id: string
          name: string
          brand_id: string
          category: "split" | "cassette" | "piso-techo" | "ventana" | "portatil"
          capacity: "9000" | "12000" | "18000" | "24000" | "36000" | "48000"
          energy_rating: "A+++" | "A++" | "A+" | "A"
          price: number
          original_price: number | null
          image_url: string
          features: string[]
          inverter: boolean
          wifi: boolean
          popular: boolean
          nuevo: boolean
          oferta: boolean
          description: string
          stock: number | null
          status: "active" | "inactive" | null
          rating: number | null
          sku: string | null
          tags: string[] | null
          slug: string | null
          meta_title: string | null
          meta_description: string | null
          created_at: string
          updated_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["products"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["products"]["Row"]>
      }
      plans: {
        Row: {
          id: string
          kind: "maintenance" | "installation"
          name: string
          price: number
          period: "mensual" | "anual" | "visita"
          description: string
          features: string[]
          popular: boolean
          visits_per_year: string | null
          created_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["plans"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["plans"]["Row"]>
      }
      services: {
        Row: {
          id: string
          slug: string
          title: string
          description: string
          icon: string | null
          price_from: number | null
          features: string[] | null
          created_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["services"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["services"]["Row"]>
      }
      orders: {
        Row: {
          id: string
          customer_id: string | null
          customer_name: string
          status: "Pendiente" | "Procesando" | "Enviado" | "Entregado" | "Cancelado"
          total: number
          items_count: number
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["orders"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["orders"]["Row"]>
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
          product_name_snapshot: string
        }
        Insert: Partial<Database["public"]["Tables"]["order_items"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["order_items"]["Row"]>
      }
      customers: {
        Row: {
          id: string
          user_id: string | null
          name: string
          email: string | null
          phone: string | null
          address: string | null
          created_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["customers"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["customers"]["Row"]>
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          service: string | null
          message: string
          status: "new" | "read" | "responded" | "archived"
          created_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["contact_submissions"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["contact_submissions"]["Row"]>
      }
      user_roles: {
        Row: {
          user_id: string
          role: "admin" | "staff" | "customer"
          created_at: string
        }
        Insert: Partial<Database["public"]["Tables"]["user_roles"]["Row"]>
        Update: Partial<Database["public"]["Tables"]["user_roles"]["Row"]>
      }
    }
    Views: Record<string, never>
    Functions: {
      is_admin: {
        Args: Record<string, never>
        Returns: boolean
      }
    }
    Enums: {
      product_category: "split" | "cassette" | "piso-techo" | "ventana" | "portatil"
      product_capacity: "9000" | "12000" | "18000" | "24000" | "36000" | "48000"
      product_status: "active" | "inactive"
      energy_rating: "A+++" | "A++" | "A+" | "A"
      order_status: "Pendiente" | "Procesando" | "Enviado" | "Entregado" | "Cancelado"
      user_role: "admin" | "staff" | "customer"
      plan_period: "mensual" | "anual" | "visita"
    }
  }
}
