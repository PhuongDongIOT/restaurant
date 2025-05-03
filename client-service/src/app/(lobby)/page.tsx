import { kv } from '@vercel/kv';
import dynamic from 'next/dynamic';
import { fetchAndCacheBanners } from '@/lib/caches/banners';
import { fetchAndCacheProducts } from '@/lib/caches/products';
import LazyPage from './_components/lazy-page';
import type { ProductGalleryProps } from './_components/product-gallery';

const Hero = dynamic(() => import('./_components/hero'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})
const ProductTrend = dynamic(() => import('./_components/product-trend'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})

const initProductGallery: ProductGalleryProps = {
  title: "Món yêu thích",
  description: "Món ăn cao cấp, xa xỉ, sử dụng nguyên liệu quý hiếm và có cách chế biến cầu kỳ, tinh tế.",
  products: []
}

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
        <LazyPage  initPGOne={initPGOne} />
      </div>
    </>
  );
}
