import { Metadata } from 'next';
import CategoryPage from '@/modules/categorys/category-page';
import { productUserService } from '@/lib/services/product.service';
import { categoryUserService } from '@/lib/services/category.service';
import { SearchParams } from 'nuqs/server';
import { authUserService } from '@/lib/services/auth.service';
import { IAuth } from '@/lib/schemas/auth.schema';
import { loadCategoriesSearchParams } from '@/lib/customs/searchServerSideParams';

export const metadata: Metadata = {
  title: 'Danh mục sản phẩm',
  description: `Khám phá danh mục sản phẩm đa dạng, được tuyển chọn kỹ lưỡng để đáp ứng mọi nhu cầu của bạn.
Từ các sản phẩm công nghệ tiên tiến đến những vật dụng thiết yếu hằng ngày – tất cả đều có tại đây!`,
};

type PageProps = {
  searchParams: Promise<SearchParams>;
}
export default async function Page({ searchParams }: PageProps) {
  const { encryption } = await loadCategoriesSearchParams(searchParams)
  let auth: IAuth | null = null
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
  return <CategoryPage products={products} categories={categories} auth={auth} />;
}
