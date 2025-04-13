"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const image = "https://awsbutket2468.s3.ap-northeast-1.amazonaws.com/baby%20tree_%2006-03-2025%20at%2002-06-39.jpeg";
const image_2 = "https://awsbutket2468.s3.ap-northeast-1.amazonaws.com/Gemini_Generated_Image_argmcoargmcoargm.jpg"
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
        <Card className="overflow-hidden rounded-2xl shadow-lg transition duration-300 hover:shadow-xl">
            <div className="relative">
                {/* Main Image */}
                <motion.div
                    key={thumbnail} // Trigger animation when thumbnail changes
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="overflow-hidden max-h-[30rem]">
                    <Image
                        src={thumbnail}
                        alt={house.title}
                        width={800}
                        height={400}
                        className="w-full object-cover rounded-t-2xl"
                    />
                    </div>
                </motion.div>

                {/* Small Images */}
                <div className="absolute bottom-3 left-3 flex space-x-2 bg-white/80 p-1 rounded-lg shadow-md">
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
            <CardContent className="p-5 hidden" >
            </CardContent>
        </Card>
    );
}
