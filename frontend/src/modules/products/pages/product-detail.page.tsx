import { IProduct } from '@/lib/schemas/product.schema';
import ProductDetailForm from '../components/product-form/product-update.form';

type ProductDetailPageProps = {
    product: IProduct
}
export default async function ProductDetailPage({product}: ProductDetailPageProps) {
    let pageTitle = 'Product Detail';
    return <ProductDetailForm product={product} pageTitle={pageTitle} />;
}
