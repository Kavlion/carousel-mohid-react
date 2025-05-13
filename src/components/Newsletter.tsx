
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Subscribe To Newsletter</h2>
            <p className="text-gray-500 mb-6">Get the latest news, special products and discounts</p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 border border-gray-300 rounded-full flex-1"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="max-w-sm mx-auto">
              <AspectRatio ratio={1} className="rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                <img 
                  src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                  alt="Smartwatch Newsletter"
                  className="object-contain"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
