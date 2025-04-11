import { searchParamsCache } from '@/lib/customs/searchparams';
import { DataTable as CustomerTable } from '@/components/ui/table/data-table';
import { columns } from '../components/product-tables/columns';
import { userService } from '@/lib/services/user.service';

type CustomersPage = {};

export default async function CustomersPage({ }: CustomersPage) {
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

  const { data: users } = await userService.filters({
    queryParams: {
      page: 1
    }
  });

  return (
    <CustomerTable
      columns={columns}
      data={users ?? []}
      totalItems={100}
    />
  );
}
