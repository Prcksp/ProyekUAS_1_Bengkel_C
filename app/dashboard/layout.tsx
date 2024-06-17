import { Navbar } from '@/app/pages/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden">
      <Navbar />
      <div className="flex-grow bg-emerald-200 p-6 md:overflow-y-auto md:p-12 ">
        {children}
      </div>
    </div>
  );
}
