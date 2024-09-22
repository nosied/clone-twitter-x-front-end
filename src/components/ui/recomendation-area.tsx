import { user } from "@/data/user";
import {
  RecomendationItemSkeleton,
  RecomentationItem,
} from "./recomendation-item";
import { TrendingItem, TrendingItemSkeleton } from "./trending-item";

export const RecomendationArea = () => {
  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">Quem Seguir</h2>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <RecomentationItem user={user} />
        <RecomendationItemSkeleton />
      </div>
    </div>
  );
};
