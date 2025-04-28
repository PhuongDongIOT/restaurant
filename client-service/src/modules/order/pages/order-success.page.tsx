"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OrderSuccessPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
            <CheckCircle2 className="text-green-500 w-20 h-20 mb-6" />
            <h1 className="text-2xl font-bold mb-2">Đặt hàng thành công!</h1>
            <p className="text-gray-600 mb-8 text-center max-w-md">
                Cảm ơn bạn đã mua hàng tại <span className="font-semibold">Bánh Cuốn Hoàng Vũ</span>.
                Đơn hàng của bạn đang được xử lý. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!
            </p>

            <div className="flex gap-4">
                <Button onClick={() => router.push("/")}>Về trang chủ</Button>
                <Button variant="outline" onClick={() => router.push("/orders")}>
                    Xem đơn hàng
                </Button>
            </div>
        </div>
    );
}
