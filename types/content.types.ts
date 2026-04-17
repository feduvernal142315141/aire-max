// ─── FAQ ─────────────────────────────────────────────────────────────────────
export interface FAQQuestion {
  q: string
  a: string
}

export interface FAQCategory {
  category: string
  icon: string
  questions: FAQQuestion[]
}

// ─── Project ─────────────────────────────────────────────────────────────────
export interface Project {
  title: string
  category: string
  location: string
  description: string
  image: string
  results: string[]
  icon: string
}

// ─── Home Benefit ────────────────────────────────────────────────────────────
export interface HomeBenefit {
  icon: string
  title: string
  description: string
}

// ─── Home Service ────────────────────────────────────────────────────────────
export interface HomeService {
  icon: string
  title: string
  description: string
  features: string[]
  link: string
}

// ─── Home Popular Product ────────────────────────────────────────────────────
export interface HomePopularProduct {
  productId: string
  name: string
  brand: string
  price: string
  priceWithInstallation: string
  image: string
  features: string[]
  badge: string
  badgeColor: string
  energyBadge: string
}
