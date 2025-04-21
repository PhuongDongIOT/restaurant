import FormCardSkeleton from '@/components/molecules/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import { Suspense } from 'react';
import ProductDetailPage from '@/modules/products/pages/product-detail.page';
import { productService } from '@/lib/services/product.service';

export const metadata = {
  title: 'Dashboard : Product View'
};

type PageProps = { params: Promise<{ productId: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  
  const {data: product} = await productService.details(params.productId);

  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <ProductDetailPage  product={product}/>
        </Suspense>
      </div>
    </PageContainer>
  );
}
