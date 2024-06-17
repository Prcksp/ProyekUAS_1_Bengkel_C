'use client';

import Link from 'next/link';
import { MontirForm } from '@/app/lib/definitions';
import { useFormState } from 'react-dom';
import { Button } from '@/app/assets/button';
import { updateMontir } from '@/app/lib/actions';
import {
  UserCircleIcon,
  InboxArrowDownIcon,
} from '@heroicons/react/24/outline';

export default function Form({ montir }: { montir: MontirForm }) {
  const initialState = { message: null, errors: {} };
  const updateMontirWithId = updateMontir.bind(null, montir.id);
  const [state, dispatch] = useFormState(updateMontirWithId, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label
            htmlFor="nama_montir"
            className="mb-2 block text-sm font-medium"
          >
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nama_montir"
                name="nama_montir"
                type="text"
                placeholder="Fill name"
                defaultValue={montir.nama_montir}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="nomor_telepon"
            className="mb-2 block text-sm font-medium"
          >
            Phone Number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nomor_telepon"
                name="nomor_telepon"
                type="number"
                step="0.01"
                defaultValue={montir.nomor_telepon}
                placeholder="Fill Phone Number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="keahlian" className="mb-2 block text-sm font-medium">
            Keahlian
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="keahlian"
                name="keahlian"
                type="text"
                placeholder="Fill Skill"
                defaultValue={montir.keahlian}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/montir"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button
          className="items-center bg-yellow-400 hover:bg-yellow-600"
          type="submit"
        >
          Edit Montir
        </Button>
      </div>
    </form>
  );
}
