import { use } from "react";
import LiveListPage from "./LiveListPage";
import LiveListSearchPage from "./LiveListSearchPage";
import LiveListVideoPage from "./LiveListVideoPage";
interface LiveListPageProps {
  pageType: "video" | "search" | "page";
}

async function getLiveStreams() {
  const res = await fetch(
    "https://go.rmhfrtnd.com/api/models?gender=female&profileEthnicity=indian&status=public&modelsCountry=in&limit=1000",
    {
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch streams");

  return res.json();
}

export default function LiveListVideo({ pageType }: LiveListPageProps) {
  const data = use(getLiveStreams());

  return (
    <>
      {pageType === "video" && <LiveListVideoPage {...data} />}
      {pageType === "search" && <LiveListSearchPage {...data} />}
      {pageType === "page" && <LiveListPage {...data} />}
    </>
  );
}
