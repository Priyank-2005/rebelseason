import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/data/mock";

export default function CheckoutPage() {
  const subtotal = 4298; // Mock subtotal
  const shipping = 100;
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
      <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Form Area */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-medium mb-2">Checkout</h1>
            <p className="text-sm text-muted-foreground">Already have an account? <Link href="/account/login" className="text-foreground underline underline-offset-4">Log in</Link></p>
          </div>

          <form className="space-y-10">
            {/* Contact */}
            <section>
              <h2 className="text-lg font-medium mb-4">Contact Information</h2>
              <Input type="email" placeholder="Email Address" className="w-full h-12 rounded-none bg-secondary/50 border-border" />
            </section>

            {/* Shipping */}
            <section>
              <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" placeholder="First Name" className="w-full h-12 rounded-none bg-secondary/50 border-border col-span-2 sm:col-span-1" />
                <Input type="text" placeholder="Last Name" className="w-full h-12 rounded-none bg-secondary/50 border-border col-span-2 sm:col-span-1" />
                <Input type="text" placeholder="Address" className="w-full h-12 rounded-none bg-secondary/50 border-border col-span-2" />
                <Input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full h-12 rounded-none bg-secondary/50 border-border col-span-2" />
                <Input type="text" placeholder="City" className="w-full h-12 rounded-none bg-secondary/50 border-border col-span-2 sm:col-span-1" />
                <Input type="text" placeholder="State" className="w-full h-12 rounded-none bg-secondary/50 border-border col-span-2 sm:col-span-1" />
                <Input type="text" placeholder="PIN Code" className="w-full h-12 rounded-none bg-secondary/50 border-border col-span-2 sm:col-span-1" />
                <Input type="tel" placeholder="Phone" className="w-full h-12 rounded-none bg-secondary/50 border-border col-span-2 sm:col-span-1" />
              </div>
            </section>

            {/* Payment (Mock Razorpay placeholder) */}
            <section>
              <h2 className="text-lg font-medium mb-4">Payment</h2>
              <div className="p-6 border border-border bg-secondary/30 text-center">
                <p className="text-sm text-muted-foreground mb-4">All transactions are secure and encrypted.</p>
                <div className="text-xs bg-primary/20 text-foreground py-2 px-4 inline-block mb-4">
                  Razorpay Integration (Coming in Phase 10)
                </div>
                <p className="text-sm">You will be redirected to Razorpay to complete your purchase securely.</p>
              </div>
            </section>

            <Button className="w-full h-14 rounded-none font-semibold uppercase tracking-widest text-sm">
              Pay Now
            </Button>
            
            <div className="text-center mt-6">
              <Link href="/cart" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4">
                Return to cart
              </Link>
            </div>
          </form>
        </div>

        {/* Right Summary Area */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="bg-secondary/50 p-6 sm:p-8 lg:sticky lg:top-24">
            <h2 className="font-heading text-xl font-medium mb-6">Order Summary</h2>
            
            {/* Mock Items */}
            <div className="space-y-4 mb-6 pb-6 border-b border-border/50">
              <div className="flex gap-4 items-center">
                <div className="relative w-16 aspect-[3/4] bg-background">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${mockProducts[0].images[0]}')` }} />
                  <span className="absolute -top-2 -right-2 bg-foreground text-background w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium">1</span>
                </div>
                <div className="flex-1 text-sm">
                  <p className="font-medium">{mockProducts[0].name}</p>
                  <p className="text-muted-foreground text-xs">M / Black</p>
                </div>
                <span className="text-sm font-medium">₹{mockProducts[0].price}</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="relative w-16 aspect-[3/4] bg-background">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${mockProducts[1].images[0]}')` }} />
                  <span className="absolute -top-2 -right-2 bg-foreground text-background w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium">1</span>
                </div>
                <div className="flex-1 text-sm">
                  <p className="font-medium">{mockProducts[1].name}</p>
                  <p className="text-muted-foreground text-xs">S / Beige</p>
                </div>
                <span className="text-sm font-medium">₹{mockProducts[1].salePrice}</span>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-3 text-sm mb-6 pb-6 border-b border-border/50">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">₹{shipping}</span>
              </div>
            </div>
            
            <div className="flex justify-between font-medium text-xl">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
