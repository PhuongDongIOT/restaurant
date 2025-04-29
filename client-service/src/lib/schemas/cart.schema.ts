import { z } from 'zod';
import { DiscountSchema } from './discount.schema';
// If not, define DiscountSchema first
export const RemoveCartItemSchema = z.object({
    id: z.number(),
    // attributes: z.array(z.string()),
});

export const CartItemSchema = z.object({
    id: z.number().int().positive(),
    product_name: z.string().min(2, {
        message: 'Product name must be at least 2 characters.'
    }),
    image: z.any(),
    attributes: z.any(),
    description: z.string(),
    category_id: z.string(),
    quantity: z.number(),
    discount: DiscountSchema,
    price: z.number(),
    if_present_at_wishlist: z.boolean(),
});

export const CartSchema = z.object({
    items: z.array(CartItemSchema),
    totalQuantities: z.number(),
});

// Type inference from schema
export type ICartItem = z.infer<typeof CartItemSchema>;
export type ICart = z.infer<typeof CartSchema>;

export type IRemoveCartItem = z.infer<typeof RemoveCartItemSchema>;

export const AddToCartSchema = z.object({
    inventory_id: z.number().int().min(1, "inventory phải là số nguyên dương"),
    user_id: z.number().int().min(1, "id phải là số nguyên dương"),
});

export type IAddToCart = z.infer<typeof AddToCartSchema>;

export const UpdateCartPayloadSchema = z.object({
    id: z.number(),
    inventory: z.number(),
});

export type IUpdateCart = z.infer<typeof UpdateCartPayloadSchema>;

export const CartItemResponseSchema = z.object({
    product_id: z.number(),
    product_name: z.string(),
    image: z.string().url(),
    category_id: z.number(),
    quantity: z.number(),
    stock: z.number(),
    total_price: z.number(),
    discounted_price: z.number(),
});

export const CartResponseSchema = z.object({
    user_id: z.number(),
    carts: z.array(CartItemResponseSchema)
});

export type ICartItemResponse = z.infer<typeof CartItemResponseSchema>;
export type ICartResponse = z.infer<typeof CartResponseSchema>;