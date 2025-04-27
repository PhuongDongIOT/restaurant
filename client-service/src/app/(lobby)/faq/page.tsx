import { Metadata } from 'next';
import FaqDemo from '../_components/faq-demo';

export const metadata: Metadata = {
    title: 'Câu hỏi thường gặp',
    description: 'Bằng cách sử dụng dữ liệu có cấu trúc Câu hỏi thường gặp, bạn có thể giúp người dùng khám phá thông tin dưới dạng kết quả nhiều định dạng.'
};

export default async function Page() {
    return (
        <FaqDemo  />
    )
}