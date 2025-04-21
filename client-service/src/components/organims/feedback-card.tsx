import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface FeedbackCardProps {
    reviewerName: string;
    reviewerRole: string;
    feedbackText: string;
    avatarUrl: string;
}

export default function FeedbackCard({
    reviewerName,
    reviewerRole,
    feedbackText,
    avatarUrl,
}: FeedbackCardProps) {
    return (
        <Card className="w-full max-w-md grid grid-cols-3 items-center gap-4 p-2 shadow-lg">
            {/* Hình ảnh người đánh giá */}
            <div className="w-24 h-full col-span-1 rounded-lg overflow-hidden">
                <Image
                    src={avatarUrl}
                    alt={`Avatar of ${reviewerName}`}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Nội dung nhận xét */}
            <CardContent className="col-span-2 flex flex-col flex-wrap">
                <h3 className="text-lg font-bold">{reviewerName}</h3>
                <p className="text-sm text-gray-500">{reviewerRole}</p>
                <p className="text-sm text-gray-700 break-words whitespace-pre-line line-clamp-3">{feedbackText}</p>
            </CardContent>
        </Card>
    );
}
