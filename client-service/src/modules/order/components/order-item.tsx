import Image from "next/image";
import QuantitySelector from "@/components/molecules/quantity-selector";
import { ICartItem } from "@/lib/schemas/cart.schema";
import { useCartInteraction } from "@/modules/cart/hooks/use-cart-interaction";


type OrderItemProps = {
    product: ICartItem;
};
export default function OrderItem({ product }: OrderItemProps) {

    const { minusProductToCart, addProductToCart } = useCartInteraction();

    return (
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group">
            <div className="w-full md:max-w-[126px]">
                <Image
                    src={product.image}
                    alt={product.product_name}
                    width={126}
                    height={126}
                    className="mx-auto rounded-xl object-cover"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                    <div className="flex flex-col max-[500px]:items-center gap-3">
                        <h6 className="font-semibold text-base text-black">{product.product_name}</h6>
                        <p className="text-base text-gray-500 line-clamp-2">{product.description}</p>
                        <p className="text-base font-medium text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                            {product.price.toLocaleString()} VND
                        </p>
                    </div>
                </div>

                <QuantitySelector
                    quantity={product.quantity}
                    onIncrease={()=> {addProductToCart(product)}}
                    onDecrease={()=> {minusProductToCart(product)}}
                />

                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                    <p className="font-bold text-lg text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                        {(product.price * product.quantity).toLocaleString()} VND
                    </p>
                </div>
            </div>
        </div>
    );
}
