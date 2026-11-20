import React from 'react';
import { MenuItem } from '../types';
import { formatCurrency } from '../data/menuData';
import { MediaDisplay } from './MediaDisplay';
import { ChevronRight, Users } from 'lucide-react';

interface ProductCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item, onSelect }) => {
  const hasMedia = Boolean(item.imageUrl || item.videoUrl);

  // Check if multiple prices exist (e.g. Carnes na Brasa: 2 PESSOAS e 4 PESSOAS)
  const hasMultiplePrices = item.prices && item.prices.length > 0;

  // Determine badge text: 'Destaque' or custom badge
  const badgeText = item.badge || (item.featured ? 'Destaque' : null);

  return (
    <div
      id={`product-card-${item.id}`}
      onClick={() => onSelect(item)}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#1a1411] border border-[#382b21] hover:border-[#d4a34b]/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-black/60 cursor-pointer overflow-hidden"
    >
      <div>
        {/* WITH MEDIA: 3:2 full width, no margins, top rounded corners */}
        {hasMedia ? (
          <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#120f0d]">
            <MediaDisplay
              videoUrl={item.videoUrl}
              imageUrl={item.imageUrl}
              altText={item.name}
              showBadge={false}
              controls={false}
              muted={true}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Top-Right Badge: 'Destaque' or custom badge */}
            {badgeText && (
              <span className="absolute top-2.5 right-2.5 z-10 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-[#d4a34b] to-[#b8860b] text-[#121110] backdrop-blur-md border border-[#f5c76b]/40 shadow-md">
                {badgeText}
              </span>
            )}

            {/* Bottom-Left: Servings / Weight */}
            {item.servings && (
              <span className="absolute bottom-2.5 left-2.5 z-10 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-black/80 backdrop-blur-md text-[#e8decb] border border-white/10 flex items-center gap-1 shadow-sm">
                <Users className="w-3 h-3 text-[#d4a34b] shrink-0" />
                <span>{item.servings}</span>
              </span>
            )}
          </div>
        ) : (
          /* WITHOUT MEDIA: NO media container, NO placeholder, NO empty space */
          <div className="p-4 sm:p-5 pb-0">
            {/* Top row with Badge and Servings */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                {item.servings && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#c5baa7]">
                    <Users className="w-3 h-3 text-[#d4a34b] shrink-0" />
                    <span>{item.servings}</span>
                  </span>
                )}
              </div>

              {badgeText && (
                <div className="ml-auto">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-[#d4a34b] to-[#b8860b] text-[#121110] border border-[#f5c76b]/40 shadow-sm">
                    {badgeText}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Content Section: Product Name and Description */}
        <div className={hasMedia ? 'p-3.5 sm:p-4 pb-2' : 'px-4 sm:px-5 pb-2 pt-1'}>
          {/* Product Name (rustic font, bold, white, hover gold) */}
          <h3 className="font-rustic text-base sm:text-lg font-bold text-white group-hover:text-[#d4a34b] transition-colors leading-snug line-clamp-2">
            {item.name}
          </h3>

          {/* Description in smaller text */}
          <p className="mt-1.5 text-xs sm:text-[13px] text-[#a89c8a] line-clamp-3 leading-relaxed font-normal">
            {item.description}
          </p>
        </div>
      </div>

      {/* Footer / Pricing & Action */}
      <div className={hasMedia ? 'p-3.5 sm:p-4 pt-0' : 'p-4 sm:p-5 pt-0'}>
        {hasMultiplePrices ? (
          <div className="mt-2 pt-2.5 border-t border-[#2e221a]">
            {/* Multiple price options (e.g. 2 PESSOAS e 4 PESSOAS) */}
            <div className="grid grid-cols-2 gap-2 mb-2.5">
              {item.prices!.map((option, idx) => {
                const val = option.price ?? option.value ?? 0;
                const displayLabel = option.label.toUpperCase().includes('PESSOAS')
                  ? option.label.toUpperCase().replace('SERVE ', '')
                  : option.label.toUpperCase();
                return (
                  <div
                    key={idx}
                    className="px-2 py-1.5 rounded-lg bg-[#221914] border border-[#382b21] flex flex-col justify-center text-center shadow-inner group-hover:border-[#d4a34b]/40 transition-colors"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#beb19e]">
                      {displayLabel}
                    </span>
                    <span className="font-rustic text-sm sm:text-base font-bold text-[#d4a34b] mt-0.5 leading-tight">
                      {formatCurrency(val)}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom row: Info on left, 'Ver detalhes' on right */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-[#a89c8a] font-medium">
                2 ou 4 pessoas
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(item);
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#2a1e17] hover:bg-[#d4a34b] text-[#d4a34b] hover:text-[#121110] border border-[#d4a34b]/40 hover:border-[#d4a34b] font-medium text-xs transition-all shadow-sm"
              >
                <span>Ver detalhes</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-2 pt-2.5 border-t border-[#2e221a] flex items-center justify-between">
            {/* Price on left in GOLD */}
            <div className="flex flex-col">
              <span className="font-rustic text-base sm:text-lg font-bold text-[#d4a34b] leading-none">
                {formatCurrency(item.price)}
              </span>
            </div>

            {/* 'Ver detalhes' button on right */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(item);
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#2a1e17] hover:bg-[#d4a34b] text-[#d4a34b] hover:text-[#121110] border border-[#d4a34b]/40 hover:border-[#d4a34b] font-medium text-xs transition-all shadow-sm"
            >
              <span>Ver detalhes</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
