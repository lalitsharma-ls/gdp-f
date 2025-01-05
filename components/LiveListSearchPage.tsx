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

const LiveListSearchPage = (data: ApiResponse) => {
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
      <ScrollArea className="lg:block w-full whitespace-nowrap">
        <div className="hidden lg:flex space-x-2 ">
          {data.models.map((model) => (
            <LiveStreamPreview key={model.id} model={model} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default LiveListSearchPage;
