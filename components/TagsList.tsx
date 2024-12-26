import { getTags } from "@/lib/fetch/api";
import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { toTitleCase } from "@/lib/utils";
const TagsList = async () => {
  try {
    const tags = await getTags();

    if (!tags?.length) {
      return (
        <div className="flex justify-center items-center">No tags found</div>
      );
    }

    return (
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 justify-center items-center">
          {tags.map((tag, index) => (
            <Button
              key={index}
              className="rounded-full mb-3  bg-neutral-200 dark:bg-neutral-800 hover:bg-gray-400 hover:text-white text-gray-600 dark:text-white text-sm "
            >
              {toTitleCase(tag)}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  } catch (error) {
    return (
      <div className="flex justify-center items-center">Error loading tags</div>
    );
  }
};

export default TagsList;
