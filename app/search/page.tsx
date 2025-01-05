import LiveListVideo from "@/components/LiveListVideo";
import PopularSearchQueriesSkeleton from "@/components/loading/PopularSearchQueriesSkeleton";
import PopularSearchQueries from "@/components/PopularSearchQueries";
import SearchBar from "@/components/SearchBar";
import NewlyAddedVideos from "@/components/NewlyAddedVideos";
import { CircleX, TrendingUp } from "lucide-react";
import React, { Suspense } from "react";
import MostPopularVideos from "@/components/MostPopularVideos";
import SuggestedVideos from "@/components/SuggestedVideos";
import TrendingVideos from "@/components/TrendingVideos";
import LeastWatchedVideos from "@/components/LeastWatchedVideos";
import LiveCardSkeleton from "@/components/loading/LiveCardSkeleton";
import VideoSuggestionSkeleton from "@/components/loading/VideoSuggestionSkeleton";
import { getSearchResult } from "@/lib/fetch/api";
import SearchResultsSkeleton from "@/components/loading/SearchResultsSkeleton";
import SearchResults from "@/components/SearchResults";

export const metadata = {
  title: "Search Desi Porn Videos",
  description: "GotDesiPorn is india's best and biggest porn site.",
  keywords:
    "search desi porn, desiporn, gotdesiporn, new desiporn, new desi porn, gotdesi porn, got desi porn, latest desi porn, desi porn",
  openGraph: {
    title: "Desi Porn Videos",
    description: "GotDesiPorn is india's best and biggest porn site.",
  },
};

import Link from "next/link";
interface PageProps {
  searchParams: Promise<{ q?: string }>;
}
const searchPage = async ({ searchParams }: PageProps) => {
  const resolvedParams = await Promise.resolve(searchParams);
  const query = resolvedParams?.q;

  const searchResults = query ? await getSearchResult(query) : null;
  return (
    <>
      <div className="h-full bg-green-600 flex items-center justify-center  -mx-2 -mt-2 mb-1 shadow-xl"></div>
      {resolvedParams?.q ? (
        <div className="grid grid-cols-1 gap-1 space-y-4">
          <div className="col-span-full space-y-2 ">
            <span className="text-sm whitespace-nowrap lg:text-md uppercase font-bold text-neutral-600 dark:text-neutral-400">
              Search Desi
            </span>
            <SearchBar defaultValue={resolvedParams?.q} />
          </div>
          {searchResults?.length !== 0 && (
            <div className="flex gap-2  text-sm whitespace-nowrap lg:text-md uppercase font-bold text-neutral-600 dark:text-neutral-400">
              Search Results For "
              <span className="font-semibold">{resolvedParams.q}</span> " |
              <Link href="/search">
                <div className="inline-flex gap-1 items-center">
                  <CircleX className="w-4 h-4" /> Clear
                </div>
              </Link>
            </div>
          )}

          <Suspense fallback={<SearchResultsSkeleton />}>
            <SearchResults results={searchResults} />
          </Suspense>
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-1 space-y-4">
          <div className="col-span-full space-y-2 ">
            <span className="text-sm whitespace-nowrap lg:text-md uppercase font-bold text-neutral-600 dark:text-neutral-400">
              Search Desi
            </span>
            <SearchBar defaultValue={resolvedParams?.q} />
          </div>
          <div className="col-span-full space-y-2">
            <span className="text-sm whitespace-nowrap lg:text-md uppercase font-bold text-neutral-600 dark:text-neutral-400">
              Trending Searches
            </span>
            <Suspense fallback={<PopularSearchQueriesSkeleton />}>
              <PopularSearchQueries />
            </Suspense>
          </div>
          <div className="col-span-full space-y-2">
            <span className="text-sm flex gap-1 items-center  whitespace-nowrap  uppercase font-extrabold text-neutral-600 dark:text-neutral-400">
              Trending Girls <TrendingUp className="w-4 h-4" />
            </span>

            <Suspense fallback={<LiveCardSkeleton />}>
              <LiveListVideo pageType="search" />
            </Suspense>
          </div>
          <div className="col-span-full space-y-2">
            <span className="flex gap-1 items-center text-sm whitespace-nowrap  uppercase font-semibold text-neutral-600 dark:text-neutral-400">
              Trending Videos <TrendingUp className="w-4 h-4" />
            </span>
            <Suspense fallback={<VideoSuggestionSkeleton />}>
              <TrendingVideos />
            </Suspense>
          </div>

          <div className="col-span-full space-y-2">
            <span className="flex gap-1 items-center text-md whitespace-nowrap   uppercase font-semibold text-neutral-600 dark:text-neutral-400">
              Newly Added
            </span>
            <Suspense fallback={<VideoSuggestionSkeleton />}>
              <NewlyAddedVideos />
            </Suspense>
          </div>
          <div className="col-span-full space-y-2">
            <span className="flex gap-1 items-center text-md whitespace-nowrap  uppercase font-semibold text-neutral-600 dark:text-neutral-400">
              People Also Watched
            </span>
            <Suspense fallback={<VideoSuggestionSkeleton />}>
              <LeastWatchedVideos />
            </Suspense>
          </div>

          <div className="col-span-full space-y-2">
            <span className="flex gap-1 items-center text-md whitespace-nowrap  uppercase font-semibold text-neutral-600 dark:text-neutral-400">
              Most Popular
            </span>
            <Suspense fallback={<VideoSuggestionSkeleton />}>
              <MostPopularVideos />
            </Suspense>
          </div>

          <div className="col-span-full space-y-2">
            <span className="flex gap-1 items-center text-md whitespace-nowrap   uppercase font-semibold text-neutral-600 dark:text-neutral-400">
              Suggested For You
            </span>
            <Suspense fallback={<VideoSuggestionSkeleton />}>
              <SuggestedVideos />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

export default searchPage;
