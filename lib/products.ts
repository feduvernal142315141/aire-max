export type ProductCategory = "split" | "cassette" | "piso-techo" | "ventana" | "portatil"
export type ProductBrand = "LG" | "Samsung" | "Daikin" | "Mitsubishi" | "Carrier" | "Panasonic"
export type ProductCapacity = "9000" | "12000" | "18000" | "24000" | "36000" | "48000"
export type EnergyRating = "A+++" | "A++" | "A+" | "A"

export interface Product {
  id: string
  name: string
  brand: ProductBrand
  category: ProductCategory
  capacity: ProductCapacity
  energyRating: EnergyRating
  price: number
  originalPrice?: number
  image: string
  features: string[]
  inverter: boolean
  wifi: boolean
  popular?: boolean
  nuevo?: boolean
  oferta?: boolean
  description: string
}

export const products: Product[] = [
  {
    id: "lg-split-12000",
    name: "Split Inverter Dual Cool",
    brand: "LG",
    category: "split",
    capacity: "12000",
    energyRating: "A+++",
    price: 599.99,
    originalPrice: 699.99,
    image: "/lg-split-air-conditioner-white-modern.jpg",
    features: ["Inverter", "WiFi", "Filtro Gold Fin", "Modo Sleep"],
    inverter: true,
    wifi: true,
    popular: true,
    oferta: true,
    description: "Aire acondicionado split con tecnología inverter para máximo ahorro energético.",
  },
  {
    id: "samsung-split-18000",
    name: "Split WindFree Elite",
    brand: "Samsung",
    category: "split",
    capacity: "18000",
    energyRating: "A++",
    price: 799.99,
    image: "/samsung-split-air-conditioner-sleek-design.jpg",
    features: ["Inverter", "WindFree", "SmartThings", "Filtro PM 1.0"],
    inverter: true,
    wifi: true,
    popular: true,
    nuevo: true,
    description: "Tecnología WindFree para climatización sin corrientes de aire directas.",
  },
  {
    id: "daikin-split-24000",
    name: "Split Inverter Premium",
    brand: "Daikin",
    category: "split",
    capacity: "24000",
    energyRating: "A+++",
    price: 1099.99,
    image: "/daikin-split-air-conditioner-premium.jpg",
    features: ["Inverter", "Purificador", "Control inteligente", "Modo Eco"],
    inverter: true,
    wifi: true,
    popular: true,
    description: "Sistema de climatización premium con purificador de aire integrado.",
  },
  {
    id: "mitsubishi-split-12000",
    name: "Split MSZ-AP Series",
    brand: "Mitsubishi",
    category: "split",
    capacity: "12000",
    energyRating: "A++",
    price: 649.99,
    image: "/mitsubishi-split-air-conditioner.jpg",
    features: ["Inverter", "3D i-see Sensor", "WiFi", "Plasma Quad Plus"],
    inverter: true,
    wifi: true,
    description: "Sensor 3D que detecta la temperatura en diferentes zonas de la habitación.",
  },
  {
    id: "carrier-cassette-36000",
    name: "Cassette 4 Vías Inverter",
    brand: "Carrier",
    category: "cassette",
    capacity: "36000",
    energyRating: "A++",
    price: 1599.99,
    image: "/carrier-cassette-air-conditioner.jpg",
    features: ["Inverter", "4 direcciones", "Control remoto", "Filtro lavable"],
    inverter: true,
    wifi: false,
    description: "Ideal para espacios comerciales, distribución uniforme del aire en 4 direcciones.",
  },
  {
    id: "lg-cassette-48000",
    name: "Cassette Inverter Comercial",
    brand: "LG",
    category: "cassette",
    capacity: "48000",
    energyRating: "A+",
    price: 1899.99,
    image: "/lg-cassette-commercial-air-conditioner.jpg",
    features: ["Inverter", "Auto limpieza", "Control WiFi", "Bajo nivel sonoro"],
    inverter: true,
    wifi: true,
    nuevo: true,
    description: "Potente sistema cassette para grandes espacios comerciales.",
  },
  {
    id: "daikin-piso-techo-36000",
    name: "Piso Techo Inverter",
    brand: "Daikin",
    category: "piso-techo",
    capacity: "36000",
    energyRating: "A++",
    price: 1399.99,
    image: "/daikin-floor-ceiling-air-conditioner.jpg",
    features: ["Inverter", "Instalación versátil", "Control remoto", "Modo silencioso"],
    inverter: true,
    wifi: false,
    description: "Versátil sistema que puede instalarse en piso o techo según necesidad.",
  },
  {
    id: "panasonic-split-9000",
    name: "Split Compact Inverter",
    brand: "Panasonic",
    category: "split",
    capacity: "9000",
    energyRating: "A+++",
    price: 499.99,
    originalPrice: 599.99,
    image: "/panasonic-compact-split-air-conditioner.jpg",
    features: ["Inverter", "Nanoe-G", "WiFi", "Diseño compacto"],
    inverter: true,
    wifi: true,
    oferta: true,
    description: "Perfecto para habitaciones pequeñas con máxima eficiencia energética.",
  },
  {
    id: "samsung-split-24000",
    name: "Split WindFree Pro",
    brand: "Samsung",
    category: "split",
    capacity: "24000",
    energyRating: "A+++",
    price: 999.99,
    image: "/samsung-windfree-pro-air-conditioner.jpg",
    features: ["Inverter", "WindFree", "SmartThings", "AI Auto Cooling"],
    inverter: true,
    wifi: true,
    nuevo: true,
    description: "Inteligencia artificial que aprende tus preferencias de climatización.",
  },
  {
    id: "carrier-split-18000",
    name: "Split Infinity Series",
    brand: "Carrier",
    category: "split",
    capacity: "18000",
    energyRating: "A++",
    price: 749.99,
    image: "/carrier-infinity-split-air-conditioner.jpg",
    features: ["Inverter", "Greenspeed", "Control inteligente", "Ultra silencioso"],
    inverter: true,
    wifi: true,
    description: "Tecnología Greenspeed para máximo confort y eficiencia.",
  },
  {
    id: "mitsubishi-cassette-36000",
    name: "Cassette PLA Series",
    brand: "Mitsubishi",
    category: "cassette",
    capacity: "36000",
    energyRating: "A++",
    price: 1699.99,
    image: "/mitsubishi-pla-cassette-air-conditioner.jpg",
    features: ["Inverter", "4 vías", "Control WiFi", "Filtro enzimático"],
    inverter: true,
    wifi: true,
    description: "Sistema cassette con filtro enzimático para purificación del aire.",
  },
  {
    id: "lg-piso-techo-48000",
    name: "Piso Techo Comercial",
    brand: "LG",
    category: "piso-techo",
    capacity: "48000",
    energyRating: "A+",
    price: 1799.99,
    image: "/lg-floor-ceiling-commercial-air-conditioner.jpg",
    features: ["Inverter", "Doble flujo", "Control remoto", "Instalación flexible"],
    inverter: true,
    wifi: false,
    description: "Ideal para oficinas y comercios con techos altos.",
  },
]

export const brands: ProductBrand[] = ["LG", "Samsung", "Daikin", "Mitsubishi", "Carrier", "Panasonic"]

export const categories = [
  { value: "split" as const, label: "Split" },
  { value: "cassette" as const, label: "Cassette" },
  { value: "piso-techo" as const, label: "Piso Techo" },
  { value: "ventana" as const, label: "Ventana" },
  { value: "portatil" as const, label: "Portátil" },
]

export const capacities = [
  { value: "9000" as const, label: "9,000 BTU" },
  { value: "12000" as const, label: "12,000 BTU" },
  { value: "18000" as const, label: "18,000 BTU" },
  { value: "24000" as const, label: "24,000 BTU" },
  { value: "36000" as const, label: "36,000 BTU" },
  { value: "48000" as const, label: "48,000 BTU" },
]
