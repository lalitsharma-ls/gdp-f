import { getNewlyAddedVideos } from "@/lib/fetch/api";
import { SearchResult } from "@/lib/types/types";
import React from "react";
import HorizontalVideoCard from "./HorizontalVideoCard";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { toTitleCase } from "@/lib/utils";

const NewlyAddedVideos = async () => {
  const data: SearchResult[] = await getNewlyAddedVideos();

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex space-x-2 justify-center items-center ">
        {data.map((result) => (
          <HorizontalVideoCard
            key={result.document.id}
            thumbnail={`https://cdn1.gotdesiporn.com/images/${result.document.uid}.jpg`}
            title={result.document.title}
            category={toTitleCase(result.document.tags[0])}
            views={result.document.views.toString()}
            thumbnail_placeholder={`https://cdn1.gotdesiporn.com/images/placeholders/${result.document.uid}-placeholder.jpg`}
            uid={result.document.uid}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default NewlyAddedVideos;
