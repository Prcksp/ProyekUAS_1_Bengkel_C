import React from 'react';
import Search from '@/app/assets/search';
import Table from './table';
import Pagination from './pagination';
import { Suspense } from 'react';
import { fetchStockPages } from '@/app/lib/data';
import { poppins } from '@/app/assets/fonts';
import { Metadata } from 'next';
import { CreateStock } from './buttons';

export const metadata: Metadata = {
  title: 'Stock',
};

export default async function stockPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // const totalPages = await fetchStockPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${poppins.className} text-2xl`}>Stok</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search sukucadang..." />
        <CreateStock />
      </div>
      <Suspense key={query + currentPage}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
