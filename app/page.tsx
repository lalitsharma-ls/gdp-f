import LiveList from "@/components/LiveList";
import LiveSkeleton from "@/components/loading/LiveSkeleton";
import TagsSkeleton from "@/components/loading/TagsSkeleton";
import VideoCardSkeleton from "@/components/loading/VideoCardSkeleton";
import TagsList from "@/components/TagsList";
import VideoCard from "@/components/VideoCard";
import VideoList from "@/components/VideoList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="grid gap-1">
      <Suspense fallback={<LiveSkeleton />}>
        <LiveList />
      </Suspense>
      <Suspense fallback={<TagsSkeleton />}>
        <TagsList />
      </Suspense>
      <Suspense fallback={<VideoCardSkeleton />}>
        <VideoList />
      </Suspense>
    </div>
  );
}
