import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { poppins } from '@/app/assets/fonts';
import { fetchLatestMontir } from '@/app/lib/data';
export default async function LatestMontir() {
  const latestMontir = await fetchLatestMontir();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${poppins.className} mb-4 text-xl md:text-2xl`}>
        Latest Montir
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-yellow-700 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {latestMontir.map((montir, i) => {
            return (
              <div
                key={montir.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <p
                  className={`${poppins.className} truncate text-sm font-medium md:text-base`}
                >
                  {montir.nama_montir}
                </p>
                <p
                  className={`${poppins.className} truncate text-sm font-medium md:text-base`}
                >
                  {montir.keahlian}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-neutral-50" />
          <h3 className="ml-2 text-sm text-white ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
