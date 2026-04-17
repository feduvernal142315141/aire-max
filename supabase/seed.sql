-- Seed base (idempotente)

INSERT INTO public.settings (id, currency_code, currency_locale, tax_rate, company_name)
VALUES (TRUE, 'USD', 'en-US', 0, 'Aire-Max')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.brands (name, slug)
VALUES
  ('LG', 'lg'),
  ('Samsung', 'samsung'),
  ('Daikin', 'daikin'),
  ('Mitsubishi', 'mitsubishi'),
  ('Carrier', 'carrier'),
  ('Panasonic', 'panasonic'),
  ('Midea', 'midea')
ON CONFLICT (slug) DO NOTHING;
