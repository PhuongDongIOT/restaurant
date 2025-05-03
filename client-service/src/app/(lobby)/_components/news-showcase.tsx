import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const image = "https://api-picture.banhcuonanhvu.com/picture/3/image";

const news = {
    main: {
        title:
            "Khám phá cuộc sống tiện nghi tại khu đô thị mới với không gian xanh chuẩn resort",
        image: image,
    },
    related: [
        {
            title: "Ngôi nhà giữa rừng: Không gian sống lý tưởng cho người yêu thiên nhiên",
            image: image,
        },
        {
            title: "Nhà phố hiện đại với thiết kế thông minh và tiện ích đẳng cấp",
            image: image,
        },
    ],
};

export default function NewsShowcase() {
    return (
        <Card className="w-full p-4">
            {/* Main News */}
            <div>
                <Badge variant="outline" className="px-3 py-1 text-blue-600 border-blue-500">
                    KINH DOANH
                </Badge>
                <Separator className="my-3" />
            </div>
            <CardContent className="p-0 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 overflow-hidden rounded-lg relative">
                    <Image
                        src={news.main.image}
                        alt={news.main.title}
                        width={800}
                        height={450}
                        className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-900 line-clamp-3 md:line-clamp-4">
                            {news.main.title}
                        </h4>
                    </div>
                </div>

                {/* Related News */}
                <div className="flex flex-col gap-3">
                    {news.related.map((item, index) => (
                        <div key={index} className="gap-3">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={80}
                                className="w-full h-24 rounded-md object-cover"
                            />
                            <h4 className="mt-2 text-sm font-medium text-gray-800 line-clamp-2 md:line-clamp-3">
                                {item.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
