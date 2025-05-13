
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import TrainerCard from "./TrainerCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const trainersData = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Strength & Conditioning",
    imageSrc: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    experience: "7 Years",
    bio: "Sarah specializes in strength training and has helped hundreds of clients achieve their fitness goals through personalized workout plans."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    specialty: "HIIT & Cardio",
    imageSrc: "https://images.unsplash.com/photo-1567013127542-490d757e6349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    experience: "5 Years",
    bio: "Michael is an energetic trainer who specializes in high-intensity workouts that maximize calorie burn and improve cardiovascular health."
  },
  {
    id: 3,
    name: "Emily Chen",
    specialty: "Yoga & Flexibility",
    imageSrc: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    experience: "8 Years",
    bio: "Emily brings a holistic approach to fitness, focusing on improving flexibility, balance, and mental well-being through yoga and mindfulness practices."
  },
  {
    id: 4,
    name: "David Wilson",
    specialty: "Nutrition & Weight Loss",
    imageSrc: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    experience: "6 Years",
    bio: "David combines exercise science with nutrition expertise to create comprehensive weight loss programs that deliver sustainable results."
  }
];

const Trainers = () => {
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
    <section id="trainers" className="py-16 px-6 md:px-12 lg:px-24 bg-fitness-lightGray">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-fitness-black">
              Expert <span className="text-fitness-red">Trainers</span>
            </h2>
            <p className="text-fitness-darkGray mt-4 max-w-2xl">
              Our certified trainers bring years of expertise and passion to help you achieve your fitness goals safely and effectively.
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
          {trainersData.map((trainer) => (
            <div 
              key={trainer.id} 
              className="min-w-[280px] md:min-w-[320px] snap-start"
            >
              <TrainerCard {...trainer} />
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

export default Trainers;
