import { getRecommendedEntertainments } from '@/app/(entertainment)/actions/entertainment-actions';
import { MediaCard } from '@/app/(entertainment)/components/media-card';

export default async function RecommendedPage() {
  const entertainments = await getRecommendedEntertainments();

  return (
    <>
      <h1 className='mb-9'>Recommended for you</h1>

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
