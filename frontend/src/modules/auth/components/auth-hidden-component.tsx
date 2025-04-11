'use client'

import { useEffect } from "react";
import { login } from "@/lib/features/auths/auth.slice";
import { useAppDispatch } from "@/lib/hooks/redux";
import { IAuth } from "@/lib/schemas/auth.schema";
import { cartUserService } from "@/lib/services/cart.service";
import { addToCart } from "@/lib/features/carts/carts.slice";
import { ICartItem, ICartItemResponse } from "@/lib/schemas/cart.schema";
import { mapCartItemResponseToCartItem } from "@/modules/cart/utils";

type AuthHiddenComponentProps = {
    auth: IAuth;
}
export default function AuthHiddenComponent({ auth }: AuthHiddenComponentProps) {

    const dispatch = useAppDispatch();
    useEffect(() => {
        const initSetCart = async () => {
            const { data } = await cartUserService.details(auth.users.id)
            console.log(data);
            
            const items: ICartItemResponse[] = data.carts ?? []
            items.map((item) => {
                const cartItem: ICartItem = mapCartItemResponseToCartItem(item)
                dispatch(addToCart(cartItem))
            })
        }
        if (auth) {
            dispatch(login(auth));
            if (auth.users.id) initSetCart()
        }
    }, [])
    return (<></>);
}