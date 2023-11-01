import Elysia from "elysia";
import { getPet } from "./pet";

export async function petRoutes(app: Elysia) {
  app.group("/v1", (app) => app.get("/pet", getPet));
}
