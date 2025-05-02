import { kv } from '@vercel/kv';
import dynamic from 'next/dynamic';
// import { Metadata } from 'next'
import { Hero } from './_components/hero';
import { ProductGalleryProps } from './_components/product-gallery';
import { fetchAndCacheBanners } from '@/lib/caches/banners';
import { fetchAndCacheProducts } from '@/lib/caches/products';

const ProductCategory = dynamic(() => import('./_components/product-category'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const ProductTrend = dynamic(() => import('./_components/product-trend'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const CategoryTrend = dynamic(() => import('./_components/category-trend'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const ProductCommon = dynamic(() => import('./_components/product-common'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const BannerFooter = dynamic(() => import('./_components/banner-footer'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const MapBox = dynamic(() => import('./_components/map-box'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const ProductGallery = dynamic(() => import('./_components/product-gallery'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})


const initProductGallery: ProductGalleryProps = {
  title: "Món yêu thích",
  description: "Món ăn cao cấp, xa xỉ, sử dụng nguyên liệu quý hiếm và có cách chế biến cầu kỳ, tinh tế.",
  products: []
}
// Main logic
async function initData(kv: any) {
  const products = await fetchAndCacheProducts(kv, 1);
  const banners = await fetchAndCacheBanners(kv, 1);

  const initPGOne = { ...initProductGallery, products: products ?? [] };
  return { products, banners, initPGOne };
}

export default async function Page() {
  const { banners, initPGOne } = await initData(kv);

  return (
    <>
      <Hero items={banners} />
      <div className='py-8 flex flex-col gap-12 mx-auto max-w-6xl'>
        <ProductTrend {...initPGOne} title='Món ăn đặc sắc' />
        <CategoryTrend  {...initPGOne} title='Danh mục phổ biến' />
        <ProductCategory {...initPGOne} title='Món ăn phổ biến' />
        <ProductCommon  {...initPGOne} title='Món ăn phổ biến' />
        <ProductGallery {...initPGOne} />
        <BannerFooter src="/images/banner-hot-port.jpg" />
        <MapBox />
      </div>
    </>
  );
}
