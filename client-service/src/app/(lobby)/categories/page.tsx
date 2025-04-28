import { Metadata } from 'next';
import CategoryPage from '@/modules/categorys/category-page';
import { SearchParams } from 'nuqs/server';
import { authUserService } from '@/lib/services/auth.service';
import { IAuth } from '@/lib/schemas/auth.schema';
import { loadCategoriesSearchParams } from '@/lib/customs/searchServerSideParams';
import { fetchAndCacheProducts } from '@/lib/caches/products';
import { fetchAndCacheCategories } from '@/lib/caches/categories';
import { kv } from '@vercel/kv';

export const metadata: Metadata = {
  title: 'Danh mục sản phẩm',
  description: `Khám phá danh mục sản phẩm đa dạng, được tuyển chọn kỹ lưỡng để đáp ứng mọi nhu cầu của bạn.
Từ các sản phẩm công nghệ tiên tiến đến những vật dụng thiết yếu hằng ngày – tất cả đều có tại đây!`,
};

async function initData(searchParams: any, kv: any) {
  const { encryption } = await loadCategoriesSearchParams(searchParams);
  let auth: IAuth | null = null;

  if (encryption) {
    try {
      const formData = new FormData();
      formData.append('email', encryption);
      const { data } = await authUserService.quickLogin(formData)
      if (data) auth = data
    } catch (error) {
      console.log(error);
    }
  }
  // Fetch và cache sản phẩm
  const products = await fetchAndCacheProducts(kv);

  // Fetch và cache danh mục
  const categories = await fetchAndCacheCategories(kv);

  return { auth, products, categories };
}
type PageProps = {
  searchParams: Promise<SearchParams>;
}
export default async function Page({ searchParams }: PageProps) {
  const { auth, products, categories } = await initData(searchParams, kv);
  return <CategoryPage products={products} categories={categories} auth={auth} />;
}
