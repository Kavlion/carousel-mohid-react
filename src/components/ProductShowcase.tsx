
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart } from "lucide-react";
import { toast } from "sonner";

const initialProducts = [
  {
    id: 1,
    name: "Apple Smart I",
    price: 255.00,
    originalPrice: 300.00,
    rating: 5,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    isFavorite: false
  },
  {
    id: 2,
    name: "Apple Smart II",
    price: 255.00,
    originalPrice: 300.00,
    rating: 5,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    isFavorite: false
  },
  {
    id: 3,
    name: "Apple Smart III",
    price: 255.00,
    originalPrice: 300.00,
    rating: 5,
    image: "https://images.unsplash.com/photo-1617043786394-f977fa2f88f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    isFavorite: false
  },
  {
    id: 4,
    name: "Apple Smart IV",
    price: 399.00,
    originalPrice: 450.00,
    rating: 5,
    image: "https://images.unsplash.com/photo-1434494879577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    isFavorite: false
  },
  {
    id: 5,
    name: "Samsung Watch Pro",
    price: 255.00,
    originalPrice: 300.00,
    rating: 5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1599&q=80",
    isFavorite: false
  },
  {
    id: 6,
    name: "Fitbit Max 1",
    price: 155.00,
    originalPrice: null,
    rating: 4,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1327&q=80",
    isFavorite: false
  }
];

const ProductCard = ({ product, onToggleFavorite }) => {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-all">
      <CardContent className="p-4 pb-0">
        <div className="relative">
          <AspectRatio ratio={1} className="bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <button 
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            onClick={() => onToggleFavorite(product.id)}
          >
            <Heart className={`w-4 h-4 ${product.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>
        </div>
        <h3 className="font-medium text-lg">{product.name}</h3>
        <div className="flex items-center my-1">
          {Array(5).fill(0).map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
            )}
          </div>
          <p className="text-sm text-gray-500">Available</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-3">
        <Button 
          variant="outline" 
          className="w-full border-black text-black hover:bg-black hover:text-white rounded-full"
          onClick={() => toast.success(`${product.name} added to cart`)}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProductShowcase = () => {
  const [products, setProducts] = useState(initialProducts);
  
  const handleToggleFavorite = (productId) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
    
    const product = products.find(p => p.id === productId);
    if (product) {
      if (!product.isFavorite) {
        toast.success(`${product.name} added to favorites`);
      } else {
        toast.info(`${product.name} removed from favorites`);
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <p className="text-sm text-gray-500">Find your favorite smart watch</p>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12">Our Latest Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onToggleFavorite={handleToggleFavorite} 
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
