'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { bookmarkEntertainment, unbookmarkEntertainment } from '../actions/entertainment-actions';

interface MediaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  thumbnail: string;
  name: string;
  year: number;
  category: string;
  rating: string;
  isTrending?: boolean;
  isBookmarked?: boolean;
}

export function MediaCard({
  id,
  thumbnail,
  name,
  year,
  category,
  rating,
  isTrending = false,
  isBookmarked = false,
}: MediaCardProps) {
  async function toggleBookmark(id: string) {
    return isBookmarked ? unbookmarkEntertainment(id) : bookmarkEntertainment(id);
  }

  return (
    <div className='relative flex flex-col'>
      <Button
        variant='bookmark'
        className='absolute right-4 top-4'
        onClick={async () => await toggleBookmark(id)}
      >
        <i
          className={cn('icon', {
            'icon-bookmark-empty': !isBookmarked,
            'icon-bookmark-full': isBookmarked,
          })}
        ></i>
      </Button>
      <Image
        className='mb-2 w-full rounded-lg'
        src={thumbnail}
        width={470}
        height={230}
        alt={name}
      />

      <div className={cn('flex flex-col', { 'absolute bottom-4 left-4': isTrending })}>
        <p className='mb-1'>
          {year} &#8226; {category} &#8226; {rating}
        </p>
        <h4>{name}</h4>
      </div>
    </div>
  );
}
