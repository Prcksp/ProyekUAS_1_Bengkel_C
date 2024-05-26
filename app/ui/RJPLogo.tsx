import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { lilita_One } from '@/app/ui/fonts';

export default function RJPLogo() {
  return (
    <div
      className={`${lilita_One.className} flex flex-row items-center leading-none text-white`}
    >
      <WrenchScrewdriverIcon className="h-12 w-12 rotate-[90deg]" />
      <p className="text-[44px]">RJP</p>
    </div>
  );
}
