import React, { useRef, useEffect } from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
  categories: Category[];
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Auto scroll active button into horizontal view
  useEffect(() => {
    if (activeBtnRef.current && containerRef.current) {
      const container = containerRef.current;
      const button = activeBtnRef.current;
      const containerLeft = container.getBoundingClientRect().left;
      const buttonLeft = button.getBoundingClientRect().left;
      const offset = buttonLeft - containerLeft - (container.clientWidth / 2) + (button.clientWidth / 2);
      
      container.scrollBy({
        left: offset,
        behavior: 'smooth'
      });
    }
  }, [activeCategoryId]);

  return (
    <nav 
      id="category-navigation-bar" 
      aria-label="Categorias do Cardápio"
      className="sticky top-0 z-30 w-full bg-[#161210]/95 backdrop-blur-md border-b border-[#35271e] shadow-lg py-2.5 px-3"
    >
      <div 
        ref={containerRef}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 max-w-5xl mx-auto"
      >
        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              id={`tab-${cat.id}`}
              ref={isActive ? activeBtnRef : null}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-[#d4a34b] to-[#b8860b] text-[#121110] font-bold shadow-md shadow-[#d4a34b]/20 scale-102 ring-1 ring-[#f4ede4]/40'
                  : 'bg-[#221a15] text-[#d5c7b2] hover:text-[#f4ede4] hover:bg-[#2e231c] border border-[#3b2c22]'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
