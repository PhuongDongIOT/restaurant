import { useState } from "react";
import { useModal } from "../../categorys/components/modal-provider";
import { useSelectedProduct } from "@/modules/products/contexts/selected-product.context";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { addToCart } from "@/lib/features/carts/carts.slice";
import { RootState } from "@/lib/store";
import { cartService } from "@/lib/services/cart.service";
import { createCartPayload, createUpdateCartPayload, mappperCreateCartItem } from "../mappers/product.mapper";
import { showAddToCartErrorToast, showAddToCartSuccessToast } from "../components/notifycations/add-to-cart-success.noti";
import { isProductInCart } from "../utils";
import { IProduct } from "@/lib/schemas/product.schema";
import { useCheckUser } from "@/modules/authentication/hook/use-check-user";

export function useProductInteraction() {
    const [disabled, setDisabled] = useState(false);
    const { functionCheckauth, token } = useCheckUser();
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector((state: RootState) => state.carts);
    const { user } = useAppSelector((state: RootState) => state.auths);

    const notify = (isDisabled: boolean, noti?: any, productName?: string) => {
        setDisabled(isDisabled);
        switch (true) {
            case !isDisabled && noti:
                showAddToCartErrorToast(noti);
                break;
            case !isDisabled && !!productName:
                showAddToCartSuccessToast(productName);
                break;
        }
    };

    const addProductToCart = async (product: IProduct) => {
        if(!token) {
            functionCheckauth();
            return;
        }
        notify(true);
        const userId = user?.id ?? 1;
        const itemCart = mappperCreateCartItem(product);
        const cartPayload = createCartPayload(product.id, userId);
        const updateCartPayload = createUpdateCartPayload(product.id, userId);

        try {
            const productInCart = isProductInCart(cart?.items, product.id);

            if (user?.id) {
                if (!productInCart) {
                    await cartService.addToCart(cartPayload);
                } else {
                    await cartService.updateQuantityPlus(updateCartPayload);
                }
            }

            notify(false, "", product.product_name);
            dispatch(addToCart(itemCart));
        } catch (error) {
            notify(false, error);
        }
    };

    return {
        disabled,
        addProductToCart,
    };
}
