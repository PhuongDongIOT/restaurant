import { IProduct } from '@/lib/schemas/product.schema';
import BlogDetailForm from '../components/blog-form/blog-update.form';

type BlogDetailPageProps = {
    blog: IProduct
}
export default async function BlogDetailPage({ blog }: BlogDetailPageProps) {
    let pageTitle = 'Chi tiết sản phẩm';
    return <BlogDetailForm blog={blog} pageTitle={pageTitle} />;
}
