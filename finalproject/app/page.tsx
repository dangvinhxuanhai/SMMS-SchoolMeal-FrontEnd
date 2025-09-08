import MainContent from "@/components/layouts/MainContent";
import { FOOD_ITEMS, FEATURES, TEAM_MEMBERS } from "@/data/constants";

export default function HomePage() {
  return (
    <MainContent
      foodItems={FOOD_ITEMS}
      features={FEATURES}
      teamMembers={TEAM_MEMBERS}
    />
  );
}