import { fetchFilteredService } from '@/app/lib/data';
import { DeleteService, UpdateService } from './buttons';

export default async function ServiceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const service = await fetchFilteredService(query, currentPage);

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {service?.map((service) => (
                  <div
                    key={service.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex flex-col">
                        <p className="text-xs">Plate Number</p>
                        <p className="font-medium">{service.platenumber}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Nama Montir</p>
                        <p className="font-medium">{service.nama_montir}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Suku Cadang Price</p>
                        <p className="font-medium">{service.amount}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Amount</p>
                        <p className="font-medium">{service.amount}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Cost Service</p>
                        <p className="font-medium">{service.cost_service}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Total</p>
                        <p className="font-medium">{service.total}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Payment</p>
                        <p className="font-medium">{service.payment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-3 py-5 font-medium">
                      No
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                      Plate Number
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Nama Montir
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Suku Cadang Price
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Amount
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Cost Service
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Payment
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {service.map((service, index) => (
                    <tr key={service.id} className="group">
                      <td className="w-6 whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black sm:pl-6">
                        {service.platenumber}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {service.nama_montir}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        Rp.{service.sukucadang_price}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {service.amount}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        Rp.{service.cost_service}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        Rp.{service.total}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {service.payment}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 pr-3">
                        <div className="flex gap-3">
                          <UpdateService id={service.id} />
                          <DeleteService id={service.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
