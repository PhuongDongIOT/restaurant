import ProductOverview from '@/features/categorys/components/product-overviews';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

export default async function Page() {
  return (
    <>
      <ProductOverview />
    </>
  );
}