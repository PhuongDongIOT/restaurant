// import Link from 'next/link';
import { SearchParams } from 'nuqs/server';
import PageContainer from '@/components/layout/page-container';
// import { Button, buttonVariants } from '@/components/ui/button';
// import { Heading } from '@/components/ui/heading';
// import { Separator } from '@/components/ui/separator';
import { searchParamsCache, serialize } from '@/lib/customs/searchparams';
// import { cn } from '@/lib/utils';
// import { IconPlus } from '@tabler/icons-react';
// import { CategoryCreateDialog } from '@/modules/categorys/components/category-dialog/category-create.dialog';
import { categoryService } from '@/lib/services/category.service';
import BlogListingPage from '@/modules/blog/pages/blogs.page';
// import { CategoryBlogCreateDialog } from '@/modules/categorys-blogs/components/category-dialog/category-blog-create.dialog';
import BlogTableAction from '@/modules/blog/components/blog-tables/blog-table-action';
// import { BlogCreateDialog } from '@/modules/blog/components/blog-dialog/blog-create-dialog';
import { blogService } from '@/lib/services/blog.service';

export const metadata = {
  title: 'Bảng điều khiển: Tin tức'
};

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

  const { data: { posts: blogs } } = await blogService.filters({
    queryParams: filters
  });

  return (
    <PageContainer scrollable={false}>
      <div className='flex flex-1 flex-col space-y-4'>
        {/* <div className='flex items-start justify-between'>
          <Heading
            title='Tin túc'
            description='Quản lý tin tức (Chức năng của bảng phía máy chủ.)'
          />
          <div className='flex gap-2'>
            <CategoryBlogCreateDialog>
              <Button
                className='text-xs md:text-sm'
              >
                <IconPlus className='mr-2 h-4 w-4' />Thể loại mới
              </Button>
            </CategoryBlogCreateDialog>
            <CategoryCreateDialog>
              <Button
                className='text-xs md:text-sm'
              >
                <IconPlus className='mr-2 h-4 w-4' />Thẻ mới
              </Button>
            </CategoryCreateDialog>
            <BlogCreateDialog>
              <Button
                className={cn(buttonVariants(), 'text-xs md:text-sm')}
              >
                <IconPlus className='mr-2 h-4 w-4' />Tin tức nhanh
              </Button>
            </BlogCreateDialog>
            <Link
              href='/dashboard/blog/new'
              className={cn(buttonVariants(), 'text-xs md:text-sm')}
            >
              <IconPlus className='mr-2 h-4 w-4' />Tin tức mới
            </Link>
          </div>
        </div>
        <Separator /> */}
        <BlogTableAction categories={categories} />
          <BlogListingPage blogs={blogs} />
      </div>
    </PageContainer>
  );
}
