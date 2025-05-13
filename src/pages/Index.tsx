
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
