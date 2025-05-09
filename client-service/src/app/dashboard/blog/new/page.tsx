import { Suspense } from 'react';
import FormCardSkeleton from '@/components/molecules/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import BlogCreatePage from '@/modules/blog/pages/blog-create.page';

export default async function Page() {
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
