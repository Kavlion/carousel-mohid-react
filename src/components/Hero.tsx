
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SearchBar from "./SearchBar";
import { toast } from "sonner";

const Hero = () => {
  const handleSearch = (query: string) => {
    toast.info(`Searching for: ${query}`);
    // In a real app, this would trigger a search operation
  };

  return (
    <section id="home" className="relative">
      <div className="bg-black text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 lg:py-28">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Discover<br />
                Most Suitable<br />
                Watches
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Find the best, reliable, and cheap smart watches here.
                We focus on product quality. Here you can find smart
                watches of almost all brands. So why you are waiting?
                Just order now!
              </p>
              <div className="max-w-md w-full mb-6">
                <SearchBar onSearch={handleSearch} />
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg h-auto rounded-full">
                  Explore More
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg h-auto rounded-full">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-full overflow-hidden bg-gradient-to-br from-amber-300 via-orange-400 to-pink-500 p-1">
                  <AspectRatio ratio={1} className="bg-black rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                      alt="Smartwatch"
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
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
