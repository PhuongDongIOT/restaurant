import { IProduct } from '@/lib/schemas/product.schema';
import { ICategory } from '@/lib/schemas/category.schema';
import { IAuth } from '@/lib/schemas/auth.schema';
import { ResetAuthState } from '../authentication/components/reset-auth-state';
import CategoryProduct from './components/category-product';

type CategoryPageProps = {
  products: IProduct[];
  categories: ICategory[];
  auth: IAuth | null;
}
export default function CategoryPage({ products, categories, auth }: CategoryPageProps) {
  return (
    <div className='block'>
      <div className='border-t'>
        <ResetAuthState auth={auth} />
        <div className='bg-background w-full'>
          <CategoryProduct categories={categories} products={products} />
        </div>
      </div>
    </div>
  );
}
