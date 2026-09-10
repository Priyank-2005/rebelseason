"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OrderStatus } from "@prisma/client";

export default function OrderStatusSelect({
  orderId,
  initialStatus,
}: {
  orderId: string;
  initialStatus: OrderStatus;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<OrderStatus>(initialStatus);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as OrderStatus;
    setStatus(newStatus);
    setIsUpdating(true);

    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");
      
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Error updating order status");
      setStatus(initialStatus);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="status" className="text-sm font-medium text-gray-700">
        Status
      </label>
      <select
        id="status"
        value={status}
        onChange={handleStatusChange}
        disabled={isUpdating}
        className="block w-40 rounded-md border border-gray-300 py-1.5 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:opacity-50"
      >
        {Object.values(OrderStatus).map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      {isUpdating && <span className="text-xs text-gray-500">Updating...</span>}
    </div>
  );
}
