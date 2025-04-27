import { Suspense } from 'react';
import FormCardSkeleton from '@/components/molecules/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import { productService } from '@/lib/services/product.service';
import BlogDetailPage from '@/modules/blog/pages/blog-detail.page';

export const metadata = {
  title: 'Bảng điều khiển: Xem tin tức'
};

type PageProps = { params: Promise<{ productId: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  
  const {data: product} = await productService.details(params.productId);

  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <BlogDetailPage blog={product}/>
        </Suspense>
      </div>
    </PageContainer>
  );
}
