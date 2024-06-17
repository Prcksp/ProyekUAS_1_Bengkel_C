import Form from '@/app/dashboard/service/create-form';
import Breadcrumbs from '@/app/dashboard/service/breadcrumbs';
import { fetchCustomers, fetchMontir, fetchStock } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();
  const montir = await fetchMontir();
  const stock = await fetchStock();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Service', href: '/dashboard/service' },
          {
            label: 'Create Service',
            href: '/dashboard/service/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} montir={montir} stok={stock} />
    </main>
  );
}
