'use client';
import dynamic from 'next/dynamic';

const ProductCategory = dynamic(() => import('./product-category'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})
const CategoryTrend = dynamic(() => import('./category-trend'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})
const ProductCommon = dynamic(() => import('./product-common'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})
const BannerFooter = dynamic(() => import('./banner-footer'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})
const MapBox = dynamic(() => import('./map-box'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})
const ProductGallery = dynamic(() => import('./product-gallery'), {
    ssr: true,
    loading: () => <p>Loading...</p>,
})

type LazyPageProps = {
    initPGOne: {
        products: any;
        title: string;
        description: string;
    }
}
export default function LazyPage({ initPGOne }: LazyPageProps) {
    return (
        <>
            <CategoryTrend  {...initPGOne} title='Danh mục phổ biến' />
            <ProductCategory {...initPGOne} title='Món ăn phổ biến' />
            <ProductCommon  {...initPGOne} title='Món ăn phổ biến' />
            <ProductGallery {...initPGOne} />
            <BannerFooter src='/images/banner-hot-port.webp' />
            <MapBox />
        </>
    );
}
