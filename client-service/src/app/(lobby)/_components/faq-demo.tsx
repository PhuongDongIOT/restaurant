"use client";

import { CollapsibleFAQ } from '@/modules/faq/components/collapsible-faq';
import { ContactInfo } from '@/modules/faq/components/contact-info';
import FaqPage from '@/modules/faq/faq-page';

export default function FaqDemo() {

    const DEMO_FAQS = [
        {
            "question": "Điều gì làm cho nền tảng của bạn trở nên đặc biệt?",
            "answer": "Nền tảng của chúng tôi nổi bật nhờ thiết kế trực quan, khả năng tự động hóa mạnh mẽ và các tuỳ chọn tích hợp liền mạch. Chúng tôi tập trung vào việc tạo ra trải nghiệm người dùng kết hợp giữa sự đơn giản và các tính năng nâng cao."
        },
        {
            "question": "Cấu trúc giá cả hoạt động như thế nào?",
            "answer": "Chúng tôi cung cấp các gói giá linh hoạt, minh bạch, được thiết kế để phù hợp với nhu cầu phát triển của bạn. Mỗi gói bao gồm một bộ tính năng cốt lõi, và các khả năng bổ sung sẽ mở rộng theo từng cấp độ. Tất cả các gói đều bắt đầu với 14 ngày dùng thử miễn phí."
        },
        {
            "question": "Bạn cung cấp loại hỗ trợ nào?",
            "answer": "Chúng tôi cung cấp hỗ trợ toàn diện qua nhiều kênh khác nhau. Bao gồm trò chuyện trực tuyến 24/7, tài liệu hướng dẫn chi tiết, video hướng dẫn, và quản lý tài khoản riêng dành cho khách hàng doanh nghiệp."
        }
    ];
    return (
        <div className='py-8 mx-auto max-w-6xl grid grid-cols-4'>
            <div className='col-span-1'>
                <CollapsibleFAQ />
                <CollapsibleFAQ />
                <CollapsibleFAQ />
            </div>
            <div className='col-span-3'>
                <FaqPage
                    title="Câu hỏi thường gặp"
                    description="Mọi thứ bạn cần biết về nền tảng của chúng tôi"
                    items={DEMO_FAQS} />
            </div>
            <div className='col-span-4'>
                <ContactInfo {...{
                    title: "Vẫn còn thắc mắc?",
                    description: "Chúng tôi ở đây để giúp bạn",
                    buttonText: "Liên hệ hỗ trợ",
                    onContact: () => console.log("Đã nhấp vào liên hệ hỗ trợ"),
                }} />
            </div>
        </div>
    )
}