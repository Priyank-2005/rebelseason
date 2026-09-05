import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice: number | null;
  images: string[];
  category: string;
  isNew: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Use a second image if available for hover effect, otherwise use the first
  const hoverImage = product.images.length > 1 ? product.images[1] : product.images[0];

  return (
    <div className="group flex flex-col w-full">
      <Link 
        href={`/products/${product.slug}`} 
        className="relative overflow-hidden bg-secondary mb-5 block w-full"
        style={{ aspectRatio: '3/4' }}
      >
        {/* Main Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out group-hover:opacity-0"
          style={{ backgroundImage: `url('${product.images[0]}')` }}
        />
        {/* Hover Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105"
          style={{ backgroundImage: `url('${hoverImage}')` }}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground shadow-sm">
              New
            </span>
          )}
          {product.salePrice && (
            <span className="bg-primary/90 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-sm">
              Sale
            </span>
          )}
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 flex justify-center z-20">
          <Button className="w-full bg-white/95 text-foreground hover:bg-white rounded-none shadow-md text-[11px] font-semibold uppercase tracking-[0.15em] h-11">
            Quick Add
          </Button>
        </div>
      </Link>
      
      {/* Product Details */}
      <div className="flex flex-col text-center space-y-1.5 px-2">
        <Link 
          href={`/products/${product.slug}`} 
          className="text-[13px] font-medium tracking-wide hover:text-muted-foreground transition-colors"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-center gap-3 text-[13px]">
          {product.salePrice ? (
            <>
              <span className="text-muted-foreground line-through">₹{product.price}</span>
              <span className="text-foreground font-medium">₹{product.salePrice}</span>
            </>
          ) : (
            <span className="text-foreground">₹{product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}
