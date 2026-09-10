import { prisma } from "@/lib/db";

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
}

export interface SalesChartPoint {
  date: string;
  sales: number;
  orders: number;
  revenue: number;
}

/**
 * Fetch aggregate metrics for the admin dashboard:
 * - totalRevenue: sum of amounts for payments with status CAPTURED
 * - totalOrders: total count of orders
 * - totalCustomers: total count of users with role CUSTOMER
 * - totalProducts: total count of products
 */
export async function getDashboardStats(): Promise<DashboardStats> {
  const [revenueResult, totalOrders, totalCustomers, totalProducts] =
    await Promise.all([
      prisma.payment.aggregate({
        _sum: { amount: true },
        where: { status: "CAPTURED" },
      }),
      prisma.order.count(),
      prisma.user.count({ where: { role: "CUSTOMER" } }),
      prisma.product.count(),
    ]);

  return {
    totalRevenue: revenueResult._sum.amount ?? 0,
    totalOrders,
    totalCustomers,
    totalProducts,
  };
}

/**
 * Provide mock recent sales data for the admin dashboard recharts line chart.
 */
export function getMockSalesChartData(): SalesChartPoint[] {
  return [
    { date: "Mon", sales: 18500, orders: 4, revenue: 18500 },
    { date: "Tue", sales: 24200, orders: 6, revenue: 24200 },
    { date: "Wed", sales: 19800, orders: 5, revenue: 19800 },
    { date: "Thu", sales: 31400, orders: 8, revenue: 31400 },
    { date: "Fri", sales: 28900, orders: 7, revenue: 28900 },
    { date: "Sat", sales: 42500, orders: 11, revenue: 42500 },
    { date: "Sun", sales: 36000, orders: 9, revenue: 36000 },
  ];
}
