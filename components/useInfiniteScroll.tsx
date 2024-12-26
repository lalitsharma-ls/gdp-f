import useSWRInfinite from "swr/infinite";
import { Video } from "@/lib/types/types";

const getKey = (pageIndex: number, previousPageData: any) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/api/videos/${pageIndex + 1}`;
};

export function useInfiniteScroll(initialData: Video[]) {
  const { data, error, size, setSize, isLoading } = useSWRInfinite(
    getKey,
    async (url) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    {
      fallbackData: [initialData],
      revalidateFirstPage: false,
      persistSize: true,
      revalidateOnFocus: false,
    }
  );

  const videos = data ? data.flat() : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const hasMore = !isEmpty && data && data[data.length - 1]?.length > 0;

  return { videos, error, isLoadingMore, hasMore, setSize };
}
