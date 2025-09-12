import MainContent from "@/components/layouts/MainContent";
import { FOOD_ITEMS } from "@/data/constants";

export default function HomePage() {
  return (
    <MainContent
      foodItems={FOOD_ITEMS}
    />
  );
}