export interface PriceOption {
  label: string;
  price?: number;
  value?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category?: string;
  categoryId: string;
  categoryName: string;
  description: string;
  price: number;
  prices?: PriceOption[];
  badge?: string;
  imageUrl?: string;
  videoUrl?: string;
  featured?: boolean;
  notes?: string;
  servings?: string;
}

export interface Category {
  id: string;
  name: string;
  shortName?: string;
  icon?: string;
  description?: string;
  sectionNotes?: string;
}

export type MenuType = 'comidas' | 'bebidas' | 'drinks';
