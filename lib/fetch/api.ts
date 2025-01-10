import {
  PopularSearchQueriesResult,
  SearchResult,
  Video,
} from "../types/types";

export async function getVideo(page: number): Promise<Video[]> {
  const startTime = Date.now();
  const res = await fetch(`${process.env.api_server}/api/video/page/${page}`, {
    next: { revalidate: 86400 },
  });
  const data: Video[] = await res.json();
  return data;
}

export async function getTags(): Promise<string[]> {
  const res = await fetch(`${process.env.api_server}/api/tags/name`, {
    next: { revalidate: 172800 },
  });
  const data: string[] = await res.json();
  return data;
}

export async function getVideoByUID(uid: string): Promise<Video> {
  const startTime = Date.now();

  const res = await fetch(`${process.env.api_server}/api/video/${uid}`, {
    next: { revalidate: 86400 },
  });
  const data: Video = await res.json();
  console.log(`time taken for ${uid} is ${Date.now() - startTime}`);
  return data;
}

export async function getPopularSearchQueries(): Promise<
  PopularSearchQueriesResult[]
> {
  const res = await fetch(
    `${process.env.api_server}/api/search/popular-queries`,
    {
      next: { revalidate: 86400 },
    }
  );
  const data: PopularSearchQueriesResult[] = await res.json();
  return data;
}

export async function getTrendingVideos(
  limit?: number
): Promise<SearchResult[]> {
  const res = await fetch(
    `${process.env.api_server}/api/search/trending-videos?query=&page=1&limit=${
      limit !== undefined ? limit : 10
    }`,
    {
      next: { revalidate: 86400 },
    }
  );
  const data: SearchResult[] = await res.json();
  return data;
}

export async function getNewlyAddedVideos(): Promise<SearchResult[]> {
  const res = await fetch(
    `${process.env.api_server}/api/search/new-videos?query=&page=1`,
    {
      next: { revalidate: 86400 },
    }
  );
  const data: SearchResult[] = await res.json();
  return data;
}

export async function getMostPopularVideos(): Promise<SearchResult[]> {
  const res = await fetch(
    `${process.env.api_server}/api/search/popular-videos?query=&page=1`,
    {
      next: { revalidate: 3600 },
    }
  );
  const data: SearchResult[] = await res.json();
  return data;
}

export async function getSuggestedVideos(
  tags: string,
  limit: number
): Promise<SearchResult[]> {
  const res = await fetch(
    `${process.env.api_server}/api/search/suggested-videos?query=&filter=${tags}&limit=${limit}&page=1`,
    {
      cache: "force-cache",
    }
  );
  const data: SearchResult[] = await res.json();
  return data;
}

export async function getRandomVideos(
  limit: number,
  uid: string
): Promise<SearchResult[]> {
  const res = await fetch(
    `${process.env.api_server}/api/search/random-videos?limit=${limit}&uid=${uid}`,
    {
      cache: "force-cache",
    }
  );
  const data: SearchResult[] = await res.json();
  return data;
}

export async function getLeastWatchedVideos(
  limit: number
): Promise<SearchResult[]> {
  const res = await fetch(
    `${process.env.api_server}/api/search/least-watched-videos?limit=${limit}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const data: SearchResult[] = await res.json();
  return data;
}

export async function getSearchResult(query: string): Promise<SearchResult[]> {
  const res = await fetch(
    `${process.env.api_server}/api/search/videos?query=${query}&page=1`,
    {
      cache: "force-cache",
    }
  );
  const data: SearchResult[] = await res.json();
  return data;
}
