import { env } from "bun";
import { Context } from "elysia";

export async function getPet({ set }: Context) {
  const url = env.DATABASE_URL;
  set.headers = { "Content-Type": "application/json" };
  set.status = 200;
  return { message: url };
}
