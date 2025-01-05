import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { LiveStreamPreview } from "./LiveStreamPreview";
interface Model {
  id: number;
  avatarUrl: string;
  username: string;
  viewersCount: number;
  snapshotUrl: string;
  stream: {
    url: string;
  };
}

interface ApiResponse {
  models: Model[];
}

const LiveListVideoPage = (data: ApiResponse) => {
  return (
    <>
      <ScrollArea className="lg:hidden w-full whitespace-nowrap">
        <div className="flex space-x-2 mb-2">
          {data.models.map((model) => (
            <LiveStreamPreview key={model.id} model={model} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-1">
        {data.models.map((model) => (
          <LiveStreamPreview key={model.id} model={model} />
        ))}
      </div>
    </>
  );
};

export default LiveListVideoPage;
