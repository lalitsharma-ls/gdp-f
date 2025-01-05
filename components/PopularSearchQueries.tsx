import { getPopularSearchQueries } from "@/lib/fetch/api";
import { PopularSearchQueriesResult } from "@/lib/types/types";
import { ScrollArea } from "./ui/scroll-area";
import React from "react";
import { ScrollBar } from "./ui/scroll-area";
import SearchQuery from "./SearchQuery";
interface PopularSearchQueriesProps {
  limit?: number;
}
const PopularSearchQueries = async ({ limit }: PopularSearchQueriesProps) => {
  const data: PopularSearchQueriesResult[] = await getPopularSearchQueries();
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="flex flex-col gap-2  h-full">
      <ScrollArea className="w-full h-full flex justify-center items-center ">
        <div className="flex space-x-2  ">
          {limitedData.map((query) => (
            <SearchQuery key={query.document.id} query={query.document.q} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default PopularSearchQueries;
