import { SearchResult } from "@/lib/types/types";
import { getSuggestedVideos } from "@/lib/fetch/api";
import { toTitleCase } from "@/lib/utils";
import VideoCard from "./VideoCard";

interface Props {
  tagName: string;
}
const TagsVideoList = async ({ tagName }: Props) => {
  const videos: SearchResult[] = await getSuggestedVideos(tagName, 200);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-2">
      {videos.map((video, index) => (
        <VideoCard
          key={`${video.document.id}-${index}`}
          thumbnail={`https://cdn1.gotdesiporn.com/images/${video.document.uid}.jpg`}
          title={video.document.title}
          category={toTitleCase(video.document.tags[0])}
          views={video.document.views.toString()}
          thumbnail_placeholder={`https://cdn1.gotdesiporn.com/images/placeholders/${video.document.uid}-placeholder.jpg`}
          uid={video.document.uid}
        />
      ))}
    </div>
  );
};

export default TagsVideoList;
