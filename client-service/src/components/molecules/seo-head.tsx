// components/SeoHead.tsx

interface SeoHeadProps { }
export default function SeoHead({ }: SeoHeadProps) {
    return (
        <>
            {/* Basic Meta */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Bánh Cuốn Anh Vũ" />
            <meta name="theme-color" content="#0f172a" />
            <meta httpEquiv="Content-Language" content="vi" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

            <title>Bánh Cuốn Anh Vũ | Ngon Chuẩn Vị Nhà Làm</title>
            <link rel="canonical" href="https://banhcuonanhvu.vn" />

            <meta name="keywords" content="Bánh Cuốn Anh Vũ, bánh cuốn ngon, đặc sản bánh cuốn, món ăn Việt Nam" />
            <meta name="description" content="Bánh Cuốn Anh Vũ - Nơi cung cấp những món bánh cuốn ngon tuyệt vời, đặc sản từ miền Bắc Việt Nam với hương vị đậm đà, hấp dẫn." />
            <meta name="subject" content="Bánh Cuốn Anh Vũ - Chuyên cung cấp bánh cuốn đặc sản" />
            <meta name="copyright" content="Bánh Cuốn Anh Vũ" />
            <meta name="language" content="vi" />
            <meta name="robots" content="index, follow" />
            <meta name="revised" content="2025-04-24" />
            <meta name="abstract" content="Bánh Cuốn Anh Vũ - Chuyên cung cấp bánh cuốn đặc sản, ngon, sạch sẽ." />
            <meta name="topic" content="Bánh Cuốn Anh Vũ - đặc sản bánh cuốn" />
            <meta name="summary" content="Bánh Cuốn Anh Vũ chuyên cung cấp bánh cuốn đặc sản, ngon và hấp dẫn." />
            <meta name="classification" content="Ẩm thực, Bánh cuốn" />
            <meta name="author" content="Bánh Cuốn Anh Vũ" />
            <meta name="designer" content="Bánh Cuốn Anh Vũ" />
            <meta name="reply-to" content="contact@banhcuonanhvu.vn" />
            <meta name="owner" content="Bánh Cuốn Anh Vũ" />
            <meta name="url" content="https://banhcuonanhvu.vn" />
            <meta name="identifier-URL" content="https://banhcuonanhvu.vn" />
            <meta name="directory" content="submission" />
            <meta name="pagename" content="Bánh Cuốn Anh Vũ" />
            <meta name="category" content="Ẩm thực, Bánh cuốn, Đặc sản" />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />
            <meta name="revisit-after" content="7 days" />
            <meta name="subtitle" content="Khám phá món bánh cuốn đặc sản của chúng tôi." />
            <meta name="target" content="all" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="MobileOptimized" content="320" />
            <meta name="date" content="2025-04-24" />
            <meta name="search_date" content="2025-04-24" />
            <meta name="DC.title" content="Bánh Cuốn Anh Vũ" />
            <meta name="medium" content="website" />
            <meta name="syndication-source" content="https://banhcuonanhvu.vn" />
            <meta name="original-source" content="https://banhcuonanhvu.vn" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Bánh Cuốn Anh Vũ" />
            <meta property="og:description" content="Bánh Cuốn Anh Vũ chuyên cung cấp những món bánh cuốn ngon, đặc sản Việt Nam." />
            <meta property="og:image" content="https://banhcuonanhvu.vn/logo.png" />
            <meta property="og:url" content="https://banhcuonanhvu.vn" />
            <meta property="og:site_name" content="Bánh Cuốn Anh Vũ" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Bánh Cuốn Anh Vũ" />
            <meta name="twitter:description" content="Bánh Cuốn Anh Vũ chuyên cung cấp bánh cuốn đặc sản ngon và hấp dẫn." />
            <meta name="twitter:image" content="https://banhcuonanhvu.vn/logo.png" />
            <meta name="twitter:url" content="https://banhcuonanhvu.vn" />

            {/* Apple Mobile Web App */}
            <meta name="apple-mobile-web-app-title" content="Bánh Cuốn Anh Vũ" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-touch-fullscreen" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="format-detection" content="telephone=no" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/touch-icon-ipad.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/touch-icon-iphone4.png" />
            <link rel="apple-touch-startup-image" href="/startup.png" />

            {/* Favicon */}
            <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />

            {/* Preconnect fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Bánh Cuốn Anh Vũ",
                    "url": "https://banhcuonanhvu.vn",
                    "image": "https://banhcuonanhvu.vn/logo.png",
                    "sameAs": [
                        "https://www.facebook.com/banhcuonanhvu",
                        "https://www.instagram.com/banhcuonanhvu"
                    ],
                    "description": "Bánh Cuốn Anh Vũ - Chuyên cung cấp những món bánh cuốn đặc sản ngon và hấp dẫn, mang đậm hương vị Việt."
                })
            }} />
        </>
    );
}
