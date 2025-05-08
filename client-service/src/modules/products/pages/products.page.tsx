'use client'

import { DataTable as ProductTable } from '@/components/ui/table/data-table';
import { columns } from '../components/product-tables/columns';

type ProductListingPage = {
  products: any;
};
export default function ProductListingPage({ products }: ProductListingPage) {
return (
    <ProductTable
      columns={columns}
      data={products ?? []}
      totalItems={100}
    />
  );
}
