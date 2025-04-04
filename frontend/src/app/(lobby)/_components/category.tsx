"use client";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AlbumArtwork } from "@/features/categorys/components/album-artwork";
import { ScrollBar } from "@/components/ui/scroll-area";
import { categories } from "@/features/categorys/data/categories";

export interface GalleryItem {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
}

export interface GalleryProps {
    title?: string;
    description?: string;
}

const Category = ({
    title = "Món xu hướng",
    description = "Món ăn cao cấp, xa xỉ, sử dụng nguyên liệu quý hiếm và có cách chế biến cầu kỳ, tinh tế.",
}: GalleryProps) => {

    return (
        <section className="py-8">
            <div className="container mx-auto">
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
                                {categories.map((category) => (
                                    <AlbumArtwork
                                        key={category.name}
                                        category={category}
                                        className="w-[250px]"
                                        aspectRatio="portrait"
                                        width={250}
                                        height={330}
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

export { Category };
