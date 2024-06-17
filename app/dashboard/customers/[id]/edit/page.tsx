import Form from '@/app/dashboard/customers/edit-form';
import Breadcrumbs from '@/app/dashboard/customers/breadcrumbs';
import { fetchCustomerById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [customers] = await Promise.all([fetchCustomerById(id)]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
