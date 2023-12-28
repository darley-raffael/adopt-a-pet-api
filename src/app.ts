import Elysia from "elysia";
import { petRoutes } from "./controllers/routes";

export const app = new Elysia();

app.use(petRoutes);

