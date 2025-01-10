import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Home,
  TrendingUp,
  Clock,
  Heart,
  Search,
  History,
  Video,
  ArrowRight,
} from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";
import AdComponent from "@/components/AdComponent";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | GotDesiPorn",
    default: "Desi Porn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid md:grid-cols-[auto,1fr]">
            <MobileNav />
            <CookieConsent />
            {/* Sidebar */}
            <aside className="hidden  sticky top-0 h-screen md:flex flex-col w-12 hover:w-40 transition-all duration-200 bg-neutral-100 dark:bg-neutral-900 px-2 hover:z-10">
              {/* Logo Section */}
              <div className="mt-2 pb-2 flex items-center  p-1 border-b border-neutral-200 dark:border-neutral-700">
                <Image
                  src="/logo-light.png"
                  className="hidden dark:block"
                  width={20}
                  height={20}
                  alt="logo"
                />
                <Image
                  src="/logo-dark.png"
                  className="block dark:hidden"
                  width={20}
                  height={20}
                  alt="logo"
                />

                <span className="ml-3 whitespace-nowrap overflow-hidden ">
                  GotDesiPorn
                </span>
              </div>

              <nav className="space-y-2 flex-1 pt-1">
                <Link
                  href="/"
                  className="flex items-center p-1  hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded  group"
                >
                  <div className="min-w-[20px] flex justify-center">
                    <Home className="w-5 h-5" />
                  </div>
                  <span className="ml-3 whitespace-nowrap overflow-hidden">
                    Home
                  </span>
                </Link>
                <Link
                  href="/search"
                  className="flex items-center p-1  hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded  group"
                >
                  <div className="min-w-[20px] flex justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="ml-3 whitespace-nowrap overflow-hidden">
                    Search
                  </span>
                </Link>
                {/* <Link
                  href="/settings"
                  className="flex items-center p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded group"
                >
                  <div className="min-w-[20px] flex justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="ml-3 whitespace-nowrap overflow-hidden">
                    Liked
                  </span>
                </Link> */}
                <Link
                  href="/live-desi-girls"
                  className="flex items-center p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded group"
                >
                  <div className="min-w-[20px] flex justify-center">
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="ml-3 whitespace-nowrap overflow-hidden">
                    Desi Girls
                  </span>
                </Link>
                <Link
                  href="/trending-videos"
                  className="flex items-center p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded group"
                >
                  <div className="min-w-[20px] flex justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="ml-3 whitespace-nowrap overflow-hidden">
                    Trending
                  </span>
                </Link>

                {/* <Link
                  href="/users"
                  className="flex items-center p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded group"
                >
                  <div className="min-w-[20px] flex justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="ml-3 whitespace-nowrap overflow-hidden">
                    Watch Later
                  </span>
                </Link> */}

                {/* <Link
                  href="/users"
                  className="flex items-center p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded group"
                >
                  <div className="min-w-[20px] flex justify-center">
                    <History className="w-5 h-5" />
                  </div>
                  <span className="ml-3 whitespace-nowrap overflow-hidden">
                    Watch History
                  </span>
                </Link> */}
              </nav>

              <ThemeSwitcher />
            </aside>
            {/* Main Content */}
            <main className="min-h-screen">
              <div className="w-100 bg-neutral-100 dark:bg-neutral-900 h-12 flex items-center justify-center">
                <a
                  href="https://go.rmhfrtnd.com/api/goToTheRoom?sourceId=gdpw&campaignId=gdpw&targetDomain=fuckonlive.com&tag=girls%2Findian&action=sbSignupWithModel&userId=5123fa4d5dc9af0bfbd398597c9829c00e0cf641028808dbca905bfb0c27fff0"
                  target="_black"
                  className="flex gap-2 justify-center items-center"
                >
                  🎁 Social Media Of Sex <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="p-2"> {children}</div>
            </main>
          </div>
        </ThemeProvider>
        <AdComponent />
      </body>
    </html>
  );
}
