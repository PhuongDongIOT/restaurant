import { toast } from "sonner";

export const showAddToCartSuccessToast = (productName: string) => {
    toast("Sản phẩm đã được thêm vào giỏ hàng", {
        description: `Bạn đã thêm thành công "${productName}" vào giỏ hàng của bạn.`,
    });
};

export const showAddToCartErrorToast = (noti: string) => {
    console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", noti);
    toast("Lỗi", {
        description: "Không thêm được sản phẩm vào giỏ hàng. Vui lòng thử lại.",
    });
};

export const showRemoveToCartSuccessToast = (productName: string) => {
    toast("Sản phẩm đã bỏ bớt trong giỏ hàng", {
        description: `Bạn đã bỏ thành công "${productName}" trong giỏ hàng của bạn.`,
    });
};

export const showRemoveToCartErrorToast = (noti: string) => {
    console.error("Lỗi khi bỏ sản phẩm trong giỏ hàng:", noti);
    toast("Lỗi", {
        description: "Không bỏ được sản phẩm vào giỏ hàng. Vui lòng thử lại.",
    });
};
