import { mockProducts } from "@/data/mock";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = mockProducts.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      {/* Breadcrumb */}
      <nav className="flex text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground mb-10">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 mx-3 mt-[1px]" />
        <Link href="/products" className="hover:text-foreground transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3 mx-3 mt-[1px]" />
        <span className="text-foreground truncate">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Gallery */}
        <div className="flex-1">
          <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 hide-scrollbar lg:w-20 shrink-0">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  className={`relative w-16 lg:w-full bg-secondary overflow-hidden shrink-0 ${i === 0 ? 'ring-1 ring-foreground' : 'opacity-60 hover:opacity-100 transition-opacity'}`}
                  style={{ aspectRatio: '3/4' }}
                >
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }} />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div 
              className="relative flex-1 bg-secondary overflow-hidden group w-full"
              style={{ aspectRatio: '3/4' }}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url('${product.images[0]}')` }} />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 lg:max-w-md xl:max-w-lg lg:py-10">
          <h1 className="font-heading text-4xl sm:text-5xl font-normal mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 text-xl mb-10">
            {product.salePrice ? (
              <>
                <span className="text-muted-foreground line-through text-lg">₹{product.price}</span>
                <span className="text-foreground font-medium">₹{product.salePrice}</span>
              </>
            ) : (
              <span className="text-foreground font-medium">₹{product.price}</span>
            )}
          </div>

          <div className="space-y-8 mb-10">
            {/* Color Selection */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-semibold tracking-[0.1em] uppercase">Color: <span className="text-muted-foreground ml-1">Black</span></span>
              </div>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full bg-[#1a1a1a] ring-1 ring-offset-2 ring-foreground"></button>
                <button className="w-8 h-8 rounded-full bg-[#f3f4f6] border border-border"></button>
                <button className="w-8 h-8 rounded-full bg-[#8c7a6b] border border-border"></button>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-semibold tracking-[0.1em] uppercase">Size</span>
                <Link href="#" className="text-[11px] font-medium tracking-[0.1em] text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors">Size Guide</Link>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} className={`h-12 text-[13px] font-medium border transition-colors ${size === 'M' ? 'border-foreground bg-foreground text-background' : 'border-border text-foreground hover:border-foreground'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-3 block">Quantity</span>
              <div className="flex items-center border border-border w-32 h-12">
                <button className="flex-1 flex justify-center items-center text-muted-foreground hover:text-foreground transition-colors">
                  <Minus className="w-4 h-4 stroke-[1.5]" />
                </button>
                <span className="flex-1 text-center text-[13px] font-medium">1</span>
                <button className="flex-1 flex justify-center items-center text-muted-foreground hover:text-foreground transition-colors">
                  <Plus className="w-4 h-4 stroke-[1.5]" />
                </button>
              </div>
            </div>
          </div>

          <Button className="w-full h-14 rounded-none font-semibold uppercase tracking-[0.2em] text-[11px] mb-4 bg-foreground text-background hover:bg-foreground/90">
            Add to Cart
          </Button>
          
          <Button variant="outline" className="w-full h-14 rounded-none font-semibold uppercase tracking-[0.2em] text-[11px] bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors mb-12">
            Buy it Now
          </Button>

          {/* Description Accordions */}
          <div className="border-t border-border pt-8 space-y-6 text-[14px] font-light text-muted-foreground leading-relaxed">
            <p>
              The {product.name} is a versatile essential for your modern wardrobe. Designed with a relaxed fit and premium materials to ensure comfort without compromising on style. The clean lines and subtle details make it perfect for any occasion.
            </p>
            <div className="border-b border-border pb-4">
              <button className="flex justify-between items-center w-full text-foreground text-[13px] font-semibold tracking-[0.1em] uppercase py-2">
                Details & Fit
                <Plus className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>
            <div className="border-b border-border pb-4">
              <button className="flex justify-between items-center w-full text-foreground text-[13px] font-semibold tracking-[0.1em] uppercase py-2">
                Shipping & Returns
                <Plus className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24 lg:mt-32 pt-16 border-t border-border">
        <h2 className="font-heading text-2xl sm:text-3xl font-normal mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {mockProducts.filter(p => p.id !== product.id).slice(0, 4).map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>

    </div>
  );
}
