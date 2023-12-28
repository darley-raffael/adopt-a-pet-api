import { Context } from "elysia";

interface bodyType {
  name: string;
  age: number;
  breed: string;
}

// criar uma rota de cadastra um novo pet
export function createPet({ set, body }: Context<{ body: bodyType }>) {
  const { name, age, breed } = body;
  set.headers = { "Content-Type": "application/json" };
  set.status = 200;
  return {
    data: {
      name,
      age,
      breed,
    },
  };
}
