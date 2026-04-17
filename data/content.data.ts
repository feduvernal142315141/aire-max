import type { FAQCategory, Project, HomeBenefit, HomeService, HomePopularProduct } from "@/types"

// ─── FAQ Categories ──────────────────────────────────────────────────────────
// Copied EXACTLY from faq/page.tsx
export const faqCategoriesData: FAQCategory[] = [
  {
    category: "Compra y Selección",
    icon: "ShoppingCart",
    questions: [
      {
        q: "¿Cómo sé qué capacidad de BTU necesito?",
        a: "La capacidad necesaria depende del tamaño del espacio. Como regla general: 9,000 BTU para 12-18m², 12,000 BTU para 18-25m², 18,000 BTU para 25-35m², y 24,000 BTU para 35-45m². Nuestros asesores pueden ayudarte con un cálculo preciso considerando altura de techo, aislamiento y exposición solar.",
      },
      {
        q: "¿Qué diferencia hay entre un aire inverter y uno convencional?",
        a: "Los aires inverter ajustan continuamente su velocidad de compresor para mantener la temperatura, consumiendo hasta 40% menos energía. Los convencionales se encienden y apagan completamente, consumiendo más electricidad y generando fluctuaciones de temperatura.",
      },
      {
        q: "¿Cuánto tiempo dura un aire acondicionado?",
        a: "Con mantenimiento adecuado, un aire acondicionado de calidad puede durar entre 10-15 años. Los equipos inverter tienden a tener mayor vida útil debido a su funcionamiento más eficiente.",
      },
    ],
  },
  {
    category: "Instalación",
    icon: "Wrench",
    questions: [
      {
        q: "¿Cuánto tiempo toma la instalación?",
        a: "Una instalación estándar de un equipo split toma entre 3-5 horas. Instalaciones más complejas o múltiples equipos pueden requerir 1-2 días. Siempre coordinamos horarios convenientes para ti.",
      },
      {
        q: "¿Qué incluye el servicio de instalación?",
        a: "Incluye: montaje de unidades interior y exterior, tubería de cobre hasta 3 metros, cableado eléctrico, perforación de muro, soportes, pruebas de funcionamiento y limpieza del área. Tubería adicional tiene costo extra.",
      },
      {
        q: "¿Necesito preparar algo antes de la instalación?",
        a: "Asegúrate de tener acceso libre al área de instalación, una toma eléctrica cercana (220V para equipos grandes), y espacio exterior para la unidad condensadora. Nuestro técnico evaluará el sitio antes de comenzar.",
      },
    ],
  },
  {
    category: "Mantenimiento",
    icon: "Settings",
    questions: [
      {
        q: "¿Con qué frecuencia debo dar mantenimiento?",
        a: "Recomendamos mantenimiento profesional cada 6 meses para uso residencial y cada 3 meses para uso comercial intensivo. La limpieza de filtros debe hacerse mensualmente.",
      },
      {
        q: "¿Qué incluye el mantenimiento preventivo?",
        a: "Limpieza de filtros y serpentines, revisión de niveles de gas refrigerante, inspección eléctrica, lubricación de componentes, verificación de drenaje, medición de temperaturas y pruebas de funcionamiento.",
      },
      {
        q: "¿Qué pasa si no le doy mantenimiento?",
        a: "Sin mantenimiento, el equipo pierde eficiencia (hasta 30% más consumo), acumula bacterias y hongos, puede presentar fugas de agua, y su vida útil se reduce significativamente. También pierdes la garantía del fabricante.",
      },
    ],
  },
  {
    category: "Garantía y Soporte",
    icon: "Shield",
    questions: [
      {
        q: "¿Qué cubre la garantía?",
        a: "Los equipos nuevos incluyen garantía del fabricante (1-5 años según marca) que cubre defectos de fábrica. Nuestra garantía de instalación (1 año) cubre mano de obra y materiales utilizados. No cubre daños por mal uso o falta de mantenimiento.",
      },
      {
        q: "¿Qué tan rápido responden a emergencias?",
        a: "Clientes con plan de mantenimiento tienen respuesta en menos de 24 horas. Servicios de emergencia sin plan: 48-72 horas según disponibilidad. Ofrecemos soporte telefónico inmediato para diagnóstico inicial.",
      },
    ],
  },
]

