// Generated types — overwrite with:
// supabase gen types typescript --project-id ebpmgfnfbdcxwvmjchbu > lib/supabase/types.generated.ts

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
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
        Insert: {
          id?: boolean
          currency_code?: string
          currency_locale?: string
          tax_rate?: number
          company_name?: string
          company_phone?: string | null
          company_email?: string | null
          company_address?: string | null
          whatsapp_number?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          id?: boolean
          currency_code?: string
          currency_locale?: string
          tax_rate?: number
          company_name?: string
          company_phone?: string | null
          company_email?: string | null
          company_address?: string | null
          whatsapp_number?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      brands: {
        Row: {
          id: string
          name: string
          slug: string
          logo_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          logo_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          logo_url?: string | null
          created_at?: string
        }
        Relationships: []
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
        Insert: {
          id: string
          name: string
          brand_id: string
          category: "split" | "cassette" | "piso-techo" | "ventana" | "portatil"
          capacity: "9000" | "12000" | "18000" | "24000" | "36000" | "48000"
          energy_rating: "A+++" | "A++" | "A+" | "A"
          price: number
          original_price?: number | null
          image_url: string
          features?: string[]
          inverter?: boolean
          wifi?: boolean
          popular?: boolean
          nuevo?: boolean
          oferta?: boolean
          description: string
          stock?: number | null
          status?: "active" | "inactive" | null
          rating?: number | null
          sku?: string | null
          tags?: string[] | null
          slug?: string | null
          meta_title?: string | null
          meta_description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          brand_id?: string
          category?: "split" | "cassette" | "piso-techo" | "ventana" | "portatil"
          capacity?: "9000" | "12000" | "18000" | "24000" | "36000" | "48000"
          energy_rating?: "A+++" | "A++" | "A+" | "A"
          price?: number
          original_price?: number | null
          image_url?: string
          features?: string[]
          inverter?: boolean
          wifi?: boolean
          popular?: boolean
          nuevo?: boolean
          oferta?: boolean
          description?: string
          stock?: number | null
          status?: "active" | "inactive" | null
          rating?: number | null
          sku?: string | null
          tags?: string[] | null
          slug?: string | null
          meta_title?: string | null
          meta_description?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      plans: {
        Row: {
          id: string
          kind: string
          name: string
          price: number
          period: "mensual" | "anual" | "visita"
          description: string
          features: string[]
          popular: boolean
          visits_per_year: string | null
          created_at: string
        }
        Insert: {
          id: string
          kind: string
          name: string
          price: number
          period: "mensual" | "anual" | "visita"
          description: string
          features?: string[]
          popular?: boolean
          visits_per_year?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          kind?: string
          name?: string
          price?: number
          period?: "mensual" | "anual" | "visita"
          description?: string
          features?: string[]
          popular?: boolean
          visits_per_year?: string | null
          created_at?: string
        }
        Relationships: []
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
        Insert: {
          id: string
          slug: string
          title: string
          description: string
          icon?: string | null
          price_from?: number | null
          features?: string[] | null
          created_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          description?: string
          icon?: string | null
          price_from?: number | null
          features?: string[] | null
          created_at?: string
        }
        Relationships: []
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
        Insert: {
          id: string
          customer_id?: string | null
          customer_name: string
          status?: "Pendiente" | "Procesando" | "Enviado" | "Entregado" | "Cancelado"
          total: number
          items_count?: number
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string | null
          customer_name?: string
          status?: "Pendiente" | "Procesando" | "Enviado" | "Entregado" | "Cancelado"
          total?: number
          items_count?: number
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
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
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
          product_name_snapshot: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          unit_price?: number
          product_name_snapshot?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
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
        Insert: {
          id?: string
          user_id?: string | null
          name: string
          email?: string | null
          phone?: string | null
          address?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          name?: string
          email?: string | null
          phone?: string | null
          address?: string | null
          created_at?: string
        }
        Relationships: []
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
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          service?: string | null
          message: string
          status?: "new" | "read" | "responded" | "archived"
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          service?: string | null
          message?: string
          status?: "new" | "read" | "responded" | "archived"
          created_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          user_id: string
          role: "admin" | "staff" | "customer"
          created_at: string
        }
        Insert: {
          user_id: string
          role?: "admin" | "staff" | "customer"
          created_at?: string
        }
        Update: {
          user_id?: string
          role?: "admin" | "staff" | "customer"
          created_at?: string
        }
        Relationships: []
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
    CompositeTypes: Record<string, never>
  }
}

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"]
export type Enums<T extends keyof Database["public"]["Enums"]> = Database["public"]["Enums"][T]
