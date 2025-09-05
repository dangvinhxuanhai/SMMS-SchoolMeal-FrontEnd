export interface FoodItem {
  image: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  avatar: string;
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
  features: Feature[];
  teamMembers: TeamMember[];
}

export interface FoodCarouselProps {
  foodItems: FoodItem[];
}

export interface FeatureSectionProps {
  features: Feature[];
}

export interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}