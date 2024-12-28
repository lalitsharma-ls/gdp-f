import PopularSearchQueriesSkeleton from "@/components/loading/PopularSearchQueriesSkeleton";
import PopularSearchQueries from "@/components/PopularSearchQueries";
import { Input } from "@/components/ui/input";
import React, { Suspense } from "react";

const searchPage = async () => {
  return (
    <>
      <div className="h-full bg-green-600 flex items-center justify-center  -mx-2 -mt-2 mb-1 shadow-xl"></div>
      <div className="grid grid-cols-6 gap-1">
        <div className="col-span-full">
          <div className="flex flex-col items-start w-full gap-1">
            <span className="text-xs whitespace-nowrap lg:text-md uppercase font-bold text-neutral-600 dark:text-neutral-400">
              Search Desi
            </span>
            <div className="flex gap-2 w-full items-center -mt-4">
              <span className="text-[4rem] font-extrabold uppercase shrink-0">
                P
              </span>
              <Input
                className="rounded-2xl flex-1"
                placeholder="ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
              />
              <span className="text-[4rem] font-extrabold uppercase shrink-0">
                t
              </span>
              <span className="text-[4rem] font-extrabold uppercase shrink-0">
                r
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-full">
          <Suspense fallback={<PopularSearchQueriesSkeleton />}>
            <PopularSearchQueries />
          </Suspense>
        </div>
        <div className="col-span-full">
          {/* 
            trending girls,
            trending videos, 
            most popular videos, 
            suggestions for you, 
            newly added, 
            continue watching, 
             */}
        </div>
      </div>
    </>
  );
};

export default searchPage;
