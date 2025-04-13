"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const locations = [
    { name: "TP. Hồ Chí Minh", listings: "50.563 tin đăng", image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png" },
    { name: "Hà Nội", listings: "46.847 tin đăng", image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png" },
    { name: "Đà Nẵng", listings: "8.664 tin đăng", image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png" },
    { name: "Bình Dương", listings: "6.392 tin đăng", image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png" },
    { name: "Đồng Nai", listings: "3.633 tin đăng", image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png" },
    { name: "Đồng Nai", listings: "3.633 tin đăng", image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png" },
    { name: "Đồng Nai", listings: "3.633 tin đăng", image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png" },
    { name: "Đồng Nai", listings: "3.633 tin đăng", image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png" },
    { name: "Đồng Nai", listings: "3.633 tin đăng", image: "https://plugins.shopware-staging.overdose.digital/thumbnail/85/a6/7c/1701338923/The-product-of-you-810x810_1920x1920.png" },
];

const projects = [
    "Vinhomes Central Park", "Vinhomes Grand Park", "Vinhomes Smart City", "Vinhomes Ocean Park",
    "Vũng Tàu Pearl", "Bcons Green View", "Grandeur Palace", "Bcons Green View", "Grandeur Palace"
];

export default function RealEstateByLocation() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });

    return (
        <div className="mx-auto y-6 flex flex-col gap-4">
            <div className="w-full flex flex-col justify-center md:grid md:grid-cols-6 md:flex-row gap-4">
                <motion.div
                    className="col-span-2 relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className="mx-auto overflow-hidden">
                        <Image src={locations[0].image} alt={locations[0].name} width={800} height={500} className="mx-auto w-full h-auto object-cover" />

                        <CardContent className="absolute bottom-2 left-4 text-gray">
                            <h3 className="text-lg font-bold">{locations[0].name}</h3>
                            <p className="text-sm">{locations[0].listings}</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="col-span-4">
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                        {locations.slice(1).map((location, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                <Card className="overflow-hidden">
                                    <Image src={location.image} alt={location.name} width={400} height={250} className="w-full h-auto object-cover" />
                                    <CardContent className="absolute bottom-2 left-2 text-gray">
                                        <h3 className="text-sm font-bold">{location.name}</h3>
                                        <p className="text-xs">{location.listings}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="mx-auto w-full max-w-sm md:max-w-full">
                <CarouselContent className="my-2">
                    {projects.map((project, index) => (
                        <CarouselItem className="basis-1/3 md:basis-1/5">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0.5, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-full flex-shrink-0"
                            ><Badge
                                key={index}
                                className={`line-clamp-1 w-full text-center px-3 py-2 rounded-full text-white font-semibold text-sm bg-blue-500 hover:opacity-80 transition-opacity duration-300`}
                            >
                                    {project}
                                </Badge>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
