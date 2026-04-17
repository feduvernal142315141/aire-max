import "server-only"

import type { Customer } from "@/types"

import { canUseSupabase, throwWriteUnavailable } from "./_runtime"

const customersFallback: Customer[] = []

export async function findAllCustomers(): Promise<Customer[]> {
  if (!canUseSupabase()) {
    return customersFallback
  }

  // TODO S3: query real a Supabase
  return customersFallback
}

export async function findCustomerById(id: string): Promise<Customer | null> {
  const customers = await findAllCustomers()
  return customers.find((customer) => customer.id === id) ?? null
}

export async function findCustomerByUserId(userId: string): Promise<Customer | null> {
  const customers = await findAllCustomers()
  return customers.find((customer) => customer.userId === userId) ?? null
}

export async function upsertCustomer(
  _payload: Omit<Customer, "id" | "createdAt">,
): Promise<Customer> {
  throwWriteUnavailable("customer.upsert")
}
