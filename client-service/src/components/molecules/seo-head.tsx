// components/SeoHead.tsx
import Head from 'next/head';

interface SeoHeadProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    keywords?: string;
    author?: string;
    siteName?: string;
    publishedTime?: string; // ISO format
}
export default function SeoHead({
    title = 'Bánh Cuốn Anh Vũ - Hương Vị Truyền Thống',
    description = 'Thưởng thức bánh cuốn truyền thống tại Bánh Cuốn Anh Vũ - Hương vị đậm đà, nguyên liệu tươi ngon.',
    url = 'https://banhcuonanhvu',
    image = '/logo.png',
    keywords = 'bánh cuốn, bánh cuốn truyền thống, Bánh Cuốn Anh Vũ, ẩm thực Việt',
    author = 'Coffee',
    siteName = 'Banh Cuống Hoàng Vũ',
    publishedTime,
}: SeoHeadProps) {
    return (
        <Head>
            {/* Basic Meta */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name='author' content={author} />
            <meta name='robots' content='index, follow' />
            <link rel='canonical' href={url} />
            <meta name='theme-color' content='#0066CC' />
            <meta name='robots' content='index, follow' />
            <link rel='canonical' href='https://banhcuonanhvu.vn/' />

            {/* Open Graph */}
            <meta property='og:type' content={publishedTime ? 'article' : 'website'} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:url' content={url} />
            <meta property='og:image' content={image} />
            <meta property='og:site_name' content={siteName} />
            {publishedTime && (
                <meta property='article:published_time' content={publishedTime} />
            )}

            {/* Twitter Card */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={image} />
        </Head>
    );
}
