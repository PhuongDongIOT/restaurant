import PageContainer from '@/components/layout/page-container';
// import { Button, buttonVariants } from '@/components/ui/button';
// import { Heading } from '@/components/ui/heading';
// import { Separator } from '@/components/ui/separator';
import { searchParamsCache, serialize } from '@/lib/customs/searchparams';
// import { cn } from '@/lib/utils';
// import { IconPlus } from '@tabler/icons-react';
// import Link from 'next/link';
import { SearchParams } from 'nuqs/server';
import ProductListingPage from '@/modules/products/pages/products.page';
import ProductTableAction from '@/modules/products/components/product-tables/product-table-action';
// import { ProductCreateDialog } from '@/modules/products/components/product-dialog/product-create-dialog';
// import { CategoryCreateDialog } from '@/modules/categorys/components/category-dialog/category-create.dialog';
import { categoryService } from '@/lib/services/category.service';
import { productService } from '@/lib/services/product.service';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
  const searchParams = await props.searchParams;
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  // This key is used for invoke suspense if any of the search params changed (used for filters).
  const key = serialize({ ...searchParams });
  const { data: categories } = await categoryService.filters();

    const page = searchParamsCache.get('page');
    const search = searchParamsCache.get('q');
    const pageLimit = searchParamsCache.get('limit');
  
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
    <PageContainer scrollable={false}>
      <div className='flex flex-1 flex-col space-y-4'>
        {/* <div className='flex items-start justify-between'>
          <Heading
            title='Products'
            description='Manage products (Server side table functionalities.)'
          />
          <div className='flex gap-2'>
            <CategoryCreateDialog>
              <Button
                className='text-xs md:text-sm'
              >
                <IconPlus className='mr-2 h-4 w-4' />Thể loại mới
              </Button>
            </CategoryCreateDialog>
            <CategoryCreateDialog>
              <Button
                className='text-xs md:text-sm'
              >
                <IconPlus className='mr-2 h-4 w-4' />Thẻ mới
              </Button>
            </CategoryCreateDialog>
            <ProductCreateDialog>
              <Button
                className={cn(buttonVariants(), 'text-xs md:text-sm')}
              >
                <IconPlus className='mr-2 h-4 w-4' />Sản phẩm nhanh
              </Button>
            </ProductCreateDialog>
            <Link
              href='/dashboard/product/new'
              className={cn(buttonVariants(), 'text-xs md:text-sm')}
            >
              <IconPlus className='mr-2 h-4 w-4' />Sản phẩm mới
            </Link>
          </div>
        </div>
        <Separator /> */}
        <ProductTableAction categories={categories} />
          <ProductListingPage products={products} />
      </div>
    </PageContainer>
  );
}
