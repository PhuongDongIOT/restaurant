import { kv } from '@vercel/kv';
// import { Metadata } from 'next'
import { Hero } from './_components/hero';
import { ProductCategory } from './_components/product-category';
import { ProductGallery, ProductGalleryProps } from './_components/product-gallery';
import { fetchAndCacheBanners } from '@/lib/caches/banners';
import { fetchAndCacheProducts } from '@/lib/caches/products';
import MapBox from './_components/map-box';
import { BannerFooter } from './_components/banner-footer';
import { ProductTrend } from './_components/product-trend';
import { CategoryTrend } from './_components/category-trend';
import { ProductCommon } from './_components/product-common';
import dynamic from 'next/dynamic';
// export const metadata: Metadata = {
//   title: 'Bánh Cuốn Hoàng Vũ | Ngon Chuẩn Vị Nhà Làm',
//   description: 'Khám phá hương vị bánh cuốn truyền thống tại Bánh Cuốn Hoàng Vũ – mỏng mịn, nóng hổi, chuẩn vị quê nhà.'
// };

// const ComponentA = dynamic(() => import('./_components/banner-footer'))
// const ComponentB = dynamic(() => import('./_components/product-trend'))

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
        <CategoryTrend  {...initPGOne} title='Danh mục phổ biến'/>
        <ProductCategory {...initPGOne} title='Món ăn phổ biến'/>
        <ProductCommon  {...initPGOne} title='Món ăn phổ biến'/>
        <ProductGallery {...initPGOne} />
        <BannerFooter src="/images/banner-hot-port.jpg" />
        <MapBox />
      </div>
    </>
  );
}
