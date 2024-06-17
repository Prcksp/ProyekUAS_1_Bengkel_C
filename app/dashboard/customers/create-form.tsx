import Link from 'next/link';
import {
  UserCircleIcon,
  InboxArrowDownIcon,
  PhoneIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import { CustomerForm } from '@/app/lib/definitions';
import { useFormState } from 'react-dom';
import { Button } from '@/app/assets/button';
import { CustomerField } from '@/app/lib/definitions';
import { createCustomer } from '@/app/lib/actions';

export default function Form() {
  return (
    <form action={createCustomer}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Fill name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Amount */}
        {/* <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                step="0.01"
                placeholder="Fill email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div> */}

        <div className="mb-4">
          <label
            htmlFor="phonenumber"
            className="mb-2 block text-sm font-medium"
          >
            Phone Number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phonenumber"
                name="phonenumber"
                type="number"
                step="0.01"
                placeholder="Fill Phone Number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="platenumber"
            className="mb-2 block text-sm font-medium"
          >
            Plate Number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="platenumber"
                name="platenumber"
                type="text"
                placeholder="Fill Plate Number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <ClipboardDocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Upload Image
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image"
                name="image"
                type="file"
                step="0.01"
                placeholder="image"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InboxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button
          className="items-center bg-blue-400 hover:bg-blue-600"
          type="submit"
        >
          Create Customer
        </Button>
      </div>
    </form>
  );
}
