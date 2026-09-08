import { Button } from "@/components/ui/button";

export default function AccountPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1">
      <h1 className="font-heading text-4xl font-normal mb-12">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-2">
          <button className="block w-full text-left px-4 py-3 bg-secondary text-[13px] font-medium border-l-2 border-foreground">Order History</button>
          <button className="block w-full text-left px-4 py-3 hover:bg-secondary/50 text-[13px] text-muted-foreground">Account Details</button>
          <button className="block w-full text-left px-4 py-3 hover:bg-secondary/50 text-[13px] text-muted-foreground">Saved Addresses</button>
          <button className="block w-full text-left px-4 py-3 hover:bg-secondary/50 text-[13px] text-red-600/80 mt-4">Log Out</button>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <h2 className="text-lg font-medium mb-6">Order History</h2>
          
          <div className="border border-border rounded-md p-8 text-center bg-secondary/20">
            <p className="text-muted-foreground text-[14px] mb-4">You haven't placed any orders yet.</p>
            <Button variant="outline" className="rounded-full text-[12px]">Start Shopping</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
