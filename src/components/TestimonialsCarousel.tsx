
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Hamza Fasi",
    role: "Watch Enthusiast",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    text: "I've been using my watch for 6 months now, and it's been incredible. The battery life is amazing and the design is sleek.",
    rating: 5
  },
  {
    id: 2,
    name: "Hafiz Rizuela",
    role: "Fitness Trainer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    text: "The fitness tracking features on this watch are spot on! It has helped me monitor my clients' progress with incredible accuracy.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Tech Blogger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    text: "As someone who reviews tech for a living, I can confidently say this watch exceeds expectations in terms of both functionality and style.",
    rating: 5
  }
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What People Say About Us</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onSelect={(index) => handleSlideChange(index)}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="bg-white border-none shadow-md rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 mr-4">
                        <AspectRatio ratio={1} className="rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="object-cover w-full h-full"
                          />
                        </AspectRatio>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {Array(5).fill(0).map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => handleSlideChange(index)}
                />
              ))}
            </div>
          </div>
          <div className="hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
