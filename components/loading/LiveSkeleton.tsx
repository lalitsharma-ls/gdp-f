import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const TagsSkeleton = () => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-1">
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1"
          >
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="w-10 h-4 rounded-full" />
          </div>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default TagsSkeleton;
