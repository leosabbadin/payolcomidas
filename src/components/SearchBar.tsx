import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount?: number;
  isSearching?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  resultCount,
  isSearching = false
}) => {
  return (
    <div className="w-full px-4 py-3 bg-[#161311] border-b border-[#2a221b]">
      <div className="max-w-xl mx-auto">
        <div className="relative flex items-center">
          <div className="absolute left-3.5 text-[#d4a34b] pointer-events-none flex items-center justify-center">
            <Search className="w-4 h-4" />
          </div>
          
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar no cardápio..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#221c17] text-[#f4ede4] placeholder-[#8c7e6e] text-sm sm:text-base border border-[#3d2e24] focus:border-[#d4a34b] focus:outline-none focus:ring-1 focus:ring-[#d4a34b] transition-all shadow-inner"
          />

          {searchQuery && (
            <button
              id="clear-search-btn"
              onClick={() => onSearchChange('')}
              className="absolute right-3 p-1 rounded-full text-[#a89c8a] hover:text-[#f4ede4] hover:bg-[#34271f] transition-colors"
              aria-label="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {isSearching && (
          <div className="mt-2 flex items-center justify-between text-xs px-1 text-[#a89c8a]">
            <span>
              Filtrando por: <strong className="text-[#d4a34b]">"{searchQuery}"</strong>
            </span>
            <span className="bg-[#2a2019] px-2 py-0.5 rounded text-[#e8decb] border border-[#3e2e22]">
              {resultCount} {resultCount === 1 ? 'item encontrado' : 'itens encontrados'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
