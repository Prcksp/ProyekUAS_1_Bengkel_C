import Image from 'next/image';
import RJPLogo from '../ui/RJPLogo';
import LoginForm from '@/app/ui/login-form';
import { AtSymbolIcon, EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';


 
export default function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
     

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center' >
        <div className='bg-white rounded-2xl shadow-2xl flex flex-row w-2/3 max-w-4xl'>
        <div className='w-3/5 p-5 bg-gray-400'>
            <div className='text-left font-bold'>
             <span className='text-black'>RJP</span><span className='text-gray-800'>Workshop</span> 
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-black'>
                Sign in to Account
              </h2>
              <div className='border-2 w-10 border-black inline-block mb-2'></div>
              <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <Image 
                    src="/instagramz.svg"
                    alt="ig"
                    width={34}
                    height={34}
                  />
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <Image 
                    src="/youtubez.svg"
                    alt="yt"
                    width={34}
                    height={34}
                  />
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <Image 
                    src="/facebookz.svg"
                    alt="fb"
                    width={34}
                    height={34}
                  />
                </a>
              </div>
              <p className='m-1 text-gray-90'> Enter your Email</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-400 w-64 p2'>
                 <div>
            
                   <div className="relative">
                     <input
                       className="peer block w-72 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                       id="email"
                       type="email"
                       name="email"
                       placeholder="Enter your email "
                       required
                     />
                     <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 mb-3 " />
            </div>
                 </div>
              
            <div className="mt-2">
              <div className='flex flex-col items-start mb-2'>
                     <div className="relative">
                       <input
                         className="peer block  w-72 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 "
                         id="password"
                         type="password"
                         name="password"
                         placeholder="Enter your password"
                         required
                         minLength={6}
                       />
                       <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 mb-3" />
                     </div>
                </div>
              </div>
              <div className='flex justify-between w-64 mb-5'>
                <label className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-1'/>Remember Me</label>
                <a href='#' className='text-xs'>Forgot Password</a>
              </div>
              <a href='#' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black'>Sing In</a>
                </div>
          </div> 
         </div>
      </div>


        <div className='w-2/5 bg-gray-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className='text-3xl font-bold mb-2'>Welcome!</h2>
          <div className='border-2 w-10 border-white inline-block mb-2'></div>
            <p className='mb-10'>Isi Data pribadi anda dan memulai menjadi teman kita</p>
            <a href='#' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black'>Sing Up</a>
          </div>
        </div>
      </main>

    </div>
   
  );
}