import { Hero } from "@/components/home/Hero";
import { HomeCarousel } from "@/components/home/HomeCarousel";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { TrendingProducts } from "@/components/home/TrendingProducts";
import { ReelsCarousel } from "@/components/home/ReelsCarousel";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <TrendingProducts />
      <HomeCarousel />
      <ReelsCarousel />
      <Testimonials />
    </>
  );
}
