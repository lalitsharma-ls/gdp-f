"use client";

import { useState, useRef, useEffect } from "react";
import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from "@vidstack/react";
import "vidstack/styles/defaults.css";
import { Eye, Loader2, Maximize, Waves } from "lucide-react";

interface StreamModel {
  id: number;
  avatarUrl: string;
  username: string;
  viewersCount: number;
  snapshotUrl: string;
  stream: {
    url: string;
  };
}

interface Props {
  model: StreamModel;
}

export function LiveStreamPreview({ model }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<MediaPlayerInstance>(null);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsLoading(true);
    setIsPlaying(false);
    try {
      const player = playerRef.current;
      if (player instanceof HTMLVideoElement && !player.paused) {
        player.pause();
      }
    } catch (error) {
      console.error("Error stopping playback:", error);
    }
  };

  useEffect(() => {
    return () => {
      try {
        const player = playerRef.current;
        if (player instanceof HTMLVideoElement && !player.paused) {
          player.pause();
        }
      } catch (error) {
        console.error("Error cleaning up player:", error);
      }
    };
  }, []);

  return (
    <a
      href={`https://fuckonlive.com/${model.username}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="block group"
    >
      <div className="grid gap-1 group">
        <div className="relative w-28 h-56 lg:w-52 xl:w-52 2xl:w-56 lg:h-28 xl:h-28 2xl:h-32 rounded-lg overflow-hidden">
          <img
            src={model.snapshotUrl}
            alt={model.username}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovering ? "opacity-0" : "opacity-100"
            }`}
          />
          {isHovering && (
            <div className="relative w-full h-full">
              <MediaPlayer
                ref={playerRef}
                src={model.stream.url}
                autoplay
                muted
                loop
                className="w-full h-full"
                onPlay={() => {
                  setIsLoading(false);
                  setIsPlaying(true);
                }}
              >
                <MediaProvider className="w-full h-full [&>video]:object-cover [&>video]:w-full [&>video]:h-full" />
              </MediaPlayer>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <span className="animate-pulse">Loading..</span>
                </div>
              )}
              {isPlaying && (
                <>
                  <div className="absolute top-2 right-2 z-10">
                    <Maximize className="w-6 h-6 text-white hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute top-2 left-2 z-10 flex items-center gap-1 text-white">
                    <Eye className="w-5 h-5" />
                    <span className="text-sm">{model.viewersCount}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="hidden lg:flex gap-1 py-1">
          <div className="flex-none">
            <img
              src={model.avatarUrl || model.snapshotUrl}
              alt={model.username}
              className="w-9 h-9 rounded-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <span className="text-xs truncate px-1 text-neutral-600 dark:text-neutral-400">
              {model.username}
            </span>
            <div className="flex gap-1 justify-between px-1 items-center text-xs ">
              <span className="flex items-center gap-1">
                <Waves className="w-3 h-3 group-hover:animate-vibrate" />
                Send Vibrations
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
