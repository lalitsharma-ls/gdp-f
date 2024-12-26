import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import RecommendationVideoCard from "@/components/RecommendationVideoCard";
import TagsList from "@/components/TagsList";
import { getVideoByUID } from "@/lib/fetch/api";
import { Video } from "@/lib/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import LiveListVideo from "@/components/LiveListVideo";
import { TrendingUp, Clock, Heart, Flag } from "lucide-react";
import ScrollHelper from "@/components/ScrollHelper";
interface VideoPageProps {
  params: Promise<{
    uid: string;
    slug: string;
  }>;
}
export default async function VideoPage(params: VideoPageProps) {
  const { uid } = await params.params;
  const video: Video = await getVideoByUID(uid);

  return (
    <>
      <ScrollHelper />
      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column - Video and Info */}
        <div className="space-y-1  lg:col-span-8">
          <div className="w-full z-10 space-y-1 ">
            <div className="aspect-video w-full lg:h-[60vh] rounded-xl overflow-hidden bg-neutral-950">
              {video.isEmbed && (
                <iframe
                  src={video.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              <Skeleton className="w-full h-full" />
            </div>
            <div className=" space-y-1  ">
              <h1 className="text-sm lg:text-lg font-medium text-neutral-200 line-clamp-1">
                {video.title}
              </h1>
              <div className="flex justify-between items-center text-xs lg:text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex gap-2 bg-neutral-800 text-neutral-100 px-2 py-[2px] rounded-full">
                  <span>{video.views} views</span>
                </div>
                <div className="flex gap-2">
                  <span className="flex gap-1 justify-center items-center bg-neutral-800 text-neutral-100 px-2 py-[2px] rounded-full">
                    <Heart className="w-4 h-4" /> Like Video
                  </span>
                  <span className="flex gap-1 justify-center items-center bg-neutral-800 text-neutral-100 px-2 py-[2px] rounded-full">
                    <Clock className="w-4 h-4" /> Watch Later
                  </span>
                  <span className="flex gap-1 justify-center items-center bg-neutral-800 text-neutral-100 px-2 py-[2px] rounded-full">
                    <Flag className="w-4 h-4" /> Report Video
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-1  ">
            <span className="font-semibold text-md lg:text-lg flex gap-1">
              Trending Girls <TrendingUp />
            </span>
            <ScrollArea className="w-full whitespace-nowrap">
              <LiveListVideo />
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>

        {/* Right Column - Tags and Recommendations */}
        <div className=" lg:col-span-4">
          <ScrollArea className="w-full whitespace-nowrap">
            <TagsList />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Similar Videos</h2>
            <div className="flex flex-col gap-4">
              {Array.from({ length: 40 }).map((_, i) => (
                <RecommendationVideoCard
                  key={i}
                  thumbnail="/t/YkVLdq20845.jpg"
                  title={video.title}
                  category="Category"
                  views="1.2K"
                  uid="123"
                  thumbnail_placeholder="/t/plimg/YkVLdq20845-placeholder.jpg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
