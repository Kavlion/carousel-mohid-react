
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="bg-fitness-lightGray">
        <div className="container mx-auto px-6 pt-10 pb-20 md:py-24 lg:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fitness-black mb-6">
                The Perfect <span className="text-fitness-red">Fitness</span> Experience
              </h1>
              <p className="text-fitness-darkGray text-lg mb-8 max-w-lg">
                Transform your body and mind with our expert trainers and state-of-the-art facilities. Join our community and achieve your fitness goals.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Button className="bg-fitness-red hover:bg-red-600 text-white px-8 py-6 text-lg h-auto">
                  Join Now
                </Button>
                <Button variant="outline" className="border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white px-8 py-6 text-lg h-auto">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Fitness Trainer"
                  className="rounded-lg shadow-xl object-cover w-full h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-fitness-red text-white p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-fitness-darkGray">Trusted by</p>
                      <p className="text-lg font-bold">10,000+ Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
