"use client";

import Link from "next/link";
import { Edit, Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProductActionsProps {
  productId: string;
}

export function ProductActions({ productId }: ProductActionsProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/admin/products/${productId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      } else {
        alert("Failed to delete product.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <Link
        href={`/admin/products/${productId}`}
        className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
        title="Edit Product"
      >
        <Edit size={18} />
      </Link>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors disabled:opacity-50"
        title="Delete Product"
      >
        {isDeleting ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
      </button>
    </div>
  );
}
