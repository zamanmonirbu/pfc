import React from 'react';
import { Search } from 'lucide-react';

interface SearchButtonProps {
  onClick: () => void;
}

export function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      aria-label="Search"
    >
      <Search className="w-5 h-5 text-gray-600" />
    </button>
  );
}