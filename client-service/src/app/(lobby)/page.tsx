import { kv } from '@vercel/kv';
import { Metadata } from 'next'
import { Hero } from './_components/hero';
import { ProductCategory } from './_components/product-category';
import { ProductGallery, ProductGalleryProps } from './_components/product-gallery';
import { productUserService } from '@/lib/services/product.service';
import { bannerService } from '@/lib/services/banner.service';
import { fetchAndCacheBanners } from '@/lib/caches/banners';
import { fetchAndCacheProducts } from '@/lib/caches/products';

export const metadata: Metadata = {
  title: 'Bánh Cuốn Hoàng Vũ | Ngon Chuẩn Vị Nhà Làm',
  description: 'Khám phá hương vị bánh cuốn truyền thống tại Bánh Cuốn Hoàng Vũ – mỏng mịn, nóng hổi, chuẩn vị quê nhà.'
};

const initProductGallery: ProductGalleryProps = {
  title: "Món Thượng hạng",
  description: "Món ăn cao cấp, xa xỉ, sử dụng nguyên liệu quý hiếm và có cách chế biến cầu kỳ, tinh tế.",
  products: []
}
// Main logic
async function initData(kv: any, productUserService: any, bannerService: any) {
  const products = await fetchAndCacheProducts(kv, 1);
  const banners = await fetchAndCacheBanners(kv, 1);

  const initPGOne = { ...initProductGallery, products: products ?? [] };
  return { products, banners, initPGOne };
}

export default async function Page() {
  const { banners, initPGOne } = await initData(kv, productUserService, bannerService);

  return (
    <>
      <Hero items={banners} />
      <div className='py-8 flex flex-col gap-12 mx-auto max-w-6xl'>
        <ProductCategory {...initPGOne} />
        <ProductGallery {...initPGOne} />
        <ProductGallery {...initPGOne} />
      </div>
    </>
  );
}
