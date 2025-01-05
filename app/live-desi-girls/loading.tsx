import LiveListVideo from "@/components/LiveListVideo";
import LiveCardSkeleton from "@/components/loading/LiveCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const page = async () => {
  return (
    <>
      <span className="text-md whitespace-nowrap lg:text-md uppercase font-bold text-neutral-600 dark:text-neutral-400">
        Desi Girls
      </span>
      <div className="mt-2 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 p-0 overflow-x-hidden">
        {Array.from({ length: 40 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="relative w-28 h-56 lg:w-52 xl:w-52 2xl:w-56 lg:h-28 xl:h-28 2xl:h-32 rounded-lg overflow-hidden">
              <Skeleton className="absolute w-full h-full rounded-lg" />
            </div>
            <div className="hidden lg:flex gap-2">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="w-10 h-2" />
                <Skeleton className="w-20 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
