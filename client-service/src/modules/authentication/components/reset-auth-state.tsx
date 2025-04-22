"use client"

import { login } from "@/lib/features/auths/auth.slice";
import { addToCart } from "@/lib/features/carts/carts.slice";
import { useAppDispatch } from "@/lib/hooks/redux";
import { IAuth } from "@/lib/schemas/auth.schema";
import { ICartItem, ICartItemResponse } from "@/lib/schemas/cart.schema";
import { cartUserService } from "@/lib/services/cart.service";
import { mapCartItemResponseToCartItem } from "@/modules/cart/utils";
import { useEffect } from "react";

type ResetAuthStateProps = {
    auth: IAuth | null
}
export function ResetAuthState({ auth }: ResetAuthStateProps) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const initSetCart = async (auth: IAuth) => {
            const { data } = await cartUserService.details(auth.users.id)

            const items: ICartItemResponse[] = data.carts ?? []
            items.map((item) => {
                const cartItem: ICartItem = mapCartItemResponseToCartItem(item)
                dispatch(addToCart(cartItem))
            })
        }
        if (auth) {
            dispatch(login(auth));
            if (auth.users.id) initSetCart(auth)
        }
    }, [])

    return null;
}