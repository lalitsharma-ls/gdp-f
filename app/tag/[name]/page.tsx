import LiveList from "@/components/LiveList";
import LiveSkeleton from "@/components/loading/LiveSkeleton";
import TagsSkeleton from "@/components/loading/TagsSkeleton";
import VideoCardSkeleton from "@/components/loading/VideoCardSkeleton";
import TagsList from "@/components/TagsList";
import TagsVideoList from "@/components/TagsVideoList";
import VideoList from "@/components/VideoList";
import { Suspense } from "react";
export const metadata = {
  title: "Desi Porn Videos",
  description: "GotDesiPorn is india's best and biggest porn site.",
  keywords:
    "desiporn, gotdesiporn, new desiporn, new desi porn, gotdesi porn, got desi porn, latest desi porn, desi porn",
  openGraph: {
    title: "Desi Porn Videos",
    description: "GotDesiPorn is india's best and biggest porn site.",
  },
};

interface PageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function Home(params: PageProps) {
  const { name } = await params.params;
  return (
    <div className="grid gap-1">
      <Suspense fallback={<LiveSkeleton />}>
        <LiveList />
      </Suspense>
      <Suspense fallback={<TagsSkeleton />}>
        <TagsList />
      </Suspense>
      <Suspense fallback={<VideoCardSkeleton />}>
        <TagsVideoList tagName={name} />
      </Suspense>
    </div>
  );
}
