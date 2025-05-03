"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    items?: GalleryItem[];
}

const image = "https://api-picture.banhcuonanhvu.com/picture/3/image";


const data = [
    {
        id: "Bánh cuốn",
        title: "Xây dựng một thư viện thành phần hiện đại",
        description:
            "Phương pháp tiếp cận độc đáo cho việc phân phối và tùy chỉnh thành phần, giúp các nhà phát triển dễ dàng xây dựng các ứng dụng đẹp mắt và dễ truy cập hơn.",
        href: "https://ui.shadcn.com",
        image: image,
    },
    {
        id: "Bánh cuốn",
        title: "Xây dựng một thư viện thành phần hiện đại",
        description:
            "Phương pháp tiếp cận độc đáo cho việc phân phối và tùy chỉnh thành phần, giúp các nhà phát triển dễ dàng xây dựng các ứng dụng đẹp mắt và dễ truy cập hơn.",
        href: "https://ui.shadcn.com",
        image: image,
    },
    {
        id: "Bánh cuốn",
        title: "Xây dựng một thư viện thành phần hiện đại",
        description:
            "Phương pháp tiếp cận độc đáo cho việc phân phối và tùy chỉnh thành phần, giúp các nhà phát triển dễ dàng xây dựng các ứng dụng đẹp mắt và dễ truy cập hơn.",
        href: "https://ui.shadcn.com",
        image: image,
    },
    {
        id: "Bánh cuốn",
        title: "Xây dựng một thư viện thành phần hiện đại",
        description:
            "Phương pháp tiếp cận độc đáo cho việc phân phối và tùy chỉnh thành phần, giúp các nhà phát triển dễ dàng xây dựng các ứng dụng đẹp mắt và dễ truy cập hơn.",
        href: "https://ui.shadcn.com",
        image: image,
    },
    {
        id: "Bánh cuốn",
        title: "Xây dựng một thư viện thành phần hiện đại",
        description:
            "Phương pháp tiếp cận độc đáo cho việc phân phối và tùy chỉnh thành phần, giúp các nhà phát triển dễ dàng xây dựng các ứng dụng đẹp mắt và dễ truy cập hơn.",
        href: "https://ui.shadcn.com",
        image: image,
    },
    {
        id: "Bánh cuốn",
        title: "Xây dựng một thư viện thành phần hiện đại",
        description:
            "Phương pháp tiếp cận độc đáo cho việc phân phối và tùy chỉnh thành phần, giúp các nhà phát triển dễ dàng xây dựng các ứng dụng đẹp mắt và dễ truy cập hơn.",
        href: "https://ui.shadcn.com",
        image: image,
    },
];

const Gallery: React.FC<GalleryProps> = ({
    title = "Case Studies",
    description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
    items = data,
}) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="mx-auto max-w-md md:max-w-6xl">
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        align: "center",
                        loop: true,
                        dragFree: true
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="w-full">
                        {items.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/2 md:basis-1/4"
                            >
                                <a href={item.href} className="group rounded-xl">
                                    <div className="group relative h-full min-h-72 md:min-h-80 max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                                            <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4 line-clamp-2">
                                                {item.title}
                                            </div>
                                            <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                                                {item.description}
                                            </div>
                                            <div className="flex items-center text-sm">
                                                Read more{" "}
                                                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="mt-8 flex justify-center gap-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-primary/20"
                                }`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
