
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Search className="text-muted-foreground" />
      <Input 
        placeholder="Search GDPR requirements and compliance checks..." 
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1"
      />
    </div>
  );
};

export default SearchBar;
