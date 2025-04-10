import { ICartItem } from "@/lib/schemas/cart.schema";

export const isProductInCart = (items: ICartItem[] = [], productId: number): boolean => {
    return items.some(item => item.id === productId);
};
