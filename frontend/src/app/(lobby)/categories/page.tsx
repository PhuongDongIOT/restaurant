import { Metadata } from 'next';
import CategoryPage from '@/features/categorys/category-page';
import { productUserService } from '@/lib/services/product.service';
import { categoryUserService } from '@/lib/services/category.service';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

export default async function Page() {
  const { data: products } = await productUserService.filters({
    queryParams: {
      page: 1
    }
  })
  const { data: categories } = await categoryUserService.filters({
    queryParams: {
      page: 1
    }
  })
  return <CategoryPage products={products} categories={categories} />;
}
