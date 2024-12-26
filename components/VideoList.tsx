import React from "react";
import VideoCard from "./VideoCard";
import { Video } from "@/lib/types/types";
import { getVideo } from "@/lib/fetch/api";
import { toTitleCase } from "@/lib/utils";
import InfiniteVideoList from "./InfiniteVideoList";
import SwrInfiniteVideoList from "./SwrInfiniteVideoList";

const VideoList = async () => {
  const initialVideos: Video[] = await getVideo(1);

  return <SwrInfiniteVideoList initialVideos={initialVideos} />;
};

export default VideoList;
