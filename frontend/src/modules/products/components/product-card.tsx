"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useModal } from "../../categorys/components/modal-provider";
import { IProduct } from "@/lib/schemas/product.schema";
import { useSelectedProduct } from "@/modules/products/contexts/selected-product.context";
import { productUserService } from "@/lib/services/product.service";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { addToCart } from "@/lib/features/carts/carts.slice";
import { ShoppingCart } from "lucide-react";
import { cartService } from "@/lib/services/cart.service";
import { createCartPayload, createUpdateCartPayload, mappperCreateCartItem } from "../mappers/product.mapper";
import { showAddToCartErrorToast, showAddToCartSuccessToast } from "./notifycations/add-to-cart-success.noti";
import { RootState } from "@/lib/store";
import { isProductInCart } from "../utils";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: IProduct;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  onClick?: () => void;
}

export function ProductCard({
  product,
  aspectRatio = "portrait",
  width,
  height,
  className,
  onClick,
  ...props
}: ProductCardProps) {

  const { setModal } = useModal();
  const { setSelectedProduct } = useSelectedProduct();
  const [disabled, setDisabled] = useState(false)

  const notification = (isDisabled: boolean, noti?: any, product_name?: string) => {
    setDisabled(isDisabled);
    switch (true) {
      case !isDisabled && noti:
        showAddToCartErrorToast(noti)
        break;
      case !isDisabled && !!product_name:
        showAddToCartSuccessToast(product_name);
        break;
    }
  }

  const openModalProductOverview = async (id: string) => {
    const { data: product } = await productUserService.details(id);
    setSelectedProduct(product);
    setModal(true);
  }

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector(
    (state: RootState) => state.carts
  );
  const { user } = useAppSelector(
    (state: RootState) => state.auths
  );

  const addProductToCart = async (product: IProduct, userId = 1) => {
    notification(true)
    userId = user?.id ?? userId
    const itemCart = mappperCreateCartItem(product);
    const cartPayload = createCartPayload(product.id, userId);
    const updatecartPayload = createUpdateCartPayload(product.id, userId);

    try {
      const productInCart = isProductInCart(cart?.items, product.id)

      if (user?.id) {
        if (!productInCart) {
          const { status_code } = await cartService.addToCart(cartPayload);
        } else {
          const { status_code } = await cartService.updateQuantityPlus(updatecartPayload);
        }
      }

      notification(false, "", product.product_name)
      dispatch(addToCart(itemCart));

    } catch (error) {
      notification(false, error)
    }
  };

  return (
    <div className={cn("space-y-3")} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden w-full rounded-md relative">
            <Image
              onClick={() => openModalProductOverview(`${product.id}`)}
              src={product.image}
              alt={product.description}
              width={width}
              height={height}
              className={cn(
                "h-auto w-full object-cover transition-all hover:scale-105"
              )}
            />
            <div className={cn(`absolute bottom-0 right-0 bg-red-500 p-2 z-10 rounded-xl`, { 'opacity-45': disabled })} onClick={() => !disabled && addProductToCart(product)}>
              <ShoppingCart color="white" />
            </div>
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{product.product_name}</h3>
        <p className="text-2xs text-cyan-500 line-clamp-1">{product.price}</p>
        <p className="text-xs text-muted-foreground line-clamp-1">{product.description}</p>
      </div>
    </div>
  );
}
