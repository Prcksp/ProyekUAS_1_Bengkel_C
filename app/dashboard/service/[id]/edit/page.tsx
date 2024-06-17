import Form from '@/app/dashboard/service/edit-form';
import Breadcrumbs from '@/app/dashboard/service/breadcrumbs';
import {
  fetchServiceById,
  fetchCustomers,
  fetchMontir,
  fetchStock,
} from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [service, customers, montir, stock] = await Promise.all([
    fetchServiceById(id),
    fetchCustomers(),
    fetchMontir(),
    fetchStock(),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Service', href: '/dashboard/service' },
          {
            label: 'Edit Service',
            href: `/dashboard/service/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form
        service={service}
        customers={customers}
        montir={montir}
        stok={stock}
      />
    </main>
  );
}
