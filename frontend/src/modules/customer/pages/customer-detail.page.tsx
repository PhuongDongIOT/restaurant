import CustomerUpdateForm from '../components/customer-form/customer-update.form';
import { IUser } from '@/lib/schemas/user.schema';

type ProductDetailPageProps = {
    customer: IUser
}
export default async function CustomerDetailPage({customer}: ProductDetailPageProps) {
    let pageTitle = 'Customer Detail';
    return <CustomerUpdateForm customer={customer} pageTitle={pageTitle} />;
}
