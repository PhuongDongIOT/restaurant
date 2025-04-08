import { searchParamsCache } from '@/lib/customs/searchparams';
import { DataTable as ProductTable } from '@/components/ui/table/data-table';
import { columns } from '../components/product-tables/columns';
import { productService } from '@/lib/services/product.service';

type ProductListingPage = {};

export default async function ProductListingPage({ }: ProductListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');
  const categories = searchParamsCache.get('categories');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(categories && { categories: categories })
  };

  const { data: products } = await productService.filters({
    queryParams: filters
  });

  return (
    <ProductTable
      columns={columns}
      data={products ?? []}
      totalItems={100}
    />
  );
}
