import Elysia from "elysia";
import { petRoutes } from "./http/controllers/routes";

export const app = new Elysia();

petRoutes(app);
