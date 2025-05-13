
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsShowcase from "@/components/BrandsShowcase";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BrandsShowcase />
      <ProductShowcase />
      <TestimonialsCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
