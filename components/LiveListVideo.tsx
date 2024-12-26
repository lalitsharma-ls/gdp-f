import { LiveStreamPreview } from "./LiveStreamPreview";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

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

async function getLiveStreams() {
  const res = await fetch(
    "https://go.rmhfrtnd.com/api/models?gender=female&profileEthnicity=indian&status=public&modelsCountry=in&limit=60",
    {
      next: { revalidate: 2 },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch streams");

  return res.json();
}

export default async function LiveListVideo() {
  const data: ApiResponse = await getLiveStreams();

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
}
