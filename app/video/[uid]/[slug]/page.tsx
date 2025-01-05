import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import RecommendationVideoCard from "@/components/RecommendationVideoCard";
import TagsList from "@/components/TagsList";
import { getVideoByUID } from "@/lib/fetch/api";
import { Video } from "@/lib/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import LiveListVideo from "@/components/LiveListVideo";
import { TrendingUp, Clock, Heart, Flag } from "lucide-react";
import ScrollHelper from "@/components/ScrollHelper";
import VideoRecommendation from "@/components/VideoRecommendation";
import { Suspense } from "react";
import RecommendationVideoCardSkeleton from "@/components/loading/RecommendationVideoCardSkeleton";
import VideoPageLiveCardSkeleton from "@/components/loading/VideoPageLiveCardSkeleton";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ uid: string; slug: string }>;
}): Promise<Metadata> {
  const { uid } = await params;
  const video = await getVideoByUID(uid);

  return {
    title: `${video.title}`,
    keywords: `${video.title},${video.tags.join(", ")}`,
    description: `${
      video.metaDetails?.description ?? video.title
    }. Watch more desi videos on GotDesiPorn.`,
    openGraph: {
      title: video.title,
      description: `${video.title}. Watch more desi videos on GotDesiPorn.`,
      type: "video.other",
      videos: [
        {
          url: video.videoUrl,
          width: 1280,
          height: 720,
          type: "video/mp4",
        },
      ],
      images: [
        {
          url: `https://cdn1.gotdesiporn.com/images/${video.uid}.jpg`,
          width: 1200,
          height: 630,
          alt: video.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: video.title,
      description: `${video.title}`,
      images: [`https://cdn1.gotdesiporn.com/images/${video.uid}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  };
}

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
            <div className="space-y-1">
              <h1 className="text-sm lg:text-lg font-medium text-neutral-800 dark:text-neutral-200 line-clamp-1">
                {video.title}
              </h1>
              <div className="flex justify-between lg:justify-between items-center text-xs lg:text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex gap-1 bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 px-2 py-1 rounded-full">
                  <span>{video.views} views</span>
                </div>
                <div className="hidden  gap-1 ">
                  <span className="flex gap-1 justify-center items-center bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 px-2 py-1 rounded-full">
                    <Heart className="w-4 h-4" /> Like
                  </span>
                  <span className="flex gap-1 justify-center items-center bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 px-2 py-1 rounded-full">
                    <Clock className="w-4 h-4" /> Watch Later
                  </span>
                  <span className="flex gap-1 justify-center items-center bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 px-2 py-1 rounded-full">
                    <Flag className="w-4 h-4" /> Report Video
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-1  pt-2">
            <span className="font-semibold text-md lg:text-lg flex gap-1">
              Trending Girls <TrendingUp />
            </span>
            <Suspense fallback={<VideoPageLiveCardSkeleton />}>
              <LiveListVideo pageType="video" />
            </Suspense>
          </div>
        </div>

        {/* Right Column - Tags and Recommendations */}
        <div className=" lg:col-span-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Similar Videos</h2>
            <div className="flex flex-col gap-4">
              <Suspense fallback={<RecommendationVideoCardSkeleton />}>
                <VideoRecommendation
                  videoId={video.uid}
                  tags={video.tags.join(",")}
                  limit={200}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
