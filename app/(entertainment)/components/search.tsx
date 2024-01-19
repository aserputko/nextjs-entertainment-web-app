'use client';

import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export const SEACRH_QUERY_KEY = 's';

type SearchProps = {
  placeholder?: string;
};

export function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set(SEACRH_QUERY_KEY, term);
    } else {
      params.delete(SEACRH_QUERY_KEY);
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const defaultValue = searchParams.get(SEACRH_QUERY_KEY)?.toString();

  return (
    <div className='mb-5 flex w-full items-center'>
      <i className='icon icon-search'></i>
      <Input
        type='search'
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
