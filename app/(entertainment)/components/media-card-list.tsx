import { MediaCard } from '@/app/(entertainment)/components/media-card';

export function MediaCardList({ entertainments }: any) {
  return (
    <>
      {entertainments.map((item: any) => {
        return (
          <MediaCard
            key={item.id}
            id={item.id}
            name={item.title}
            year={item.year}
            category={item.category}
            rating={item.rating}
            thumbnail={item.thumbnailRegular}
            isBookmarked={item.isBookmarked}
          />
        );
      })}
    </>
  );
}
