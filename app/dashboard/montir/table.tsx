import { fetchFilteredMontir } from '@/app/lib/data';
import { DeleteMontir, UpdateMontir } from './buttons';

export default async function MontirTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const montir = await fetchFilteredMontir(query, currentPage);

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {montir?.map((montir) => (
                  <div
                    key={montir.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex flex-col">
                        <p className="text-xs">Phone Number</p>
                        <p className="font-medium">{montir.nama_montir}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Plate Number</p>
                        <p className="font-medium">{montir.nomor_telepon}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs">Plate Number</p>
                        <p className="font-medium">{montir.keahlian}</p>
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
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Phone Number
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Keahlian
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {montir.map((montir, index) => (
                    <tr key={montir.id} className="group">
                      <td className="w-6 whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black sm:pl-6">
                        {montir.nama_montir}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {montir.nomor_telepon}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {montir.keahlian}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 pr-3">
                        <div className="flex gap-3">
                          <UpdateMontir id={montir.id} />
                          <DeleteMontir id={montir.id} />
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
