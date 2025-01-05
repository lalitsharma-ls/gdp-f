import { Video } from "@/lib/types/types";
import { getVideo } from "@/lib/fetch/api";
import SwrInfiniteVideoList from "./SwrInfiniteVideoList";

const VideoList = async () => {
  const initialVideos: Video[] = await getVideo(1);

  return (
    <SwrInfiniteVideoList
      initialVideos={initialVideos}
      allowedToLoadMore={true}
    />
  );
};

export default VideoList;
