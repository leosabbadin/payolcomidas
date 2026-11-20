import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CATEGORIES, MENU_ITEMS, getFeaturedItems } from './data/menuData';
import { MenuItem } from './types';
import { Header } from './components/Header';
import { MenuSwitcher } from './components/MenuSwitcher';
import { SearchBar } from './components/SearchBar';
import { CategoryTabs } from './components/CategoryTabs';
import { FeaturedSection } from './components/FeaturedSection';
import { ProductSection } from './components/ProductSection';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import { ChevronUp } from 'lucide-react';

// Helper to normalize strings: remove accents/diacritics, lowercase, collapse whitespace
const normalizeSearchText = (text: string): string => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState('mais-vendidos');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Search state & tokens
  const isSearching = searchQuery.trim().length > 0;

  const searchTokens = useMemo(() => {
    const normalized = normalizeSearchText(searchQuery);
    return normalized ? normalized.split(' ').filter(Boolean) : [];
  }, [searchQuery]);

  // Dish name matcher (case/accent insensitive, strictly on dish name)
  const matchesSearch = useCallback(
    (name: string) => {
      if (searchTokens.length === 0) return true;
      const normalized = normalizeSearchText(name);
      return searchTokens.every((token) => normalized.includes(token));
    },
    [searchTokens]
  );

  // Base featured items: automatically derived from MENU_ITEMS that have photos or videos
  // Same objects as MENU_ITEMS, maintaining single source of truth without duplicates
  const allFeaturedItems = useMemo(() => {
    return getFeaturedItems(MENU_ITEMS);
  }, []);

  // Filtered featured items: if searching, only show highlighted dishes matching the query
  const visibleFeaturedItems = useMemo(() => {
    if (!isSearching) return allFeaturedItems;
    return allFeaturedItems.filter((item) => matchesSearch(item.name));
  }, [allFeaturedItems, isSearching, matchesSearch]);

  // Group items by category (each category keeps its original items, filtered by search if active)
  const itemsByCategory = useMemo(() => {
    const map = new Map<string, MenuItem[]>();
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'mais-vendidos') {
        const categoryItems = MENU_ITEMS.filter((item) => item.categoryId === cat.id);
        const filtered = isSearching
          ? categoryItems.filter((item) => matchesSearch(item.name))
          : categoryItems;
        map.set(cat.id, filtered);
      }
    });
    return map;
  }, [isSearching, matchesSearch]);

  // Total unique matching products count across the whole menu
  const totalMatchingCount = useMemo(() => {
    if (!isSearching) return MENU_ITEMS.length;
    return MENU_ITEMS.filter((item) => matchesSearch(item.name)).length;
  }, [isSearching, matchesSearch]);

  // List of categories currently visible (hides empty categories and highlights if empty)
  const visibleCategories = useMemo(() => {
    const list: typeof CATEGORIES = [];

    // Show highlights tab only if there are featured items with photos to display
    if (visibleFeaturedItems.length > 0) {
      const featuredCat = CATEGORIES.find((c) => c.id === 'mais-vendidos');
      if (featuredCat) list.push(featuredCat);
    }

    // Show category tabs only if they have matching items
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'mais-vendidos') {
        const count = itemsByCategory.get(cat.id)?.length || 0;
        if (count > 0) {
          list.push(cat);
        }
      }
    });

    return list;
  }, [visibleFeaturedItems.length, itemsByCategory]);

  // Keep active category tab synchronized with available visible categories
  useEffect(() => {
    if (visibleCategories.length > 0) {
      const isCurrentValid = visibleCategories.some((c) => c.id === activeCategoryId);
      if (!isCurrentValid) {
        setActiveCategoryId(visibleCategories[0].id);
      }
    }
  }, [visibleCategories, activeCategoryId]);

  // Smooth scroll to category section
  const handleSelectCategory = useCallback((categoryId: string) => {
    setActiveCategoryId(categoryId);

    setTimeout(() => {
      const targetElement = document.getElementById(`section-${categoryId}`);
      if (targetElement) {
        // Adjust for sticky headers
        const navOffset = 65;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 50);
  }, []);

  // Scroll spy to update active category tab and toggle discreet floating scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);

      const scrollPosition = window.scrollY + 120;
      const allCategoryIds = visibleCategories.map((c) => c.id);
      
      for (const id of allCategoryIds) {
        const element = document.getElementById(`section-${id}`);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategoryId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCategories]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#f4ede4] flex flex-col selection:bg-[#d4a34b] selection:text-black">
      {/* 1. Top Header / Hero */}
      <Header />

      {/* Secondary Menu Switcher */}
      <MenuSwitcher currentMenu="comidas" />

      {/* 2. Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isSearching={isSearching}
        resultCount={totalMatchingCount}
      />

      {/* 3. Sticky Horizontal Category Navigation Bar */}
      {visibleCategories.length > 0 && (
        <CategoryTabs
          categories={visibleCategories}
          activeCategoryId={activeCategoryId}
          onSelectCategory={handleSelectCategory}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-10">
        {/* If Searching and zero dishes match across the entire menu */}
        {isSearching && totalMatchingCount === 0 ? (
          <section className="w-full py-12 px-4">
            <div className="max-w-xl sm:max-w-2xl mx-auto">
              <div className="py-12 text-center bg-[#181310] rounded-2xl border border-[#382a20] p-6 shadow-xl">
                <p className="font-rustic text-xl text-[#d4a34b] font-bold">
                  Nenhum prato encontrado
                </p>
                <p className="text-sm text-[#a89c8a] mt-2 max-w-sm mx-auto">
                  Tente buscar pelo nome do prato, por exemplo: "chapa", "panelinha", "picanha" ou "parmegiana".
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-[#2a1e17] text-[#d4a34b] border border-[#d4a34b]/40 text-xs font-semibold hover:bg-[#d4a34b] hover:text-[#121110] transition-colors shadow-md"
                >
                  Ver cardápio completo
                </button>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* 4. Featured Section ("Mais Vendidos & Destaques") - Auto-hidden if 0 items */}
            <FeaturedSection
              items={visibleFeaturedItems}
              onSelectItem={setSelectedItem}
            />

            {/* 5. Category Sections in Exact Order - Auto-hidden if 0 items */}
            {CATEGORIES.filter((cat) => cat.id !== 'mais-vendidos').map((category) => {
              const items = itemsByCategory.get(category.id) || [];
              return (
                <ProductSection
                  key={category.id}
                  category={category}
                  items={items}
                  onSelectItem={setSelectedItem}
                />
              );
            })}
          </>
        )}
      </main>

      {/* 6. Footer */}
      <Footer onScrollToTop={handleScrollToTop} />

      {/* 7. Product Modal */}
      <ProductModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* 8. Floating Discreet Scroll to Top Button */}
      <button
        type="button"
        id="btn-floating-scroll-top"
        onClick={handleScrollToTop}
        aria-label="Voltar ao topo do cardápio"
        className={`fixed bottom-5 right-5 z-40 p-2.5 rounded-full bg-[#1e1713]/85 hover:bg-[#2c201a] text-[#d4a34b] border border-[#d4a34b]/40 backdrop-blur-md shadow-lg shadow-black/50 transition-all duration-300 ease-out hover:scale-105 active:scale-95 group flex items-center justify-center ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
