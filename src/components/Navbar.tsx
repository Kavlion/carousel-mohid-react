
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-fitness-red">MOHID</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="font-medium hover:text-fitness-red">Home</a>
          <a href="#programs" className="font-medium hover:text-fitness-red">Programs</a>
          <a href="#trainers" className="font-medium hover:text-fitness-red">Trainers</a>
          <a href="#pricing" className="font-medium hover:text-fitness-red">Pricing</a>
          <a href="#testimonials" className="font-medium hover:text-fitness-red">Testimonials</a>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-fitness-red hover:bg-red-600 text-white">Join Now</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2 space-y-3">
          <a href="#home" className="block py-2 hover:text-fitness-red">Home</a>
          <a href="#programs" className="block py-2 hover:text-fitness-red">Programs</a>
          <a href="#trainers" className="block py-2 hover:text-fitness-red">Trainers</a>
          <a href="#pricing" className="block py-2 hover:text-fitness-red">Pricing</a>
          <a href="#testimonials" className="block py-2 hover:text-fitness-red">Testimonials</a>
          <Button className="bg-fitness-red hover:bg-red-600 text-white w-full mt-2">Join Now</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
