import React from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Recherche par nom ou email"
      className="border rounded p-2 w-full"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;