
import { Card, CardContent } from "@/components/ui/card";

const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    description: "Cutting edge technology with sleek design"
  },
  {
    name: "Xiaomi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png",
    description: "High quality watches at affordable price"
  },
  {
    name: "FitBit",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Fitbit_logo.svg/1280px-Fitbit_logo.svg.png",
    description: "Focused on fitness and health tracking"
  }
];

const BrandsShowcase = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Card key={brand.name} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex items-center p-6">
                <div className="w-12 h-12 mr-4 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{brand.name}</h3>
                  <p className="text-gray-500 text-sm">{brand.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsShowcase;
