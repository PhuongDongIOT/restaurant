"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";


const image = "https://api-picture.banhcuonanhvu.com/picture/3/image";

const news = [
  {
    title:
      "Cổ phiếu thép Hòa Phát, Hoa Sen, Nam Kim... đồng loạt “bốc đầu” sau quyết định áp thuế chống bán phá giá",
    link: "#",
  },
  {
    title: "Lý do bất động sản An Gia hủy chào bán hơn 40 triệu cổ phiếu",
    link: "#",
  },
  {
    title:
      "Một công ty in sách giáo khoa bị phạt gần 450 triệu đồng vì đình loạt vi phạm công bố thông tin",
    link: "#",
  },
  {
    title:
      "Huyện Thanh Oai, Hà Nội đấu giá 25 lô đất, giá từ 5,3 triệu đồng/m2",
    link: "#",
  },
];

const featuredNews = {
  title:
    "🔥 Apple tung iPhone giá rẻ chỉ 600 USD, tìm lại hào quang tại Trung Quốc",
  image: image,
  link: "#",
};

export default function NewsSection() {
  return (
    <Card className="p-5 w-full max-w-3xl rounded-xl border shadow-lg bg-white">
      {/* Title */}
      <div className="flex items-center justify-between">
        <Badge variant="outline" className="px-3 py-1 text-blue-600 border-blue-500">
          KINH DOANH
        </Badge>
      </div>
      <Separator className="my-3" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Danh sách tin nhỏ */}
        <div className="space-y-4">
          {news.map((item, index) => (
            <div key={index}>
              <Link
                href={item.link}
                className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                {item.title}
              </Link>
              {index !== news.length - 1 && <Separator className="my-2" />}
            </div>
          ))}
        </div>

        {/* Tin nổi bật */}
        <Link href={featuredNews.link} className="block group">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={featuredNews.image}
              alt="Featured News"
              width={200}
              height={120}
              className="w-full h-36 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <h3 className="text-sm font-semibold text-gray-800 mt-3 group-hover:text-blue-600 transition-all duration-200">
            {featuredNews.title}
          </h3>
        </Link>
      </div>
    </Card>
  );
}
