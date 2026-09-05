import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Info */}
          <div className="space-y-6 lg:col-span-1">
            <h3 className="font-heading text-3xl font-medium tracking-wide">REBEL SEASON</h3>
            <p className="text-background/70 text-[14px] leading-relaxed max-w-xs font-light">
              Premium fashion designed for the modern woman. Effortless elegance, everyday comfort.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="https://www.instagram.com/rebel_seasonn/" target="_blank" rel="noreferrer" className="text-background/70 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-8 text-white/90">Shop</h4>
            <ul className="space-y-4 text-[14px] font-light text-background/70">
              <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/categories/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link href="/categories/dresses" className="hover:text-white transition-colors">Dresses</Link></li>
              <li><Link href="/categories/tops" className="hover:text-white transition-colors">Tops & Tees</Link></li>
              <li><Link href="/categories/sale" className="hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-8 text-white/90">Support</h4>
            <ul className="space-y-4 text-[14px] font-light text-background/70">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-8 text-white/90">Newsletter</h4>
            <p className="text-background/70 text-[14px] font-light mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-4">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none border-background/30 text-background placeholder:text-background/50 focus-visible:ring-0 focus-visible:border-background h-10 px-0 rounded-none shadow-none text-sm"
              />
              <Button className="w-full bg-white text-foreground hover:bg-white/90 rounded-none uppercase tracking-[0.2em] text-[11px] font-semibold h-12 mt-2">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-light text-background/50">
          <p>&copy; {new Date().getFullYear()} Rebel Season. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="hover:text-background/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-background/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
