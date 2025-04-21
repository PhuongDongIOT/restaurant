import FormCardSkeleton from '@/components/molecules/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import { Suspense } from 'react';
import ProductPage from '@/modules/products/pages/product.page';
import { categoryService } from '@/lib/services/category.service';

export const metadata = {
  title: 'Dashboard : Product View'
};

type PageProps = { params: Promise<{ productId: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { data: categories } = await categoryService.filters();

  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <ProductPage/>
        </Suspense>
      </div>
    </PageContainer>
  );
}
