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
  title: 'Danh mục sản phẩm - Bánh cuốn Anh Vũ',
  description: 'Khám phá các loại bánh cuốn và đặc sản truyền thống được yêu thích tại Bánh cuốn Anh Vũ.',
  openGraph: {
    title: 'Danh mục sản phẩm - Bánh cuốn Anh Vũ',
    description: 'Khám phá các dòng bánh cuốn ngon, chuẩn vị Hà Nội – phục vụ bữa sáng, bữa xế lý tưởng.',
    url: 'https://banhcuonanhvu.com/categories',
    siteName: 'Bánh cuốn Anh Vũ',
    images: [
      {
        url: 'https://banhcuonanhvu.com/og-categories.png',
        width: 1200,
        height: 630,
        alt: 'Danh sách các loại bánh cuốn truyền thống',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Danh mục bánh cuốn',
    description: 'Các loại bánh cuốn ngon và truyền thống tại Bánh cuốn Anh Vũ.',
    images: ['https://banhcuonanhvu.com/og-categories.png'],
  },
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
  const products = await fetchAndCacheProducts();

  // Fetch và cache danh mục
  const categories = await fetchAndCacheCategories();

  return { auth, products, categories };
}
type PageProps = {
  searchParams: Promise<SearchParams>;
}
export default async function Page({ searchParams }: PageProps) {
  const { auth, products, categories } = await initData(searchParams, kv);
  return <CategoryPage products={products} categories={categories} auth={auth} />;
}
