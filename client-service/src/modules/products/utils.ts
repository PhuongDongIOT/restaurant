import { ICartItem } from "@/lib/schemas/cart.schema";

export const isProductInCart = (items: ICartItem[] = [], productId: number): boolean => {
    return items.some(item => item.id === productId);
};

export const isOneProductInCart = (items: ICartItem[] = [], productId: number): boolean  => {
    const item = items.filter(item => item.id === productId);
    return item[0].quantity === 1;
};
