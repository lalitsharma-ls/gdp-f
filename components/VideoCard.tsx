import React from "react";
import Image from "next/image";
import Link from "next/link";
interface VideoCardProps {
  thumbnail: string;
  thumbnail_placeholder: string;
  title: string;
  category: string;
  views: string;
  uid: string;
}

const VideoCard = ({
  thumbnail,
  title,
  category,
  views,
  thumbnail_placeholder,
  uid,
}: VideoCardProps) => {
  return (
    <Link href={`/video/${uid}/title/`} scroll={false}>
      <div className="flex flex-col gap-2 cursor-pointer group">
        <div className="aspect-video relative rounded-lg overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105 shadow-2xl"
            placeholder="blur"
            blurDataURL={thumbnail_placeholder}
            priority={false}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9s=";
            }}
          />
        </div>

        {/* Video Info */}
        <div className="flex flex-col gap-1">
          <h3 className="font-medium line-clamp-2 text-sm">{title}</h3>
          <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
            <span>{category}</span>
            <span>{views} views</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
