import LiveSkeleton from "@/components/loading/LiveSkeleton";
import TagsSkeleton from "@/components/loading/TagsSkeleton";
import RecommendationVideoCardSkeleton from "@/components/loading/RecommendationVideoCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Left Column - Video and Info */}
      <div className="space-y-4 lg:col-span-8">
        <div className="w-full sticky top-4 z-10 space-y-2 ">
          <div className="aspect-video w-full h-[60vh] rounded-xl overflow-hidden bg-neutral-950">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="space-y-2 h-20">
            <Skeleton className="w-3/4 h-6" />
            <div className="flex h-full justify-between  text-sm text-neutral-600 dark:text-neutral-400">
              <Skeleton className="w-1/4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Tags and Recommendations */}
      <div className="lg:col-span-4">
        <TagsSkeleton />

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Similar Videos</h2>
          <div className="flex flex-col gap-4">
            <RecommendationVideoCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
