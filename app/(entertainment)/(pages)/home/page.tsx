import { Input } from '@/components/ui/input';

export default async function HomePage() {
  return (
    <>
      <Input type='search' placeholder='Search' className='mb-8 max-w-[500px]' />
    </>
  );
}
