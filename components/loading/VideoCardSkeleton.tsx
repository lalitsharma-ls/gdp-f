import { Skeleton } from "@/components/ui/skeleton";

const VideoCardSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-2">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-2 w-full">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Skeleton className="absolute inset-0" />
          </div>

          <div className="flex flex-col gap-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-2 w-32" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCardSkeleton;
