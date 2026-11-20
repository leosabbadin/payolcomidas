import React from 'react';
import { Category, MenuItem } from '../types';
import { ProductCard } from './ProductCard';
import { Info } from 'lucide-react';

interface ProductSectionProps {
  category: Category;
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  category,
  items,
  onSelectItem
}) => {
  if (items.length === 0) return null;

  return (
    <section
      id={`section-${category.id}`}
      className="w-full py-6 px-4 scroll-mt-14"
    >
      <div className="max-w-xl sm:max-w-2xl mx-auto">
        {/* Category Header */}
        <div className="mb-4 pb-2.5 border-b border-[#2e221a] flex flex-col gap-1">
          <div>
            <h2 className="font-rustic text-xl sm:text-2xl font-bold tracking-wide text-[#f4ede4]">
              {category.name}
            </h2>
            {category.description && (
              <p className="text-xs text-[#a89c8a] mt-0.5">
                {category.description}
              </p>
            )}
          </div>

          {/* Section Special Note (e.g. Carnes na Brasa Aligot) */}
          {category.sectionNotes && (
            <div className="mt-2 flex items-start gap-2 p-2.5 rounded-xl bg-[#281e18] border border-[#d4a34b]/30 text-xs text-[#e8decb]">
              <Info className="w-4 h-4 text-[#d4a34b] shrink-0 mt-0.5" />
              <span>{category.sectionNotes}</span>
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} onSelect={onSelectItem} />
          ))}
        </div>
      </div>
    </section>
  );
};
