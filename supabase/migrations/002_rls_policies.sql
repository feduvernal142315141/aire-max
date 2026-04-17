-- 002_rls_policies.sql

ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid()
      AND role IN ('admin', 'staff')
  );
$$;

DROP POLICY IF EXISTS settings_read_public ON public.settings;
CREATE POLICY settings_read_public ON public.settings
FOR SELECT
USING (TRUE);

DROP POLICY IF EXISTS settings_write_admin ON public.settings;
CREATE POLICY settings_write_admin ON public.settings
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS brands_read_public ON public.brands;
CREATE POLICY brands_read_public ON public.brands
FOR SELECT
USING (TRUE);

DROP POLICY IF EXISTS brands_write_admin ON public.brands;
CREATE POLICY brands_write_admin ON public.brands
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS products_read_public ON public.products;
CREATE POLICY products_read_public ON public.products
FOR SELECT
USING (status = 'active' OR public.is_admin());

DROP POLICY IF EXISTS products_write_admin ON public.products;
CREATE POLICY products_write_admin ON public.products
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS plans_read_public ON public.plans;
CREATE POLICY plans_read_public ON public.plans
FOR SELECT
USING (TRUE);

DROP POLICY IF EXISTS plans_write_admin ON public.plans;
CREATE POLICY plans_write_admin ON public.plans
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS services_read_public ON public.services;
CREATE POLICY services_read_public ON public.services
FOR SELECT
USING (TRUE);

DROP POLICY IF EXISTS services_write_admin ON public.services;
CREATE POLICY services_write_admin ON public.services
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS contact_insert_public ON public.contact_submissions;
CREATE POLICY contact_insert_public ON public.contact_submissions
FOR INSERT
WITH CHECK (TRUE);

DROP POLICY IF EXISTS contact_manage_admin ON public.contact_submissions;
CREATE POLICY contact_manage_admin ON public.contact_submissions
FOR SELECT
USING (public.is_admin());

DROP POLICY IF EXISTS contact_update_admin ON public.contact_submissions;
CREATE POLICY contact_update_admin ON public.contact_submissions
FOR UPDATE
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS contact_delete_admin ON public.contact_submissions;
CREATE POLICY contact_delete_admin ON public.contact_submissions
FOR DELETE
USING (public.is_admin());

DROP POLICY IF EXISTS orders_read_own_or_admin ON public.orders;
CREATE POLICY orders_read_own_or_admin ON public.orders
FOR SELECT
USING (
  public.is_admin()
  OR customer_id IN (
    SELECT id FROM public.customers WHERE user_id = auth.uid()
  )
);

DROP POLICY IF EXISTS orders_write_admin ON public.orders;
CREATE POLICY orders_write_admin ON public.orders
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS order_items_read_own_or_admin ON public.order_items;
CREATE POLICY order_items_read_own_or_admin ON public.order_items
FOR SELECT
USING (
  public.is_admin()
  OR order_id IN (
    SELECT o.id
    FROM public.orders o
    JOIN public.customers c ON c.id = o.customer_id
    WHERE c.user_id = auth.uid()
  )
);

DROP POLICY IF EXISTS order_items_write_admin ON public.order_items;
CREATE POLICY order_items_write_admin ON public.order_items
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS customers_read_own_or_admin ON public.customers;
CREATE POLICY customers_read_own_or_admin ON public.customers
FOR SELECT
USING (public.is_admin() OR user_id = auth.uid());

DROP POLICY IF EXISTS customers_update_own ON public.customers;
CREATE POLICY customers_update_own ON public.customers
FOR UPDATE
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS customers_admin_all ON public.customers;
CREATE POLICY customers_admin_all ON public.customers
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS user_roles_read_own_or_admin ON public.user_roles;
CREATE POLICY user_roles_read_own_or_admin ON public.user_roles
FOR SELECT
USING (public.is_admin() OR user_id = auth.uid());

DROP POLICY IF EXISTS user_roles_write_admin ON public.user_roles;
CREATE POLICY user_roles_write_admin ON public.user_roles
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());
