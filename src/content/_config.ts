// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const justIn = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    price: z.number(),
    // photo: z.string(),
    // tags: z.array(z.string()),
  }),
});

const newsletter = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  "just-in": justIn,
  newsletter,
};
