"use client";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ProductCard } from "@/modules/products/components/product-card";
import { ScrollBar } from "@/components/ui/scroll-area";
import { IProduct } from "@/lib/schemas/product.schema";

export interface ProductCategoryProps {
    title: string;
    description: string;
    products: IProduct[];
}

export default function ProductCategory({
    title,
    description,
    products
}: ProductCategoryProps) {
    return (
        <section className="w-full mx-auto max-w-6xl px-4 xl:px-0">
            <div className="mx-auto">
                <div className="flex flex-col gap-4 mb-4 md:mb-6 lg:mb-8">
                    <div className="flex flex-col">
                        <h2 className="text-xl pb-2 font-medium md:text-2xl lg:text-3xl line-clamp-1">
                            {title}
                        </h2>
                        <p className="max-w-lg text-muted-foreground line-clamp-1">{description}</p>
                    </div>
                    <div className="relative">
                        <ScrollArea>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        className="w-[250px]"
                                        aspectRatio="portrait"
                                        width={250}
                                        height={280}
                                    />
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </section>
    );
};
