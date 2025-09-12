export interface FoodItem {
  image: string;
  title: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

export interface MainContentProps {
  foodItems: FoodItem[];
}

export interface FoodCarouselProps {
  foodItems: FoodItem[];
}

export interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

