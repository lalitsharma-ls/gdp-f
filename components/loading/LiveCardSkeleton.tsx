import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const LiveCardSkeleton = () => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-2">
        {Array.from({ length: 40 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="relative w-28 h-56 lg:w-52 xl:w-52 2xl:w-56 lg:h-28 xl:h-28 2xl:h-32 rounded-lg overflow-hidden">
              <Skeleton className="absolute w-full h-full rounded-lg" />
            </div>
            <div className="hidden lg:flex gap-2">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="w-10 h-2" />
                <Skeleton className="w-20 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default LiveCardSkeleton;
