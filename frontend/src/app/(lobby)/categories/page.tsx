import { Metadata } from 'next';
import CategoryPage from '@/features/categorys/category-page';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

export default async function Page() {
  return <CategoryPage />;
}
