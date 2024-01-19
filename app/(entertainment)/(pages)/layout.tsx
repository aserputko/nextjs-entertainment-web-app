import { Navbar } from '../components/navbar';

export default function EntertainmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full flex-auto'>
      <Navbar />

      <div className='flex flex-auto flex-col pl-9'>{children}</div>
    </div>
  );
}
