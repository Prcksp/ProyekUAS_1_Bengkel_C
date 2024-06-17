import Form from '@/app/dashboard/stock/edit-form';
import Breadcrumbs from '@/app/dashboard/stock/breadcrums';
import { fetchStockById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [stock] = await Promise.all([fetchStockById(id)]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Stok', href: '/dashboard/stock' },
          {
            label: 'Edit Stok',
            href: `/dashboard/stock/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form stock={stock} />
    </main>
  );
}
