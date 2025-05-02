import { Metadata } from 'next';
import FaqDemo from '../_components/faq-demo';
import Head from 'next/head';

export default async function Page() {
    return (
        <>
            <Head>
                <title>Danh mục - Bánh cuốn Anh Vũ</title>
                {/* FAQ Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Bánh cuốn Anh Vũ có giao hàng tận nơi không?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Có, chúng tôi hỗ trợ giao hàng tận nơi trong nội thành Hà Nội và một số khu vực lân cận."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Bánh cuốn để được bao lâu?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bánh cuốn nên ăn ngay sau khi mua để giữ được độ thơm ngon, nhưng có thể bảo quản tủ lạnh trong 1 ngày."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Có thể đặt bánh cuốn số lượng lớn không?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Chúng tôi nhận đơn hàng số lượng lớn cho sự kiện, hội nghị và tiệc – vui lòng liên hệ trước để đặt."
                                    }
                                }
                            ]
                        }),
                    }}
                />
            </Head>
            <FaqDemo />
        </>
    )
}