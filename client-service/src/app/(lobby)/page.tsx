import { Suspense } from 'react';
import { kv } from '@vercel/kv';
import { fetchAndCacheBanners } from '@/lib/caches/banners';
import { fetchAndCacheProducts } from '@/lib/caches/products';
import Hero from './_components/hero';
import LazyPage from './_components/lazy-page';
import ProductTrend from './_components/product-trend';
import type { ProductGalleryProps } from './_components/product-gallery';
import { Skeleton } from '@/components/ui/skeleton';

const initProductGallery: ProductGalleryProps = {
  title: "Món yêu thích",
  description: "Món ăn cao cấp, xa xỉ, sử dụng nguyên liệu quý hiếm và có cách chế biến cầu kỳ, tinh tế.",
  products: []
}

async function initData(kv: any) {
  const [products, banners] = await Promise.all([fetchAndCacheProducts(kv, 1), fetchAndCacheBanners(kv, 1)]);
  const initPGOne = { ...initProductGallery, products: products ?? [] };
  return { products, banners, initPGOne };
}

export default async function Page() {
  const { banners, initPGOne } = await initData(kv);
  return (
    <>
      <Suspense fallback={<Skeleton className='w-screen h-[50vh] md:h-[75vh]' />}>
        <Hero items={banners} />
      </Suspense>
      <div className='py-8 flex flex-col gap-12 mx-auto max-w-6xl'>
        <Suspense fallback={<Skeleton className='w-screen h-[50vh] md:h-[75vh]' />}>
          <ProductTrend {...initPGOne} title='Món ăn đặc sắc' />
        </Suspense>
        <LazyPage initPGOne={initPGOne} />
      </div>
    </>
  );
}
