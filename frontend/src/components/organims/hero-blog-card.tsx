import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface HeroBlogCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
}

const HeroBlogCard: React.FC<HeroBlogCardProps> = ({ image, category, title, date, readTime }) => {
  return (
    <Card className="relative overflow-hidden rounded-2xl shadow-lg">
      <div className="relative h-96">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <CardContent className="absolute w-full left-0 bottom-0 p-2 bg-white/30 backdrop-blur-md">
        <div className="flex items-center justify-start">
          <Badge className="bg-purple-600 text-white text-sm px-4 py-1 rounded-full">
            {category}
          </Badge>
        </div>
        <h2 className="text-xl font-bold text-gray-900 leading-tight">{title}</h2>
        <div className="text-sm text-gray-900 mt-2 flex gap-4">
          <span>{date}</span>
          <span>{readTime} read</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroBlogCard;
