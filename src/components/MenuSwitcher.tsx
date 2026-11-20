import React from 'react';
import { MenuType } from '../types';
import { Utensils, Beer, Martini } from 'lucide-react';

// ============================================================================
// CONFIGURAÇÃO CENTRAL DOS LINKS DOS CARDÁPIOS
// Substitua as URLs abaixo pelos links definitivos de cada cardápio:
// ============================================================================
export const menuLinks: Record<MenuType, string> = {
  comidas: "URL_CARDAPIO_COMIDAS",
  bebidas: "https://www.ranchopayolbar.com.br/bebidas",
  drinks: "https://www.ranchopayolbar.com.br/drinks"
};

interface MenuSwitcherProps {
  currentMenu: MenuType;
}

interface MenuOption {
  id: MenuType;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MENU_OPTIONS: MenuOption[] = [
  { id: 'comidas', name: 'Comidas', icon: Utensils },
  { id: 'bebidas', name: 'Bebidas', icon: Beer },
  { id: 'drinks', name: 'Drinks', icon: Martini },
];

export const MenuSwitcher: React.FC<MenuSwitcherProps> = ({ currentMenu }) => {
  // Exibir apenas os outros 2 cardápios
  const otherMenus = MENU_OPTIONS.filter((menu) => menu.id !== currentMenu);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    // Se ainda for a URL de placeholder, evita redirecionamento inválido no preview
    if (url.startsWith('URL_CARDAPIO_')) {
      e.preventDefault();
      console.info(`[Rancho Payol] Navegação para o cardápio configurado com URL: ${url}`);
      return;
    }
    // Redirecionamento na mesma aba (sem target="_blank")
    window.location.href = url;
  };

  return (
    <nav
      aria-label="Navegação entre outros cardápios"
      className="w-full px-4 pt-4 sm:pt-5 pb-4 sm:pb-5 bg-transparent"
    >
      <div className="max-w-xl mx-auto">
        {/* Texto auxiliar discreto puxado para a paleta quente/areia #D8CDBF */}
        <p className="text-[11px] sm:text-xs text-[#c4b39e] text-center font-medium tracking-wide mb-2 select-none">
          Ver outros cardápios
        </p>

        {/* Botões lado a lado (sempre 2 colunas, sem empilhar no mobile) */}
        <div className="grid grid-cols-2 gap-2">
          {otherMenus.map((menu) => {
            const Icon = menu.icon;
            const targetUrl = menuLinks[menu.id];

            return (
              <a
                key={menu.id}
                id={`menu-switcher-btn-${menu.id}`}
                href={targetUrl}
                onClick={(e) => handleNavigation(e, targetUrl)}
                className="group h-[40px] flex items-center justify-center gap-2 px-3 rounded-xl bg-[#181412] hover:bg-[#231b16] active:bg-[#2a201a] border border-[#382a20] hover:border-[#d4a34b]/50 transition-all duration-200 active:scale-[0.99] select-none cursor-pointer"
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4a34b] group-hover:text-[#e8be6d] transition-colors duration-200 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  {menu.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
