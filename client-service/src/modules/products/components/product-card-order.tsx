'use client'

import QuantitySelector from "@/components/molecules/quantity-selector";

interface ProductCardOrderProps extends React.HTMLAttributes<HTMLDivElement> {
    aspectRatio?: 'portrait' | 'square';
    width?: number;
    height?: number;
    onClick?: () => void;
}
export default function ProductCardOrder({
    aspectRatio = 'portrait',
    width,
    height,
    className,
    onClick,
    ...props
}: ProductCardOrderProps) {
    return (
        <div className="flex flex-row min-[500px]:items-center gap-5 py-6  group">
            <div className="w-full max-w-[6em]">
                <img
                    src="https://pagedone.io/asset/uploads/1701162880.png"
                    alt="perfume bottle image"
                    className="mx-auto rounded-xl object-cover"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-3">
                    <div className="flex flex-col max-[500px]:items-center gap-1">
                        <h6 className="font-semibold text-base leading-7 text-black">
                            Dusk Dark Hue
                        </h6>
                        <h6 className="font-normal text-base leading-7 text-gray-500">
                            Perfumes
                        </h6>
                        <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                            120.000 VND
                        </h6>
                    </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                    <QuantitySelector
                        quantity={1}
                        onIncrease={() => { }}
                        onDecrease={() => { }}
                    />
                </div>
            </div>
        </div>
    );
}
