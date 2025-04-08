"use client";

import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useModal } from "../../categorys/components/modal-provider";
import { IProduct } from "@/lib/schemas/product.schema";
import { useSelectedProduct } from "@/features/products/contexts/selected-product.context";
import { productUserService } from "@/lib/services/product.service";
import { useAppDispatch } from "@/lib/hooks/redux";
import { addToCart } from "@/lib/features/carts/cartsSlice";
import { ICartItem } from "@/lib/schemas/cart.schema";
import { ShoppingCart } from "lucide-react";

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

  const openModalProductOverview = async (id: string) => {
    const { data: product } = await productUserService.details(id);
    setSelectedProduct(product);
    setModal(true);
  }

  const dispatch = useAppDispatch();

  const addProductToCart = (product: IProduct) => {
    const productPrice = parseInt(`${product.price}`) ?? 0
    const itemCart: ICartItem = {
      id: product.id,
      product_name: product.product_name,
      image: product.image,
      description: product.description,
      category_id: product.category_id,
      quantity: 1,
      discount: {
        amount: 0,
        percentage: 0
      },
      price: productPrice,
      if_present_at_wishlist: false,
    }
    dispatch(addToCart(itemCart))
  }

  return (
    <div className={cn("space-y-3")} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md relative">
            <Image
              onClick={() => openModalProductOverview(`${product.id}`)}
              src={product.image}
              alt={product.description}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
              )}
            />
            <div className="absolute bottom-0 right-0 bg-red-500 p-2 z-10 rounded-xl" onClick={() => addProductToCart(product)}>
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
