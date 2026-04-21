-- Seed de productos — pegar en SQL Editor de Supabase
-- Requiere que el seed.sql (brands) ya haya corrido.

INSERT INTO public.products (
  id, name, brand_id, category, capacity, energy_rating,
  price, original_price, image_url, features,
  inverter, wifi, popular, nuevo, oferta,
  description, stock, status, rating, sku, tags, slug,
  meta_title, meta_description
) VALUES

(
  'lg-split-12000', 'Split Inverter Dual Cool',
  (SELECT id FROM public.brands WHERE slug = 'lg'),
  'split', '12000', 'A+++',
  599.99, 699.99, '/lg-split-air-conditioner-white-modern.jpg',
  ARRAY['Inverter', 'WiFi', 'Filtro Gold Fin', 'Modo Sleep'],
  TRUE, TRUE, TRUE, FALSE, TRUE,
  'Aire acondicionado split con tecnología inverter para máximo ahorro energético.',
  21, 'active', 4.8, 'LG-INV-12K',
  ARRAY['inverter', 'wifi', 'best-seller'],
  'lg-split-inverter-dual-cool-12000',
  'LG Split Inverter Dual Cool 12000 BTU | Aire-Max',
  'Aire acondicionado LG inverter 12000 BTU con WiFi y alta eficiencia energética.'
),

(
  'samsung-split-18000', 'Split WindFree Elite',
  (SELECT id FROM public.brands WHERE slug = 'samsung'),
  'split', '18000', 'A++',
  799.99, NULL, '/samsung-split-air-conditioner-sleek-design.jpg',
  ARRAY['Inverter', 'WindFree', 'SmartThings', 'Filtro PM 1.0'],
  TRUE, TRUE, TRUE, TRUE, FALSE,
  'Tecnología WindFree para climatización sin corrientes de aire directas.',
  7, 'active', 4.6, 'SAM-WF-18K',
  ARRAY['windfree', 'premium'],
  'samsung-split-windfree-elite-18000',
  'Samsung WindFree Elite 18000 BTU | Aire-Max',
  'Confort premium WindFree con tecnología inverter y control WiFi.'
),

(
  'daikin-split-24000', 'Split Inverter Premium',
  (SELECT id FROM public.brands WHERE slug = 'daikin'),
  'split', '24000', 'A+++',
  1099.99, NULL, '/daikin-split-air-conditioner-premium.jpg',
  ARRAY['Inverter', 'Purificador', 'Control inteligente', 'Modo Eco'],
  TRUE, TRUE, TRUE, FALSE, FALSE,
  'Sistema de climatización premium con purificador de aire integrado.',
  12, 'active', 4.7, 'DAI-INV-24K',
  ARRAY['premium', 'purificador'],
  'daikin-split-inverter-premium-24000',
  'Daikin Split Premium 24000 BTU | Aire-Max',
  'Split Daikin premium con purificador integrado y control inteligente.'
),

(
  'mitsubishi-split-12000', 'Split MSZ-AP Series',
  (SELECT id FROM public.brands WHERE slug = 'mitsubishi'),
  'split', '12000', 'A++',
  649.99, NULL, '/mitsubishi-split-air-conditioner.jpg',
  ARRAY['Inverter', '3D i-see Sensor', 'WiFi', 'Plasma Quad Plus'],
  TRUE, TRUE, FALSE, FALSE, FALSE,
  'Sensor 3D que detecta la temperatura en diferentes zonas de la habitación.',
  9, 'active', 4.5, 'MIT-MSZ-12K',
  ARRAY['sensor', 'premium'],
  'mitsubishi-split-msz-ap-12000',
  'Mitsubishi MSZ-AP 12000 BTU | Aire-Max',
  'Mitsubishi MSZ-AP con sensor 3D i-see y filtro Plasma Quad Plus.'
),

