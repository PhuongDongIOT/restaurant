import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const image = "https://api-picture.banhcuonanhvu.com/picture/3/image";

const newsData = [
    {
        title:
            "DeepSeek trả lời câu hỏi: 'Làm thế nào để không mệt mỏi khi trở thành cha mẹ?' - Khiến nhiều người sửng sốt!",
        image: image,
    },
    {
        title:
            "Bill Gates chỉ ra 4 rủi ro lớn đe dọa thế giới: ‘Người trẻ cần biết sợ để cố gắng phấn đấu’",
        image: image,
    },
];

export default function SpotlightNews() {
    return (
        <Card className="w-full p-4 rounded-2xl shadow-md bg-white">
            <CardContent className="p-0">
                <div>
                    <Badge variant="outline" className="px-3 py-1 text-blue-600 border-blue-500">
                        Tin Tức
                    </Badge>
                    <Separator className="my-3" />
                </div>
                <div className="space-y-4">
                    {newsData.map((news, index) => (
                        <div key={index} className="flex items-center space-x-4 group cursor-pointer">
                            <div className="w-32 h-20 overflow-hidden rounded-lg shadow-md">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    width={128}
                                    height={80}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition duration-300">
                                    {news.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
