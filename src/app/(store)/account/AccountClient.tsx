"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format } from "date-fns";
import { OrderWithRelations } from "@/lib/dal/orders";

interface AccountClientProps {
  session: { name: string; email: string };
  orders: OrderWithRelations[];
}

export function AccountClient({ session, orders }: AccountClientProps) {
  const [activeTab, setActiveTab] = useState<"orders" | "details" | "addresses">("orders");

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* Sidebar */}
      <div className="md:col-span-1 space-y-2">
        <button 
          onClick={() => setActiveTab("orders")}
          className={`block w-full text-left px-4 py-3 text-[13px] transition-colors ${activeTab === "orders" ? "bg-secondary font-medium border-l-2 border-foreground" : "hover:bg-secondary/50 text-muted-foreground"}`}
        >
          Order History
        </button>
        <button 
          onClick={() => setActiveTab("details")}
          className={`block w-full text-left px-4 py-3 text-[13px] transition-colors ${activeTab === "details" ? "bg-secondary font-medium border-l-2 border-foreground" : "hover:bg-secondary/50 text-muted-foreground"}`}
        >
          Account Details
        </button>
        <button 
          onClick={() => setActiveTab("addresses")}
          className={`block w-full text-left px-4 py-3 text-[13px] transition-colors ${activeTab === "addresses" ? "bg-secondary font-medium border-l-2 border-foreground" : "hover:bg-secondary/50 text-muted-foreground"}`}
        >
          Saved Addresses
        </button>
        <Link href="/api/auth/logout" className="block w-full text-left px-4 py-3 hover:bg-secondary/50 text-[13px] text-red-600/80 mt-4">
          Log Out
        </Link>
      </div>

      {/* Content */}
      <div className="md:col-span-3">
        {activeTab === "orders" && (
          <div>
            <h2 className="text-lg font-medium mb-6">Order History</h2>
            {orders.length === 0 ? (
              <div className="border border-border rounded-md p-8 text-center bg-secondary/20">
                <p className="text-muted-foreground text-[14px] mb-4">You haven't placed any orders yet.</p>
                <Button variant="outline" className="rounded-full text-[12px]" asChild>
                  <Link href="/products">Start Shopping</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="border border-border rounded-md p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-medium">Order #{order.orderNumber}</p>
                        <p className="text-[13px] text-muted-foreground">{format(new Date(order.createdAt), 'MMM dd, yyyy')}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{order.total.toLocaleString('en-IN')}</p>
                        <span className="inline-block px-2 py-1 mt-1 text-[11px] font-medium uppercase tracking-wider bg-secondary rounded-sm">
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-[13px] text-muted-foreground mb-2">{order.items.length} items</p>
                      <div className="flex gap-4 overflow-x-auto pb-2">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex-shrink-0 w-16 h-20 bg-secondary rounded-sm overflow-hidden relative border border-border">
                            {item.image ? (
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-400">No Img</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "details" && (
          <div>
            <h2 className="text-lg font-medium mb-6">Account Details</h2>
            <div className="border border-border rounded-md p-6 bg-white shadow-sm max-w-xl">
              <div className="space-y-4">
                <div>
                  <label className="block text-[12px] font-medium text-gray-500 uppercase tracking-wide mb-1">Full Name</label>
                  <p className="text-[15px]">{session.name}</p>
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-gray-500 uppercase tracking-wide mb-1">Email Address</label>
                  <p className="text-[15px]">{session.email}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-border">
                  <Button variant="outline" className="text-xs">Change Password</Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "addresses" && (
          <div>
            <h2 className="text-lg font-medium mb-6">Saved Addresses</h2>
            <div className="border border-border border-dashed rounded-md p-8 text-center bg-secondary/10 max-w-xl">
              <p className="text-muted-foreground text-[14px] mb-4">No addresses saved yet.</p>
              <Button className="rounded-full text-[12px] bg-black text-white hover:bg-gray-800">
                Add New Address
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
