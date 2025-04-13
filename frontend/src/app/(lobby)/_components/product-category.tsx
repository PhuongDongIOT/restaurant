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

export function ProductCategory ({
    title,
    description,
    products
}: ProductCategoryProps) {
    return (
        <section className="w-full">
            <div className="mx-auto">
                <div className="flex flex-col gap-4 mb-4 md:mb-14 lg:mb-16">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl line-clamp-1">
                            {title}
                        </h2>
                        <p className="max-w-lg text-muted-foreground line-clamp-2">{description}</p>
                    </div>
                    <div className="relative">
                        <ScrollArea>
                            <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
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
