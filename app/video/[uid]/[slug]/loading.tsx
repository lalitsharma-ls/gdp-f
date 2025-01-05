import LiveSkeleton from "@/components/loading/LiveSkeleton";
import TagsSkeleton from "@/components/loading/TagsSkeleton";
import RecommendationVideoCardSkeleton from "@/components/loading/RecommendationVideoCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import LiveListVideo from "@/components/LiveListVideo";
import VideoCardSkeleton from "@/components/loading/VideoCardSkeleton";
import { TrendingUp } from "lucide-react";
import { Suspense } from "react";
import VideoPageLiveCardSkeleton from "@/components/loading/VideoPageLiveCardSkeleton";
const loading = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Left Column - Video and Info */}
      <div className="space-y-4 lg:col-span-8">
        <div className="w-full space-y-2 ">
          <div className="aspect-video w-full lg:h-[60vh] rounded-xl overflow-hidden bg-neutral-950">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="space-y-2 h-8 lg:h-12">
            <Skeleton className="w-3/4 h-8" />
            <div className="flex h-full justify-between  text-sm text-neutral-600 dark:text-neutral-400">
              <Skeleton className="w-1/4 h-2 lg:h-4" />
            </div>
          </div>
        </div>
        <div className="space-y-1  pt-2">
          <span className="font-semibold text-md lg:text-lg flex gap-1">
            Trending Girls <TrendingUp />
          </span>
          <VideoPageLiveCardSkeleton />
        </div>
      </div>

      {/* Right Column - Tags and Recommendations */}
      <div className="lg:col-span-4">
        {/* <TagsSkeleton /> */}

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
