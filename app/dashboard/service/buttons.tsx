import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteService } from '@/app/lib/actions';

export function CreateService() {
  return (
    <Link
      href="/dashboard/service/create"
      className="flex h-10 items-center rounded-lg bg-gray-50 px-4 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Service</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateService({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/service/${id}/edit`}
      className="rounded-md border bg-yellow-400 p-2 hover:bg-yellow-600"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteService({ id }: { id: string }) {
  const deleteServiceWithId = deleteService.bind(null, id);
  return (
    <form action={deleteServiceWithId}>
      <button className="rounded-md border bg-red-600 p-2 hover:bg-red-700">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
