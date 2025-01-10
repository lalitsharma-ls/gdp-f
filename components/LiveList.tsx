import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Model {
  id: number;
  avatarUrl: string;
  username: string;
  viewersCount: number;
  snapshotUrl: string;
}

interface ApiResponse {
  models: Model[];
}

const LiveList = async () => {
  try {
    const res = await fetch(
      "https://go.rmhfrtnd.com/api/models?gender=female&profileEthnicity=indian&status=public&modelsCountry=in&limit=200",
      { next: { revalidate: 30 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: ApiResponse = await res.json();

    return (
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 py-2">
          {data.models.map((model) => (
            <a href={`https://fuckonlive.com/${model.username}`} key={model.id}>
              <div className="flex-none flex flex-col items-center gap-1 group">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={model.avatarUrl || model.snapshotUrl}
                      alt={model.username}
                      className="w-full h-full object-cover shadow-lg group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {model.viewersCount}
                  </span>
                </div>
                <span className="text-xs truncate w-20 text-center">
                  {model.username}
                </span>
              </div>
            </a>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  } catch (error) {
    return <div>Failed to load live streams</div>;
  }
};

export default LiveList;
