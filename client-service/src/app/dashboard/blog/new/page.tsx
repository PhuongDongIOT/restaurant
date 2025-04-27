import { Suspense } from 'react';
import FormCardSkeleton from '@/components/molecules/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import { categoryService } from '@/lib/services/category.service';
import BlogCreatePage from '@/modules/blog/pages/blog-create.page';

export const metadata = {
  title: 'Bảng điều khiển: Xem sản phẩm'
};

type PageProps = { params: Promise<{ productId: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { data: categories } = await categoryService.filters();

  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <BlogCreatePage />
        </Suspense>
      </div>
    </PageContainer>
  );
}
