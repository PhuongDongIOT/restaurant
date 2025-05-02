"use client";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "@/components/ui/scroll-area";
import { IProduct } from "@/lib/schemas/product.schema";
import { ProductCardHorizontal } from "@/modules/products/components/product-card-horizontal";
import Image from "next/image";

export interface CategoryTrendProps {
    title: string;
    description: string;
    products: IProduct[];
}

export default function CategoryTrend({
    title,
    description,
    products
}: CategoryTrendProps) {
    return (
        <section className="w-full mx-auto max-w-6xl px-4 xl:px-0">
            <div className="mx-auto">
                <div className="flex flex-col gap-4 mb-4 md:mb-6 lg:mb-8">
                    <div className="flex justify-between items-center gap-4">
                        <h2 className="text-xl pb-4 font-medium md:text-2xl lg:text-3xl line-clamp-1">
                            {title}
                        </h2>
                        <p className="text-blue-600 font-medium line-clamp-1 transition-all hover:text-blue-700">Xem thêm</p>
                    </div>
                    <ScrollArea>
                        <div className="block lg:grid lg:grid-cols-3 gap-4">
                            {products.slice(0, 1).map((product) => (
                                <ProductCardHorizontal
                                    key={product.id}
                                    product={product}
                                    // className="w-[250px]"
                                    aspectRatio="portrait"
                                    width={250}
                                    height={280}
                                    disable={true}
                                />
                            ))}
                            <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {products.map((product) => (
                                    <ProductCardHorizontal
                                        key={product.id}
                                        product={product}
                                        // className="w-[250px]"
                                        aspectRatio="portrait"
                                        width={250}
                                        height={280}
                                        disable={true}
                                    />
                                ))}
                                {products.map((product) => (
                                    <ProductCardHorizontal
                                        key={product.id}
                                        product={product}
                                        // className="w-[250px]"
                                        aspectRatio="portrait"
                                        width={250}
                                        height={280}
                                        disable={true}
                                    />
                                ))}
                            </div>
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
        </section>
    );
};
