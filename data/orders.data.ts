import type { AdminOrder } from "@/modules/admin/types";

export const ordersData: AdminOrder[] = [
  {
    id: "ORD-2301",
    customer: "Carla Méndez",
    items: 2,
    total: 1499.98,
    status: "Pendiente",
    createdAt: "2026-03-27",
  },
  {
    id: "ORD-2302",
    customer: "Grupo Áurea",
    items: 4,
    total: 4399.96,
    status: "Procesando",
    createdAt: "2026-03-27",
  },
  {
    id: "ORD-2303",
    customer: "Nicolás Ramos",
    items: 1,
    total: 549.99,
    status: "Enviado",
    createdAt: "2026-03-26",
  },
];
