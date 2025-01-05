import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toSnakeCase } from "@/lib/utils";
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
    <Link href={`/video/${uid}/${toSnakeCase(title)}`} scroll={true}>
      <div className="grid grid-cols-12 gap-2 cursor-pointer group">
        <div className="aspect-video relative rounded-lg overflow-hidden col-span-5 md:col-span-4">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105 shadow-lg"
            placeholder="blur"
            blurDataURL={thumbnail_placeholder}
            priority={false}
            loading="lazy"
          />
        </div>

        {/* Video Info */}
        <div className="flex flex-col gap-1 col-span-7 md:col-span-8 h-full justify-stretch ">
          <h3 className="font-normal  text-xs">{category}</h3>
          <h3 className="font-medium line-clamp-2 text-sm">{title}</h3>
          <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
            <span>{views} views</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
