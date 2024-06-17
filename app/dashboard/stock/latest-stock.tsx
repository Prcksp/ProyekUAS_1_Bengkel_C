import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { poppins } from '@/app/assets/fonts';
import { fetchLatestStock } from '@/app/lib/data';
export default async function LatestStock() {
  const latestStock = await fetchLatestStock();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${poppins.className} mb-4 text-xl md:text-2xl`}>
        Latest Stock
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-yellow-700 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {latestStock.map((stock, i) => {
            return (
              <div
                key={stock.id}
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
                  {stock.sukucadang_name}
                </p>
                <p
                  className={`${poppins.className} truncate text-sm font-medium md:text-base`}
                >
                  {stock.stok}
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
