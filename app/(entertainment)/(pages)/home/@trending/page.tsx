import { getTrendingEntertainments } from '@/app/(entertainment)/actions/entertainment-actions';
import { MediaCard } from '@/app/(entertainment)/components/media-card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default async function TrendingPage() {
  const entertainments = await getTrendingEntertainments();

  return (
    <>
      <h1 className='mb-9'>Trending</h1>

      <ScrollArea className='h-[238px] min-h-[238px] w-[88vw] whitespace-nowrap'>
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
