import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const TagsSkeleton = () => {
  return (
    <ScrollArea>
      <div className="flex gap-1  pb-2">
        {Array.from({ length: 28 }).map((_, index) => (
          <Skeleton key={index} className="w-[100px] h-[26px] rounded-full" />
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default TagsSkeleton;
