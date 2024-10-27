import { $api, json } from "@/server/hono/react/server";

export default async function Home() {
  const { message } = await json($api.hello.$get());

  return <div>Hello {message}</div>;
}
