import CustomerCreateForm from "../components/customer-form/customer-create.form";

export default async function CustomerPage() {
  let pageTitle = 'Create New Customer';
  return <CustomerCreateForm pageTitle={pageTitle} />;
}
