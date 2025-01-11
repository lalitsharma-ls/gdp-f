"use client";
import React from "react";
import { Image } from "@unpic/react";
import Link from "next/link";
interface VideoCardProps {
  thumbnail: string;
  thumbnail_placeholder: string;
  title: string;
  category: string;
  views: string;
  uid: string;
}

const HorizontalVideoCard = ({
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
        <div className="relative w-44 h-28 lg:w-52 xl:w-52 2xl:w-56 lg:h-28 xl:h-28 2xl:h-32 rounded-lg overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            layout="constrained"
            width={1280}
            height={720}
            breakpoints={[640, 960, 1280]}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 shadow-2xl"
            background={thumbnail_placeholder}
            priority={false}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9s=";
            }}
          />
        </div>

        <div className="flex flex-col gap-1 w-44 lg:w-52 xl:w-52 2xl:w-56">
          <h3 className="font-medium line-clamp-2 text-sm break-words">
            {title}
          </h3>
          <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
            <span className="truncate">{category}</span>
            <span className="whitespace-nowrap">{views} views</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalVideoCard;
