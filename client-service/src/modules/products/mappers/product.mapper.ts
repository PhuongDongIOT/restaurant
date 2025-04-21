import { IAddToCart, ICartItem, IUpdateCart } from "@/lib/schemas/cart.schema";
import { IProduct } from "@/lib/schemas/product.schema";

export const mappperCreateCartItem = (product: IProduct): ICartItem => ({
    id: product.id,
    product_name: product.product_name,
    image: product.image,
    description: product.description,
    category_id: product.category_id,
    quantity: 1,
    price: Number(product.price) || 0,
    discount: {
        amount: 0,
        percentage: 0,
    },
    if_present_at_wishlist: false,
});

export const createCartPayload = (productId: number, userId: number): IAddToCart => ({
    inventory_id: productId,
    user_id: userId,
});

export const createUpdateCartPayload = (productId: number, userId: number): IUpdateCart => ({
    inventory: productId,
    id: userId,
});

