import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { inter, kanit, anton } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
// import { useState } from 'react';



export default function Page() {
  return (
    <main className='relative min-h-screen flex-col p-6'>
      <Image
             src="/bengkel02.png"
             
            layout="fill"
            objectFit="cover" 
            className='absolute
             z-0'
             
        
            alt="Background image"
          />
        <nav className='fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-transparent'>
        <div className="flex items-center gap-5 self-start rounded-lg bg-gray-600 px-2 py-3 text-sm font-large text-white md:text-base">
          {/* <div className='flex justify-between p-5 '> */}
            <div className={`${kanit.className} text-white flex antialiased items-center `}>
            <Image
             src="/Repair_Hand_Logo_01.png"
             width={95} 
             height={95}
            className='mx-2'
        
            alt="logo image"
          />
            {/* <p className={`${kanit.className} text-black text-2xl`}>Bengkel HTS </p> */}
            <div className="flex items-center gap-5 self-start rounded-lg px-5 py-10 text-lg font-bold text-white md:text-base">
              RPJ Workshop
           </div>
            </div>
          
          <div className='flex items-center space-x-5'>
            
          <Link
        href="/login"
        className="absolute top-5 right-5 mt-4 mr-4 flex items-center gap-5 rounded-lg  px-6 py-3 text-sm font-medium text-white hover:text-gray-950 md:text-base"
      >
        <span>Log in</span>
        <ArrowRightIcon className="w-8 md:w-6" />
      </Link>

          {/* <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-8 md:w-6" />
          </Link>
           */}
          
          </div>
          </div>
        </nav>
        <div className='absolute mx-96 my-52'>
          <p className={`${kanit.className} text-white`}>Bengkel Nih Deck </p>
          <p className={`${anton.className} text-white text-4xl`}> RPJ Workshop </p>
          <p className={`${anton.className} text-white text-4xl`}> ADMIN DASHBOARD </p>
          <Link 
            href='/dashboard'
          >
            <h1
              className={`${kanit.className} antialiased flex text-white text- [20px] hover:text-gray-950`}
                        >
                          <span>Dashboard</span>
                          <ArrowRightIcon className='w-6 mx-2'/>
                        </h1>
          </Link>
        </div>
    </main>
  );
}