import { getRandomVideos } from "@/lib/fetch/api";
import { SearchResult } from "@/lib/types/types";
import React from "react";
import RecommendationVideoCard from "./RecommendationVideoCard";
import { toTitleCase } from "@/lib/utils";

interface VideoRecommendationProps {
  tags: string;
  limit: number;
  videoId: string;
}
const VideoRecommendation = async ({
  tags,
  limit,
  videoId,
}: VideoRecommendationProps) => {
  const data: SearchResult[] = await getRandomVideos(limit);

  function shuffleArray(array: SearchResult[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  return (
    <>
      {shuffleArray(data)
        .filter((result) => result.document.uid !== videoId)
        .map((result) => (
          <RecommendationVideoCard
            key={result.document.id}
            thumbnail={`https://cdn1.gotdesiporn.com/images/${result.document.uid}.jpg`}
            title={result.document.title}
            category={toTitleCase(result.document.tags[0])}
            views={result.document.views.toString()}
            uid={result.document.uid}
            thumbnail_placeholder={`https://cdn1.gotdesiporn.com/images/placeholder/${result.document.uid}.jpg`}
          />
        ))}
    </>
  );
};

export default VideoRecommendation;
