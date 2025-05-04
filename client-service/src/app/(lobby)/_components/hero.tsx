'use client'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { ICategoryBanner } from '@/lib/schemas/category.schema';
import HouseCard from './house-card';

export interface GalleryProps {
    title?: string;
    description?: string;
    items?: ICategoryBanner[];
}

export default function Hero({
    title = 'Nghiên cứu điển hình',
    description = 'Khám phá cách các công ty và nhà phát triển hàng đầu đang tận dụng công nghệ web hiện đại để xây dựng trải nghiệm kỹ thuật số đặc biệt.',
    items = [],
}: GalleryProps) {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    useEffect(() => {
        if (!carouselApi) {
            return;
        }
    }, [carouselApi]);

    return (
        <section className='w-full'>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                setApi={setCarouselApi}
                opts={{
                    breakpoints: {
                        '(max-width: 768px)': {
                            dragFree: true,
                        },
                    },
                }}
            >
                <CarouselContent className='ml-0 w-full rounded-none'>
                    {items.map((item) => (
                        <CarouselItem
                            key={item.category_id}
                            className='basis-1/1 max-h-[32rem] w-full pl-0'
                        >
                            <div className='group w-full'>
                                <div className='group relative h-full min-h-[18rem] w-full max-w-full overflow-hidden'>
                                    <HouseCard />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};
