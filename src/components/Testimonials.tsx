
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Member for 2 years",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
    testimonial: "I've been a member of Mohid for two years now, and it has completely transformed my life. The trainers are exceptional, the community is supportive, and the facilities are state-of-the-art. Thanks to Mohid, I've achieved fitness goals I never thought possible.",
    rating: 5
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Member for 1 year",
    imageSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    testimonial: "Joining Mohid was one of the best decisions I've made for my health. The personalized training programs and nutrition guidance have helped me lose 30 pounds in just six months. The trainers really care about your progress and keep you motivated throughout your journey.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Member for 6 months",
    imageSrc: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    testimonial: "As someone who was intimidated by gyms, Mohid provided a welcoming environment where I felt comfortable from day one. The group classes are fun and challenging, and I've noticed significant improvements in my strength and confidence.",
    rating: 4
  },
  {
    id: 4,
    name: "Marcus Thompson",
    role: "Member for 3 years",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    testimonial: "I've been to many gyms over the years, but none compare to Mohid. The variety of equipment and classes keep workouts interesting, and the trainers continuously challenge me to push my limits. My fitness has improved tremendously, and I've made great friends along the way.",
    rating: 5
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Member for 1 year",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    testimonial: "The premium membership at Mohid is worth every penny. The personal training sessions have been instrumental in correcting my form and preventing injuries. I appreciate how the staff remembers everyone by name and creates such a positive atmosphere.",
    rating: 5
  }
];

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === "left" 
        ? current.scrollLeft - current.offsetWidth 
        : current.scrollLeft + current.offsetWidth;
      
      current.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="testimonials" className="py-16 px-6 md:px-12 lg:px-24 bg-fitness-lightGray">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-fitness-black">
              Member <span className="text-fitness-red">Testimonials</span>
            </h2>
            <p className="text-fitness-darkGray mt-4 max-w-2xl">
              Hear from our members about their experience and transformations with Mohid Fitness.
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="min-w-[300px] md:min-w-[400px] snap-start"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
        
        <div className="md:hidden flex justify-center space-x-2 mt-6">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
