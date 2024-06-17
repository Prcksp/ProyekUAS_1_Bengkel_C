'use client';

import {
  UserCircleIcon,
  PhoneIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { Button } from '@/app/assets/button';
import { createService } from '@/app/lib/actions';
import {
  CustomerField,
  MontirField,
  SukucadangField,
} from '@/app/lib/definitions';

export default function Form({
  customers,
  montir,
  stok,
}: {
  customers: CustomerField[];
  montir: MontirField[];
  stok: SukucadangField[];
}) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createService, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label
            htmlFor="id_customer"
            className="mb-2 block text-sm font-medium"
          >
            Choose customer
          </label>
          <div className="relative">
            <select
              id="id_customer"
              name="id_customer"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.id_customer &&
              state.errors.id_customer.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Montir Name */}
        <div className="mb-4">
          <label htmlFor="id_montir" className="mb-2 block text-sm font-medium">
            Choose Montir
          </label>
          <div className="relative">
            <select
              id="id_montir"
              name="id_montir"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="montir-error"
            >
              <option value="" disabled>
                Select a montir
              </option>
              {montir.map((montir) => (
                <option key={montir.id} value={montir.id}>
                  {montir.nama_montir}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.id_montir &&
              state.errors.id_montir.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Sukucadang Name */}
        <div className="mb-4">
          <label
            htmlFor="id_sukucadang"
            className="mb-2 block text-sm font-medium"
          >
            Choose Suku Cadang
          </label>
          <div className="relative">
            <select
              id="id_sukucadang"
              name="id_sukucadang"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="sukucadang-error"
            >
              <option value="" disabled>
                Select a sukucadang
              </option>
              {stok.map((stok) => (
                <option key={stok.id} value={stok.id}>
                  {stok.sukucadang_name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.id_sukucadang &&
              state.errors.id_sukucadang.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Sukucadang Price */}
        <div className="mb-4">
          <label
            htmlFor="sukucadang_price"
            className="mb-2 block text-sm font-medium"
          >
            Suku Cadang Price
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="sukucadang_price"
                name="sukucadang_price"
                type="number"
                step="0.01"
                placeholder="Fill Suku Cadang Price"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

              <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        {/* Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Fill Amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

              <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        {/* Cost Service */}
        <div className="mb-4">
          <label
            htmlFor="cost_service"
            className="mb-2 block text-sm font-medium"
          >
            Cost Service
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="cost_service"
                name="cost_service"
                type="text"
                placeholder="Fill Cost Service"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

              <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        {/* Total */}
        <div className="mb-4">
          <label htmlFor="total" className="mb-2 block text-sm font-medium">
            Total
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="total"
                name="total"
                type="number"
                step="0.01"
                placeholder="Fill Total"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

              <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        {/* Payment */}
        <div className="mb-4">
          <label htmlFor="payment" className="mb-2 block text-sm font-medium">
            Payment
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="payment"
                name="payment"
                type="text"
                placeholder="Fill Payment"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

              <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/service"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button
          className="items-center bg-blue-400 hover:bg-blue-600"
          type="submit"
        >
          Create Service
        </Button>
      </div>
    </form>
  );
}
