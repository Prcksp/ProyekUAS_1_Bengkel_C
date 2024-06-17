'use client';
import {
  EnvelopeIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { Button } from '@/app/assets/button';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch}>
      {/* <div className="mb-40 mt-40 flex w-full flex-col rounded-2xl bg-white shadow-2xl md:flex-row"> */}
      <div className="mb-40 mt-40 w-full rounded-2xl bg-gray-400 p-5">
        <div className="text-left font-bold">
          <span className="text-black">
            RJP <span className="text-gray-800">Workshop</span>
          </span>
        </div>
        <div className="py-10">
          <h2 className="text-3xl font-bold text-black">Sign in to Account</h2>
          <div className="mb-2 inline-block w-10 border-2 border-black"></div>
          <p className="m-1 text-gray-90">Enter your Email</p>
          <div className="flex flex-col items-center">
            <div className="w-full bg-gray-400 p-2">
              {/* USERNAME */}
              <div className="relative mb-5">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 mb-3 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              {/* PASSWORD */}
              <div className="relative mb-5">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  minLength={6}
                />
                {/* <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 mb-3 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 mb-3 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              <LoginButton />
              <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
              >
                {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <div className="flex items-center justify-center">
      <Button
        className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-black"
        aria-disabled={pending}
      >
        Log in
      </Button>
    </div>
  );
}
