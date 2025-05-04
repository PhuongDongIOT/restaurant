'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const image = 'https://api-picture.banhcuonanhvu.com/picture/3/image';

const house = {
    title: 'CHO THUÊ NHÀ ÂU CƠ, TÂY HỒ, HN - NHÀ RỘNG - HĐ LÂU DÀI',
    price: '20 triệu/tháng',
    area: '75 m²',
    beds: 2,
    baths: 3,
    location: 'Tây Hồ, Hà Nội',
    description:
        'Cho thuê nhà riêng, ngõ rộng, có chỗ gửi xe cách nhà 40m. Xe tải, xe con ngang cửa. Diện tích 75m², sân rộng 19m², xây dựng 56m²; 3 tầng, 1 tum rộng như nhà; 2 phòng ngủ, 1 phòng khách, bếp, 3 nhà wc,...',
    images: [image, image, image, image],
};

export default function HouseCard() {
    const [thumbnail, setThumbnail] = useState<string>(house.images[0])
    return (
        <Card className='overflow-hidden rounded-none py-0 border-0 transition duration-300 hover:shadow-xl'>
            <div className='relative overflow-hidden'>
                {/* Main Image */}
                <motion.div
                    key={thumbnail} // Trigger animation when thumbnail changes
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='relative overflow-hidden h-[20rem] md:h-[30rem] shadow-lg rounded-xl'>
                        <Image
                            priority
                            src={thumbnail}
                            alt={`Bánh cuốn Anh Vũ - ${house.title}`}
                            width={800}
                            height={400}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className='w-full h-auto object-cover rounded-t-2xl'
                        />
                    </div>
                </motion.div>

                {/* Small Images */}
                <div className='absolute w-full max-w-md grid grid-cols-4 bottom-0 left-0 md:left-3 space-x-2 p-1 rounded-lg shadow-md'>
                    {house.images.slice(0, 4).map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt='House'
                            width={100}
                            height={100}
                            className='rounded-md shadow-sm object-cover transition-transform duration-300 hover:scale-110'
                            onClick={() => setThumbnail(img)}
                        />
                    ))}
                </div>
            </div>
        </Card>
    );
}
