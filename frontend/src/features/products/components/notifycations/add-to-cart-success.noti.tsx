import { toast } from "sonner";

export const showAddToCartSuccessToast = (productName: string) => {
    toast("Product added to cart", {
        description: `You've successfully added "${productName}" to your cart.`,
    });
};
export const showAddToCartErrorToast = (noti: string) => {
    console.error("Error adding product to cart:", noti);
    toast("Error", {
        description: "Failed to add product to cart. Please try again.",
    });
};
