import { Skeleton } from "@/components/ui/skeleton";

const RecommendationVideoCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="grid grid-cols-12 gap-2">
          {/* Thumbnail */}
          <div className="col-span-5">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Skeleton className="absolute inset-0" />
            </div>
          </div>

          {/* Content */}
          <div className="col-span-7 flex flex-col gap-2">
            <Skeleton className="h-2 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-28" />
          </div>
        </div>
      ))}
    </>
  );
};

export default RecommendationVideoCardSkeleton;
