import { Video } from "../types/types";

export async function getVideo(page: number): Promise<Video[]> {
  const res = await fetch(`${process.env.api_server}/api/video/page/${page}`, {
    next: { revalidate: 3600 },
  });
  const data: Video[] = await res.json();
  return data;
}

export async function getTags(): Promise<string[]> {
  const res = await fetch(`${process.env.api_server}/api/tags/name`, {
    next: { revalidate: 3600 },
  });
  const data: string[] = await res.json();
  return data;
}

export async function getVideoByUID(uid: string): Promise<Video> {
  const res = await fetch(`${process.env.api_server}/api/video/${uid}`, {
    next: { revalidate: 3600 },
  });
  const data: Video = await res.json();
  return data;
}
