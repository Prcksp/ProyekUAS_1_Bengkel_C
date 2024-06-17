import { UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline';
import { poppins } from '@/app/assets/fonts';
import { fetchCardData } from '@/app/lib/data';
import { service } from '@/app/lib/placeholder-data';

const iconMap = {
  customers: UserGroupIcon,
  montir: InboxIcon,
  sukucadang: InboxIcon,
  service: InboxIcon,
};

export default async function CardWrapper() {
  const { numberOfCustomers, numberOfMontir, numberOfStok, numberOfService } =
    await fetchCardData();
  return (
    <>
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
      <Card title="Total Montir" value={numberOfMontir} type="montir" />
      <Card title="Total Stok" value={numberOfStok} type="sukucadang" />
      <Card title="Total Service" value={numberOfService} type="service" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'customers' | 'montir' | 'sukucadang' | 'service';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-indigo-500 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-amber-300" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${poppins.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