(
  'carrier-cassette-36000', 'Cassette 4 Vías Inverter',
  (SELECT id FROM public.brands WHERE slug = 'carrier'),
  'cassette', '36000', 'A++',
  1599.99, NULL, '/carrier-cassette-air-conditioner.jpg',
  ARRAY['Inverter', '4 direcciones', 'Control remoto', 'Filtro lavable'],
  TRUE, FALSE, FALSE, FALSE, FALSE,
  'Ideal para espacios comerciales, distribución uniforme del aire en 4 direcciones.',
  5, 'active', 4.4, 'CAR-CAS-36K',
  ARRAY['comercial', 'cassette'],
  'carrier-cassette-4-vias-36000',
  'Carrier Cassette 36000 BTU | Aire-Max',
  'Cassette comercial Carrier 4 vías con tecnología inverter.'
),

(
  'lg-cassette-48000', 'Cassette Inverter Comercial',
  (SELECT id FROM public.brands WHERE slug = 'lg'),
  'cassette', '48000', 'A+',
  1899.99, NULL, '/lg-cassette-commercial-air-conditioner.jpg',
  ARRAY['Inverter', 'Auto limpieza', 'Control WiFi', 'Bajo nivel sonoro'],
  TRUE, TRUE, FALSE, TRUE, FALSE,
  'Potente sistema cassette para grandes espacios comerciales.',
  4, 'active', 4.6, 'LG-CAS-48K',
  ARRAY['comercial', 'wifi'],
  'lg-cassette-inverter-comercial-48000',
  'LG Cassette Comercial 48000 BTU | Aire-Max',
  'Cassette LG inverter para grandes espacios con control WiFi.'
),

(
  'daikin-piso-techo-36000', 'Piso Techo Inverter',
  (SELECT id FROM public.brands WHERE slug = 'daikin'),
  'piso-techo', '36000', 'A++',
  1399.99, NULL, '/daikin-floor-ceiling-air-conditioner.jpg',
  ARRAY['Inverter', 'Instalación versátil', 'Control remoto', 'Modo silencioso'],
  TRUE, FALSE, FALSE, FALSE, FALSE,
  'Versátil sistema que puede instalarse en piso o techo según necesidad.',
  6, 'active', 4.3, 'DAI-PT-36K',
  ARRAY['piso-techo', 'versátil'],
  'daikin-piso-techo-inverter-36000',
  'Daikin Piso Techo 36000 BTU | Aire-Max',
  'Equipo piso-techo Daikin con instalación versátil e inverter.'
),

(
  'panasonic-split-9000', 'Split Compact Inverter',
  (SELECT id FROM public.brands WHERE slug = 'panasonic'),
  'split', '9000', 'A+++',
  499.99, 599.99, '/panasonic-compact-split-air-conditioner.jpg',
  ARRAY['Inverter', 'Nanoe-G', 'WiFi', 'Diseño compacto'],
  TRUE, TRUE, FALSE, FALSE, TRUE,
  'Perfecto para habitaciones pequeñas con máxima eficiencia energética.',
  14, 'active', 4.5, 'PAN-CMP-9K',
  ARRAY['compacto', 'oferta'],
  'panasonic-split-compact-inverter-9000',
  'Panasonic Compact 9000 BTU | Aire-Max',
  'Panasonic compacto con tecnología Nanoe-G para habitaciones pequeñas.'
),

(
  'samsung-split-24000', 'Split WindFree Pro',
  (SELECT id FROM public.brands WHERE slug = 'samsung'),
  'split', '24000', 'A+++',
  999.99, NULL, '/samsung-windfree-pro-air-conditioner.jpg',
  ARRAY['Inverter', 'WindFree', 'SmartThings', 'AI Auto Cooling'],
  TRUE, TRUE, FALSE, TRUE, FALSE,
  'Inteligencia artificial que aprende tus preferencias de climatización.',
  8, 'active', 4.8, 'SAM-WF-24K',
  ARRAY['ai', 'windfree', 'premium'],
  'samsung-split-windfree-pro-24000',
  'Samsung WindFree Pro 24000 BTU | Aire-Max',
  'Samsung WindFree Pro con IA Auto Cooling y SmartThings.'
),

