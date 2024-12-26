import LiveSkeleton from "@/components/loading/LiveSkeleton";
import TagsSkeleton from "@/components/loading/TagsSkeleton";
import VideoCardSkeleton from "@/components/loading/VideoCardSkeleton";
const loading = () => {
  return (
    <div className="grid gap-1">
      <LiveSkeleton />
      <TagsSkeleton />
      <VideoCardSkeleton />
    </div>
  );
};

export default loading;
