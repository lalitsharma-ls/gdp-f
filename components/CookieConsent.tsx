"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const CookieConsent = () => {
  const [showCard, setShowCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const cookieConsent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));

    if (!cookieConsent) {
      setShowCard(true);
      // Delay to trigger animation
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    // Wait for animation to complete
    setTimeout(() => {
      document.cookie =
        "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
      setShowCard(false);
    }, 300);
  };

  if (!showCard) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <Card className="w-full max-w-md bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg">
        <CardHeader className="pb-0 pt-4">
          <h3 className="text-sm font-medium">Cookies & Consent</h3>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="relative">
            <p
              className={`text-sm text-neutral-700 dark:text-neutral-300 ${
                !isExpanded && "line-clamp-2"
              }`}
            >
              Welcome! We hope you will enjoy clean porn-watching experience.
              You must be at least 18 years old while using this site. We
              utilize cookies for essential functionality. Our stance against
              inappropriate content is firm, and we do not claim ownership of
              the material on this site. Nonetheless, we are dedicated to
              resolving any concerns promptly. Should you encounter any
              problematic content, please don't hesitate to report it to us.
              Enjoy!!
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-1"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2 pt-2 pb-4">
          <a href="https://duckduckgo.com/" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => setShowCard(false), 300);
              }}
            >
              Leave
            </Button>
          </a>
          <Button className="rounded-full" onClick={handleAccept}>
            Confirm +18
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CookieConsent;
