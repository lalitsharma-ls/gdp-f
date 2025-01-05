import LiveListPage from "./LiveListPage";
import LiveListSearchPage from "./LiveListSearchPage";
import LiveListVideoPage from "./LiveListVideoPage";
import { LiveStreamPreview } from "./LiveStreamPreview";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface LiveListPageProps {
  pageType: "video" | "search" | "page";
}

async function getLiveStreams() {
  const res = await fetch(
    "https://go.rmhfrtnd.com/api/models?gender=female&profileEthnicity=indian&status=public&modelsCountry=in&limit=1000",
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

export default async function LiveListVideo({ pageType }: LiveListPageProps) {
  const data = await getLiveStreams();

  return (
    <>
      {pageType === "video" && <LiveListVideoPage {...data} />}
      {pageType === "search" && <LiveListSearchPage {...data} />}
      {pageType === "page" && <LiveListPage {...data} />}
    </>
  );
}
