import { NextResponse } from "next/server";
import { Video } from "@/lib/types/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ page: string }> }
) {
  try {
    const { page } = await params;
    if (!page) {
      return NextResponse.json(
        { error: "Page parameter is required" },
        { status: 400 }
      );
    }

    const res = await fetch(`${process.env.api_server}/api/video/page/${page}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch videos" },
        { status: res.status }
      );
    }

    const data: Video[] = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
