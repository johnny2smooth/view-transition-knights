import { defineCollection, z } from "astro:content";

const characters = defineCollection({
  type: "data",
  schema: z.object({
    character: z.string(),
    skill: z.string(),
    price: z.number(),
    upgrades: z.string(),
  }),
});

export const collections = {
  characters,
};
