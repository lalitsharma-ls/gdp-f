import LiveListVideo from "@/components/LiveListVideo";
import PopularSearchQueriesSkeleton from "@/components/loading/PopularSearchQueriesSkeleton";
import PopularSearchQueries from "@/components/PopularSearchQueries";
import SearchBar from "@/components/SearchBar";
import NewlyAddedVideos from "@/components/NewlyAddedVideos";
import { TrendingUp } from "lucide-react";
import React, { Suspense } from "react";
import MostPopularVideos from "@/components/MostPopularVideos";
import SuggestedVideos from "@/components/SuggestedVideos";
import TrendingVideos from "@/components/TrendingVideos";
import LeastWatchedVideos from "@/components/LeastWatchedVideos";
import LiveCardSkeleton from "@/components/loading/LiveCardSkeleton";
import VideoSuggestionSkeleton from "@/components/loading/VideoSuggestionSkeleton";

const searchPage = async () => {
  return (
    <>
      <div className="h-full bg-green-600 flex items-center justify-center  -mx-2 -mt-2 mb-1 shadow-xl"></div>
      <div className="grid grid-cols-6 gap-1 space-y-4 ">
        <div className="col-span-full space-y-2 ">
          <span className="text-sm whitespace-nowrap  uppercase font-bold text-neutral-600 dark:text-neutral-400">
            Search Desi
          </span>
          <SearchBar />
        </div>
        <div className="col-span-full space-y-2">
          <span className="text-sm whitespace-nowrap  uppercase font-bold text-neutral-600 dark:text-neutral-400">
            Trending Searches
          </span>
          <PopularSearchQueriesSkeleton />
        </div>
        <div className="col-span-full space-y-2">
          <span className=" flex gap-1 items-center text-sm whitespace-nowrap  uppercase font-extrabold text-neutral-600 dark:text-neutral-400">
            Trending Girls <TrendingUp className="w-4 h-4" />
          </span>
          <LiveCardSkeleton />
        </div>
        <div className="col-span-full space-y-2">
          <span className="flex gap-1 items-center text-sm whitespace-nowrap  uppercase font-semibold text-neutral-600 dark:text-neutral-400">
            Trending Videos <TrendingUp className="w-4 h-4" />
          </span>
          <VideoSuggestionSkeleton />
        </div>

        <div className="col-span-full space-y-2">
          <span className="flex gap-1 items-center text-sm whitespace-nowrap  uppercase font-semibold text-neutral-600 dark:text-neutral-400">
            Newly Added
          </span>
          <VideoSuggestionSkeleton />
        </div>
        <div className="col-span-full space-y-2">
          <span className="flex gap-1 items-center text-sm whitespace-nowrap  uppercase font-semibold text-neutral-600 dark:text-neutral-400">
            People Also Watched
          </span>
          <VideoSuggestionSkeleton />
        </div>

        <div className="col-span-full space-y-2">
          <span className="flex gap-1 items-center text-sm whitespace-nowrap  uppercase font-semibold text-neutral-600 dark:text-neutral-400">
            Most Popular
          </span>
          <VideoSuggestionSkeleton />
        </div>

        <div className="col-span-full space-y-2">
          <span className="flex gap-1 items-center text-sm whitespace-nowrap  uppercase font-semibold text-neutral-600 dark:text-neutral-400">
            Suggested For You
          </span>
          <VideoSuggestionSkeleton />
        </div>
      </div>
    </>
  );
};

export default searchPage;
