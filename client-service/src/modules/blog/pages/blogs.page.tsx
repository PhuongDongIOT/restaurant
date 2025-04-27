import { DataTable as BlogTable } from '@/components/ui/table/data-table';
import { columns } from '../components/blog-tables/columns';
import { IBlog } from '@/lib/schemas/blog.schema';

type ProductListingPage = {
  blogs: IBlog[];
};
export default async function BlogListingPage({ blogs }: ProductListingPage) {
  console.log(blogs);
  
  return (
    <BlogTable
      columns={columns}
      data={blogs as any ?? []}
      totalItems={100}
    />
  );
}
