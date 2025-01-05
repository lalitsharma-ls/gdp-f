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
      <div className="mt-2 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 p-0 overflow-x-hidden">
        {data.models.map((model) => (
          <LiveStreamPreview key={model.id} model={model} />
        ))}
      </div>
    </>
  );
};

export default LiveListVideoPage;
