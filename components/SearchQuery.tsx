"use client";

import { useRouter } from "next/navigation";
import { MoveUpRight } from "lucide-react";

interface SearchQueryProps {
  query: string;
}
const SearchQuery = ({ query }: SearchQueryProps) => {
  const router = useRouter();

  const handleClick = (query: string) => {
    const params = new URLSearchParams();
    params.set("q", query);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <>
      <span
        onClick={() => handleClick(query)}
        className="flex justify-center items-center gap-1 cursor-pointer
              hover:bg-neutral-300 hover:dark:bg-neutral-600 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 px-4 rounded-full whitespace-nowrap"
      >
        {query} <MoveUpRight className="w-4 h-4" />
      </span>
    </>
  );
};

export default SearchQuery;
