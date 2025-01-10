"use client";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect, useRef } from "react";
import debounce from "lodash/debounce";

interface SearchBarProps {
  defaultValue?: string;
}

const SearchBar = ({ defaultValue }: SearchBarProps) => {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue || "");
  const debouncedSearchRef = useRef<any>(null);

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  useEffect(() => {
    debouncedSearchRef.current = debounce((searchTerm: string) => {
      const params = new URLSearchParams();
      if (searchTerm) params.set("q", searchTerm);
      router.push(`/search?${params.toString()}`);
    }, 500);

    return () => {
      debouncedSearchRef.current?.cancel();
    };
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearchRef.current?.(newValue);
  };

  return (
    <div className="flex flex-col items-start w-full gap-1">
      <div className="flex gap-2 w-full items-center -my-5">
        <span className="text-[4rem] font-extrabold uppercase shrink-0">P</span>
        <Input
          className="rounded-2xl flex-1"
          value={value}
          onChange={handleChange}
          placeholder="Search videos..."
        />
        <span className="text-[4rem] font-extrabold uppercase shrink-0">R</span>
        <span className="text-[4rem] font-extrabold uppercase shrink-0">N</span>
      </div>
    </div>
  );
};

export default SearchBar;