(
  'carrier-split-18000', 'Split Infinity Series',
  (SELECT id FROM public.brands WHERE slug = 'carrier'),
  'split', '18000', 'A++',
  749.99, NULL, '/carrier-infinity-split-air-conditioner.jpg',
  ARRAY['Inverter', 'Greenspeed', 'Control inteligente', 'Ultra silencioso'],
  TRUE, TRUE, FALSE, FALSE, FALSE,
  'Tecnología Greenspeed para máximo confort y eficiencia.',
  11, 'active', 4.4, 'CAR-INF-18K',
  ARRAY['greenspeed', 'silencioso'],
  'carrier-split-infinity-18000',
  'Carrier Infinity 18000 BTU | Aire-Max',
  'Carrier Infinity con Greenspeed y control inteligente.'
),

(
  'mitsubishi-cassette-36000', 'Cassette PLA Series',
  (SELECT id FROM public.brands WHERE slug = 'mitsubishi'),
  'cassette', '36000', 'A++',
  1699.99, NULL, '/mitsubishi-pla-cassette-air-conditioner.jpg',
  ARRAY['Inverter', '4 vías', 'Control WiFi', 'Filtro enzimático'],
  TRUE, TRUE, FALSE, FALSE, FALSE,
  'Sistema cassette con filtro enzimático para purificación del aire.',
  3, 'active', 4.5, 'MIT-PLA-36K',
  ARRAY['enzimático', 'wifi'],
  'mitsubishi-cassette-pla-36000',
  'Mitsubishi Cassette PLA 36000 BTU | Aire-Max',
  'Mitsubishi PLA cassette con filtro enzimático y control WiFi.'
),

(
  'lg-piso-techo-48000', 'Piso Techo Comercial',
  (SELECT id FROM public.brands WHERE slug = 'lg'),
  'piso-techo', '48000', 'A+',
  1799.99, NULL, '/lg-floor-ceiling-commercial-air-conditioner.jpg',
  ARRAY['Inverter', 'Doble flujo', 'Control remoto', 'Instalación flexible'],
  TRUE, FALSE, FALSE, FALSE, FALSE,
  'Ideal para oficinas y comercios con techos altos.',
  5, 'active', 4.3, 'LG-PT-48K',
  ARRAY['comercial', 'doble-flujo'],
  'lg-piso-techo-comercial-48000',
  'LG Piso Techo Comercial 48000 BTU | Aire-Max',
  'LG piso-techo comercial con doble flujo para techos altos.'
),

(
  'daikin-cassette-24000', 'Daikin Smart Cassette',
  (SELECT id FROM public.brands WHERE slug = 'daikin'),
  'cassette', '24000', 'A+++',
  1099.99, 1199.99, '/daikin-split-air-conditioner-premium.jpg',
  ARRAY['Inverter', 'Smart Control', 'Distribución uniforme', 'Bajo ruido'],
  TRUE, FALSE, FALSE, FALSE, TRUE,
  'Solución comercial con distribución uniforme de aire.',
  3, 'active', 4.9, 'DAI-CAS-24K',
  ARRAY['comercial', 'cassette'],
  'daikin-smart-cassette-24000-btu',
  'Daikin Cassette 24000 BTU | Aire-Max',
  'Cassette comercial Daikin 24000 BTU para espacios de alto tráfico.'
),

(
  'midea-ventana-9000', 'Midea Ventana Eco',
  (SELECT id FROM public.brands WHERE slug = 'midea'),
  'ventana', '9000', 'A+',
  399.99, NULL, '/modern-air-conditioning-unit-installation-professi.jpg',
  ARRAY['Compacto', 'Bajo consumo', 'Control remoto'],
  FALSE, FALSE, FALSE, FALSE, FALSE,
  'Opción económica para espacios reducidos.',
  0, 'inactive', 4.2, 'MID-VEN-9K',
  ARRAY['entry-level'],
  'midea-ventana-eco-9000-btu',
  'Midea Ventana 9000 BTU | Aire-Max',
  'Equipo de ventana económico y compacto para uso residencial.'
)

ON CONFLICT (id) DO UPDATE SET
  name              = EXCLUDED.name,
  price             = EXCLUDED.price,
  original_price    = EXCLUDED.original_price,
  stock             = EXCLUDED.stock,
  status            = EXCLUDED.status,
  popular           = EXCLUDED.popular,
  nuevo             = EXCLUDED.nuevo,
  oferta            = EXCLUDED.oferta,
  rating            = EXCLUDED.rating,
  tags              = EXCLUDED.tags;
