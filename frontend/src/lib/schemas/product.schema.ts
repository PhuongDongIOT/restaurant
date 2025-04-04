import { z } from "zod";

export const ProductSchema = z.object({
    photo_url: z.string().url(),
    name: z.string().min(1),
    description: z.string(),
    created_at: z.string().datetime(),
    price: z.number().positive(),
    id: z.number().int().positive(),
    category: z.string(),
    updated_at: z.string().datetime(),
});

export type IProduct = z.infer<typeof ProductSchema>;
