import { MediaCard } from '@/app/(entertainment)/components/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { EntertainmentEntity } from '../entities/entertainment-entities';

type MediaCardsGridProps = { title: string; entertainments: EntertainmentEntity[] };

export function MediaCardsHorizontalList({ entertainments, title }: MediaCardsGridProps) {
  return (
    <>
      <h1 className='mb-9'>{title}</h1>

      <ScrollArea className='mb-10 h-[238px] min-h-[238px] w-[88vw] whitespace-nowrap'>
        <div className='flex w-max space-x-4'>
          {entertainments.map((item: any) => {
            return (
              <MediaCard
                key={item.id}
                id={item.id}
                name={item.title}
                year={item.year}
                category={item.category}
                rating={item.rating}
                thumbnail={item.thumbnailTrending}
                isBookmarked={item.isBookmarked}
                isTrending={true}
              />
            );
          })}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </>
  );
}
