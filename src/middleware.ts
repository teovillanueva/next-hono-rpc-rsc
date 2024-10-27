import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-request-id", crypto.randomUUID());

  return NextResponse.next({
    request: {
      headers,
    },
  });
}
