
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={`flex items-center bg-white rounded-full overflow-hidden ${className}`}>
      <div className="flex-1 flex items-center pl-4">
        <Search className="h-5 w-5 text-gray-400 mr-2" />
        <Input 
          type="text" 
          placeholder="Find the best brands" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 px-0 text-base"
        />
      </div>
      <Button 
        type="submit" 
        className="bg-blue-600 hover:bg-blue-700 text-white h-full px-8 rounded-l-none"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
