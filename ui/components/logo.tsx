import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { notosans } from '@/ui/fonts';

export default function Logo() {
  return (
    <div
      className={`${notosans.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      {/* <p className="text-[20px]">Whizworks</p> */}
    </div>
  );
}
