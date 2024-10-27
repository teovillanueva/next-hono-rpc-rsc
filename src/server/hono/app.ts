import { Hono } from "hono";

export const app = new Hono().basePath("/api").get("/hello", (c) => {
  return c.json({
    message: `World ${c.req.header("x-request-id")}`,
  });
});

export type AppType = typeof app;
