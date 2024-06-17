import Form from '@/app/dashboard/montir/edit-form';
import Breadcrumbs from '@/app/dashboard/customers/breadcrumbs';
import { fetchMontirById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [montir] = await Promise.all([fetchMontirById(id)]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Montir', href: '/dashboard/montir' },
          {
            label: 'Edit Customer',
            href: `/dashboard/montir/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form montir={montir} />
    </main>
  );
}
