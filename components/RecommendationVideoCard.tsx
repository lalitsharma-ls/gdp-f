import React from "react";
import Link from "next/link";
import Img from "react-cool-img";
import { toSnakeCase } from "@/lib/utils";

interface VideoCardProps {
  thumbnail: string;
  thumbnail_placeholder: string;
  title: string;
  category: string;
  views: string;
  uid: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  category,
  views,
  thumbnail_placeholder,
  uid,
}) => {
  return (
    <Link
      href={`/video/${uid}/${toSnakeCase(title)}`}
      scroll={true}
      aria-label={`Watch video: ${title}`}
    >
      <div className="grid grid-cols-12 gap-2 cursor-pointer group hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors p-2 rounded-lg">
        {/* Thumbnail */}
        <div className="aspect-video relative rounded-lg overflow-hidden col-span-5 md:col-span-4">
          <Img
            src={thumbnail}
            alt={title}
            placeholder={thumbnail_placeholder}
            error="https://via.placeholder.com/640x360?text=Error+Loading+Image"
            lazy
            cache
            debounce={500}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 shadow-lg blur-lg"
            onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
              (e.target as HTMLImageElement).classList.remove("blur-lg");
            }}
          />
        </div>

        {/* Video Info */}
        <div className="flex flex-col justify-between gap-1 col-span-7 md:col-span-8">
          {/* Category */}
          <h3 className="font-normal text-xs text-neutral-500 dark:text-neutral-400">
            {category}
          </h3>

          {/* Title */}
          <h3 className="font-medium text-sm line-clamp-2">{title}</h3>

          {/* Views */}
          <div className="text-xs text-neutral-600 dark:text-neutral-400">
            {views} views
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
