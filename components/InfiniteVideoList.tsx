"use client";
import { useEffect, useRef, useState } from "react";
import { Video } from "@/lib/types/types";
import VideoCard from "./VideoCard";
import { Loader } from "lucide-react";
import { useCallback } from "react";
import debounce from "lodash/debounce";
import { toTitleCase } from "@/lib/utils";
interface Props {
  initialVideos: Video[];
}

export default function InfiniteVideoList({ initialVideos }: Props) {
  const [videos, setVideos] = useState<Video[]>(initialVideos);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);

  const debouncedFetch = useCallback(
    debounce(async () => {
      if (loading || !hasMore) return;

      setLoading(true);
      try {
        const res = await fetch(`/api/videos/${page}`);
        if (!res.ok) throw new Error("Failed to fetch");

        const newVideos = await res.json();
        if (Array.isArray(newVideos) && newVideos.length > 0) {
          setVideos((prev) => [...prev, ...newVideos]);
          setPage((prev) => prev + 1);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    }, 4000),
    [page, loading, hasMore]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          debouncedFetch();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      observer.disconnect();
      debouncedFetch.cancel();
    };
  }, [debouncedFetch]);

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
      {loading && (
        <div className="col-span-full w-full h-10 flex justify-center items-center  ">
          <Loader className="animate-spin mr-1" /> Loading More Videos
        </div>
      )}
      {hasMore && <div ref={observerTarget} className="h-4" />}
    </div>
  );
}
