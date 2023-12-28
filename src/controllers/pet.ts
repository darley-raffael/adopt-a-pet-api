import { Context } from "elysia";

export function getPet({ set }: Context) {
  set.headers = { "Content-Type": "application/json" };
  set.status = 200;
  return { message: "Hello Elysia" };
}
