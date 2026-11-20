import React, { useState, useEffect } from 'react';
import { MenuItem, PriceOption } from '../types';
import { formatCurrency } from '../data/menuData';
import { MediaDisplay } from './MediaDisplay';
import { X, Check, Share2, Info, Users } from 'lucide-react';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  const [selectedPriceOption, setSelectedPriceOption] = useState<PriceOption | null>(null);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Synchronize state when item changes
  useEffect(() => {
    if (item && item.prices && item.prices.length > 0) {
      setSelectedPriceOption(item.prices[0]);
    } else {
      setSelectedPriceOption(null);
    }
  }, [item]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  if (!item) return null;

  const hasMedia = Boolean(item.imageUrl || item.videoUrl);

  const currentPrice = selectedPriceOption
    ? (selectedPriceOption.price ?? selectedPriceOption.value ?? item.price)
    : item.price;

  const handleShare = async () => {
    const shareText = `Olha o que encontrei no cardápio do Rancho Payol: ${item.name} (${formatCurrency(currentPrice)})!`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Rancho Payol - ${item.name}`,
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // Fallback to clipboard
        navigator.clipboard.writeText(`${shareText} - Rancho Payol`);
        setCopiedNotification(true);
        setTimeout(() => setCopiedNotification(false), 2000);
      }
    } else {
      navigator.clipboard.writeText(`${shareText} - Rancho Payol`);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        id={`modal-${item.id}`}
        className="relative w-full max-w-lg max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-[#1a1411] text-[#f4ede4] rounded-t-3xl sm:rounded-2xl border border-[#382b21] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* WITH MEDIA: Top Media slot with overlaid badges and close button */}
        {hasMedia ? (
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-[#120f0d] shrink-0">
            <MediaDisplay
              videoUrl={item.videoUrl}
              imageUrl={item.imageUrl}
              altText={item.name}
              showBadge={false}
              controls={false}
              muted={true}
              className="w-full h-full object-cover object-center"
            />

            {/* Badges on Top-Left */}
            <div className="absolute top-3 left-3 z-20 flex flex-wrap items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[#d4a34b]/40 text-[#d4a34b] text-xs font-bold uppercase tracking-wider shadow">
                {item.categoryName}
              </span>
              {item.badge && (
                <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-[#d4a34b] to-[#b8860b] text-[#121110] backdrop-blur-md border border-[#f5c76b]/40 text-xs font-bold uppercase tracking-wider shadow">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Close button on Top-Right */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/75 hover:bg-black/90 text-white hover:text-[#d4a34b] border border-white/20 transition-transform active:scale-95 shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Servings info on Bottom-Left */}
            {item.servings && (
              <span className="absolute bottom-2.5 left-2.5 z-20 px-2.5 py-1 rounded-md text-[11px] font-medium bg-black/80 backdrop-blur-md text-[#e8decb] border border-white/10 flex items-center gap-1 shadow-sm">
                <Users className="w-3 h-3 text-[#d4a34b] shrink-0" />
                <span>{item.servings}</span>
              </span>
            )}
          </div>
        ) : (
          /* WITHOUT MEDIA: Elegant Header with Category, Badges, Servings and Close Button */
          <div className="p-4 sm:p-5 pb-2 border-b border-[#2e221a] flex items-center justify-between shrink-0 bg-[#161210]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#241a14] border border-[#d4a34b]/30 text-[#d4a34b] text-xs font-bold uppercase tracking-wider">
                {item.categoryName}
              </span>
              {item.badge && (
                <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-[#d4a34b] to-[#b8860b] text-[#121110] border border-[#f5c76b]/40 text-xs font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
              )}
              {item.servings && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#c5baa7]">
                  <Users className="w-3 h-3 text-[#d4a34b] shrink-0" />
                  <span>{item.servings}</span>
                </span>
              )}
            </div>

            <button
              id="close-modal-btn"
              onClick={onClose}
              aria-label="Fechar"
              className="p-1.5 rounded-full bg-[#241a14] hover:bg-[#32231b] text-white hover:text-[#d4a34b] border border-[#382b21] transition-transform active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto no-scrollbar space-y-4 flex-1">
          {/* Dish Title */}
          <div>
            <h2 className="font-rustic text-xl sm:text-2xl font-bold text-white leading-tight">
              {item.name}
            </h2>
          </div>

          {/* Description */}
          <div className="bg-[#221914] p-3.5 rounded-xl border border-[#382b21]">
            <p className="text-sm sm:text-[15px] text-[#e8decb] leading-relaxed font-normal">
              {item.description}
            </p>
          </div>

          {/* Multiple Prices Selector (e.g. 2 pessoas vs 4 pessoas) */}
          {item.prices && item.prices.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#d4a34b] block">
                Selecione o tamanho / porção:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {item.prices.map((option) => {
                  const isSelected = selectedPriceOption?.label === option.label;
                  const optionPrice = option.price ?? option.value ?? 0;
                  const displayOptionLabel = option.label.toUpperCase().includes('PESSOAS')
                    ? option.label.toUpperCase().replace('SERVE ', '')
                    : option.label.toUpperCase();

                  return (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setSelectedPriceOption(option)}
                      className={`p-3 rounded-xl flex flex-col text-left transition-all border ${
                        isSelected
                          ? 'bg-[#2e2017] border-[#d4a34b] ring-1 ring-[#d4a34b] shadow-md'
                          : 'bg-[#1f1712] border-[#382b21] hover:border-[#4f3c2f]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wide text-white">
                          {displayOptionLabel}
                        </span>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-[#d4a34b] text-[#121110] flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <span className="font-rustic text-base font-bold text-[#d4a34b] mt-1">
                        {formatCurrency(optionPrice)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Extra Observations/Notes */}
          {item.notes && (
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#221914] border border-[#382b21] text-xs text-[#d5c7b2]">
              <Info className="w-4 h-4 text-[#d4a34b] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#d4a34b] font-semibold block mb-0.5">Observação:</strong>
                <span>{item.notes}</span>
              </div>
            </div>
          )}

          {/* Copy confirmation feedback */}
          {copiedNotification && (
            <div className="p-2 rounded-lg bg-[#2a1e17] border border-[#d4a34b]/50 text-center text-xs text-[#d4a34b]">
              Link e prato copiados com sucesso!
            </div>
          )}
        </div>

        {/* Modal Bottom Sticky Bar */}
        <div className="p-4 bg-[#140f0c] border-t border-[#2e221a] flex items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-[10px] text-[#a89c8a] block uppercase tracking-wider">
              {selectedPriceOption ? selectedPriceOption.label : 'Valor do item'}
            </span>
            <span className="font-rustic text-2xl font-bold text-[#d4a34b]">
              {formatCurrency(currentPrice)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-3 rounded-xl bg-[#221914] hover:bg-[#2e2017] border border-[#382b21] text-[#e8decb] hover:text-[#d4a34b] transition-colors"
              title="Compartilhar prato"
            >
              <Share2 className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#d4a34b] to-[#b8860b] hover:from-[#e5b85c] hover:to-[#c6950c] text-[#121110] font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#d4a34b]/20 active:scale-98 transition-all flex items-center gap-2"
            >
              <span>Entendido</span>
              <Check className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
