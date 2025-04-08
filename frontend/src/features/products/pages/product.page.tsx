import ProductCreateForm from '../components/product-form/product-create.form';

export default async function ProductPage() {
  let pageTitle = 'Create New Product';
  return <ProductCreateForm pageTitle={pageTitle} />;
}
