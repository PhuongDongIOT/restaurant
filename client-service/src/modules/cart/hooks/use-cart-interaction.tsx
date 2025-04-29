import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { addToCart, remove, removeCartItem } from "@/lib/features/carts/carts.slice";
import { RootState } from "@/lib/store";
import { cartService } from "@/lib/services/cart.service";
import { useCheckUser } from "@/modules/authentication/hook/use-check-user";
import { showAddToCartErrorToast, showAddToCartSuccessToast, showRemoveToCartErrorToast, showRemoveToCartSuccessToast } from "@/modules/products/components/notifycations/add-to-cart-success.noti";
import { ICartItem } from "@/lib/schemas/cart.schema";
import { isOneProductInCart, isProductInCart } from "@/modules/products/utils";

export function useCartInteraction() {
    const [disabled, setDisabled] = useState(false);
    // const { setModal } = useModal();
    const { functionCheckauth, token } = useCheckUser();
    const dispatch = useAppDispatch();
    // const { setSelectedProduct } = useSelectedProduct();
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

    const notifyMinus = (isDisabled: boolean, noti?: any, productName?: string) => {
        setDisabled(isDisabled);
        switch (true) {
            case !isDisabled && noti:
                showRemoveToCartErrorToast(noti)
                break;
            case !isDisabled && !!productName: ;
                showRemoveToCartSuccessToast(productName);
                break;
        }
    };

    const addProductToCart = async (itemCart: ICartItem) => {
        if (!token) {
            functionCheckauth();
            return;
        }
        notify(true);
        const userId = user?.id ?? 1;
        itemCart = { ...itemCart, quantity: 1 }

        try {
            const productInCart = isProductInCart(cart?.items, itemCart.id);

            if (user?.id) {
                if (!productInCart) {
                    await cartService.addToCart(itemCart);
                } else {
                    await cartService.updateQuantityPlus({
                        id: userId,
                        inventory: itemCart.id,
                    });
                }
            }

            notify(false, "", itemCart.product_name);
            dispatch(addToCart(itemCart));
        } catch (error) {
            notify(false, error);
        }
    };

    const minusProductToCart = async (itemCart: ICartItem) => {
        if (!token) {
            functionCheckauth();
            return;
        }
        notifyMinus(true);
        const userId = user?.id ?? 1;

        try {

            const onlyProductInCart = isOneProductInCart(cart?.items, itemCart.id);
            console.log(onlyProductInCart);
            dispatch(removeCartItem(itemCart));
            
            // if (user?.id) {
            //     if (onlyProductInCart) {
            //         await cartService.removeItem({
            //             id: userId,
            //             inventory: itemCart.id,
            //         });
            //         dispatch(remove(itemCart));

            //     } else {
            //         await cartService.updateQuantityMinus({
            //             id: userId,
            //             inventory: itemCart.id,
            //         });
            //         dispatch(removeCartItem(itemCart));
            //     }
            // }

            notifyMinus(false, "", itemCart.product_name);
        } catch (error) {
            notifyMinus(false, error);
        }
    };

    const removeProductInCart = async (itemCart: ICartItem) => {

        try {
            console.log(itemCart);

            const userId = user?.id ?? 1;
            await cartService.removeItem({
                id: userId,
                inventory: itemCart.id,
            });
            dispatch(remove(itemCart));
            notifyMinus(false, "", itemCart.product_name);
        } catch (error) {
            notifyMinus(false, error);
        }
    };


    return {
        disabled,
        addProductToCart,
        minusProductToCart,
        removeProductInCart,
    };
}
