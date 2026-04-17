import "server-only"

import { ordersData } from "@/data"
import type { AdminOrder } from "@/modules/admin/types"

import { canUseSupabase, throwWriteUnavailable } from "./_runtime"

export async function findAllOrders(): Promise<AdminOrder[]> {
  if (!canUseSupabase()) {
    return ordersData.map((order) => ({ ...order }))
  }

  // TODO S3: query real a Supabase
  return ordersData.map((order) => ({ ...order }))
}

export async function findOrdersByCustomer(customerName: string): Promise<AdminOrder[]> {
  const orders = await findAllOrders()
  return orders.filter((order) =>
    order.customer.toLocaleLowerCase().includes(customerName.toLocaleLowerCase()),
  )
}

export async function updateOrderStatus(
  _id: string,
  _status: AdminOrder["status"] | "Cancelado",
): Promise<void> {
  throwWriteUnavailable("order.updateStatus")
}
