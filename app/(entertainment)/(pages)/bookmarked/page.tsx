import { MediaCard } from '@/app/(entertainment)/components/media-card';
import { getBookmarkedEntertainments } from '../../actions/entertainment-actions';

export default async function BookmarkedPage() {
  const entertainments = await getBookmarkedEntertainments();

  return (
    <>
      <h1 className='mb-9'>Bookmarked</h1>

      <div className='mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-7 lg:grid-cols-4 lg:gap-10'>
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
      </div>
    </>
  );
}
