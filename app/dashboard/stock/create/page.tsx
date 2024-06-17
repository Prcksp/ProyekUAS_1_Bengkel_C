import Form from '@/app/dashboard/stock/create-form';
import Breadcrumbs from '@/app/dashboard/stock/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Stock', href: '/dashboard/stock' },
          {
            label: 'Create Stock',
            href: '/dashboard/stock/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
