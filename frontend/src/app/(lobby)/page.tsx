import { Metadata } from 'next'
import { Hero } from './_components/hero';
import { ProductCategory } from './_components/product-category';
import { ProductGallery, ProductGalleryProps } from './_components/product-gallery';
import { productUserService } from '@/lib/services/product.service';
import { bannerService } from '@/lib/services/banner.service';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

const initProductGallery: ProductGalleryProps = {
  title: "Món Thượng hạng",
  description: "Món ăn cao cấp, xa xỉ, sử dụng nguyên liệu quý hiếm và có cách chế biến cầu kỳ, tinh tế.",
  products: []
}

export default async function Page() {
  const { data: products } = await productUserService.filters({
    queryParams: {
      page: 1
    }
  })

  const { data } = await bannerService.filters();

  const initPGOne = { ...initProductGallery, products: [...products, ...products, ...products, ...products, ...products] }

  return (
    <>
      <Hero items={data} />
      <div className='py-8 flex flex-col gap-12 mx-auto max-w-6xl'>
        <ProductCategory {...initPGOne} />
        <ProductGallery {...initPGOne} />
        <ProductGallery {...initPGOne} />
      </div>
    </>
  );
}
