"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col relative z-50">
      {/* Pink Announcement Bar (Always in normal document flow) */}
      <div className="w-full bg-primary py-2.5 px-4 text-center text-[11px] sm:text-xs tracking-wide font-medium text-primary-foreground relative z-[60]">
        ✦ Free Shipping on Orders Over ₹2,000 &bull; Easy Returns &bull; COD Available ✦
      </div>

      {/* Main Navbar (Overlays hero on homepage) */}
      <header className={`w-full transition-colors duration-300 ${isHome ? "absolute top-full left-0 right-0 bg-transparent border-none" : "sticky top-0 bg-background border-b border-border"}`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Nav Links */}
            <nav className="hidden md:flex items-center gap-6 text-[12px] font-medium text-foreground flex-1">
              <Link href="/" className="hover:text-muted-foreground transition-colors">Home</Link>
              <Link href="/categories/new-arrivals" className="hover:text-muted-foreground transition-colors">New Arrivals</Link>
              <Link href="/categories/footwear" className="hover:text-muted-foreground transition-colors">Footwear</Link>
              <Link href="/categories/tops" className="hover:text-muted-foreground transition-colors">Tops</Link>
              <Link href="/products" className="hover:text-muted-foreground transition-colors">Best Sellers</Link>
              <Link href="/contact" className="hover:text-muted-foreground transition-colors">Support</Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex-1">
              <button 
                className="p-2 -ml-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[1.5]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[1.5]" />
                )}
                <span className="sr-only">Menu</span>
              </button>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex items-center justify-center flex-shrink-0 mx-4">
              <Link href="/" className="flex flex-col items-center leading-none">
                <span className="font-heading text-[10px] tracking-[0.15em] text-foreground/60 uppercase">The</span>
                <span className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-foreground uppercase leading-tight">
                  Rebel Season
                </span>
                <span className="font-heading text-[10px] italic text-foreground/60 -mt-0.5">Studio</span>
              </Link>
            </div>

            {/* Right: Icons & Auth */}
            <div className="flex items-center justify-end gap-5 flex-1">
              <div className="hidden lg:flex items-center gap-4 text-[12px] font-medium mr-2">
                <Link href="/login" className="text-foreground hover:text-muted-foreground transition-colors">Log In</Link>
                <Link href="/signup" className="text-foreground hover:text-muted-foreground transition-colors">Sign Up</Link>
              </div>
              <button className="text-foreground hover:text-muted-foreground transition-colors">
                <Search className="w-5 h-5 stroke-[1.5]" />
                <span className="sr-only">Search</span>
              </button>
              <Link href="/account" className="text-foreground hover:text-muted-foreground transition-colors">
                <User className="w-5 h-5 stroke-[1.5]" />
                <span className="sr-only">Account</span>
              </Link>
              <Link href="/cart" className="text-foreground hover:text-muted-foreground transition-colors relative">
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                <span className="sr-only">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col pt-24 px-6 md:hidden">
          <nav className="flex flex-col space-y-8 text-xl font-medium items-center text-center mt-12">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Home</Link>
            <Link href="/categories/new-arrivals" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors">New Arrivals</Link>
            <Link href="/categories/footwear" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Footwear</Link>
            <Link href="/categories/tops" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Tops</Link>
            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Best Sellers</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Support</Link>
            
            <div className="pt-8 mt-8 border-t border-border/50 w-full flex flex-col space-y-8">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Log In</Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors">Sign Up</Link>
            </div>
          </nav>
        </div>
      )}

    </div>
  );
}
