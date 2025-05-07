import { fetchAndCacheBanners } from '@/lib/caches/banners';
import { fetchAndCacheProducts } from '@/lib/caches/products';
import Hero from './_components/hero';
import LazyPage from './_components/lazy-page';
import ProductTrend from './_components/product-trend';
import type { ProductGalleryProps } from './_components/product-gallery';

const initProductGallery: ProductGalleryProps = {
  title: "Món yêu thích",
  description: "Món ăn cao cấp, xa xỉ, sử dụng nguyên liệu quý hiếm và có cách chế biến cầu kỳ, tinh tế.",
  products: []
}

async function initData() {
  const [products, banners] = await Promise.all([fetchAndCacheProducts(1), fetchAndCacheBanners(1)]);
  const initPGOne = { ...initProductGallery, products: products ?? [] };
  return { products, banners, initPGOne };
}

export default async function Page() {
  const { banners, initPGOne } = await initData();
  
  return (
    <>
      <Hero items={banners} />
      <div className='py-8 flex flex-col gap-12 mx-auto max-w-6xl'>
        {/* <ProductTrend {...initPGOne} title='Món ăn đặc sắc' /> */}
        <LazyPage initPGOne={initPGOne} />
      </div>
    </>
  );
}
