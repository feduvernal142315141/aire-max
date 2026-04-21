-- Crear bucket público para imágenes de productos
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'products',
  'products',
  true,
  5242880,  -- 5 MB
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do nothing;

-- Política: cualquiera puede leer (bucket público)
create policy "products_public_read"
  on storage.objects for select
  using (bucket_id = 'products');

-- Política: solo admins/staff autenticados pueden subir
create policy "products_admin_upload"
  on storage.objects for insert
  with check (
    bucket_id = 'products'
    and auth.role() = 'authenticated'
  );

-- Política: solo admins/staff autenticados pueden borrar
create policy "products_admin_delete"
  on storage.objects for delete
  using (
    bucket_id = 'products'
    and auth.role() = 'authenticated'
  );
