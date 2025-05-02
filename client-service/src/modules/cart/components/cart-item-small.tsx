import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ICartItem } from "@/lib/schemas/cart.schema";
import { useCartInteraction } from "../hooks/use-cart-interaction";
import QuantitySelector from "@/components/molecules/quantity-selector";

type CartItemSmallProps = {
    product: ICartItem;
};
export default function CartItemSmall({ product }: CartItemSmallProps) {
    const { minusProductToCart, addProductToCart, removeProductInCart } = useCartInteraction();

    return (
        <li className="flex py-6 border-b border-gray-100 last:border-none">
            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Image
                    src={product.image}
                    alt={product.product_name}
                    width={96}
                    height={96}
                    className="size-full object-cover"
                />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3 className="line-clamp-1">
                        <a href="#">{product.product_name}</a>
                    </h3>
                    <p className="ml-4">{product.price.toLocaleString()} VND</p>
                </div>
                <div className="mt-1 text-sm text-gray-500 line-clamp-2">
                    <QuantitySelector
                        quantity={product.quantity}
                        onIncrease={() => { addProductToCart(product) }}
                        onDecrease={() => { minusProductToCart(product) }}
                    />
                </div>

                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Số lượng: {product.quantity}</p>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                            removeProductInCart(product);
                        }}
                        className="font-medium text-red-600 hover:text-red-500"
                    >
                        Xóa
                    </Button>
                </div>
            </div>
        </li>
    );
}
