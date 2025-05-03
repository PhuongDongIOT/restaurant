"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const image = "https://api-picture.banhcuonanhvu.com/picture/3/image";
const image_2 = "https://api-picture.banhcuonanhvu.com/picture/3/image"
const house = {
    title: "CHO THUÊ NHÀ ÂU CƠ, TÂY HỒ, HN - NHÀ RỘNG - HĐ LÂU DÀI",
    price: "20 triệu/tháng",
    area: "75 m²",
    beds: 2,
    baths: 3,
    location: "Tây Hồ, Hà Nội",
    description:
        "Cho thuê nhà riêng, ngõ rộng, có chỗ gửi xe cách nhà 40m. Xe tải, xe con ngang cửa. Diện tích 75m², sân rộng 19m², xây dựng 56m²; 3 tầng, 1 tum rộng như nhà; 2 phòng ngủ, 1 phòng khách, bếp, 3 nhà wc,...",
    images: [image, image_2, image, image_2],
};

export default function HouseCard() {
    const [thumbnail, setThumbnail] = useState<string>(house.images[0])
    return (
        <Card className="overflow-hidden rounded-none py-0 border-0 transition duration-300 hover:shadow-xl">
            <div className="relative">
                {/* Main Image */}
                <motion.div
                    key={thumbnail} // Trigger animation when thumbnail changes
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative overflow-hidden h-[30rem] shadow-lg rounded-xl">
                    <Image
                        src={thumbnail}
                        alt={house.title}
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover rounded-t-2xl"
                    />
                    </div>
                </motion.div>

                {/* Small Images */}
                <div className="absolute w-full max-w-md grid grid-cols-4 bottom-0 left-3 space-x-2 p-1 rounded-lg shadow-md">
                    {house.images.slice(0, 4).map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt="House"
                            width={100}
                            height={100}
                            className="rounded-md shadow-sm object-cover transition-transform duration-300 hover:scale-110"
                            onClick={() => setThumbnail(img)}
                        />
                    ))}
                </div>
            </div>
            <CardContent className="p-5" >
            </CardContent>
        </Card>
    );
}
