import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

export default function Search({ className, placeholder }: any) {
  return (
    <div className={clsx('relative flex flex-1 flex-shrink-0', className)}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
