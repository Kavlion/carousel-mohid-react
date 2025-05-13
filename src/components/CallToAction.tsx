
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-fitness-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-fitness-red">Transform</span> Your Body?
            </h2>
            <p className="text-white/80 max-w-xl">
              Join Mohid Fitness today and start your journey towards a healthier, stronger you. 
              Our expert trainers and supportive community are ready to help you achieve your goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-fitness-red hover:bg-red-600 text-white px-8 py-6 text-lg h-auto">
              Join Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-fitness-black px-8 py-6 text-lg h-auto">
              Book a Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
