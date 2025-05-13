
import { Button } from "@/components/ui/button";

interface TrainerCardProps {
  name: string;
  specialty: string;
  imageSrc: string;
  experience: string;
  bio: string;
}

const TrainerCard = ({
  name,
  specialty,
  imageSrc,
  experience,
  bio,
}: TrainerCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-[3/4] relative">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-white/90">{specialty}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-fitness-red/10 text-fitness-red px-3 py-1 rounded-full text-sm font-medium">
            {experience} Experience
          </div>
        </div>
        <p className="text-fitness-darkGray mb-6">{bio}</p>
        <Button variant="outline" className="w-full border-fitness-red text-fitness-red hover:bg-fitness-red hover:text-white">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default TrainerCard;
