import FormCardSkeleton from '@/components/molecules/form-card-skeleton';
import PageContainer from '@/components/layout/page-container';
import { Suspense } from 'react';
import CustomerDetailPage from '@/modules/customer/pages/customer-detail.page';
import { userService } from '@/lib/services/user.service';

export const metadata = {
  title: 'Dashboard : Customer View'
};

type PageProps = { params: Promise<{ customerId: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;

  const { data: user } = await userService.details(params.customerId);

  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<FormCardSkeleton />}>
          <CustomerDetailPage customer={user} />
        </Suspense>
      </div>
    </PageContainer>
  );
}
