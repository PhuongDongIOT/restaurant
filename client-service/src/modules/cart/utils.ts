import { ICartItem, ICartItemResponse } from "@/lib/schemas/cart.schema";

export function mapCartItemResponseToCartItem(
    item: ICartItemResponse
): ICartItem {
    return {
        id: item.product_id,
        product_name: item.product_name,
        image: item.image,
        attributes: {}, // 👈 fill if you have product variations (color, size, etc.)
        description: "", // 👈 fill if needed
        category_id: item.category_id.toString(), // convert number → string
        quantity: item.quantity,
        discount: {
            amount: item.total_price - item.discounted_price,
            percentage: Math.round(
                ((item.total_price - item.discounted_price) / item.total_price) * 100
            ),
        },
        price: item.discounted_price,
        if_present_at_wishlist: false, // 👈 set to true if you track this
    };
}
