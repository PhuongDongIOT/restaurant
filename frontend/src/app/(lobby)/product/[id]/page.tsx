import ProductOverview from '@/features/categorys/components/product-overviews';
import { productUserService } from '@/lib/services/product.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

type PageProps = {
  params: {
    id: string;
  };
};
export default async function Page({ params }: PageProps) {
  const { id } = params;
  const { data: product } = await productUserService.details(id);
  return (
    <ProductOverview product={product} />
  );
}