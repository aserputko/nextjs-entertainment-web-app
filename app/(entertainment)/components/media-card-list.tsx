import { MediaCard } from '@/app/(entertainment)/components/media-card';
import { EntertainmentEntity } from '../entities/entertainment-entities';

type MediaCardListProps = { title: string; entertainments: EntertainmentEntity[] };

export function MediaCardList({ entertainments, title }: MediaCardListProps) {
  return (
    <>
      <h1 className='mb-9'>{title}</h1>
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
