import LiveListVideo from "@/components/LiveListVideo";
import React from "react";
export const metadata = {
  title: "Live Desi Girls",
  description: "Find the most beautiful desi girls live on GotDesiPorn",
  openGraph: {
    title: "Live Desi Girls",
    description: "Find the most beautiful desi girls live on GotDesiPorn",
  },
};
const page = async () => {
  return (
    <>
      <span className=" text-md whitespace-nowrap lg:text-md uppercase font-bold text-neutral-600 dark:text-neutral-400">
        Desi Girls
      </span>
      <LiveListVideo pageType="page" />
    </>
  );
};

export default page;
