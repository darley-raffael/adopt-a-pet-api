import Elysia, { t } from "elysia";
import { createPet } from "./createPet";
import { getPet } from "./pet";

const bodyType = t.Object({
  name: t.String(),
  age: t.Number(),
  breed: t.String(),
});

export const petRoutes = new Elysia();

petRoutes.group("v1", (app) =>
  app.get("/pet", getPet).post("/create-pet", createPet, { body: bodyType })
);
