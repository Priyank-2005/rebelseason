import Link from "next/link";
import { Search, ShoppingBag, User, Heart, Menu } from "lucide-react";

export function Header() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Announcement Bar */}
      <div className="w-full bg-foreground text-background py-2 px-4 text-center text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium">
        Free Shipping on Orders Over ₹5,000 &bull; Easy Returns
      </div>

      <header className="w-full border-b border-border">
        {/* Top Tier: Logo & Utilities */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Left: Search & Mobile Menu */}
            <div className="flex flex-1 items-center gap-4">
              <button className="md:hidden p-2 -ml-2 text-foreground hover:text-muted-foreground transition-colors">
                <Menu className="w-6 h-6 stroke-[1.5]" />
                <span className="sr-only">Open menu</span>
              </button>
              <button className="hidden md:flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors text-xs uppercase tracking-widest font-medium">
                <Search className="w-4 h-4 stroke-[1.5]" />
                Search
              </button>
            </div>

            {/* Center: Logo */}
            <div className="flex flex-1 justify-center shrink-0">
              <Link href="/" className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-center">
                REBEL SEASON
              </Link>
            </div>

            {/* Right: Utilities */}
            <div className="flex flex-1 items-center justify-end gap-6">
              <Link href="/account" className="text-foreground hover:text-muted-foreground transition-colors hidden md:block text-xs uppercase tracking-widest font-medium">
                Account
              </Link>
              <Link href="/wishlist" className="text-foreground hover:text-muted-foreground transition-colors hidden md:block text-xs uppercase tracking-widest font-medium">
                Wishlist
              </Link>
              <Link href="/cart" className="text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2 group relative">
                <span className="hidden md:block text-xs uppercase tracking-widest font-medium">Cart</span>
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                  <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-foreground">
                    2
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Navigation Links */}
        <div className="hidden md:block border-t border-border">
          <nav className="flex justify-center gap-12 h-14 items-center text-[11px] tracking-[0.2em] uppercase font-semibold text-foreground">
            <Link href="/categories/new-arrivals" className="hover:text-muted-foreground transition-colors">
              New In
            </Link>
            <Link href="/products" className="hover:text-muted-foreground transition-colors">
              Shop All
            </Link>
            <Link href="/categories/dresses" className="hover:text-white hover:bg-foreground px-4 py-2 rounded-full transition-colors">
              Dresses
            </Link>
            <Link href="/categories/outerwear" className="hover:text-muted-foreground transition-colors">
              Outerwear
            </Link>
            <Link href="/editorial" className="hover:text-muted-foreground transition-colors">
              Editorial
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
