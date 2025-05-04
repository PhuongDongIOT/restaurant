import { auth } from '@/lib/auths/auth';
import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import NextTopLoader from 'nextjs-toploader';
import ProvidersRedux from './providers';
import GoogleAnalytic from '@/modules/seo-manager/components/google-analytic';
import GoogleTag from '@/modules/seo-manager/components/google-tag';
import './globals.css';
import './theme.css';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Bánh Cuốn Anh Vũ" />
        <meta name="theme-color" content="#0f172a" />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <title>Bánh Cuốn Anh Vũ | Ngon Chuẩn Vị Nhà Làm</title>
        <link rel="canonical" href="https://banhcuonanhvu.com" />

        <meta name="keywords" content="bánh cuốn hà nội, bánh buốn anh vũ, bánh cuốn, bánh cuốn ngon, đặc sản bánh cuốn, món ăn Việt Nam" />
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
        <meta name="reply-to" content="contact@banhcuonanhvu.com" />
        <meta name="owner" content="Bánh Cuốn Anh Vũ" />
        <meta name="url" content="https://banhcuonanhvu.com" />
        <meta name="identifier-URL" content="https://banhcuonanhvu.com" />
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
        <meta name="syndication-source" content="https://banhcuonanhvu.com" />
        <meta name="original-source" content="https://banhcuonanhvu.com" />

        <meta name="google-site-verification" content="8tiU_TboUzEiIT9UbZVc_UBtIE-ELBlmchwVPegm9tU" />


        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bánh Cuốn Anh Vũ" />
        <meta property="og:description" content="Bánh Cuốn Anh Vũ chuyên cung cấp những món bánh cuốn ngon, đặc sản Việt Nam." />
        <meta property="og:image" content="https://banhcuonanhvu.com/logo.png" />
        <meta property="og:url" content="https://banhcuonanhvu.com" />
        <meta property="og:site_name" content="Bánh Cuốn Anh Vũ" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bánh Cuốn Anh Vũ" />
        <meta name="twitter:description" content="Bánh Cuốn Anh Vũ chuyên cung cấp bánh cuốn đặc sản ngon và hấp dẫn." />
        <meta name="twitter:image" content="https://banhcuonanhvu.com/logo.png" />
        <meta name="twitter:url" content="https://banhcuonanhvu.com" />

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
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* Preconnect fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://banhcuonanhvu.com",
            "name": "Bánh Cuốn Anh Vũ",
            "url": "https://banhcuonanhvu.com",
            "image": "https://banhcuonanhvu.com/logo.png",
            "description": "Bánh Cuốn Anh Vũ - Chuyên cung cấp những món bánh cuốn đặc sản ngon và hấp dẫn, mang đậm hương vị Việt, bao gồm bánh cuốn và bánh xèo.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Your City",
              "addressRegion": "Your Region",
              "postalCode": "Your Postal Code",
              "addressCountry": "VN"
            },
            "telephone": "+84 Your Phone Number",
            "openingHours": [
              "Mo-Su 06:00-21:00"
            ],
            "sameAs": [
              "https://www.facebook.com/banhcuonanhvu",
              "https://www.instagram.com/banhcuonanhvu"
            ],
            "keywords": ["bánh cuốn", "bánh xèo", "bánh cuốn Hà Nội", "bánh xèo miền Tây", "món ăn Việt Nam", "đặc sản Việt Nam"] // Add keywords
          })
        }} />
        <GoogleAnalytic />
        <GoogleTag />
        <link href="https://api.mapbox.com/mapbox-gl-js/v3.11.1/mapbox-gl.css" rel="stylesheet" />
      </head>
      <body>
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>
          <Providers
            session={session}
          >
            <Toaster />
            <ProvidersRedux>
              {children}
            </ProvidersRedux>
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
}
