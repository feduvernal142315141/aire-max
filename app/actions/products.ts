"use server"

import { revalidatePath } from "next/cache"

import * as productRepo from "@/repositories/product.repository"
import type { ProductAdminView } from "@/types"

export async function listProductsAction() {
  try {
    const data = await productRepo.findAllAdmin()
    return { data, error: null }
  } catch (err) {
    console.error("[listProductsAction]", err)
    return { data: [], error: "Error al cargar productos." }
  }
}

export async function createProductAction(product: ProductAdminView) {
  try {
    const created = await productRepo.create(product)
    revalidatePath("/admin")
    revalidatePath("/catalogo")
    return { data: created, error: null }
  } catch (err) {
    console.error("[createProductAction]", err)
    return { data: null, error: err instanceof Error ? err.message : "Error al crear producto." }
  }
}

export async function updateProductAction(id: string, patch: Partial<ProductAdminView>) {
  try {
    const updated = await productRepo.update(id, patch)
    revalidatePath("/admin")
    revalidatePath("/catalogo")
    return { data: updated, error: null }
  } catch (err) {
    console.error("[updateProductAction]", err)
    return { data: null, error: err instanceof Error ? err.message : "Error al actualizar." }
  }
}

export async function removeProductAction(id: string) {
  try {
    await productRepo.remove(id)
    revalidatePath("/admin")
    revalidatePath("/catalogo")
    return { error: null }
  } catch (err) {
    console.error("[removeProductAction]", err)
    return { error: err instanceof Error ? err.message : "Error al eliminar producto." }
  }
}