// ─── Projects ────────────────────────────────────────────────────────────────
// Copied EXACTLY from proyectos/page.tsx
export const projectsData: Project[] = [
  {
    title: "Climatización Oficinas Corporativas",
    category: "Comercial",
    location: "Ciudad de México",
    description: "Instalación de 15 equipos cassette inverter para oficinas de 500m²",
    image: "/lg-cassette-commercial-air-conditioner.jpg",
    results: [
      "40% reducción en consumo energético",
      "Temperatura uniforme en todas las áreas",
      "Sistema centralizado",
    ],
    icon: "Building2",
  },
  {
    title: "Residencia Familiar Premium",
    category: "Residencial",
    location: "Monterrey",
    description: "Sistema multi-split para casa de 300m² con 6 zonas independientes",
    image: "/daikin-split-air-conditioner-premium.jpg",
    results: [
      "Control individual por habitación",
      "Ahorro del 35% en electricidad",
      "Instalación en 48 horas",
    ],
    icon: "Home",
  },
  {
    title: "Planta Industrial",
    category: "Industrial",
    location: "Guadalajara",
    description: "Climatización de nave industrial de 1000m² con equipos de alta capacidad",
    image: "/carrier-cassette-air-conditioner.jpg",
    results: ["Ambiente controlado 24/7", "Mantenimiento preventivo incluido", "ROI en 18 meses"],
    icon: "Factory",
  },
]

// ─── Home Benefits ───────────────────────────────────────────────────────────
// From page.tsx "¿Por qué elegir Aire-Max?" section
export const homeBenefitsData: HomeBenefit[] = [
  {
    icon: "Shield",
    title: "Garantía Extendida",
    description: "Hasta 5 años de garantía en equipos e instalación profesional certificada",
  },
  {
    icon: "Clock",
    title: "Respuesta 24h",
    description: "Servicio técnico disponible todos los días del año sin excepción",
  },
  {
    icon: "Star",
    title: "Técnicos Certificados",
    description: "Personal capacitado con certificaciones oficiales y experiencia comprobada",
  },
  {
    icon: "Zap",
    title: "Eficiencia Energética",
    description: "Equipos con tecnología inverter para máximo ahorro en tu factura",
  },
]

// ─── Home Services ───────────────────────────────────────────────────────────
// From page.tsx "Nuestros Servicios" section
export const homeServicesData: HomeService[] = [
  {
    icon: "Snowflake",
    title: "Venta de Equipos",
    description:
      "Amplio catálogo de aires acondicionados de las mejores marcas con asesoría personalizada.",
    features: [
      "Marcas premium certificadas",
      "Asesoría técnica especializada",
      "Mejores precios del mercado",
    ],
    link: "/catalogo",
  },
  {
    icon: "Wrench",
    title: "Instalación Profesional",
    description:
      "Instalación certificada con garantía, cumpliendo normas de seguridad y eficiencia energética.",
    features: [
      "Instalación en 24-48 horas",
      "Garantía de instalación",
      "Limpieza completa incluida",
    ],
    link: "/servicios/instalacion",
  },
  {
    icon: "ThermometerSun",
    title: "Mantenimiento Integral",
    description:
      "Planes preventivos y correctivos para alargar la vida útil y eficiencia de tu equipo.",
    features: [
      "Planes mensuales flexibles",
      "Revisión técnica completa",
      "Descuentos por contrato anual",
    ],
    link: "/servicios/mantenimiento",
  },
]

// ─── Home Popular Products ───────────────────────────────────────────────────
// From page.tsx "Equipos Más Populares" section
// These reference actual product IDs from productsData
export const homePopularProductsData: HomePopularProduct[] = [
  {
    productId: "lg-split-12000",
    name: "Split Inverter 12000 BTU",
    brand: "LG",
    price: "599.99",
    priceWithInstallation: "699.99",
    image: "/lg-split-air-conditioner-white-modern.jpg",
    features: ["Inverter", "WiFi", "A+++"],
    badge: "Popular",
    badgeColor: "from-[#037ecc] to-[#00baff]",
    energyBadge: "A+++",
  },
  {
    productId: "samsung-split-18000",
    name: "Split Inverter 18000 BTU",
    brand: "Samsung",
    price: "799.99",
    priceWithInstallation: "899.99",
    image: "/samsung-split-air-conditioner-sleek-design.jpg",
    features: ["Inverter", "WindFree", "A++"],
    badge: "Recomendado",
    badgeColor: "from-[#00baff] to-[#00e0ff]",
    energyBadge: "A++",
  },
  {
    productId: "daikin-split-24000",
    name: "Split Inverter 24000 BTU",
    brand: "Daikin",
    price: "1099.99",
    priceWithInstallation: "1199.99",
    image: "/daikin-split-air-conditioner-premium.jpg",
    features: ["Inverter", "Purificador", "A+++"],
    badge: "Mejor Valor",
    badgeColor: "from-[#079cfb] to-[#037ecc]",
    energyBadge: "A+++",
  },
]
