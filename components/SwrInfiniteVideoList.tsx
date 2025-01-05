"use client";
import { useInfiniteScroll } from "@/components/useInfiniteScroll";
import { useCallback, useEffect, useRef } from "react";
import VideoCard from "./VideoCard";
import { toTitleCase } from "@/lib/utils";
import { Video } from "@/lib/types/types";
import { debounce } from "lodash";
import { Loader } from "lucide-react";

interface Props {
  initialVideos: Video[];
  allowedToLoadMore: boolean;
}

export default function InfiniteVideoList({
  initialVideos,
  allowedToLoadMore,
}: Props) {
  const { videos, isLoadingMore, hasMore, setSize } =
    useInfiniteScroll(initialVideos);
  const observerTarget = useRef<HTMLDivElement>(null);

  const debouncedLoadMore = useCallback(
    debounce(() => {
      if (allowedToLoadMore && hasMore && !isLoadingMore) {
        setSize((size) => size + 1);
      }
    }, 1000),
    [hasMore, isLoadingMore, setSize]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          debouncedLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      observer.disconnect();
      debouncedLoadMore.cancel();
    };
  }, [debouncedLoadMore]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-2">
      {videos.map((video, index) => (
        <VideoCard
          key={`${video.id}-${index}`}
          thumbnail={`https://cdn1.gotdesiporn.com/images/${video.uid}.jpg`}
          title={video.title}
          category={toTitleCase(video.tags[0])}
          views={video.views.toString()}
          thumbnail_placeholder={`https://cdn1.gotdesiporn.com/images/placeholders/${video.uid}-placeholder.jpg`}
          uid={video.uid}
        />
      ))}
      {isLoadingMore && (
        <div className="col-span-full w-full h-10 flex justify-center items-center">
          <Loader className="animate-spin mr-1" /> Loading More Videos
        </div>
      )}
      {hasMore && (
        <div
          ref={observerTarget}
          className="col-span-full w-full h-10 flex justify-center items-center animate-pulse "
        >
          <Loader className="animate-spin mr-1" /> Loading More Videos
        </div>
      )}
    </div>
  );
}
