"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const ScrollHelper = () => {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <></>;
};

export default ScrollHelper;
