import { getPopularSearchQueries } from "@/lib/fetch/api";
import { PopularSearchQueriesResult } from "@/lib/types/types";
import { ScrollArea } from "./ui/scroll-area";
import React from "react";
import { ScrollBar } from "./ui/scroll-area";
import { MoveUpRight } from "lucide-react";

const PopularSearchQueries = async () => {
  const data: PopularSearchQueriesResult[] = await getPopularSearchQueries();
  return (
    <div className="flex flex-col gap-2  h-full">
      <span className="text-xs whitespace-nowrap lg:text-md uppercase font-bold text-neutral-600 dark:text-neutral-400">
        Trending Searches
      </span>
      <ScrollArea className="w-full h-full flex justify-center items-center ">
        <div className="flex space-x-2  ">
          {data.map((query) => (
            <span
              key={query.document.id}
              className="flex justify-center items-center gap-1 cursor-pointer
              hover:bg-neutral-300 hover:dark:bg-neutral-600 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 px-4 rounded-full whitespace-nowrap"
            >
              {query.document.q} <MoveUpRight className="w-4 h-4" />
            </span>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default PopularSearchQueries;
