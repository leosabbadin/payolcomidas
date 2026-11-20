import React from 'react';
import { ArrowUp, Clock, MapPin } from 'lucide-react';
import ranchoLogoImg from '../assets/images/regenerated_image_1788365712963.png';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="w-full bg-[#0e0c0b] border-t border-[#2a1f18] pt-8 pb-12 px-4 text-[#a89c8a]">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Brand Logo - Same as header */}
        <div className="flex flex-col items-center">
          <img
            src={ranchoLogoImg}
            alt="Rancho Payol - Bar & Restaurante"
            referrerPolicy="no-referrer"
            className="w-48 sm:w-56 h-auto object-contain drop-shadow-[0_6px_20px_rgba(212,163,75,0.22)] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Restaurant Info */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#c5baa7]">
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#161210] border border-[#2b2019] flex flex-col text-left">
            {/* Header: Icon + Title */}
            <div className="flex items-center gap-2 pb-2.5 border-b border-[#2b2019]">
              <Clock className="w-4 h-4 text-[#d4a34b] shrink-0" />
              <span className="font-semibold text-[#f4ede4] text-xs sm:text-[13px]">
                Horário de Atendimento
              </span>
            </div>

            {/* Hours list: Day left, Time right, same row */}
            <div className="mt-2.5 space-y-2 text-[11px] sm:text-xs">
              <div className="flex items-center justify-between gap-2 flex-nowrap">
                <span className="text-[#c5baa7] text-left">Domingo</span>
                <span className="text-[#f4ede4] font-medium text-right whitespace-nowrap shrink-0">
                  11h30 às 01h
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-nowrap">
                <span className="text-[#c5baa7] text-left">Segunda a quinta</span>
                <span className="text-[#f4ede4] font-medium text-right whitespace-nowrap shrink-0">
                  17h30 às 01h
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-nowrap">
                <span className="text-[#c5baa7] text-left">Sexta-feira</span>
                <span className="text-[#f4ede4] font-medium text-right whitespace-nowrap shrink-0">
                  17h30 às 02h30
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-nowrap">
                <span className="text-[#c5baa7] text-left">Sábado</span>
                <span className="text-[#f4ede4] font-medium text-right whitespace-nowrap shrink-0">
                  11h30 às 02h30
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#161210] border border-[#2b2019] flex flex-col text-left">
            <div className="flex items-center gap-2 pb-2.5 border-b border-[#2b2019]">
              <MapPin className="w-4 h-4 text-[#d4a34b] shrink-0" />
              <span className="font-semibold text-[#f4ede4] text-xs sm:text-[13px]">
                Ambiente do Rancho
              </span>
            </div>
            <p className="mt-2.5 text-[11px] sm:text-xs text-[#c5baa7] leading-relaxed">
              Estrutura rústica, familiar e aconchegante para reunir amigos e família.
            </p>
          </div>
        </div>

        {/* Call to Garçom helper message */}
        <div className="text-xs text-[#8c7e6e] max-w-sm">
          💡 Para fazer seu pedido ou tirar dúvidas sobre pontos de carne e porções, basta acenar para a equipe do salão informando o número da sua mesa.
        </div>

        {/* Scroll To Top Button */}
        <button
          type="button"
          onClick={onScrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1e1713] hover:bg-[#2b201a] border border-[#3e2e23] text-xs font-semibold text-[#d4a34b] transition-all hover:scale-105 active:scale-95"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Voltar ao topo do cardápio</span>
        </button>

        {/* Copyright & Credit */}
        <div className="pt-4 border-t border-[#1e1713] w-full flex flex-col items-center gap-1 text-[11px] text-[#6d6255]">
          <p>© {new Date().getFullYear()} Rancho Payol. Todos os direitos reservados. Cardápio Digital.</p>
          <p className="text-[#8c7e6e]">
            Produzido por{' '}
            <a
              href="https://www.instagram.com/lpmktdigital_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4a34b] hover:text-[#e8be6d] font-medium transition-colors underline underline-offset-2"
            >
              LP Marketing Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
