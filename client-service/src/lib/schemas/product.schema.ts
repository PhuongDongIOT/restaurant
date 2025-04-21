import { z } from "zod";

export const ProductSchema = z.object({
    id: z.number().int().positive(),
    product_name: z.string().min(2, {
        message: 'Product name must be at least 2 characters.'
    }),
    image: z.any(),
    attributes: z.any(),
    trail: z.string().nullable(),
    description: z.string(),
    category_id: z.string(),
    size: z.string(),
    stock: z.string(),
    price: z.string(),
    if_present_at_wishlist: z.boolean(),
    discounted_price: z.string(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
});

export type IProduct = z.infer<typeof ProductSchema>;

export const InsertProductSchema = z.object({
    product_name: z.string().min(2, {
        message: 'Product name must be at least 2 characters.'
    }),
    image: z.any(),
    description: z.string(),
    category_id: z.string(),
    size: z.string(),
    stock: z.string(),
    price: z.string(),
});

export type IInsertProduct = z.infer<typeof InsertProductSchema>;
