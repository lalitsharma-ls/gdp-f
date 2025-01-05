"use client";
import { Home, Search, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="lg:hidden fixed bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-4 min-w-max z-10 bg-neutral-800/80 px-4 py-2 rounded-full border-neutral-400 border-1">
      <Link
        href={"/"}
        className={`flex items-center gap-2 transition-all duration-300 rounded-full px-4 py-1 ${
          pathname === "/"
            ? "bg-neutral-700 flex-grow"
            : "hover:bg-neutral-700/50"
        }`}
      >
        <Home className="w-4 h-4 shrink-0" />
        <span className={pathname === "/" ? "" : "hidden"}>Home</span>
      </Link>
      <Link
        href={"/search"}
        className={`flex items-center gap-2 transition-all duration-300 rounded-full px-4 py-1 ${
          pathname === "/search"
            ? "bg-neutral-700 flex-grow"
            : "hover:bg-neutral-700/50"
        }`}
      >
        <Search className="w-4 h-4 shrink-0" />
        <span className={pathname === "/search" ? "" : "hidden"}>Search</span>
      </Link>
      <Link
        href={"/live-desi-girls"}
        className={`flex items-center gap-2 transition-all duration-300 rounded-full px-4 py-1 ${
          pathname === "/live-desi-girls"
            ? "bg-neutral-700 flex-grow"
            : "hover:bg-neutral-700/50"
        }`}
      >
        <Video className="w-4 h-4 shrink-0" />
        <span className={pathname === "/live-desi-girls" ? "" : "hidden"}>
          Desi Girls
        </span>
      </Link>
    </div>
  );
};

export default MobileNav;
