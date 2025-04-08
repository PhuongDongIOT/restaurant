import { z } from 'zod';
import { DiscountSchema } from './discount.schema';
// If not, define DiscountSchema first
export const RemoveCartItemSchema = z.object({
    id: z.number(),
    attributes: z.array(z.string()),
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
