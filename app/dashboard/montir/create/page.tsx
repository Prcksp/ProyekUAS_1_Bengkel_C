import Form from '@/app/dashboard/montir/create-form';
import Breadcrumbs from '@/app/dashboard/montir/breadcrumbs';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Montir', href: '/dashboard/montir' },
          {
            label: 'Create Montir',
            href: '/dashboard/montir/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
