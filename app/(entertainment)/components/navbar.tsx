import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className='flex max-h-[960px] flex-col rounded-[20px] bg-semi-dark-blue p-7'>
      <nav className='flex flex-auto flex-col'>
        <Link href='/' className='mb-16'>
          <i className='logo'></i>
        </Link>
        <Link href='/home'>
          <Button variant='icon'>
            <i className='icon icon-nav-home'></i>
          </Button>
        </Link>
        <Link href='/movies'>
          <Button variant='icon'>
            <i className='icon icon-nav-movies'></i>
          </Button>
        </Link>
        <Link href='/tv-series'>
          <Button variant='icon'>
            <i className='icon icon-nav-tv-series'></i>
          </Button>
        </Link>
        <Link href='/bookmarked'>
          <Button variant='icon'>
            <i className='icon icon-nav-bookmark'></i>
          </Button>
        </Link>
      </nav>

      <Avatar>
        <AvatarImage src='/assets/image-avatar.png' />
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
    </div>
  );
}
