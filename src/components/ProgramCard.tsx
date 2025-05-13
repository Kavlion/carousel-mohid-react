
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  imageSrc: string;
  duration: string;
  level: string;
}

const ProgramCard = ({
  title,
  description,
  imageSrc,
  duration,
  level,
}: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="relative h-48 md:h-56 lg:h-64">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-fitness-red text-white px-3 py-1 rounded-full text-sm font-medium">
          {level}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-fitness-darkGray mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-fitness-red mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm">{duration}</span>
          </div>
        </div>
        <Button className="bg-fitness-red hover:bg-red-600 text-white w-full">
          Join Program
        </Button>
      </div>
    </div>
  );
};

export default ProgramCard;
