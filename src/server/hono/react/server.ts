import "server-only";

import { ClientResponse, hc } from "hono/client";
import { app, AppType } from "../app";
import { mergeHeaders } from "./utils";
import { headers } from "next/headers";

export const { api: $api } = hc<AppType>("", {
  async fetch(input, requestInit, env, executionCtx) {
    const heads: HeadersInit = mergeHeaders(
      new Headers(await headers()),
      new Headers(requestInit?.headers)
    );

    let _requestInit = requestInit || {};

    _requestInit.headers = heads;

    return app.request(input, _requestInit, env, executionCtx);
  },
});

export async function json<T extends Promise<ClientResponse<any>>>(promise: T) {
  const res = await promise;

  return res.json() as Promise<Awaited<ReturnType<Awaited<T>["json"]>>>;
}
