import React, { useRef, useState, useEffect } from 'react';
import { MenuItem } from '../types';
import { formatCurrency } from '../data/menuData';
import { MediaDisplay } from './MediaDisplay';
import { ChevronLeft, ChevronRight, Sparkles, Users, MoveHorizontal } from 'lucide-react';

interface FeaturedSectionProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  items,
  onSelectItem,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isMouseDownRef = useRef(false);
  const hasDraggedRef = useRef(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Calculate approximate active index based on item width
      const itemWidth = 310;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(0, index), items.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        currentRef.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [items]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollToItem = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = 320;
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth',
      });
    }
  };

  // Drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isMouseDownRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    if (Math.abs(walk) > 6) {
      hasDraggedRef.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
  };

  const handleCardClick = (item: MenuItem) => {
    // If user dragged horizontally, do not open the modal
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false;
      return;
    }
    onSelectItem(item);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section id="section-mais-vendidos" className="w-full py-6 px-3 sm:px-4 bg-[#100e0d] overflow-hidden border-b border-[#2e221a]">
      <div className="max-w-xl sm:max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-rustic text-xl sm:text-2xl font-bold tracking-wide text-white">
                Mais Vendidos
              </h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#2a1e17] text-[#d4a34b] border border-[#d4a34b]/40">
                <Sparkles className="w-2.5 h-2.5 text-[#d4a34b]" /> Destaques
              </span>
            </div>
            <p className="text-xs text-[#a89c8a] mt-0.5">
              Os campeões de pedidos e preferidos do Rancho
            </p>
          </div>

          {/* Controls: Drag hint + navigation arrows */}
          <div className="flex items-center gap-1.5">
            <div className="hidden xs:flex items-center gap-1 text-[11px] text-[#a89c8a] bg-[#1d1612] px-2.5 py-1 rounded-full border border-[#382b21]">
              <MoveHorizontal className="w-3 h-3 text-[#d4a34b] animate-pulse" />
              <span>Arraste</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Voltar prato anterior"
                className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
                  canScrollLeft
                    ? 'bg-[#221914] text-[#d4a34b] border-[#3f2e22] hover:bg-[#d4a34b] hover:text-[#121110] hover:border-[#d4a34b] cursor-pointer'
                    : 'bg-[#161210] text-[#55463a] border-[#251b15] cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Avançar próximo prato"
                className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
                  canScrollRight
                    ? 'bg-[#221914] text-[#d4a34b] border-[#3f2e22] hover:bg-[#d4a34b] hover:text-[#121110] hover:border-[#d4a34b] cursor-pointer'
                    : 'bg-[#161210] text-[#55463a] border-[#251b15] cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Drag-to-Scroll Carousel */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-3.5 sm:gap-4 overflow-x-auto pb-3 pt-1 no-scrollbar snap-x snap-mandatory select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {items.map((item) => {
            const hasMedia = Boolean(item.imageUrl || item.videoUrl);
            const badgeText = item.badge || 'Destaque';

            return (
              <div
                key={item.id}
                id={`featured-card-${item.id}`}
                onClick={() => handleCardClick(item)}
                className="w-[280px] xs:w-[305px] sm:w-[335px] shrink-0 snap-start group relative rounded-2xl bg-[#1a1411] border border-[#382b21] hover:border-[#d4a34b]/60 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div>
                  {hasMedia ? (
                    /* Top Media: 3:2, full width, rounded top corners */
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

                      {/* Top-Right Badge */}
                      <span className="absolute top-2.5 right-2.5 z-10 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-[#d4a34b] to-[#b8860b] text-[#121110] backdrop-blur-md border border-[#f5c76b]/40 shadow-md">
                        {badgeText}
                      </span>

                      {/* Bottom-Left: Servings / Weight */}
                      {item.servings && (
                        <span className="absolute bottom-2.5 left-2.5 z-10 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-black/80 backdrop-blur-md text-[#e8decb] border border-white/10 flex items-center gap-1 shadow-sm">
                          <Users className="w-3 h-3 text-[#d4a34b] shrink-0" />
                          <span>{item.servings}</span>
                        </span>
                      )}
                    </div>
                  ) : (
                    /* NO MEDIA: No image container, no placeholder */
                    <div className="p-4 pb-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        {item.servings ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#c5baa7]">
                            <Users className="w-3 h-3 text-[#d4a34b] shrink-0" />
                            <span>{item.servings}</span>
                          </span>
                        ) : <span />}
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-[#d4a34b] to-[#b8860b] text-[#121110] border border-[#f5c76b]/40 shadow-sm">
                          {badgeText}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content Section below Media */}
                  <div className={hasMedia ? 'p-3.5 sm:p-4 pb-2' : 'px-4 pb-2 pt-1'}>
                    <h3 className="font-rustic text-base sm:text-lg font-bold text-white group-hover:text-[#d4a34b] transition-colors leading-snug line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#a89c8a] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className={hasMedia ? 'p-3.5 sm:p-4 pt-0' : 'p-4 pt-0'}>
                  <div className="mt-2 pt-2.5 border-t border-[#2e221a] flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#a89c8a] font-medium">A partir de</span>
                      <span className="font-rustic text-base sm:text-lg font-bold text-[#d4a34b] leading-none">
                        {formatCurrency(item.price)}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#2a1e17] group-hover:bg-[#d4a34b] text-[#d4a34b] group-hover:text-[#121110] border border-[#d4a34b]/40 group-hover:border-[#d4a34b] font-medium text-xs transition-all shadow-sm">
                      <span>Ver detalhes</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-2">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollToItem(idx)}
              aria-label={`Ir para prato ${idx + 1}: ${item.name}`}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? 'w-6 h-1.5 bg-[#d4a34b]'
                  : 'w-1.5 h-1.5 bg-[#382b21] hover:bg-[#a89c8a]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
