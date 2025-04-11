import ProductOverview from '@/modules/categorys/components/product-overviews';
import { productUserService } from '@/lib/services/product.service';
import { Metadata } from 'next';
import { IProduct } from '@/lib/schemas/product.schema';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

type PageProps = {
  params: Promise<{ id: string }>;
};
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  let product: IProduct | null = null
  try {
    const { data } = await productUserService.details(id);
    if(data) product = data
  } catch (error) {
    
  }
  return (
    <ProductOverview product={product} />
  );
}