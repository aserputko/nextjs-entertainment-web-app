import { Input } from '@/components/ui/input';

type SearchProps = {
  placeholder?: string;
};

export function Search({ placeholder }: SearchProps) {
  return (
    <div className='mb-5 flex w-full items-center'>
      <i className='icon icon-search'></i>
      <Input type='search' placeholder={placeholder} />
    </div>
  );
}
