import { SearchResult } from "@/lib/types/types";
import React, { Suspense } from "react";
import VideoCard from "./VideoCard";
import { toTitleCase } from "@/lib/utils";
import { FileSearch, TrendingUp } from "lucide-react";
import PopularSearchQueries from "./PopularSearchQueries";
import LeastWatchedVideos from "./LeastWatchedVideos";
import LiveListVideo from "./LiveListVideo";
import LiveCardSkeleton from "./loading/LiveCardSkeleton";
import PopularSearchQueriesSkeleton from "./loading/PopularSearchQueriesSkeleton";
import VideoSuggestionSkeleton from "./loading/VideoSuggestionSkeleton";
import MostPopularVideos from "./MostPopularVideos";
import NewlyAddedVideos from "./NewlyAddedVideos";
import SearchBar from "./SearchBar";
import SuggestedVideos from "./SuggestedVideos";
import TrendingVideos from "./TrendingVideos";
interface SearchResultsProps {
  results: SearchResult[] | null;
}
const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <>
      {results != null && results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-2">
          {results.map((result, index) => (
            <VideoCard
              key={`${result.document.id}-${index}`}
              thumbnail={`https://cdn1.gotdesiporn.com/images/${result.document.uid}.jpg`}
              title={result.document.title}
              category={toTitleCase(result.document.tags[0])}
              views={result.document.views.toString()}
              thumbnail_placeholder={`https://cdn1.gotdesiporn.com/images/placeholders/${result.document.uid}-placeholder.jpg`}
              uid={result.document.uid}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-max animate-in fade-in duration-500 pb-24">
          <div className=" rounded-2xl bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm space-y-4">
            <div className="flex flex-col items-center justify-center p-4 space-y-2">
              <FileSearch className="w-12 h-12 mx-auto my-2" />
              <h1 className="text-2xl animate-pulse font-bold bg-gradient-to-r from-neutral-700 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
                No results found
              </h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm text-center">
                Try adjusting your search term or explore the suggested content
                below.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-1 space-y-4">
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;
