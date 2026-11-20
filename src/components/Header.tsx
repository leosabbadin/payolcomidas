import React from 'react';
import ranchoLogoImg from '../assets/images/regenerated_image_1788365712963.png';

export const Header: React.FC = () => {

  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-b from-[#1c1613] via-[#151210] to-[#121110] border-b border-[#2e241d] pt-3 pb-6 px-3 sm:px-4">
      {/* Subtle rustic background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,#d4a34b_0%,transparent_65%)]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#7a411d]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Brand Logo - Wide horizontal layout with transparent background, no borders or frame */}
        <div className="relative w-full px-1 sm:px-2 mb-2 flex items-center justify-center">
          <img
            src={ranchoLogoImg}
            alt="Rancho Payol - Bar & Restaurante"
            referrerPolicy="no-referrer"
            className="w-full max-w-xl h-44 sm:h-56 md:h-64 object-contain drop-shadow-[0_8px_28px_rgba(212,163,75,0.28)] transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Title and Subtitle */}
        <div className="space-y-1 mt-1">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-0.5 rounded-full bg-[#2a1f18]/80 border border-[#d4a34b]/30 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a34b] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest text-[#d4a34b] uppercase">
              Bar & Restaurante
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a34b] animate-pulse" />
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#d4a34b]/60" />
            <h1 className="font-classic text-xl sm:text-2xl font-semibold text-[#d4a34b] tracking-wider italic">
              Cardápio de Comidas
            </h1>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#d4a34b]/60" />
          </div>
        </div>

        {/* Supporting text */}
        <p className="mt-2.5 text-sm sm:text-base font-medium text-[#e8decb] max-w-sm">
          “O sabor do Rancho na palma da sua mão.”
        </p>
        
        <p className="mt-1 text-xs text-[#a89c8a] max-w-md font-normal leading-relaxed">
          Pratos, petiscos, chapas e carnes selecionadas para uma experiência completa.
        </p>

        {/* Couvert artístico notice */}
        <div className="mt-[12px] w-fit mx-auto py-[8px] px-[14px] rounded-[8px] bg-[#241C12] border border-solid border-[#6B5128] font-georgia text-[13px] font-normal text-[#F3E8D3] whitespace-nowrap">
          Couvert artístico: <span className="font-bold text-[#D9A441]">R$ 15,00</span>
        </div>
      </div>
    </header>
  );
};
